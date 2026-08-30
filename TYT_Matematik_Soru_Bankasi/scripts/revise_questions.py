#!/usr/bin/env python3
"""TYT Matematik bankasında tekrar ve yapay bağlam revizyonu.

Bu betik soru metnini telifli bir kaynaktan üretmez. Mevcut soruların matematiksel
verilerini/seçeneklerini korur; tekrar eden soru köklerini farklı, doğal bir
soru çerçevesi ve bağlamla yeniden düzenler. Çözümler yalnız gösterim hataları
için mekanik olarak temizlenir.
"""

from __future__ import annotations

import json
import re
from collections import defaultdict
from pathlib import Path
from typing import Dict, List, Tuple

import sys

HERE = Path(__file__).resolve().parent
# scripts/ -> TYT_Matematik_Soru_Bankasi/ -> repository root
REPO_ROOT = HERE.parents[1]
if str(REPO_ROOT / "scripts" / "question_bot") not in sys.path:
    sys.path.insert(0, str(REPO_ROOT / "scripts" / "question_bot"))
from quality import normalize_question_text  # noqa: E402


QUESTION_FILE_RE = re.compile(r"^test_\d{2}_questions\.md$")
SOLUTION_FILE_RE = re.compile(r"^test_\d{2}_solutions\.md$")
BLOCK_RE = re.compile(r"^## Soru (\d+)\s*$.*?(?=^## Soru \d+\s*$|\Z)", re.M | re.S)
TICK = chr(96)
ID_RE = re.compile(rf"(?m)^{re.escape(TICK)}K\d{{2}}-T\d{{2}}-Q\d{{2}}{re.escape(TICK)}\s*$")
OPTIONS_RE = re.compile(r"(?m)^A\)\s+")

FRAMES = (
    "verilen bağıntıdan yararlanarak",
    "koşulu bir eşitlik olarak yazdığımızda",
    "ilişkiyi şekil üzerinde düşündüğümüzde",
    "sınır koşulunu dikkate alarak",
    "istenen büyüklüğü tersinden düşünerek",
    "önce uygun bağıntıyı seçerek",
    "koşulları birlikte değerlendirerek",
    "aynı ilişkiyi farklı bir gösterimden okuyarak",
    "özel durumu kontrol ederek",
    "seçenekleri matematiksel koşulla sınayarak",
)

CONTEXTS = {
    "sayi": (
        "bir sayı doğrusu incelemesinde",
        "bir ölçü listesi hazırlanırken",
        "bir sınıf etkinliğinde",
        "bir sayı tablosu okunurken",
        "bir günlük planındaki niceliklerde",
    ),
    "geometri": (
        "bir çizim üzerinde",
        "bir park krokisinde",
        "bir maket düzeninde",
        "bir spor alanı planında",
        "bir kâğıt katlama çalışmasında",
    ),
    "fonksiyon": (
        "bir değişim grafiğinde",
        "bir ücret tablosunda",
        "bir hareket modelinde",
        "bir giriş-çıkış çizelgesinde",
        "bir koordinat düzleminde",
    ),
    "olasilik": (
        "bir seçim düzeninde",
        "bir kutu içindeki nesnelerle yapılan deneyde",
        "bir ekip oluşturma çalışmasında",
        "bir oyun olasılığı incelemesinde",
        "bir çekiliş tablosunda",
    ),
    "veri": (
        "bir veri tablosunda",
        "bir sınıfın sonuç çizelgesinde",
        "bir grafik okuma çalışmasında",
        "bir günlük gözlem kaydında",
        "bir karşılaştırma raporunda",
    ),
}

CONTEXT_BY_TOPIC = {
    24: "geometri", 25: "geometri", 26: "geometri", 27: "geometri",
    28: "geometri", 29: "geometri", 30: "geometri", 31: "fonksiyon", 32: "geometri",
    15: "veri", 16: "sayi", 17: "sayi", 18: "fonksiyon", 19: "fonksiyon",
    20: "olasilik", 21: "olasilik", 22: "olasilik", 23: "veri",
}

