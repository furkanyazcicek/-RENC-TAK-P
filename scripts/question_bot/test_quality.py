#!/usr/bin/env python3
"""question_bot kalite kapıları için hızlı, ağsız regresyon testleri."""

import unittest

try:
    from .quality import audit_questions, question_fingerprint
except ImportError:
    from quality import audit_questions, question_fingerprint


def make_question(text, *, ident="q-1", representation="cebirsel", task="deger-bulma"):
    return {
        "id": ident,
        "difficulty": "medium",
        "skill": "ilişki kurma",
        "representation": representation,
        "task": task,
        "contextType": "soyut",
        "questionText": text,
        "options": [
            {"id": "A", "text": "1"},
            {"id": "B", "text": "2"},
            {"id": "C", "text": "3"},
            {"id": "D", "text": "4"},
            {"id": "E", "text": "5"},
        ],
        "correctOptionId": "C",
        "explanation": "Verilen eşitlikte önce ortak çarpan alınır, sonra sonuç yerine yazılarak kontrol edilir.",
    }


class QuestionQualityTests(unittest.TestCase):
    def test_only_numbers_changed_is_rejected(self):
        first = make_question("Bir sayının 3 katının 5 fazlası 20 olduğuna göre sayı kaçtır?", ident="q-a")
        changed = make_question("Bir sayının 7 katının 9 fazlası 30 olduğuna göre sayı kaçtır?", ident="q-b")
        audit = audit_questions([first, changed])
        self.assertEqual(audit["accepted_count"], 1)
        self.assertEqual(audit["rejected_count"], 1)
        self.assertIn("aynı soru kökü", " ".join(audit["rejected"][0]["reasons"]))

    def test_different_representation_is_accepted(self):
        first = make_question("f(x)=2x+3 için f(4) değeri kaçtır?", ident="q-a")
        different = make_question(
            "Bir doğrunun iki noktası (1, 5) ve (3, 9) olduğuna göre eğimi kaçtır?",
            ident="q-b",
            representation="grafik",
            task="egim-yorumlama",
        )
        audit = audit_questions([first, different])
        self.assertEqual(audit["accepted_count"], 2)

    def test_bad_options_and_technical_language_are_rejected(self):
        bad = make_question("Bir kod parçasında sayıların toplamı hesaplanıyor; sonuç kaçtır?", ident="q-bad")
        bad["options"][4]["text"] = bad["options"][3]["text"]
        audit = audit_questions([bad])
        reasons = " ".join(audit["rejected"][0]["reasons"])
        self.assertIn("tekrarlanan seçenek", reasons)
        self.assertIn("yasaklı teknik terim", reasons)

    def test_fingerprint_masks_numbers_and_single_letter_variables(self):
        left = question_fingerprint({"questionText": "x + 12 = 25 ise x kaçtır?"})
        right = question_fingerprint({"questionText": "y + 80 = 93 ise y kaçtır?"})
        self.assertEqual(left, right)


if __name__ == "__main__":
    unittest.main(verbosity=2)
