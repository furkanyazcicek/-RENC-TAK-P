"""Kaynak profiline duyarlı matematik soru üretim aracı.

Modelden gelen içerik yayınlanmadan önce :mod:quality kapılarından geçer.
Bu dosya kaynak PDF'lerden soru kopyalamaz; yalnızca onların konu mimarisini,
ölçme ritmini ve çeşitlilik ilkelerini isteme bağlamı olarak kullanır.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import time
from pathlib import Path
from typing import Any, Dict, Iterable, List, Optional, Sequence

try:
    from .quality import (
        audit_questions,
        compact_rejection_report,
        question_fingerprint,
    )
except ImportError:  # betik doğrudan python bot.py ile çalıştırıldığında
    from quality import audit_questions, compact_rejection_report, question_fingerprint


PROJECT_ROOT = Path(__file__).resolve().parents[2]
DEFAULT_PROFILE = PROJECT_ROOT / "scripts" / "question_bot" / "source_profile.json"


def _fold(value: Any) -> str:
    value = str(value or "").casefold()
    value = value.replace("ı", "i").replace("ğ", "g").replace("ü", "u")
    value = value.replace("ş", "s").replace("ö", "o").replace("ç", "c")
    return re.sub(r"\s+", " ", value).strip()


def _slug(value: str) -> str:
    value = _fold(value)
    value = re.sub(r"[^a-z0-9]+", "-", value).strip("-")
    return value or "matematik"


def load_profile(path: Optional[str | Path] = None) -> Dict[str, Any]:
    """Kaynak profilini yükler; dosya yoksa güvenli boş profile döner."""

    profile_path = Path(path) if path else DEFAULT_PROFILE
    if not profile_path.is_absolute():
        profile_path = PROJECT_ROOT / profile_path
    try:
        with profile_path.open("r", encoding="utf-8") as handle:
            profile = json.load(handle)
        if not isinstance(profile, dict):
            raise ValueError("profil nesne olmalı")
        return profile
    except (OSError, ValueError, json.JSONDecodeError) as error:
        print(f"Kaynak profili okunamadı ({profile_path}): {error}")
        return {"profile_version": "none", "sources": [], "global_rules": {}, "topic_blueprints": {}}


def _matching_blueprint(topic: str, blueprints: Dict[str, Any]) -> Dict[str, Any]:
    if not blueprints:
        return {}
    requested = _fold(topic)
    for name, blueprint in blueprints.items():
        if _fold(name) == requested:
            return {"name": name, **blueprint}
    # Kullanıcı konu adını "fonksiyon" gibi kısaltırsa en belirgin eşleşmeyi al.
    candidates = [
        (len(set(requested.split()) & set(_fold(name).split())), name, blueprint)
        for name, blueprint in blueprints.items()
        if requested in _fold(name) or _fold(name) in requested
    ]
    if candidates:
        _, name, blueprint = max(candidates, key=lambda item: item[0])
        return {"name": name, **blueprint}
    return {}


def profile_for(profile: Dict[str, Any], topic: str, exam_type: str) -> Dict[str, Any]:
    """İsteme yalnız konuya ve sınava yarayan özeti verir."""

    exam = _fold(exam_type)
    source_ids = {
        "tyt": {"original-tyt-ilk-12", "acil-ucgenler", "bilgi-sarmal-ilk-asama"},
        "ayt": {"ayt-twins-2026", "ayt-ders-notlari", "acil-ucgenler"},
        "10": {"matematigin-ilaci-10-sb", "bilgi-sarmal-ilk-asama", "acil-ucgenler"},
    }.get(exam, set())
    sources = [source for source in profile.get("sources", []) if source.get("id") in source_ids]
    return {
        "profile_version": profile.get("profile_version", "none"),
        "global_rules": profile.get("global_rules", {}),
        "sources": sources,
        "topic_blueprint": _matching_blueprint(topic, profile.get("topic_blueprints", {})),
    }


def _json_for_prompt(value: Any, max_chars: int = 9000) -> str:
    text = json.dumps(value, ensure_ascii=False, indent=2)
    return text if len(text) <= max_chars else text[:max_chars] + "\n...[özet kısaltıldı]"


def build_prompt(
    ders: str,
    konu: str,
    seviye: str,
    adet: int,
    sinav: str,
    profile_summary: Dict[str, Any],
    *,
    rejected_report: str = "(ilk tur)",
    existing_fingerprints: Sequence[str] = (),
) -> str:
    """Model istemini; farklı soru ailelerini zorunlu kılacak şekilde kurar."""

    blueprint = profile_summary.get("topic_blueprint") or {}
    family_hint = ", ".join(blueprint.get("task_families", [])) or "doğrudan işlem, grafik, tablo ve sözel modelleme"
    fingerprints = "\n".join(f"- {item[:180]}" for item in list(existing_fingerprints)[-20:]) or "(yok)"
    return f"""
