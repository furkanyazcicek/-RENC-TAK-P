#!/bin/bash
# Kurulum ve Çalıştırma Betiği

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR" || exit 1

echo "1. Gerekli Python kütüphaneleri yükleniyor..."
pip install -r requirements.txt

echo ""
echo "2. Lütfen Google Gemini API Anahtarınızı yapıştırın (Eğer yoksa aistudio.google.com adresinden ücretsiz alabilirsiniz):"
read -r API_KEY

if [ -z "$API_KEY" ]; then
    echo "API Anahtarı boş olamaz! Çıkış yapılıyor."
    exit 1
fi

echo ""
echo "Hangi matematik konusundan soru üretmek istiyorsunuz? (Örn: Fonksiyonlar)"
read -r KONU

echo "Sınav veya sınıf düzeyi nedir? (TYT / AYT / 10)"
read -r SINAV

echo ""
echo "Zorluk seviyesi nedir? (easy / medium / hard)"
read -r SEVIYE

echo ""
echo "Kaç adet soru üretilsin? (Örn: 20)"
read -r ADET

echo ""
echo "Bot çalıştırılıyor..."
export GEMINI_API_KEY="$API_KEY"
python bot.py --ders "Matematik" --konu "$KONU" --sinav "${SINAV:-TYT}" --seviye "$SEVIYE" --adet "$ADET" --kaynak-profil "$SCRIPT_DIR/source_profile.json"
