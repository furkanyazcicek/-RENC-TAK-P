"""Sabit ivmeli hareket Reels'i için DRKOÇ v5 ses masterını üretir.

Kaynak seslendirmeyi korur; 55. saniyedeki eki yumuşatır, final sloganına
doğal vurgu verir, ortam sesini temizler ve özgün bilim-belgesel fonu ekler.
"""

from fractions import Fraction
from pathlib import Path

import av
import librosa
import numpy as np
import pyloudnorm as pyln
from scipy.ndimage import uniform_filter
from scipy.signal import butter, istft, sosfilt, sosfiltfilt, stft


ROOT = Path(__file__).resolve().parents[2]
SOURCE = ROOT / "public/audio/reels/sabit-ivmeli-hareket-seslendirme.m4a"
OUTPUT = ROOT / "public/audio/reels/sabit-ivmeli-hareket-gold-v5.m4a"
SAMPLE_RATE = 48_000
TOTAL_SECONDS = 77.25

# Ham kayıtta ana anlatıcının konuştuğu aralıklar. Bu maske, aralardaki
# ezan/ortam sesini yükseltmeden kelime başlarını ve sonlarını korur.
SPEECH_INTERVALS = (
    (0.90, 3.92), (4.28, 8.05), (8.52, 11.08), (11.08, 15.02),
    (15.92, 22.50), (22.88, 31.86), (32.86, 37.20), (37.92, 41.94),
    (42.50, 50.00), (50.70, 58.30), (58.38, 64.80), (65.38, 67.86),
    (68.16, 70.92), (71.14, 73.20),
)


def decode_mono(path):
    container = av.open(str(path))
    resampler = av.AudioResampler(format="fltp", layout="mono", rate=SAMPLE_RATE)
    parts = []
    for frame in container.decode(audio=0):
        converted = resampler.resample(frame)
        if not isinstance(converted, list):
            converted = [converted]
        for item in converted:
            if item is not None:
                parts.append(item.to_ndarray()[0].astype(np.float32))
    tail = resampler.resample(None)
    if not isinstance(tail, list):
        tail = [tail]
    for item in tail:
        if item is not None:
            parts.append(item.to_ndarray()[0].astype(np.float32))
    return np.concatenate(parts)


def smooth_blocks(values, radius=3):
    kernel = np.hanning((radius * 2) + 1)
    kernel /= kernel.sum()
    padded = np.pad(values, (radius, radius), mode="edge")
    return np.convolve(padded, kernel, mode="valid")


def clean_voice(voice):
    """Uzak insan/ortam sesini bastırır; ana anlatıcıyı doğal bırakır."""
    filtered = sosfiltfilt(
        butter(4, (78, 11_500), btype="bandpass", fs=SAMPLE_RATE, output="sos"),
        voice,
    ).astype(np.float32)

    frequencies, times, spectrum = stft(
        filtered,
        fs=SAMPLE_RATE,
        nperseg=2048,
        noverlap=1536,
        boundary="zeros",
    )
    del frequencies
    speech_frames = np.zeros(len(times), dtype=bool)
    for start, end in SPEECH_INTERVALS:
        speech_frames |= (times >= start - 0.06) & (times <= end + 0.08)
    noise_frames = ~speech_frames
    power = np.abs(spectrum) ** 2
    noise_power = np.percentile(power[:, noise_frames], 62, axis=1, keepdims=True)
    gain = power / (power + (2.2 * noise_power) + 1e-12)
    gain = np.clip(uniform_filter(gain, size=(5, 3)), 0.14, 1.0)
    _, cleaned = istft(
        spectrum * gain,
        fs=SAMPLE_RATE,
        nperseg=2048,
        noverlap=1536,
        input_onesided=True,
        boundary=True,
    )
    cleaned = cleaned[:len(voice)].astype(np.float32)

    # Konuşma dışında tam dijital sessizlik yerine çok düşük bir taban
    # bırakır; fon müziği geldiğinde kesme/pompalama duyulmaz.
    envelope = np.full(len(cleaned), 0.025, dtype=np.float32)
    for start, end in SPEECH_INTERVALS:
        first = max(0, int((start - 0.11) * SAMPLE_RATE))
        body_start = max(0, int(start * SAMPLE_RATE))
        body_end = min(len(cleaned), int(end * SAMPLE_RATE))
        last = min(len(cleaned), int((end + 0.13) * SAMPLE_RATE))
        envelope[body_start:body_end] = 1.0
        if body_start > first:
            length = body_start - first
            fade_in = np.sin(np.linspace(0, np.pi / 2, length, dtype=np.float32)) ** 2
            envelope[first:body_start] = np.maximum(envelope[first:body_start], fade_in)
        if last > body_end:
            length = last - body_end
            fade_out = np.sin(np.linspace(np.pi / 2, 0, length, dtype=np.float32)) ** 2
            envelope[body_end:last] = np.maximum(envelope[body_end:last], fade_out)
    return cleaned * envelope