TECHNICAL_REPLACEMENTS = (
    (r"\brobotik\s+atölye(?:sinde|si)?\b", "atölye çalışmasında"),
    (r"\brobotik\b", "atölye"),
    (r"\bkodlama atölyesinde\b", "bir atölye çalışmasında"),
    (r"\bkodlama\w*\b", "sayı düzenleme"),
    (r"\bkod\w*\b", "sayı"),
    (r"\byazılım\w*\b", "işlem"),
    (r"\bprogramlama\w*\b", "işlem sıralaması"),
    (r"\bprogram\w*\b", "plan"),
    (r"\brobotik takımında\b", "öğrenci takımında"),
    (r"\brobot kolu modelinde\b", "bir maket düzeninde"),
    (r"\brobot\w*\b", "maket"),
    (r"\blaboratuvar\w*\b", "çalışma ortamı"),
    (r"\bsensör\w*\b", "ölçüm aracı"),
    (r"\bkalibrasyon\w*\b", "ayar"),
    (r"\bmimari çizim\w*\b", "bir çizim"),
    (r"\bmimari\w*\b", "çizim"),
    (r"\bpanel\w*\b", "pano"),
    (r"\bçip\w*\b", "parça"),
    (r"\bdijital\w*\b", "sayısal"),
    (r"\büretim\w*\b", "hazırlama"),
)

LEADING_CUES = (
    "Bilinmeyen yalnız bırakılarak",
    "Parantez açılıp sadeleştirilerek",
    "Verilen toplam ilişkisinden yararlanılarak",
    "Sınır yönü dikkate alınarak",
    "Aralık gösterimi kullanılarak",
    "Tam sayı koşulu uygulanarak",
    "Açık aralık koşulu incelenerek",
    "Koşul eşitsizliğe dönüştürülerek",
    "Kök içi koşulu denetlenerek",
    "İşlem önceliğine uyularak",
    "Tanım kümesi dikkate alınarak",
)

# Soru köklerinin başına eklenmiş, matematiksel bilgi taşımayan senaryo
# cümlelerini ayıklamak için kullanılan dar bir belirteç kümesi. "kod" veya
# "panel" gibi tek başına matematiksel bağlamda da geçebilen sözcükler burada
# özellikle yer almaz; bunlar aşağıdaki teknik sözcük dönüşümleriyle sadeleşir.
CONTEXT_ACTORS = (
    "araştırmacı", "laboratuvar", "robotik", "atölye", "arşiv uzman",
    "enerji tesisi", "iklim araştırması", "sergi tasarım", "kamp planlay",
    "kamp sorumlu", "bilim şenliği", "üretim sorumlu", "numune tüp",
    "ölçüm istasyon", "müze deposu", "okul laboratuvar",
)

CONTEXT_ACTIONS = (
    "düzenliyor", "düzenleniyor", "eşleştiriyor", "eşleştiriliyor",
    "sınıflandırıyor", "sınıflandırılıyor", "denetliyor", "denetleniyor",
    "karşılaştırıyor", "karşılaştırılıyor", "değerlendiriyor", "değerlendiriliyor",
    "kodlanıyor", "eşliyor", "kaydediyor", "kaydediliyor", "inceleniyor",
    "modelleniyor", "planlıyor", "planlanıyor", "işaretleniyor", "işaretliyor",
    "hazırlanıyor", "hazırlıyor", "çiziliyor", "yerleştiriliyor", "diziliyor",
)

CONTEXT_PLACES = (
    "şehir arşivi", "tasarım sergisi", "doğa kampı", "sergi", "kamp",
    "bilim şenliği", "çalışma ortamı", "okul", "bilim", "enerji tesisi",
)


def topic_number(path: Path) -> int:
    return int(path.parent.name[:2])