Sen Türkiye lise matematiği müfredatını bilen, ölçme-değerlendirme deneyimli bir öğretmensin.
{ders} dersi, {sinav} düzeyi, «{konu}» konusu, {seviye} zorlukta {adet} adet özgün soru üret.

KAYNAK PROFİLİ (soru metni değildir; yalnız soyut tasarım rehberidir):
{_json_for_prompt(profile_summary)}

Zorunlu çeşitlilik planı:
1. Yazmaya başlamadan önce her soru için farklı bir soru ailesi/karar noktası seç.
2. Aynı kökün yalnız sayıları, harfleri, birimleri veya kişi adları değişmiş biçimi yeni soru değildir.
3. Mümkün olduğunda şu farklı temsiller arasında dağılım kur: {family_hint}; ayrıca grafik, tablo, şekil, eşitsizlik ve sözel model.
4. Bir soru tek bir uzun rutin işlem yerine öğrencinin ilişki kurmasını, koşulu yorumlamasını veya uygun yöntemi seçmesini ölçsün.

Dil ve kapsam:
- Doğal, açık Türkçe ve yerleşik MEB/ÖSYM matematik terimleri kullan.
- Teknik ürün dili (kod, yazılım, API, veritabanı, sensör, kalibrasyon, panel, arayüz, sunucu vb.) kullanma.
- «Algoritma ve Bilişim» konusu seçilse bile kod/yazılım isteme; yalnız matematiksel işlem akışı kullan.
- Tanım kümesi, payda, kök içi, logaritma tabanı/argümanı ve tüm değişken koşullarını belirt.
- Gerçek ÖSYM sorusu, son sınavda çıkacak soru veya sınav garantisi iddiasında bulunma.
- Kaynaklardaki hiçbir cümleyi, sayıyı, seçenek düzenini ya da çözümü kopyalama.

Biçim:
- Yalnızca geçerli JSON dizisi döndür; markdown çiti veya açıklama ekleme.
- Her nesnede id, difficulty, skill, representation, task, contextType, questionText,
  options, correctOptionId ve explanation alanları olsun.
- options tam olarak A, B, C, D, E kimlikli beş nesne içersin; tek doğru seçenek olsun.
- Çeldiriciler gerçek öğrenci yanılgılarından türesin; açıklama en az birkaç adım ve gerekçe içersin.

{adet} yeni soruyu şu örnek şemaya göre döndür:
[
  {{
    "id": "q-ornek-01",
    "difficulty": "{seviye}",
    "skill": "ölçülen beceri",
    "representation": "grafik|tablo|şekil|cebirsel|sözel",
    "task": "soru ailesi",
    "contextType": "soyut|günlük yaşam|geometri|grafik",
    "questionText": "...",
    "options": [{{"id":"A","text":"..."}},{{"id":"B","text":"..."}},{{"id":"C","text":"..."}},{{"id":"D","text":"..."}},{{"id":"E","text":"..."}}],
    "correctOptionId": "A",
    "explanation": "..."
  }}
]

ÖNCEKİ TURDA REDDEDİLENLER:
{rejected_report}

