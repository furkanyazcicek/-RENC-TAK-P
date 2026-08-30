"""Soru üretim kalite kapıları.

Bu modül ağ veya model çağrısı yapmaz. Üretilen soruların aynı kökün yalnızca
sayıları değiştirilmiş kopyaları olmasını, seçenek/alan hatalarını ve lise
matematiği dışındaki teknik dili yakalamak için kullanılır.
"""

from __future__ import annotations

import re
import unicodedata
from difflib import SequenceMatcher
from typing import Any, Dict, Iterable, List, Sequence, Tuple


# Öğrencinin karşısına teknik ürün dili çıkarmayan varsayılan engel listesi.
# Algoritma/Bilişim konusu açıkça istenirse bot.py konuya göre dar bir istisna
# tanımlar; yine de "kod", "API", "sensör" gibi bağlamlar varsayılan olarak
# yasaktır.
FORBIDDEN_TERMS = (
    "kod",
    "yazılım",
    "programlama",
    "programcı",
    "api",
    "veritabanı",
    "veri tabanı",
    "sensör",
    "kalibrasyon",
    "panel",
    "arayüz",
    "sunucu",
    "algoritmik sistem",
    "çip",
)


def _fold(value: Any) -> str:
    """Karşılaştırma için Türkçe metni tutarlı, küçük harfli hâle getirir."""

    text = unicodedata.normalize("NFKC", str(value or "")).casefold()
    text = text.replace("’", "'").replace("–", "-").replace("—", "-")
    text = re.sub(r"\s+", " ", text).strip()
    return text