def tighten_pause(voice, left_seconds=55.70, right_seconds=56.05, crossfade_seconds=0.05):
    """Kırık hissi veren uzun sessizliği doğal bir nefese indirir."""
    left = int(left_seconds * SAMPLE_RATE)
    right = int(right_seconds * SAMPLE_RATE)
    crossfade = int(crossfade_seconds * SAMPLE_RATE)
    fade = np.sin(np.linspace(0, np.pi / 2, crossfade, dtype=np.float32)) ** 2
    joined = (voice[left - crossfade:left] * (1 - fade)) + (voice[right:right + crossfade] * fade)
    return np.concatenate((voice[:left - crossfade], joined, voice[right + crossfade:]))


def slow_slogan(voice, start_seconds=70.88, end_seconds=72.86, rate=0.90):
    """Slogana yapay boşluk eklemeden, perdeyi koruyarak ağırlık verir."""
    start = int(start_seconds * SAMPLE_RATE)
    end = int(end_seconds * SAMPLE_RATE)
    slowed = librosa.effects.time_stretch(voice[start:end], rate=rate).astype(np.float32)
    crossfade = int(0.035 * SAMPLE_RATE)
    fade = np.sin(np.linspace(0, np.pi / 2, crossfade, dtype=np.float32)) ** 2
    slowed[:crossfade] = (voice[start - crossfade:start] * (1 - fade)) + (slowed[:crossfade] * fade)
    tail = (slowed[-crossfade:] * (1 - fade)) + (voice[end:end + crossfade] * fade)
    return np.concatenate((voice[:start - crossfade], slowed[:-crossfade], tail, voice[end + crossfade:]))


