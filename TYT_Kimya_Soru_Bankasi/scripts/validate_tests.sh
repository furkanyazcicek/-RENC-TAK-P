#!/bin/bash
DIR="/Users/furkantalhayazcicek/Desktop/DRKOÇ/TYT_Kimya_Soru_Bankasi"
ERROR_COUNT=0

validate_test() {
  local KONU=$1
  local TEST=$2
  
  local Q_FILE="$DIR/$KONU/test_${TEST}_questions.md"
  local S_FILE="$DIR/$KONU/test_${TEST}_solutions.md"
  
  if [[ ! -f "$Q_FILE" || ! -f "$S_FILE" ]]; then
    echo "HATA: Dosyalar eksik - $KONU / Test $TEST"
    ERROR_COUNT=$((ERROR_COUNT + 1))
    return
  fi
  
  local Q_COUNT=$(grep -c "## Soru" "$Q_FILE")
  local S_COUNT=$(grep -c "## Soru" "$S_FILE")
  
  if [[ "$Q_COUNT" -ne 10 ]]; then
    echo "HATA: $Q_FILE içinde $Q_COUNT soru var, 10 olmalı."
    ERROR_COUNT=$((ERROR_COUNT + 1))
  fi
  
  if [[ "$S_COUNT" -ne 10 ]]; then
    echo "HATA: $S_FILE içinde $S_COUNT çözüm var, 10 olmalı."
    ERROR_COUNT=$((ERROR_COUNT + 1))
  fi
  
  # A,B,C,D,E check
  local A_COUNT=$(grep -c "^A)" "$Q_FILE")
  if [[ "$A_COUNT" -ne 10 ]]; then
    echo "UYARI: $Q_FILE içinde A) seçeneği sayısı 10 değil ($A_COUNT)"
  fi
  
  # Çözümlerde "Doğru Seçenek:" kontrolü
  local ANS_COUNT=$(grep -c "Doğru Seçenek" "$S_FILE")
  if [[ "$ANS_COUNT" -ne 10 ]]; then
    echo "HATA: $S_FILE içinde 'Doğru Seçenek' belirten satır sayısı $ANS_COUNT (10 olmalı)."
    ERROR_COUNT=$((ERROR_COUNT + 1))
  fi
  
  echo "Test $TEST doğrulaması bitti. Hata: $ERROR_COUNT"
}

for i in 01 02 03 04 05; do
  validate_test "01_kimya_bilimi" "$i"
done

if [[ "$ERROR_COUNT" -eq 0 ]]; then
  echo "TÜM TESTLER BAŞARIYLA DOĞRULANDI."
else
  echo "TOPLAM $ERROR_COUNT HATA BULUNDU!"
fi