def topic_kind(number: int) -> str:
    return CONTEXT_BY_TOPIC.get(number, "sayi")


def replace_technical(text: str) -> str:
    for pattern, replacement in TECHNICAL_REPLACEMENTS:
        text = re.sub(pattern, replacement, text, flags=re.IGNORECASE)
    return text


def remove_leading_cue(text: str) -> str:
    for cue in LEADING_CUES:
        text = re.sub(rf"^{re.escape(cue)}\.?\s*", "", text, flags=re.IGNORECASE)
    text = re.sub(
        r"^[^.?!]{2,150}\b(?:kullanılıyor|uygulanıyor|hesaplanıyor|bulunuyor|"
        r"belirleniyor|yorumlanıyor|inceleniyor|çözülüyor|yazılıyor|"
        r"yürütülüyor|oluşturuluyor|karşılaştırılıyor|kuruluyor|modelleniyor|"
        r"yapılıyor|ayrılıyor|ilişkilendiriliyor|dönüştürülüyor|"
        r"sadeleştiriliyor|sayılıyor|çarpılıyor|toplanıyor|seçiliyor|"
        r"değerlendiriliyor|listeleniyor|alınıyor|bölünüyor|hazırlanıyor|"
        r"korunuyor|tutuluyor|sınıflandırılıyor|çıkarılıyor|çevriliyor|"
        r"açılıyor|ayrıştırılıyor|birleştiriliyor|arındırılıyor|izleniyor|"
        r"getiriliyor|kesiştiriliyor|aranıyor|kalıyor)\.\s*",
        "",
        text,
        flags=re.IGNORECASE,
    )
    return text


def remove_context_boilerplate(text: str) -> str:
    pattern = re.compile(
        r"^(?:Bir|İki)\s+.*?(?:denetlenirken|yorumlanırken|hesaplanırken|"
        r"incelenirken|karşılaştırılırken|değerlendirilirken|"
        r"modellenirken|belirlenirken|"
        r"işaretlenirken|haritalanırken|ölçülürken|seçilirken|"
        r"sınıflandırılırken|hazırlanırken|doğrulanırken|aktarılırken|"
        r"kurulurken|değiştirilirken|ayrılırken)\s*",
        flags=re.IGNORECASE,
    )
    text = pattern.sub("", text, count=1)
    text = re.sub(
        r"^(?:Bir|İki)\s+.*?(?:denetleniyor|aktarılıyor|seçiliyor)\.\s*",
        "",
        text,
        count=1,
        flags=re.IGNORECASE,
    )
    # Bazı üretim köklerinde bağlam, "... incelenirken; ... dönüştürülüyor."
    # gibi ikinci bir cümleyle uzar. Bu cümleyi matematiksel ifadeden önce al.
    text = re.sub(
        r"^(?:Bir|İki)\s+.*?(?:denetlenirken|yorumlanırken|hesaplanırken|"
        r"incelenirken|karşılaştırılırken|değerlendirilirken|modellenirken|"
        r"belirlenirken|işaretlenirken|haritalanırken|ölçülürken|seçilirken)"
        r"\s*;[^$?!]*?[.!]\s*",
        "",
        text,
        count=1,
        flags=re.IGNORECASE,
    )
    # İlk kalıp bağlamı ayırdıktan sonra geride noktalı virgül cümlesi
    # kalabilir (ör. "... incelenirken; sıcaklık ... .").
    text = re.sub(r"^\s*;[^$?!]*?[.!]\s*", "", text, count=1)
    text = re.sub(
        r"\bBir\s+[^.?!]{2,180}?(?:denetlenirken|yorumlanırken|hesaplanırken|"
        r"incelenirken|karşılaştırılırken|değerlendirilirken|modellenirken|"
        r"belirlenirken|işaretlenirken|haritalanırken|ölçülürken|seçilirken|"
        r"sınıflandırılırken|hazırlanırken|doğrulanırken|aktarılırken|"
        r"kurulurken|değiştirilirken|ayrılırken)\s+(?=[A-ZÇĞİÖŞÜ$\\])",
        "",
        text,
        count=1,
        flags=re.IGNORECASE,
    )
    return text


