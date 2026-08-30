#!/usr/bin/env python3
"""2018-2026 resmî TYT kitapçıklarından telifsiz soru-metadata envanteri üretir.

Soruların metnini çıktı dosyasına yazmaz. PDF metni yalnız yerel sınıflandırma
özelliklerini çıkarmak ve denetlenebilir bir parmak izi üretmek için kullanılır.
Birincil etiket, bir sorunun bütün matematiksel içeriği değil baskın becerisidir.
"""

from __future__ import annotations

import argparse
import csv
import hashlib
import re
from pathlib import Path

import pdfplumber


OFFICIAL_URLS = {
    2018: "https://dokuman.osym.gov.tr/pdfdokuman/2018/YKS/TYT_01072018.pdf",
    2019: "https://dokuman.osym.gov.tr/pdfdokuman/2019/YKS/TSK/tyt_yks_2019_web.pdf",
    2020: "https://dokuman.osym.gov.tr/pdfdokuman/2020/YKS/TSK/tyt_yks_2020.pdf",
    2021: "https://dokuman.osym.gov.tr/pdfdokuman/2021/YKS/TSK/tyt_yks_2021.pdf",
    2022: "https://dokuman.osym.gov.tr/pdfdokuman/2022/YKS/TSK/yks_2022_tyt.pdf",
    2023: "https://dokuman.osym.gov.tr/pdfdokuman/2023/YKS/TSK/yks_tyt_2023_kitapcik_T23ky.pdf",
    2024: "https://dokuman.osym.gov.tr/pdfdokuman/2024/YKS/TSK/yks_tyt_2024_kitapcik_T24kt.pdf",
    2025: "https://dokuman.osym.gov.tr/pdfdokuman/2025/YKS/TSK/yks_tyt_2025_kitapcik_d250.pdf",
    2026: "https://dokuman.osym.gov.tr/pdfdokuman/2026/YKS/TSK/yks_tyt_2026_kitapcik_d350.pdf",
}

TOPIC_PROFILES = {
    "Temel Kavramlar": ("sayı özelliği / yeni tanım", "koşulu matematik diline çevirme", "örnek ve karşı örnek"),
    "Sayı Basamakları": ("rakam ve basamak koşulları", "basamak çözümlemesi", "baştaki sıfır veya farklı rakam koşulu"),
    "Bölme ve Bölünebilme": ("bölüm-kalan / bölünebilme", "kalan ilişkisi kurma", "kalan sınırı"),
    "OBEB - OKEK": ("asal çarpan / ortak bölen-kat", "çarpan yapısını modelleme", "EBOB ile OKEK'i karıştırma"),
    "Rasyonel Sayılar": ("kesir / ondalık gösterim", "eş değer gösterimleri dönüştürme", "payda ve işlem önceliği"),
    "Basit Eşitsizlikler": ("aralık / alt-üst sınır", "çözüm kümesini bulma", "negatif sayıda yön değiştirme"),
    "Mutlak Değer": ("uzaklık ve parçalı koşul", "mutlak değer denklemi kurma", "tek dal alma"),
    "Üslü Sayılar": ("üs kuralları / katlanma", "ortak tabana dönüştürme", "toplamda üs birleştirme"),
    "Köklü Sayılar": ("ana kök / kök sadeleştirme", "tam kare çarpan kullanma", "kökü toplam üzerine dağıtma"),
    "Çarpanlara Ayırma": ("özdeşlik / ortak çarpan", "toplamı çarpıma dönüştürme", "işaret ve yasak değer"),
    "Oran - Orantı": ("oran / ölçek / birlikte değişim", "birim oran kurma", "oran sırası ve birim"),
    "Denklem Çözme": ("doğrusal veya ikinci derece ilişki", "eşitliği koruyan dönüşüm", "aday kökü kontrol etmeme"),
    "Problemler": ("çok adımlı günlük yaşam modeli", "nicelik-birim-denklem kurma", "bağlam veya birim koşulu"),
    "Kümeler": ("küme işlemleri / Kartezyen çarpım", "üyelik ve bölgeleri sınıflandırma", "kesişimi iki kez sayma"),
    "Mantık": ("önerme / niceleyici / koşul", "doğruluk ve koşul eleme", "ve ile veya bağlacını karıştırma"),
    "Fonksiyonlar": ("girdi-çıktı / grafik", "temsil dönüşümü ve değer bulma", "tanım kümesi veya bileşke sırası"),
    "Polinomlar": ("polinom değeri / kalan / kök", "cebirsel yapıyı dönüştürme", "katsayı-kök işareti"),
    "Sayma": ("çarpma ilkesi / seçim-sıralama", "durumları eksiksiz sayma", "sıra veya tekrar koşulu"),
    "Olasılık": ("örnek uzay / olay", "istenen ve tüm durumları sayma", "eş olasılık veya tümleyen"),
    "İstatistik ve Veri Analizi": ("tablo-grafik / merkez ölçüsü", "veriyi temsil ve karşılaştırma", "ölçek veya ağırlıklı ortalama"),
    "Açılar ve Üçgenler": ("açı-kenar / özel üçgen", "şekilden zorunlu ilişki çıkarma", "ölçeksiz şekilden varsayım"),
    "Dörtgenler": ("kare-dikdörtgen-yamuk", "parçalara ayırma ve alan/oran", "özel dörtgen koşulu"),
    "Çokgenler": ("iç-dış açı / düzgün çokgen", "üçgenlere ayırma", "iç ve dış açıyı karıştırma"),
    "Çember ve Daire": ("çember açısı / yay / alan", "merkez açı oranı kurma", "çevre ile alanı karıştırma"),
    "Analitik Geometri": ("nokta-doğru / eğim-uzaklık", "geometriyi koordinata çevirme", "koordinat veya eğim işareti"),
    "Katı Cisimler": ("yüzey / hacim / açınım", "üç boyutlu modeli parçalama", "alan-hacim ve birim ayrımı"),
}