def emphasis_curve(length, start_seconds, end_seconds, ramp_seconds=0.14):
    curve = np.zeros(length, dtype=np.float32)
    start = int(start_seconds * SAMPLE_RATE)
    end = min(length, int(end_seconds * SAMPLE_RATE))
    ramp = min(int(ramp_seconds * SAMPLE_RATE), max(1, (end - start) // 2))
    curve[start:end] = 1
    curve[start:start + ramp] = np.sin(np.linspace(0, np.pi / 2, ramp, dtype=np.float32)) ** 2
    curve[end - ramp:end] = np.sin(np.linspace(np.pi / 2, 0, ramp, dtype=np.float32)) ** 2
    return curve


def polish_voice(voice):
    block = SAMPLE_RATE // 4
    count = int(np.ceil(len(voice) / block))
    rms = np.empty(count, dtype=np.float32)
    for index in range(count):
        chunk = voice[index * block:min((index + 1) * block, len(voice))]
        rms[index] = np.sqrt(np.mean(chunk * chunk) + 1e-10)

    speech = rms > 0.006
    target = 0.072
    gains = np.ones_like(rms)
    gains[speech] = np.clip(target / rms[speech], 0.78, 2.15)
    gains[~speech] = 0.72
    gains = smooth_blocks(gains, radius=4)

    centers = (np.arange(count) * block) + (block / 2)
    positions = np.arange(len(voice))
    gain_curve = np.interp(positions, centers, gains, left=gains[0], right=gains[-1]).astype(np.float32)
    polished = voice * gain_curve
    polished = np.tanh(polished * 1.18) / np.tanh(1.18)
    peak = np.max(np.abs(polished)) + 1e-9
    polished *= min(0.86 / peak, 1.0)
    return polished, speech, block


def add_tone(stereo, start_seconds, frequencies, amplitude, decay, duration=1.25, pan=0.0):
    start = int(start_seconds * SAMPLE_RATE)
    end = min(stereo.shape[1], start + int(duration * SAMPLE_RATE))
    if end <= start:
        return
    t = np.arange(end - start, dtype=np.float32) / SAMPLE_RATE
    env = (1 - np.exp(-22 * t)) * np.exp(-decay * t)
    tone = np.zeros_like(t)
    for index, frequency in enumerate(frequencies):
        tone += (1 / (1 + index * 0.38)) * np.sin(2 * np.pi * frequency * t + index * 0.35)
    left_gain = np.sqrt((1 - pan) / 2)
    right_gain = np.sqrt((1 + pan) / 2)
    stereo[0, start:end] += amplitude * left_gain * tone * env
    stereo[1, start:end] += amplitude * right_gain * tone * env


def make_atmosphere(length):
    """Modern bilim akışı ile sinematik belgesel derinliğini birleştirir."""
    stereo = np.zeros((2, length), dtype=np.float32)
    total_seconds = length / SAMPLE_RATE
    chord_seconds = 9.2
    overlap = 2.1
    chords = [
        [110.00, 146.83, 174.61, 220.00],
        [116.54, 146.83, 174.61, 220.00],
        [87.31, 130.81, 174.61, 196.00],
        [98.00, 130.81, 164.81, 196.00],
    ]

    start = -overlap
    chord_index = 0
    while start < total_seconds:
        duration = chord_seconds + overlap * 2
        first = max(0, int(start * SAMPLE_RATE))
        last = min(length, int((start + duration) * SAMPLE_RATE))
        local_t = (np.arange(first, last, dtype=np.float32) / SAMPLE_RATE) - start
        fade_in = np.clip(local_t / overlap, 0, 1)
        fade_out = np.clip((duration - local_t) / overlap, 0, 1)
        envelope = np.sin(fade_in * np.pi / 2) ** 2 * np.sin(fade_out * np.pi / 2) ** 2
        for note_index, frequency in enumerate(chords[chord_index % len(chords)]):
            weight = 1 / (1 + note_index * 0.34)
            phase = note_index * 0.73
            stereo[0, first:last] += weight * envelope * (
                np.sin(2 * np.pi * frequency * local_t + phase)
                + 0.11 * np.sin(2 * np.pi * frequency * 2 * local_t + phase)
            )
            stereo[1, first:last] += weight * envelope * (
                np.sin(2 * np.pi * frequency * 1.0022 * local_t + phase + 0.18)
                + 0.11 * np.sin(2 * np.pi * frequency * 2.0044 * local_t + phase + 0.18)
            )
        start += chord_seconds
        chord_index += 1

    # V4'e göre yaklaşık +3 dB: telefonda duyulur, anlatımı örtmez.
    stereo *= 0.0177 / (np.sqrt(np.mean(stereo * stereo)) + 1e-10)

    # Bölümlere göre nefes alan makro dinamik; slogan sırasında neredeyse susar.
    keyframes = np.array([
        [0.00, 0.16], [2.00, 0.68], [8.00, 0.98], [31.50, 1.08],
        [42.00, 0.94], [55.00, 0.86], [64.50, 1.02], [69.70, 0.70],
        [70.70, 0.22], [73.05, 0.18], [73.72, 0.44], [74.42, 1.12],
        [76.30, 0.74], [77.25, 0.00],
    ], dtype=np.float32)
    times = np.arange(length, dtype=np.float32) / SAMPLE_RATE
    macro = np.interp(times, keyframes[:, 0], keyframes[:, 1]).astype(np.float32)
    stereo *= macro

    # Davul yerine 74 BPM'lik yumuşak bir nabız: hareket hissi verir, formülle yarışmaz.
    beat_seconds = 60 / 74
    for section_start, section_end in ((8.1, 41.3), (58.0, 69.7)):
        beat = section_start
        while beat < section_end:
            start_sample = int(beat * SAMPLE_RATE)
            end_sample = min(length, start_sample + int(0.58 * SAMPLE_RATE))
            t = np.arange(end_sample - start_sample, dtype=np.float32) / SAMPLE_RATE
            env = (1 - np.exp(-35 * t)) * np.exp(-7.2 * t)
            pulse = np.sin(2 * np.pi * 55 * t) + 0.22 * np.sin(2 * np.pi * 110 * t)
            stereo[:, start_sample:end_sample] += 0.0035 * pulse * env
            beat += beat_seconds

    # Anlam geçişlerine seyrek camımsı işaretler.
    for index, moment in enumerate((8.15, 15.45, 31.55, 42.05, 55.15, 64.95)):
        add_tone(stereo, moment, (392.0, 587.33), 0.0022, 4.8, duration=0.95, pan=-0.18 if index % 2 == 0 else 0.18)

    # Logo öncesi yönlü geçiş: filtreli yükseliş + yeni akora varış.
    swell_start = int(73.62 * SAMPLE_RATE)
    swell_end = min(length, int(74.72 * SAMPLE_RATE))
    rng = np.random.default_rng(27)
    noise = rng.normal(0, 1, swell_end - swell_start).astype(np.float32)
    noise = sosfilt(butter(3, (280, 5200), btype="bandpass", fs=SAMPLE_RATE, output="sos"), noise)
    t = np.linspace(0, 1, swell_end - swell_start, dtype=np.float32)
    swell = noise * (t ** 2.4) * 0.015
    stereo[0, swell_start:swell_end] += swell
    stereo[1, swell_start:swell_end] += swell[::-1] * 0.88

    add_tone(stereo, 74.38, (130.81, 196.00, 261.63), 0.043, 1.45, duration=2.65)
    add_tone(stereo, 74.96, (440.00, 659.25), 0.028, 2.75, duration=1.55, pan=0.05)
    return stereo


def encode_aac(path, stereo):
    output = av.open(str(path), mode="w")
    stream = output.add_stream("aac", rate=SAMPLE_RATE)
    stream.bit_rate = 192_000
    stream.layout = "stereo"
    frame_size = 1024
    for start in range(0, stereo.shape[1], frame_size):
        chunk = stereo[:, start:start + frame_size]
        frame = av.AudioFrame.from_ndarray(chunk.astype(np.float32), format="fltp", layout="stereo")
        frame.sample_rate = SAMPLE_RATE
        frame.pts = start
        frame.time_base = Fraction(1, SAMPLE_RATE)
        for packet in stream.encode(frame):
            output.mux(packet)
    for packet in stream.encode(None):
        output.mux(packet)
    output.close()


voice = clean_voice(decode_mono(SOURCE))
voice = tighten_pause(voice)
voice = slow_slogan(voice, rate=0.90)

target_length = int(TOTAL_SECONDS * SAMPLE_RATE)
if len(voice) < target_length:
    voice = np.pad(voice, (0, target_length - len(voice)))
else:
    voice = voice[:target_length]

polished, speech_blocks, block_size = polish_voice(voice)
first_clause = emphasis_curve(len(polished), 70.88, 71.96)
second_clause = emphasis_curve(len(polished), 71.96, 73.08)
polished *= 1 + (0.10 * first_clause) + (0.23 * second_clause)
# İki cümle arasındaki 200 ms'lik doğal aralıkta kalan ezan/parazit
# kalıntısını indirir; alttaki müzik akışı kesintisiz tutar.
clause_gap = emphasis_curve(len(polished), 71.70, 71.94, ramp_seconds=0.055)
polished *= 1 - (0.97 * clause_gap)

atmosphere = make_atmosphere(len(polished))
duck_blocks = np.where(speech_blocks, 0.78, 0.98).astype(np.float32)
centers = (np.arange(len(duck_blocks)) * block_size) + (block_size / 2)
duck = np.interp(
    np.arange(len(polished)),
    centers,
    smooth_blocks(duck_blocks, 5),
    left=0.98,
    right=0.98,
).astype(np.float32)
atmosphere *= duck

mix = np.vstack((polished, polished)) * 0.94 + atmosphere
meter = pyln.Meter(SAMPLE_RATE)
loudness = meter.integrated_loudness(mix.T)
mix *= 10 ** ((-16.4 - loudness) / 20)
peak = np.max(np.abs(mix)) + 1e-10
if peak > 0.82:
    mix *= 0.82 / peak

encode_aac(OUTPUT, mix)

voice_rms = 20 * np.log10(np.sqrt(np.mean(polished * polished)) + 1e-10)
music_rms = 20 * np.log10(np.sqrt(np.mean(atmosphere * atmosphere)) + 1e-10)
final_loudness = meter.integrated_loudness(mix.T)
peak_db = 20 * np.log10(np.max(np.abs(mix)) + 1e-10)
print(f"output={OUTPUT}")
print(f"duration={len(polished) / SAMPLE_RATE:.2f}s")
print(f"voice_rms={voice_rms:.1f}dB music_rms={music_rms:.1f}dB")
print(f"loudness={final_loudness:.2f}LUFS peak={peak_db:.2f}dBFS")