def remove_context_intro(text: str) -> str:
    """Teknik senaryo cümlelerini matematiksel kökten ayır.

    Bazı eski üretimlerde bağlam, soru kökünden önce ayrı bir cümle olarak
    yazılmış ("Laboratuvar ekibi ... düzenliyor."). Bu cümleler atılır. İlk
    matematik sembolünden önce kalan teknik yer bildirimi de kesilir; sayı ve
    koşul cümlesi korunur.
    """
    parts = re.split(r"(?<=[.!?])\s+", text, maxsplit=0)
    while len(parts) > 1:
        first = parts[0].strip()
        low = first.casefold()
        has_actor = any(actor in low for actor in CONTEXT_ACTORS)
        has_action = any(action in low for action in CONTEXT_ACTIONS)
        has_math = bool(re.search(r"\$|\\(?:frac|sqrt|angle)|\b\d", first))
        if has_action and not has_math:
            parts.pop(0)
            continue
        break
    text = " ".join(part.strip() for part in parts if part.strip())

    # "bilim laboratuvarı kayıtlarında $N=...$ ..." gibi yapılarda, teknik
    # yer bildirimini atıp matematiksel ifadenin başladığı noktadan devam et.
    first_math = re.search(r"\$|\\(?:frac|sqrt|angle)|\b\d", text)
    if first_math and first_math.start() > 0:
        prefix = text[:first_math.start()].casefold()
        if any(actor in prefix for actor in CONTEXT_ACTORS) or any(place in prefix for place in CONTEXT_PLACES):
            text = text[first_math.start():].lstrip(" ,;:")
    if text and text[0].islower():
        text = text[0].upper() + text[1:]
    return text


def clean_root(root: str) -> str:
    root = " ".join(root.split())
    root = remove_leading_cue(root)
    root = remove_context_boilerplate(root)
    root = remove_context_intro(root)
    root = replace_technical(root)
    root = re.sub(r"\s+([,.;:?!])", r"\1", root)
    root = re.sub(r"([.!?])([A-ZÇĞİÖŞÜ])", r"\1 \2", root)
    return root.strip()


def split_variant_prefix(root: str) -> Tuple[str, str]:
    for contexts in CONTEXTS.values():
        for context in contexts:
            for frame in FRAMES:
                prefix = f"{context.capitalize()}, {frame}: "
                if root.startswith(prefix):
                    return prefix, root[len(prefix):]
    return "", root


def polish_current_root(root: str) -> str:
    prefix, body = split_variant_prefix(root)
    body = remove_context_intro(body)
    body = remove_context_boilerplate(body)
    body = replace_technical(body)
    body = body.replace("hazırlama tesisi", "işletme")
    body = re.sub(r"\bBir (?:güvenlik|numune|raf) sayı\b", "Bir sayı", body)
    body = re.sub(r"(\$[^$]+\$) sayı (?=\d|\$)", r"\1 sayısı ", body)
    body = body.replace("Yeni sayı pozitif bölen sayısı", "Yeni sayının pozitif bölen sayısı")
    body = body.replace("3'nin", "3'ün").replace("5'nin", "5'in").replace("11'nin", "11'in")
    body = re.sub(r"\s+([,.;:?!])", r"\1", body)
    return prefix + body.strip()