DEFAULT_ORDER = {
    1: "Rasyonel Sayılar", 2: "Üslü Sayılar", 3: "Temel Kavramlar", 4: "Rasyonel Sayılar",
    5: "Denklem Çözme", 6: "OBEB - OKEK", 7: "Mutlak Değer", 8: "Sayı Basamakları",
    9: "Problemler", 10: "Kümeler", 11: "Mantık", 12: "Fonksiyonlar",
    13: "Bölme ve Bölünebilme", 14: "Sayma", 15: "Sayı Basamakları",
    16: "İstatistik ve Veri Analizi", 17: "Problemler", 18: "Problemler", 19: "Problemler",
    20: "Problemler", 21: "Problemler", 22: "Problemler", 23: "Problemler", 24: "Problemler",
    25: "Problemler", 26: "Problemler", 27: "Problemler", 28: "Problemler",
    29: "Sayma", 30: "Olasılık",
}

MANUAL_OVERRIDES = {
    2019: {7: "Denklem Çözme"},
    2026: {
        1: "Rasyonel Sayılar", 2: "Üslü Sayılar", 3: "Temel Kavramlar", 4: "Rasyonel Sayılar",
        5: "Denklem Çözme", 6: "OBEB - OKEK", 7: "Mutlak Değer", 8: "Sayı Basamakları",
        9: "Problemler", 10: "Kümeler", 11: "Mantık", 12: "Fonksiyonlar",
        13: "Bölme ve Bölünebilme", 14: "Sayma", 15: "Sayı Basamakları",
        16: "İstatistik ve Veri Analizi", 17: "OBEB - OKEK", 18: "Problemler",
        19: "Problemler", 20: "Problemler", 21: "Problemler", 22: "Problemler",
        23: "İstatistik ve Veri Analizi", 24: "Basit Eşitsizlikler", 25: "Problemler",
        26: "Problemler", 27: "Problemler", 28: "Sayma", 29: "Sayma", 30: "Olasılık",
    },
}

