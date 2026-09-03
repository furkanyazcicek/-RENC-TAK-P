import os
import json
import time

try:
    import google.generativeai as genai
except ImportError:
    print("google-generativeai kütüphanesi bulunamadı. Lütfen 'pip install google-generativeai' komutu ile yükleyin.")
    exit(1)

# TODO: Kendi API anahtarınızı buraya girin veya çevre değişkeni olarak (GEMINI_API_KEY) ayarlayın.
API_KEY = os.environ.get("GEMINI_API_KEY", "BURAYA_API_ANAHTARINIZI_GIRIN")

if API_KEY == "BURAYA_API_ANAHTARINIZI_GIRIN":
    print("Lütfen script içindeki API_KEY değişkenine Gemini API anahtarınızı girin.")
    exit(1)

genai.configure(api_key=API_KEY)

# Generation config için kurallar (E şıkkı olmayacak vb.)
SYSTEM_INSTRUCTION = """
Sen profesyonel bir Türkçe öğretmeni ve LGS soru yazarısın. 
Görevin, verilen konu, zorluk seviyesi ve test numarasına göre 10 soruluk, 
TAMAMEN ÖZGÜN, ASLA TEKRARA DÜŞMEYEN ve MEB kazanımlarına tam uygun LGS Türkçe testleri oluşturmaktır.

Özgünlük Kuralları:
- Her bir test ve soru için farklı temalar, farklı edebi metinler, farklı şiirler, farklı isimler ve farklı günlük yaşam durumları kurgula.
- Klasikleşmiş, her yerde bulunan örnek cümleleri KULLANMA. 
- Her testin kendine has, yaratıcı bir metin yelpazesi olsun. Soru köklerini bile farklılaştır (Örn: "Hangisine ulaşılamaz?", "Hangisi çıkarılabilir?", "Hangi kurala uyulmamıştır?").

Şık Kuralları:
- Her soru 4 şıklı olmalı (A, B, C, D) ve E şıkkı KESİNLİKLE bulunmamalıdır.
- Şıkların doğru cevap dağılımı (A, B, C, D) dengeli olmalıdır (örneğin arka arkaya aynı şık gelmesin, hepsi A olmasın).
Soruları belirtilen JSON formatında döndürmelisin.
"""

def generate_test(topic, difficulty, test_no):
    # Prompt'a her defasında rastgelelik katan ve tekrarı engelleyen vurgular ekliyoruz.
    prompt = (
        f"Konu: {topic}, Seviye: {difficulty}, Test No: {test_no}.\n"
        f"LÜTFEN DİKKAT: Bu {test_no}. testtir. Daha önce üretilmiş olabilecek sorulardan tamamen farklı, "
        f"yepyeni okuma parçaları, farklı kurgular ve farklı soru tipleri kullan. Asla tekrara düşme.\n"
        f"Bu test için LGS müfredatına uygun 10 adet özgün çoktan seçmeli (A,B,C,D) soru oluştur ve JSON formatında döndür.\n"
        f"Format: {{'konu': '{topic}', 'seviye': '{difficulty}', 'test_no': {test_no}, 'sorular': [{{'soru_no': 1, 'soru_metni': '...', 'secenekler': {{'A':'...', 'B':'...', 'C':'...', 'D':'...'}}, 'dogru_cevap': 'A', 'kazanim': '...'}}]}}"
    )
    
    model = genai.GenerativeModel('gemini-1.5-pro', system_instruction=SYSTEM_INSTRUCTION)
    
    # JSON döndürmesini zorlamak için
    try:
        response = model.generate_content(
            prompt,
            generation_config=genai.GenerationConfig(response_mime_type="application/json")
        )
        return json.loads(response.text)
    except Exception as e:
        print(f"Hata oluştu ({topic} - {difficulty} Test {test_no}): {e}")
        return None

def main():
    topics = [
        "Sozcukte_Anlam", "Cumlede_Anlam", "Paragrafta_Anlam", 
        "Gorsel_Okuma", "Fiilimsiler", "Cumlenin_Ogeleri", 
        "Fiilde_Cati", "Cumle_Turleri", "Yazim_Kurallari", 
        "Noktalama_Isaretleri"
    ]
    
    # Her konu için: 10 Kolay, 20 Orta, 10 Zor (Örnek olarak 3'er tane ayarlandı, isteğe göre değiştirilebilir)
    distribution = {
        "Kolay": 10,
        "Orta": 20,
        "Zor": 10
    }
    
    base_dir = "/Users/furkantalhayazcicek/Desktop/DRKOÇ/LGS_Turkce_Testleri"
    os.makedirs(base_dir, exist_ok=True)
    
    for topic in topics:
        topic_dir = os.path.join(base_dir, topic)
        os.makedirs(topic_dir, exist_ok=True)
        
        for diff, count in distribution.items():
            for i in range(1, count + 1):
                file_path = os.path.join(topic_dir, f"{diff}_Test_{i}.json")
                if os.path.exists(file_path):
                    print(f"Atlanıyor, dosya zaten var: {file_path}")
                    continue
                
                print(f"Oluşturuluyor: {topic} - {diff} Test {i}")
                test_data = generate_test(topic, diff, i)
                
                if test_data:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        json.dump(test_data, f, ensure_ascii=False, indent=4)
                    print(f"Kaydedildi: {file_path}")
                
                # API limitlerine takılmamak için bekleme süresi
                time.sleep(5)

if __name__ == "__main__":
    main()