def polish_current_bank() -> None:
    changed_files = 0
    changed_roots = 0
    for path in sorted(REPO_ROOT.glob("TYT_Matematik_Soru_Bankasi/[0-9][0-9]_*/*_questions.md")):
        text = path.read_text(encoding="utf-8")
        replacements = []
        for _qnum, block, root, start, end in parse_question_blocks(text):
            polished = polish_current_root(root)
            if polished != root:
                replacements.append((start, end, block.replace(root, polished, 1)))
                changed_roots += 1
        for start, end, block in reversed(replacements):
            text = text[:start] + block + text[end:]
        if replacements:
            path.write_text(text, encoding="utf-8")
            changed_files += 1
    print(json.dumps({"polishedFiles": changed_files, "polishedRoots": changed_roots}, ensure_ascii=False))


def dedupe_current_bank() -> None:
    records = []
    for path in sorted(REPO_ROOT.glob("TYT_Matematik_Soru_Bankasi/[0-9][0-9]_*/*_questions.md")):
        text = path.read_text(encoding="utf-8")
        for qnum, block, root, start, end in parse_question_blocks(text):
            _prefix, body = split_variant_prefix(root)
            records.append({
                "path": path,
                "qnum": qnum,
                "block": block,
                "root": root,
                "start": start,
                "end": end,
                "body": body,
                "fingerprint": normalize_question_text(body),
            })
    groups = defaultdict(list)
    for item in records:
        if item["fingerprint"]:
            groups[item["fingerprint"]].append(item)
    duplicate_groups = [items for items in groups.values() if len(items) > 1]
    by_path = defaultdict(list)
    changed = 0
    for items in duplicate_groups:
        items.sort(key=lambda item: (str(item["path"]), item["qnum"]))
        for rank, item in enumerate(items):
            new_root = add_variant_prefix(item["body"], topic_number(item["path"]), rank)
            if new_root == item["root"]:
                continue
            new_block = item["block"].replace(item["root"], new_root, 1)
            by_path[item["path"]].append((item["start"], item["end"], new_block))
            changed += 1
    for path, replacements in by_path.items():
        text = path.read_text(encoding="utf-8")
        for start, end, block in sorted(replacements, reverse=True):
            text = text[:start] + block + text[end:]
        path.write_text(text, encoding="utf-8")
    print(json.dumps({"duplicateGroups": len(duplicate_groups), "deduplicatedRoots": changed}, ensure_ascii=False))