def normalize_question_text(value: Any) -> str:
    """Sayıları ve tek harfli değişkenleri maskeleyen karşılaştırma metni."""

    text = _fold(value)
    # Ondalık, kesir, üs ve negatif sayılar tek bir yer tutucuda birleşir.
    text = re.sub(r"(?<![a-zçğıöşü])[-+]?\d+(?:[.,]\d+)?(?:\s*/\s*\d+)?", " <sayi> ", text)
    # Soru bankalarında değişkenler çoğunlukla tek harftir. Bu maske, x=3 ile
    # x=7 gibi numara/değişken değiştirilmiş kopyaları aynı ailede görür.
    text = re.sub(r"(?<![a-zçğıöşü])[a-z](?![a-zçğıöşü])", " <degisken> ", text)
    text = re.sub(r"[^a-z0-9çğıöşü<>=+*/().,%? -]", " ", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text


def question_fingerprint(question: Dict[str, Any] | str) -> str:
    """Soru kökünün sayı/değişken bağımsız parmak izini üretir."""

    if isinstance(question, dict):
        value = question.get("questionText") or question.get("question_text") or question.get("text") or ""
    else:
        value = question
    return normalize_question_text(value)


def _tokens(value: str) -> set[str]:
    return {token for token in value.split() if token}


def similarity(left: str, right: str) -> float:
    """İki normalize soru kökü için 0-1 arası yakınlık skoru."""

    if not left or not right:
        return 0.0
    sequence = SequenceMatcher(None, left, right).ratio()
    a, b = _tokens(left), _tokens(right)
    jaccard = len(a & b) / max(1, len(a | b))
    return max(sequence, jaccard)


def _metadata_family(question: Dict[str, Any]) -> Tuple[str, ...]:
    """Model metadata'sını aile karşılaştırmasında güvenli biçimde kullanır."""

    keys = ("skill", "representation", "task", "contextType")
    return tuple(_fold(question.get(key)) for key in keys)


def duplicate_reason(
    candidate: Dict[str, Any],
    accepted: Sequence[Dict[str, Any]],
    *,
    threshold: float = 0.84,
) -> str | None:
    """Adayın önceki sorulardan biriyle neden çakıştığını açıklar."""

    candidate_fp = question_fingerprint(candidate)
    if not candidate_fp:
        return "soru kökü boş"

    candidate_family = _metadata_family(candidate)
    for previous in accepted:
        previous_fp = question_fingerprint(previous)
        if not previous_fp:
            continue
        if candidate_fp == previous_fp:
            return "aynı soru kökü; yalnız sayılar/değişkenler değiştirilmiş olabilir"
        score = similarity(candidate_fp, previous_fp)
        # Aynı metadata ailesinde daha düşük benzerlik bile tekrar kokusudur;
        # farklı bağlam gerçekten farklıysa model metadata'sı bunu korur.
        family_match = candidate_family == _metadata_family(previous) and any(candidate_family)
        limit = 0.76 if family_match else threshold
        if score >= limit:
            return f"yakın soru kökü (benzerlik {score:.2f})"
    return None


def forbidden_terms_in(text: str, *, allow_algorithm_topic: bool = False) -> List[str]:
    """Teknik/uygunsuz terimleri kök ve açıklama içinde bulur."""

    folded = _fold(text)
    # Görsel dosya adları (ör. ``visuals/test_31_kod_akisi.svg``) öğrenciye
    # görünen soru metni değildir; yalnızca görselin açıklamasını denetle.
    folded = re.sub(r"!\[[^\]]*\]\([^)]*\)", " ", folded)
    folded = re.sub(r"(?:^|\s)(?:[a-z0-9_.-]+/)+[^\s)]+", " ", folded)
    terms = list(FORBIDDEN_TERMS)
    if allow_algorithm_topic:
        terms = [term for term in terms if term != "algoritmik sistem"]
    found: List[str] = []
    for term in terms:
        pattern = rf"(?<![a-zçğıöşü]){re.escape(term)}(?![a-zçğıöşü])"
        if re.search(pattern, folded):
            found.append(term)
    return found


def validate_question(question: Dict[str, Any], *, allow_algorithm_topic: bool = False) -> List[str]:
    """Modelin döndürdüğü tek soruda yayın engeli oluşturan alanları denetler."""

    problems: List[str] = []
    text = question.get("questionText") or question.get("question_text")
    if not isinstance(text, str) or len(text.strip()) < 20:
        problems.append("questionText eksik veya çok kısa")

    options = question.get("options")
    if not isinstance(options, list) or len(options) != 5:
        problems.append("tam olarak 5 seçenek gerekli")
    else:
        ids = [item.get("id") if isinstance(item, dict) else None for item in options]
        if ids != ["A", "B", "C", "D", "E"]:
            problems.append("seçenek kimlikleri A-B-C-D-E olmalı")
        texts = [_fold(item.get("text")) if isinstance(item, dict) else "" for item in options]
        if any(not value for value in texts):
            problems.append("boş seçenek var")
        if len(set(texts)) != len(texts):
            problems.append("tekrarlanan seçenek var")

    answer = question.get("correctOptionId")
    if answer not in {"A", "B", "C", "D", "E"}:
        problems.append("correctOptionId A-E arasında olmalı")

    explanation = question.get("explanation")
    if not isinstance(explanation, str) or len(explanation.strip()) < 20:
        problems.append("adım adım açıklama eksik")

    joined = " ".join(
        str(question.get(key) or "") for key in ("questionText", "explanation", "skill", "representation", "task", "contextType")
    )
    forbidden = forbidden_terms_in(joined, allow_algorithm_topic=allow_algorithm_topic)
    if forbidden:
        problems.append("yasaklı teknik terim: " + ", ".join(forbidden))
    return problems


def audit_questions(
    questions: Iterable[Dict[str, Any]],
    *,
    existing: Sequence[Dict[str, Any]] = (),
    allow_algorithm_topic: bool = False,
) -> Dict[str, Any]:
    """Soruları sırayla kabul eder; hatalı ve tekrarları raporlar."""

    accepted: List[Dict[str, Any]] = []
    rejected: List[Dict[str, Any]] = []
    seen_ids = {str(item.get("id")) for item in existing if isinstance(item, dict) and item.get("id")}
    comparison_pool = list(existing)

    for index, question in enumerate(questions, start=1):
        if not isinstance(question, dict):
            rejected.append({"index": index, "reasons": ["soru nesne değil"], "question": question})
            continue
        problems = validate_question(question, allow_algorithm_topic=allow_algorithm_topic)
        if question.get("id") and str(question["id"]) in seen_ids:
            problems.append("id daha önce kullanılmış")
        reason = duplicate_reason(question, comparison_pool)
        if reason:
            problems.append(reason)
        if problems:
            rejected.append({"index": index, "id": question.get("id"), "reasons": problems})
            continue
        accepted.append(question)
        comparison_pool.append(question)
        if question.get("id"):
            seen_ids.add(str(question["id"]))

    return {"accepted": accepted, "rejected": rejected, "accepted_count": len(accepted), "rejected_count": len(rejected)}


def compact_rejection_report(rejected: Sequence[Dict[str, Any]], limit: int = 12) -> str:
    """Model istemine geri verilecek kısa, okunabilir ret özeti."""

    rows = []
    for item in list(rejected)[:limit]:
        label = item.get("id") or f"#{item.get('index', '?')}"
        reasons = "; ".join(item.get("reasons") or [])
        rows.append(f"{label}: {reasons}")
    return "\n".join(rows) if rows else "(ret yok)"