ÖNCEKİ SORU KÖKLERİNİN SAYI/DEĞİŞKENDEN ARINDIRILMIŞ İZLERİ; BUNLARA YAKLAŞMA:
{fingerprints}
""".strip()


def _load_json_questions(path: Path) -> List[Dict[str, Any]]:
    try:
        with path.open("r", encoding="utf-8") as handle:
            data = json.load(handle)
    except (OSError, json.JSONDecodeError):
        return []
    if isinstance(data, list):
        return [item for item in data if isinstance(item, dict)]
    if isinstance(data, dict):
        questions = data.get("questions")
        if isinstance(questions, list):
            return [item for item in questions if isinstance(item, dict)]
        if data.get("questionText"):
            return [data]
    return []


def _load_markdown_questions(path: Path) -> List[Dict[str, Any]]:
    try:
        text = path.read_text(encoding="utf-8")
    except OSError:
        return []
    matches = list(re.finditer(r"^##\s*Soru\s+(\d+)\s*$", text, flags=re.MULTILINE | re.IGNORECASE))
    # Soru bankası Markdown'larında başlık yerine **1.** biçimi de yaygın.
    if not matches:
        matches = list(re.finditer(r"^\*\*(\d+)\.\*\*\s*", text, flags=re.MULTILINE))
        questions: List[Dict[str, Any]] = []
        for index, match in enumerate(matches):
            end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
            block = text[match.end():end]
            lines = []
            for line in block.splitlines():
                stripped = line.strip()
                if re.match(r"^(?:[-*]\s*)?[A-E][.)]\s+", stripped, flags=re.IGNORECASE):
                    continue
                if stripped.startswith(">") or stripped.startswith("#"):
                    continue
                if stripped and not stripped.startswith("A)"):
                    lines.append(stripped)
            if lines:
                questions.append({"id": f"{path.stem}-soru-{match.group(1)}", "questionText": " ".join(lines)})
        return questions
    questions: List[Dict[str, Any]] = []
    for index, match in enumerate(matches):
        end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
        block = text[match.end():end]
        lines = []
        for line in block.splitlines():
            stripped = line.strip()
            if re.match(r"^(?:[-*]\s*)?[A-E][.)]\s+", stripped, flags=re.IGNORECASE):
                continue
            if stripped.lower().startswith(("cevap:", "çözüm:", "çözüm ")):
                break
            if stripped and not stripped.startswith("#"):
                lines.append(stripped)
        if lines:
            questions.append({"id": f"{path.stem}-soru-{match.group(1)}", "questionText": " ".join(lines)})
    return questions


def _load_js_questions(path: Path) -> List[Dict[str, Any]]:
    """Mevcut içerik JS modüllerindeki soru köklerini hızlıca okur.

    JS dosyası çalıştırılmaz; yalnızca questionText alanı alınır. Böylece
    üretim aracı yerel içerik deposuna kod yürütme yetkisi vermeden tekrarları
    yakalayabilir.
    """

    try:
        text = path.read_text(encoding="utf-8")
    except OSError:
        return []
    pattern = re.compile(r"questionText\s*:\s*(['\"])((?:\\.|(?!\1).)*)\1", flags=re.DOTALL)
    return [
        {"id": f"{path.stem}-soru-{index}", "questionText": match.group(2)}
        for index, match in enumerate(pattern.finditer(text), start=1)
    ]


def load_existing_questions(paths: Iterable[str | Path]) -> List[Dict[str, Any]]:
    """JSON/Markdown soru bankalarından yalnız dedupe için gerekli alanları alır."""

    loaded: List[Dict[str, Any]] = []
    for raw_path in paths:
        path = Path(raw_path)
        if not path.is_absolute():
            path = PROJECT_ROOT / path
        if path.suffix.lower() == ".md":
            loaded.extend(_load_markdown_questions(path))
        elif path.suffix.lower() == ".json":
            loaded.extend(_load_json_questions(path))
        elif path.suffix.lower() == ".js":
            loaded.extend(_load_js_questions(path))
        elif path.is_dir():
            for child in sorted(path.rglob("*.json")):
                loaded.extend(_load_json_questions(child))
            for child in sorted(path.rglob("*.md")):
                loaded.extend(_load_markdown_questions(child))
            for child in sorted(path.rglob("*.js")):
                loaded.extend(_load_js_questions(child))
    return loaded


def _parse_model_response(response_text: str) -> List[Dict[str, Any]]:
    cleaned = response_text.strip()
    fence = chr(96) * 3
    if cleaned.startswith(fence):
        cleaned = re.sub(r"^" + re.escape(fence) + r"(?:json)?\s*", "", cleaned, flags=re.IGNORECASE)
    if cleaned.endswith(fence):
        cleaned = cleaned[:-len(fence)].rstrip()
    data = json.loads(cleaned)
    if isinstance(data, dict) and isinstance(data.get("questions"), list):
        data = data["questions"]
    if not isinstance(data, list):
        raise ValueError("model JSON dizisi döndürmedi")
    return [item for item in data if isinstance(item, dict)]


def _ensure_ids(questions: List[Dict[str, Any]], topic: str, round_number: int) -> None:
    prefix = _slug(topic)
    for index, question in enumerate(questions, start=1):
        if not question.get("id"):
            question["id"] = f"q-{prefix}-{round_number:02d}-{index:02d}"


def generate_questions(
    ders: str,
    konu: str,
    seviye: str,
    adet: int,
    api_key: Optional[str] = None,
    *,
    sinav: str = "TYT",
    source_profile: Optional[Dict[str, Any]] = None,
    existing: Optional[Sequence[Dict[str, Any]]] = None,
    max_rounds: int = 4,
) -> List[Dict[str, Any]]:
    """Soruları birkaç turda ister, her turu kalite ve tekrar kapısından geçirir."""

    try:
        import google.generativeai as genai
    except ImportError:
        print("Gemini kütüphanesi bulunamadı; requirements.txt kurulmalı.")
        return []

    key = api_key or os.environ.get("GEMINI_API_KEY")
    if not key:
        print("API anahtarı verilmedi. --api_key yerine GEMINI_API_KEY kullanılabilir.")
        return []
    if adet <= 0:
        return []

    profile = source_profile or load_profile()
    summary = profile_for(profile, konu, sinav)
    try:
        genai.configure(api_key=key)
        model = genai.GenerativeModel(os.environ.get("GEMINI_MODEL", "gemini-1.5-pro"))
    except Exception as error:
        print(f"Model yapılandırılamadı: {error}")
        return []

    accepted: List[Dict[str, Any]] = []
    comparison_pool = list(existing or [])
    rejected: List[Dict[str, Any]] = []
    round_number = 0
    while len(accepted) < adet and round_number < max_rounds:
        round_number += 1
        remaining = adet - len(accepted)
        request_count = min(remaining, 10)
        previous_report = compact_rejection_report(rejected[-12:])
        fingerprints = [question_fingerprint(item) for item in comparison_pool if question_fingerprint(item)]
        prompt = build_prompt(
            ders,
            konu,
            seviye,
            request_count,
            sinav,
            summary,
            rejected_report=previous_report,
            existing_fingerprints=fingerprints,
        )
        print(f"[{sinav} / {konu} / {seviye}] tur {round_number}: {request_count} soru isteniyor...")
        try:
            response = model.generate_content(
                prompt,
                generation_config=genai.types.GenerationConfig(response_mime_type="application/json"),
            )
            batch = _parse_model_response(response.text)
        except Exception as error:
            rejected.append({"index": round_number, "reasons": [f"model/JSON hatası: {error}"]})
            print(f"Model yanıtı işlenemedi: {error}")
            continue

        _ensure_ids(batch, konu, round_number)
        audit = audit_questions(
            batch,
            existing=comparison_pool,
            allow_algorithm_topic="algoritma" in _fold(konu),
        )
        accepted.extend(audit["accepted"])
        comparison_pool.extend(audit["accepted"])
        rejected.extend(audit["rejected"])
        print(f"  kabul: {audit['accepted_count']}, ret: {audit['rejected_count']}, toplam: {len(accepted)}/{adet}")

    if len(accepted) < adet:
        print(f"Uyarı: {adet} yerine {len(accepted)} soru kalite kapısından geçti; eksik sorular uydurulmadı.")
    return accepted[:adet]


def append_to_js_file(
    filepath: str,
    test_title: str,
    test_description: str,
    questions: List[Dict[str, Any]],
    *,
    metadata: Optional[Dict[str, Any]] = None,
) -> str:
    """Soruları mevcut içerik düzenine uyumlu JSON test nesnesi olarak kaydeder."""

    target = Path(filepath)
    if not target.is_absolute():
        target = PROJECT_ROOT / target
    target.parent.mkdir(parents=True, exist_ok=True)
    if target.suffix.lower() == ".js":
        target = target.with_name(f"{target.stem}_{int(time.time())}.json")
    test_obj: Dict[str, Any] = {
        "id": f"test-{int(time.time())}",
        "title": test_title,
        "description": test_description,
        "type": "comprehension",
        "order": 1,
        "questions": questions,
    }
    if metadata:
        test_obj["generationAudit"] = metadata
    with target.open("w", encoding="utf-8") as handle:
        json.dump(test_obj, handle, ensure_ascii=False, indent=2)
    print(f"Başarılı! Sorular {target} dosyasına kaydedildi.")
    return str(target)


def _default_output(args: argparse.Namespace) -> Path:
    directory = PROJECT_ROOT / "src" / "content" / "tests" / _slug(args.ders)
    filename = f"{_slug(args.konu)}.js"
    return directory / filename


def main() -> int:
    parser = argparse.ArgumentParser(description="Kaynak profiline duyarlı lise matematiği soru üretim botu")
    parser.add_argument("--ders", type=str, default="Matematik", help="Ders adı")
    parser.add_argument("--konu", type=str, required=True, help="Konu adı")
    parser.add_argument("--sinav", choices=["TYT", "AYT", "10"], default="TYT", help="Sınav veya sınıf düzeyi")
    parser.add_argument("--seviye", choices=["easy", "medium", "hard"], default="medium", help="Zorluk düzeyi")
    parser.add_argument("--adet", type=int, default=10, help="İstenen soru sayısı")
    parser.add_argument("--api_key", "--api-key", dest="api_key", default=None, help="Gemini API anahtarı")
    parser.add_argument("--kaynak-profil", default=str(DEFAULT_PROFILE), help="Soyut kaynak profili JSON yolu")
    parser.add_argument("--mevcut", action="append", default=[], help="Dedupe için JSON/Markdown dosyası veya klasör; tekrarlanabilir")
    parser.add_argument("--out", default=None, help="Çıktı dosyası; verilmezse src/content/tests altında oluşturulur")
    parser.add_argument("--max-rounds", type=int, default=4, help="Kalite kapısı için en fazla yeniden istem turu")
    args = parser.parse_args()

    profile = load_profile(args.kaynak_profil)
    existing_paths = args.mevcut or [
        PROJECT_ROOT / "src" / "content" / "tests" / _slug(args.ders),
        PROJECT_ROOT / "tyt-matematik" / "soru-bankasi",
    ]
    existing = load_existing_questions(existing_paths)
    questions = generate_questions(
        args.ders,
        args.konu,
        args.seviye,
        args.adet,
        args.api_key,
        sinav=args.sinav,
        source_profile=profile,
        existing=existing,
        max_rounds=max(1, args.max_rounds),
    )
    if not questions:
        print("Kalite kapısından geçen soru yok; dosya yazılmadı.")
        return 1

    output = args.out or str(_default_output(args))
    append_to_js_file(
        output,
        f"{args.konu} Testi",
        f"{args.sinav} / {args.konu} - {args.seviye.capitalize()} / kaynak profili denetimli özgün sorular",
        questions,
        metadata={
            "profileVersion": profile.get("profile_version", "none"),
            "exam": args.sinav,
            "topic": args.konu,
            "accepted": len(questions),
            "existingCompared": len(existing),
            "existingSources": [str(path) for path in existing_paths],
        },
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