GEOMETRY_ORDER = {
    2018: ["Açılar ve Üçgenler"] * 3 + ["Dörtgenler"] * 3 + ["Çokgenler", "Çember ve Daire", "Analitik Geometri", "Katı Cisimler"],
    2019: ["Açılar ve Üçgenler"] + ["Dörtgenler"] * 3 + ["Çokgenler"] + ["Çember ve Daire"] * 2 + ["Analitik Geometri"] + ["Katı Cisimler"] * 2,
    2020: ["Açılar ve Üçgenler"] * 2 + ["Dörtgenler"] * 5 + ["Çokgenler"] + ["Katı Cisimler"] * 2,
    2021: ["Açılar ve Üçgenler"] * 4 + ["Dörtgenler"] * 2 + ["Çokgenler", "Analitik Geometri"] + ["Katı Cisimler"] * 2,
    2022: ["Açılar ve Üçgenler"] * 4 + ["Dörtgenler"] * 2 + ["Çokgenler", "Analitik Geometri"] + ["Katı Cisimler"] * 2,
    2023: ["Açılar ve Üçgenler"] * 5 + ["Dörtgenler"] * 2 + ["Çokgenler"] + ["Katı Cisimler"] * 2,
    2024: ["Açılar ve Üçgenler"] * 5 + ["Dörtgenler"] * 2 + ["Çokgenler"] + ["Katı Cisimler"] * 2,
    2025: ["Açılar ve Üçgenler"] * 4 + ["Dörtgenler"] * 3 + ["Çokgenler"] + ["Katı Cisimler"] * 2,
    2026: ["Açılar ve Üçgenler"] * 5 + ["Dörtgenler"] * 2 + ["Çokgenler"] + ["Katı Cisimler"] * 2,
}

MATH_TOPIC_ORDER = [
    "Temel Kavramlar", "Sayı Basamakları", "Bölme ve Bölünebilme", "OBEB - OKEK",
    "Rasyonel Sayılar", "Basit Eşitsizlikler", "Mutlak Değer", "Üslü Sayılar",
    "Köklü Sayılar", "Çarpanlara Ayırma", "Oran - Orantı", "Denklem Çözme",
    "Problemler", "Kümeler", "Mantık", "Fonksiyonlar", "Polinomlar", "Sayma",
    "Olasılık", "İstatistik ve Veri Analizi",
]

MATH_COUNTS = {
    2018: [4, 1, 0, 0, 1, 1, 1, 2, 2, 0, 0, 0, 11, 2, 0, 1, 1, 1, 2, 0],
    2019: [3, 2, 0, 0, 0, 1, 1, 0, 1, 1, 0, 2, 12, 2, 0, 2, 1, 1, 1, 0],
    2020: [1, 1, 0, 2, 3, 1, 1, 0, 0, 0, 1, 0, 13, 1, 0, 2, 0, 2, 1, 1],
    2021: [3, 2, 1, 0, 3, 1, 1, 1, 1, 0, 1, 0, 13, 1, 0, 1, 0, 0, 1, 0],
    2022: [3, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 13, 1, 1, 1, 0, 0, 1, 1],
    2023: [2, 1, 1, 0, 2, 3, 1, 1, 1, 0, 1, 1, 10, 1, 1, 1, 0, 1, 1, 1],
    2024: [1, 2, 1, 1, 2, 0, 2, 1, 1, 0, 0, 0, 11, 1, 1, 1, 0, 3, 1, 1],
    2025: [3, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 12, 1, 1, 1, 0, 1, 1, 1],
    2026: [3, 2, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 13, 1, 1, 1, 0, 1, 1, 1],
}


def normalize(text: str) -> str:
    return " ".join(text.lower().replace("ı", "i").split())


def extract_questions(path: Path) -> dict[int, str]:
    questions: dict[int, str] = {}
    active = False
    with pdfplumber.open(path) as pdf:
        for page in pdf.pages:
            page_text = page.extract_text() or ""
            if "Temel Matematik Testi için ayrılan" in page_text:
                active = True
            if active and re.search(r"FEN BİLİMLERİ TESTİ|Fen Bilimleri Testi", page_text):
                break
            if not active:
                continue
            for bbox in ((0, 72, page.width / 2, page.height), (page.width / 2, 72, page.width, page.height)):
                column = page.crop(bbox).extract_text(x_tolerance=2, y_tolerance=3, layout=True) or ""
                starts = list(re.finditer(r"(?m)^\s*(\d{1,2})\.\s+", column))
                for index, match in enumerate(starts):
                    number = int(match.group(1))
                    if not 1 <= number <= 40:
                        continue
                    end = starts[index + 1].start() if index + 1 < len(starts) else len(column)
                    snippet = " ".join(column[match.end():end].split())
                    if len(snippet) > len(questions.get(number, "")):
                        questions[number] = snippet
    return questions


def contains(text: str, *needles: str) -> bool:
    return any(needle in text for needle in needles)


