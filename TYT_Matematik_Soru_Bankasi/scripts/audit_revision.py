#!/usr/bin/env python3
"""Matematik soru bankasının hızlı, yeniden üretilebilir revizyon denetimi."""

from __future__ import annotations

import json
import re
import sys
from collections import Counter, defaultdict
from pathlib import Path

HERE = Path(__file__).resolve().parent
REPO_ROOT = HERE.parents[1]
QUESTION_ROOT = REPO_ROOT / "TYT_Matematik_Soru_Bankasi"
sys.path.insert(0, str(REPO_ROOT / "scripts" / "question_bot"))
from quality import forbidden_terms_in, normalize_question_text  # noqa: E402
sys.path.insert(0, str(HERE))
from revise_questions import (  # noqa: E402
    CONTEXTS,
    FRAMES,
    parse_question_blocks,
    split_variant_prefix,
)

SOLUTION_BLOCK_RE = re.compile(r"^## Soru (\d+)\s*$.*?(?=^## Soru \d+\s*$|\Z)", re.M | re.S)
ID_RE = re.compile(r"`(K\d{2}-T\d{2}-Q\d{2})`")
OPTION_RE = re.compile(r"(?m)^([A-E])\)\s+(.+)$")
SOLUTION_ANSWER_RE = re.compile(r"\*\*Doğru cevap:\*\*\s*([A-E])", re.I)

INITIAL_CLASSIFICATION = {
    "koru": 1919,
    "revize_et": 5456,
    "yeniden_yaz": 8625,
}


def question_file_rows(path: Path):
    return list(parse_question_blocks(path.read_text(encoding="utf-8")))


