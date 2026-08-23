#!/bin/bash
# Kurulum ve Çalıştırma Betiği

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
echo "Hangi konudan soru üretmek istiyorsunuz? (Örn: Paragrafta Anlam)"
read -r KONU

echo ""
echo "Zorluk seviyesi nedir? (easy / medium / hard)"
read -r SEVIYE

echo ""
echo "Kaç adet soru üretilsin? (Örn: 20)"
read -r ADET

echo ""
echo "Bot çalıştırılıyor..."
python bot.py --ders "Turkce" --konu "$KONU" --seviye "$SEVIYE" --adet $ADET --api_key "$API_KEY"