def classify_topic(year: int, number: int, text: str) -> tuple[str, str]:
    if number > 30:
        # Geometri sorularında şekil üzerindeki matematiksel bilgi PDF metin
        # katmanına çoğu kez düşmediği için yıllık görsel inceleme sırası esas alınır.
        return GEOMETRY_ORDER[year][number - 31], "orta"

    if number in MANUAL_OVERRIDES.get(year, {}):
        return MANUAL_OVERRIDES[year][number], "yüksek"
    if number >= 17:
        if contains(text, "olasilig", "rastgele"):
            return "Olasılık", "yüksek"
        if contains(text, "medyan", "ortanca", "veri grubu", "sutun grafigi", "dairesel grafik"):
            return "İstatistik ve Veri Analizi", "yüksek"
        if number >= 28 and contains(text, "kac farkli", "kac bicimde", "kac sekilde", "siralani"):
            return "Sayma", "orta"
        return "Problemler", "orta"
    rules = [
        ("Mutlak Değer", ("mutlak deger",)),
        ("Sayı Basamakları", ("rakam", "basamakli", "basamag")),
        ("Kümeler", ("kume", "kartezyen")),
        ("Mantık", ("onerme", "dogruluk degeri")),
        ("Fonksiyonlar", ("fonksiyon", "f(x)", "g(x)")),
        ("Polinomlar", ("polinom",)),
        ("İstatistik ve Veri Analizi", ("medyan", "ortanca", "veri grubu", "sutun grafigi", "dairesel grafik")),
        ("Olasılık", ("olasilig", "rastgele")),
        ("Bölme ve Bölünebilme", ("bolundug", "bolunmesi", "bolum ve kalan", "tam bol")),
        ("OBEB - OKEK", ("asal", "ortak bolen", "ortak kat", "carpan sayisi")),
        ("Köklü Sayılar", ("karekok", "koklu")),
        ("Üslü Sayılar", ("uslu", "ussu", "kuvveti")),
        ("Çarpanlara Ayırma", ("carpanlara", "iki kare farki")),
        ("Basit Eşitsizlikler", ("esitsiz", "araliginda")),
    ]
    for topic, needles in rules:
        if contains(text, *needles):
            return topic, "yüksek"
    if contains(text, "oran", "dogru orantili", "ters orantili"):
        return "Oran - Orantı", "orta"
    if contains(text, "kesir", "ondalik", "virgul"):
        return "Rasyonel Sayılar", "orta"
    return DEFAULT_ORDER[number], "düşük"


def classify_representation(text: str, number: int) -> str:
    values = []
    if text:
        values.append("sözel metin")
    if contains(text, "sekil", "kroki", "kagit", "dikdortgen", "ucgen", "cember") or number > 30:
        values.append("şekil")
    if contains(text, "tablo"):
        values.append("tablo")
    if contains(text, "grafik"):
        values.append("grafik")
    if contains(text, "magaza", "arac", "isletme", "sporcu", "fabrika", "okul", "sergi", "gun", "saat"):
        values.append("günlük yaşam senaryosu")
    if re.search(r"[=<>]", text):
        values.append("denklem/eşitsizlik")
    return "+".join(dict.fromkeys(values)) or ("şekil" if number > 30 else "cebirsel ifade")


def allocate_math_topics(year: int, snippets: dict[int, str]) -> dict[int, tuple[str, str]]:
    """Yıllık manuel frekans denetimini soru metni ipuçlarıyla birleştirir."""
    remaining = dict(zip(MATH_TOPIC_ORDER, MATH_COUNTS[year]))
    if sum(remaining.values()) != 30:
        raise ValueError(f"{year} matematik frekansı 30 etmiyor")
    result: dict[int, tuple[str, str]] = {}
    candidates = {n: classify_topic(year, n, normalize(snippets.get(n, ""))) for n in range(1, 31)}

    # Önce elle doğrulanmış ve metinde açık konu adı taşıyan kayıtları yerleştir.
    for confidence in ("yüksek", "orta"):
        for number in range(1, 31):
            topic, candidate_confidence = candidates[number]
            if number in result or candidate_confidence != confidence or remaining.get(topic, 0) <= 0:
                continue
            result[number] = (topic, confidence)
            remaining[topic] -= 1

    # Kalan yerleri kitapçıklarda gözlenen genel sayı-cebir-problem akışına göre
    # doldur; bu satırlar düşük güvenle işaretlenir ve görsel editör denetimi ister.
    for number in range(1, 31):
        if number in result:
            continue
        preferred = DEFAULT_ORDER[number]
        if remaining.get(preferred, 0) > 0:
            topic = preferred
        else:
            topic = next(topic for topic in MATH_TOPIC_ORDER if remaining[topic] > 0)
        result[number] = (topic, "düşük")
        remaining[topic] -= 1
    return result