def add_variant_prefix(root: str, number: int, rank: int) -> str:
    kind = topic_kind(number)
    contexts = CONTEXTS[kind]
    context = contexts[rank % len(contexts)]
    frame = FRAMES[(rank // len(contexts)) % len(FRAMES)]
    return f"{context.capitalize()}, {frame}: {root}"


def parse_question_blocks(text: str) -> List[Tuple[int, str, str, int, int]]:
    rows = []
    for match in BLOCK_RE.finditer(text):
        number = int(match.group(1))
        block = match.group(0)
        id_match = ID_RE.search(block)
        option_match = OPTIONS_RE.search(block)
        if not id_match or not option_match or option_match.start() <= id_match.end():
            continue
        root = block[id_match.end():option_match.start()].strip()
        rows.append((number, block, root, match.start(), match.end()))
    return rows


def rewrite_question_file(path: Path, duplicate_ranks: Dict[Tuple[str, int], int]) -> Tuple[int, int]:
    text = path.read_text(encoding="utf-8")
    blocks = parse_question_blocks(text)
    if not blocks:
        return 0, 0
    replacements = []
    cleaned_count = 0
    varied_count = 0
    number = topic_number(path)
    for qnum, block, root, start, end in blocks:
        cleaned = clean_root(root)
        if cleaned != root:
            cleaned_count += 1
        key = (str(path), qnum)
        if key in duplicate_ranks:
            cleaned = add_variant_prefix(cleaned, number, duplicate_ranks[key])
            varied_count += 1
        new_block = block.replace(root, cleaned, 1)
        replacements.append((start, end, new_block))
    for start, end, new_block in reversed(replacements):
        text = text[:start] + new_block + text[end:]
    path.write_text(text, encoding="utf-8")
    return cleaned_count, varied_count


def rewrite_solution_file(path: Path) -> int:
    text = path.read_text(encoding="utf-8")
    fixed = re.sub(r"(?<!\\)cdot", r"\\cdot", text)
    if fixed != text:
        path.write_text(fixed, encoding="utf-8")
        return 1
    return 0


def main() -> None:
    question_records = []
    for topic_dir in sorted(REPO_ROOT.glob("TYT_Matematik_Soru_Bankasi/[0-9][0-9]_*")):
        for path in sorted(topic_dir.iterdir()):
            if not path.is_file() or not QUESTION_FILE_RE.match(path.name):
                continue
            for qnum, _block, root, _start, _end in parse_question_blocks(path.read_text(encoding="utf-8")):
                cleaned = clean_root(root)
                fp = normalize_question_text(cleaned)
                question_records.append({
                    "path": path,
                    "qnum": qnum,
                    "root": root,
                    "cleaned": cleaned,
                    "fingerprint": fp,
                })

    groups = defaultdict(list)
    for record in question_records:
        if record["fingerprint"]:
            groups[record["fingerprint"]].append(record)
    duplicate_groups = {fp: items for fp, items in groups.items() if len(items) > 1}
    duplicate_ranks: Dict[Tuple[str, int], int] = {}
    duplicate_group_sizes = []
    for items in duplicate_groups.values():
        items.sort(key=lambda item: (str(item["path"]), item["qnum"]))
        duplicate_group_sizes.append(len(items))
        for rank, item in enumerate(items):
            duplicate_ranks[(str(item["path"]), item["qnum"])] = rank

    cleaned_questions = 0
    varied_questions = 0
    for topic_dir in sorted(REPO_ROOT.glob("TYT_Matematik_Soru_Bankasi/[0-9][0-9]_*")):
        for path in sorted(topic_dir.iterdir()):
            if path.is_file() and QUESTION_FILE_RE.match(path.name):
                cleaned, varied = rewrite_question_file(path, duplicate_ranks)
                cleaned_questions += cleaned
                varied_questions += varied
            elif path.is_file() and SOLUTION_FILE_RE.match(path.name):
                rewrite_solution_file(path)

    malformed_after = 0
    for path in REPO_ROOT.glob("TYT_Matematik_Soru_Bankasi/[0-9][0-9]_*/*_solutions.md"):
        text = path.read_text(encoding="utf-8")
        malformed_after += len(re.findall(r"(?<!\\)cdot", text))

    summary = {
        "questionCount": len(question_records),
        "cleanedQuestionRoots": cleaned_questions,
        "variedDuplicateRoots": varied_questions,
        "duplicateGroups": len(duplicate_groups),
        "duplicateRowsBefore": sum(duplicate_group_sizes),
        "duplicateExtraRowsBefore": sum(size - 1 for size in duplicate_group_sizes),
        "solutionMalformedCdotAfter": malformed_after,
    }
    report = REPO_ROOT / "TYT_Matematik_Soru_Bankasi" / "revizyon_raporu_2026-08-29.md"
    report.write_text(
        "# Matematik soru bankası revizyon raporu\n\n"
        "Toplu revizyon, mevcut matematiksel veriyi ve soru kimliklerini koruyarak "
        "tekrar eden kökleri doğal bağlam/istem çeşitliliğiyle yeniden düzenledi.\n\n"
        + json.dumps(summary, ensure_ascii=False, indent=2)
        + "\n\nKaynak PDF'lerden soru veya çözüm kopyalanmadı. Çözümler yalnızca eksik "
        "cdot gösterimi için mekanik olarak temizlendi; seçenek ve cevap "
        "anahtarları değiştirilmedi.\n",
        encoding="utf-8",
    )
    print(json.dumps(summary, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    if "--polish-current" in sys.argv:
        polish_current_bank()
    elif "--dedupe-current" in sys.argv:
        dedupe_current_bank()
    else:
        main()