def audit():
    files = sorted(QUESTION_ROOT.glob("[0-9][0-9]_*/test_*_questions.md"))
    all_ids = set()
    full_fingerprints = defaultdict(list)
    body_fingerprints = defaultdict(list)
    per_file = []
    per_topic = defaultdict(lambda: Counter(files=0, questions=0, rewritten=0, structural_errors=0))
    structural_errors = []
    forbidden_rows = []
    malformed_cdot = 0
    control_characters = 0
    unbalanced_inline_math = []

    for path in files:
        topic = path.parent.name
        test_number = int(path.stem.split("_")[1])
        rows = question_file_rows(path)
        rewritten = 0
        file_errors = 0
        if len(rows) != 10:
            structural_errors.append(f"{path}: 10 yerine {len(rows)} soru")
            file_errors += 1
        for qnum, block, root, _start, _end in rows:
            expected_id = f"K{topic[:2]}-T{test_number:02d}-Q{qnum:02d}"
            found_id = ID_RE.search(block)
            if not found_id or found_id.group(1) != expected_id or expected_id in all_ids:
                structural_errors.append(f"{path} Soru {qnum}: kimlik hatası")
                file_errors += 1
            all_ids.add(expected_id)
            options = OPTION_RE.findall(block)
            if [label for label, _text in options] != list("ABCDE") or len({text.strip() for _label, text in options}) != 5:
                structural_errors.append(f"{path} Soru {qnum}: seçenek hatası")
                file_errors += 1
            forbidden = forbidden_terms_in(root)
            if forbidden:
                forbidden_rows.append({"id": expected_id, "terms": forbidden})
            prefix, body = split_variant_prefix(root)
            if prefix:
                rewritten += 1
            full_fingerprints[normalize_question_text(root)].append(expected_id)
            body_fingerprints[(topic[:2], normalize_question_text(body))].append(expected_id)
            control_characters += sum(ord(char) < 32 and char not in "\n\r\t" for char in root)
            if root.count("$") % 2:
                unbalanced_inline_math.append(expected_id)

        solution_path = path.with_name(path.name.replace("_questions.md", "_solutions.md"))
        if not solution_path.exists():
            structural_errors.append(f"{path}: çözüm dosyası yok")
            file_errors += 1
        else:
            solution_text = solution_path.read_text(encoding="utf-8")
            solution_blocks = SOLUTION_BLOCK_RE.findall(solution_text)
            if len(solution_blocks) != 10:
                structural_errors.append(f"{solution_path}: 10 çözüm yok")
                file_errors += 1
            if len(SOLUTION_ANSWER_RE.findall(solution_text)) != 10:
                structural_errors.append(f"{solution_path}: doğru cevap alanı eksik")
                file_errors += 1
            malformed_cdot += len(re.findall(r"(?<!\\)cdot", solution_text))

        per_file.append({
            "file": str(path.relative_to(REPO_ROOT)),
            "questionCount": len(rows),
            "rewrittenRepeatedRoots": rewritten,
            "keptOrTerminologyEditedRoots": len(rows) - rewritten,
            "structuralErrors": file_errors,
        })
        per_topic[topic]["files"] += 1
        per_topic[topic]["questions"] += len(rows)
        per_topic[topic]["rewritten"] += rewritten
        per_topic[topic]["structural_errors"] += file_errors

    exact_groups = [ids for fp, ids in full_fingerprints.items() if fp and len(ids) > 1]
    body_groups = [
        {"topic": topic, "fingerprint": fp, "count": len(ids), "sampleIds": ids[:5]}
        for (topic, fp), ids in body_fingerprints.items()
        if fp and len(ids) > 1
    ]
    body_groups.sort(key=lambda item: (-item["count"], item["topic"], item["fingerprint"]))

    tyt_repeat = REPO_ROOT / "tyt-matematik" / "soru-bankasi" / "karma-tekrar-01.md"
    tyt_repeat_count = 0
    if tyt_repeat.exists():
        tyt_repeat_count = len(re.findall(r"(?m)^\*\*\d+\.\*\*", tyt_repeat.read_text(encoding="utf-8")))
    src_math_files = [
        str(path.relative_to(REPO_ROOT))
        for path in (REPO_ROOT / "src" / "content" / "tests").glob("**/*")
        if path.is_file() and "matematik" in path.as_posix().casefold()
    ]

    result = {
        "scope": {
            "topics": len(per_topic),
            "testFiles": len(files),
            "questions": sum(item["questionCount"] for item in per_file),
            "solutions": len(files) * 10,
            "tytMatematikKarmaQuestions": tyt_repeat_count,
            "srcContentMathFiles": src_math_files,
        },
        "initialClassification": INITIAL_CLASSIFICATION,
        "currentChecks": {
            "structuralErrors": len(structural_errors),
            "forbiddenTermRows": len(forbidden_rows),
            "malformedCdot": malformed_cdot,
            "controlCharacters": control_characters,
            "unbalancedInlineMathRows": len(unbalanced_inline_math),
            "exactNormalizedDuplicateGroups": len(exact_groups),
            "exactNormalizedDuplicateRows": sum(len(ids) for ids in exact_groups),
            "bodySkeletonDuplicateGroups": len(body_groups),
            "bodySkeletonDuplicateRows": sum(item["count"] for item in body_groups),
            "largestBodySkeletonGroup": max((item["count"] for item in body_groups), default=0),
        },
        "perTopic": [
            {
                "topic": topic,
                "files": counts["files"],
                "questions": counts["questions"],
                "rewrittenRepeatedRoots": counts["rewritten"],
                "keptOrTerminologyEditedRoots": counts["questions"] - counts["rewritten"],
                "structuralErrors": counts["structural_errors"],
            }
            for topic, counts in sorted(per_topic.items())
        ],
        "topRemainingBodyFamilies": body_groups[:40],
        "perFile": per_file,
        "structuralErrorDetails": structural_errors[:200],
        "forbiddenTermDetails": forbidden_rows[:200],
        "unbalancedInlineMathDetails": unbalanced_inline_math[:200],
    }
    return result


def main():
    result = audit()
    output = QUESTION_ROOT / "revizyon_envanteri_2026-08-29.json"
    output.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({"output": str(output), **result["scope"], **result["currentChecks"]}, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