def make_row(year: int, number: int, raw: str, forced: tuple[str, str] | None = None) -> dict[str, object]:
    text = normalize(raw)
    topic, confidence = forced or classify_topic(year, number, text)
    if not text:
        confidence = "düşük"
    subtopic, skill, distinction = TOPIC_PROFILES[topic]
    representation = classify_representation(text, number)
    word_count = len(text.split())
    reading = "yüksek" if word_count >= 85 else "orta" if word_count >= 40 else "düşük"
    operation = "orta" if contains(text, "oran", "toplam", "farki", "alan", "uzunluk") else "düşük"
    modelling = "yüksek" if "günlük yaşam senaryosu" in representation else "orta" if reading != "düşük" else "düşük"
    integrated = "evet" if representation.count("+") >= 1 or modelling == "yüksek" else "hayır"
    reasoning = "yüksek" if reading == "yüksek" and integrated == "evet" else "orta"
    difficulty = "zor" if reasoning == "yüksek" and operation == "orta" else "orta" if reasoning == "yüksek" or modelling == "yüksek" else "kolay-orta"
    seconds = 150 if difficulty == "zor" else 105 if difficulty == "orta" else 75
    status = "iptal" if year == 2019 and number == 7 else "geçerli"
    return {
        "sinav_yili": year,
        "soru_no": number,
        "durum": status,
        "resmi_pdf": OFFICIAL_URLS[year],
        "ana_konu": topic,
        "alt_konu": subtopic,
        "kazanim_veya_beceri": skill,
        "soru_baglami": "geometrik düzenek" if number > 30 else ("günlük yaşam" if "günlük yaşam senaryosu" in representation else "soyut/yarı bağlamsal"),
        "sunum_bicimi": "çok temsilli" if "+" in representation else "tek temsilli",
        "temsil": representation,
        "bilgi_veya_yorum": "yorum/ilişki kurma" if reading != "düşük" or number > 30 else "doğrudan bilgi+uygulama",
        "islem_yogunlugu": operation,
        "okuma_yuku": reading,
        "modelleme_ihtiyaci": modelling,
        "akil_yurutme": reasoning,
        "konu_birlestirme": integrated,
        "temel_cozum_adimlari": "verileni ayır → uygun temsili kur → koşulu uygula → seçenek/sınırla kontrol et",
        "alternatif_yontem": "seçenek eleme veya tersine çalışma; şekil sorusunda yardımcı çizgi/oran",
        "celdirici_hata_noktasi": distinction,
        "kritik_ayrim": distinction,
        "tahmini_zorluk": difficulty,
        "tahmini_sure_saniye": seconds,
        "tasnif_guveni": confidence,
        "kaynak_parmak_izi": hashlib.sha256(text.encode("utf-8")).hexdigest()[:12] if text else "metin-cikmadi",
        "not": "Baskın beceriye göre DRKOÇ editöryal sınıflandırması; soru metni yeniden yayımlanmamıştır.",
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source-dir", type=Path, default=Path("tmp/pdfs"))
    parser.add_argument("--output", type=Path, default=Path("tyt-matematik/arastirma/soru-siniflandirmasi.csv"))
    args = parser.parse_args()
    rows = []
    for year in range(2018, 2027):
        path = args.source_dir / f"tyt-{year}.pdf"
        if not path.exists():
            raise SystemExit(f"Eksik resmî kitapçık: {path}")
        snippets = extract_questions(path)
        math_assignments = allocate_math_topics(year, snippets)
        rows.extend(make_row(year, number, snippets.get(number, ""), math_assignments[number]) for number in range(1, 31))
        rows.extend(make_row(year, number, snippets.get(number, "")) for number in range(31, 41))
    args.output.parent.mkdir(parents=True, exist_ok=True)
    with args.output.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=list(rows[0]))
        writer.writeheader()
        writer.writerows(rows)
    print(f"{len(rows)} soru metadata satırı yazıldı: {args.output}")


if __name__ == "__main__":
    main()
