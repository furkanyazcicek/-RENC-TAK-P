import os
import json
import time
import argparse
import google.generativeai as genai
from typing import List, Dict

# Yapılandırılmış Çıktı için JSON şeması
# Modelin her seferinde birebir bu yapıda JSON dönmesini sağlayacağız.

def generate_questions(ders: str, konu: str, seviye: str, adet: int, api_key: str) -> List[Dict]:
    genai.configure(api_key=api_key)
    
    # Yeni ve daha güvenilir model
    model = genai.GenerativeModel('gemini-1.5-pro')
    
    prompt = f"""
    Sen uzman bir {ders} öğretmenisin. TYT (Üniversite Sınavı) standartlarında, 
    "{konu}" konusuyla ilgili {seviye} seviyesinde toplam {adet} adet özgün soru hazırlamanı istiyorum.
    
    Soruların kalitesi çok yüksek olmalı, müfredata birebir uymalı ve kesinlikle aşağıdaki JSON dizisi (Array) formatında olmalıdır.
    Lütfen sadece geçerli bir JSON döndür, başına veya sonuna markdown (```json vb.) ekleme.

    İstenen JSON formatı örneği:
    [
      {{
        "id": "q-benzersiz-id",
        "difficulty": "{seviye}",
        "questionText": "Soru metni buraya gelecek...",
        "options": [
          {{ "id": "A", "text": "A şıkkı" }},
          {{ "id": "B", "text": "B şıkkı" }},
          {{ "id": "C", "text": "C şıkkı" }},
          {{ "id": "D", "text": "D şıkkı" }},
          {{ "id": "E", "text": "E şıkkı" }}
        ],
        "correctOptionId": "C",
        "explanation": "Cevabın detaylı çözümü buraya gelecek."
      }}
    ]
    """
    
    print(f"[{konu} - {seviye}] için yapay zekadan {adet} soru isteniyor... Lütfen bekleyin.")
    
    try:
        response = model.generate_content(
            prompt,
            generation_config=genai.types.GenerationConfig(
                response_mime_type="application/json",
            )
        )
        
        # JSON'ı parse et
        result = json.loads(response.text)
        return result
    except Exception as e:
        print(f"Hata oluştu: {e}")
        return []

def append_to_js_file(filepath: str, test_title: str, test_description: str, questions: List[Dict]):
    # Eğer dosya yoksa sıfırdan JS modülü oluşturacağız, varsa içine ekleyeceğiz.
    # Ancak basitlik adına bu script, alınan soruları JSON dosyası olarak da kaydedebilir.
    # Şimdilik mevcut JS yapısına uygun test objesi oluşturalım:
    
    test_obj = {
        "id": f"test-{int(time.time())}",
        "title": test_title,
        "description": test_description,
        "type": "comprehension",
        "order": 1, # Sırayı manuel ayarlayabilirsiniz
        "questions": questions
    }
    
    # JSON olarak temp dosyaya kaydet
    out_file = filepath.replace('.js', f'_{int(time.time())}.json')
    with open(out_file, 'w', encoding='utf-8') as f:
        json.dump(test_obj, f, ensure_ascii=False, indent=2)
        
    print(f"Başarılı! Sorular {out_file} dosyasına kaydedildi.")
    print("Bu JSON objesini kopyalayıp ilgili JS (veya veritabanı) dosyanızın içine yapıştırabilirsiniz.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="TYT Soru Üretim Botu")
    parser.add_argument("--ders", type=str, default="Türkçe", help="Dersin adı (Örn: Türkçe)")
    parser.add_argument("--konu", type=str, required=True, help="Konu adı (Örn: Sözcükte Anlam)")
    parser.add_argument("--seviye", type=str, choices=['easy', 'medium', 'hard'], default='medium', help="Zorluk seviyesi (easy, medium, hard)")
    parser.add_argument("--adet", type=int, default=10, help="Üretilecek soru sayısı (Önerilen: API limitleri için 10-20)")
    parser.add_argument("--api_key", type=str, required=True, help="Gemini API Anahtarı")
    
    args = parser.parse_args()
    
    sorular = generate_questions(args.ders, args.konu, args.seviye, args.adet, args.api_key)
    
    if sorular:
        print(f"Toplam {len(sorular)} adet soru başarıyla üretildi!")
        # Hedef dosya yolu (Klasörlerin var olduğundan emin olun)
        hedef_klasor = f"../../src/content/tests/{args.ders.lower()}"
        os.makedirs(hedef_klasor, exist_ok=True)
        
        dosya_adi = args.konu.lower().replace(" ", "-").replace("ç", "c").replace("ş", "s").replace("ı", "i").replace("ğ", "g").replace("ö", "o").replace("ü", "u") + ".js"
        tam_yol = os.path.join(hedef_klasor, dosya_adi)
        
        test_basligi = f"{args.konu} Testi"
        test_aciklamasi = f"{args.konu} - {args.seviye.capitalize()}"
        
        append_to_js_file(tam_yol, test_basligi, test_aciklamasi, sorular)
    else:
        print("Soru üretilemedi.")
