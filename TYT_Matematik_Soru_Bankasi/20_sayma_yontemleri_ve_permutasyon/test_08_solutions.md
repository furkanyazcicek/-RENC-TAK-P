# Konu 20 — Sayma Yöntemleri ve Permütasyon

## Test 08 — Çözümler

## Soru 1
**Doğru cevap:** C

**Kazanım:** Ardışık tekrar yasağında aşamalı seçim yapma.

**Çözüm:** İlk harf için 4 seçenek vardır. İkinci harf ilkinden farklı 3, üçüncü harf de ikinciden farklı 3 seçenekle belirlenir. Toplam $4\cdot3\cdot3=36$ dizi oluşur.

**Neden doğru?** Üçüncü harf ilk harfle aynı olabilir; yalnız hemen önceki harften farklı olmalıdır.

**Çeldirici notu:** Bütün harfleri farklı seçmek sorudaki yalnız ardışık tekrar yasağını daha güçlü bir koşula dönüştürür.

## Soru 2
**Doğru cevap:** D

**Kazanım:** Ardışık faktöriyellerin oranından değişkeni bulma.

**Çözüm:** $(n+1)!=(n+1)n!$ olduğundan oran $n+1$'e eşittir. $n+1=9$ ve $n=8$ bulunur.

**Neden doğru?** Paydaki $n!$ çarpanı paydadaki $n!$ ile tamamen sadeleşir.

**Çeldirici notu:** Oranı $n$ sanmak $(n+1)!$ ifadesindeki yeni çarpanı bir eksik alır.

## Soru 3
**Doğru cevap:** E

**Kazanım:** Belirli iki kişiden tam birinin görev aldığı sıralı seçimleri sayma.

**Çözüm:** Görev alacak özel kişi Ayşe veya Berk olmak üzere 2 biçimde, alacağı görev 2 biçimde seçilir. Diğer görev, kalan 6 öğrenciden birine verilir. Toplam $2\cdot2\cdot6=24$'tür.

**Neden doğru?** “Tam biri” koşulu iki özel kişinin birlikte görev almasını dışarıda bırakır.

**Çeldirici notu:** Diğer görev için 7 kişi saymak seçilmeyen özel kişiyi de göreve alarak koşulu bozar.

## Soru 4
**Doğru cevap:** A

**Kazanım:** Üç kişi arasındaki kısmi göreli sıra koşulunu sayma.

**Çözüm:** Üç kişinin $3!=6$ göreli sırasından Ayşe'nin ilk olduğu iki sıra vardır: A–B–C ve A–C–B. Bu nedenle $7!\cdot2/6=7!/3=1680$ diziliş oluşur.

**Neden doğru?** Berk ile Ceren'in kendi aralarındaki sırası serbesttir.

**Çeldirici notu:** Yalnız A–B–C sırasını saymak A–C–B düzenlerini eksik bırakır.

## Soru 5
**Doğru cevap:** B

**Kazanım:** Birden fazla ders grubunu bloklar hâlinde sıralama.

**Çözüm:** Matematik ve fizik kitapları iki blok olarak $2!$ biçimde sıralanır. Matematik kitapları kendi içinde $5!$, fizik kitapları $3!$ biçimde dizilir. Toplam $2!\cdot5!\cdot3!=1440$'tır.

**Neden doğru?** Her ders grubunun iç sırası ve iki grubun raf üzerindeki sırası bağımsızdır.

**Çeldirici notu:** Blokların yer değiştirmesini saymamak sonucu yarıya indirir.

## Soru 6
**Doğru cevap:** C

**Kazanım:** Dairesel dizilişte karşı ve komşu konumları birlikte sabitleme.

**Çözüm:** Ayşe sabitlenir. Ceren'in karşı konumu tektir. Berk, Ayşe'nin iki yanındaki konumlardan birini seçer. Kalan 3 kişi $3!$ biçimde yerleşir. Toplam $2\cdot3!=12$'dir.

**Neden doğru?** Ayşe sabitlendiğinde dönme eşdeğerliği giderilmiş olur.

**Çeldirici notu:** Berk için tek komşu konumu saymak masanın iki yönünden birini eksik bırakır.

## Soru 7
**Doğru cevap:** D

**Kazanım:** Özdeş harflerden oluşan bir bloğu tekrarlı permütasyon içinde kullanma.

**Çözüm:** Üç A tek bir blok kabul edilir. Bu blok, iki T ve bir R ile birlikte 4 birim oluşturur. İki T özdeş olduğundan farklı diziliş sayısı $4!/2!=12$'dir.

**Neden doğru?** A harfleri özdeş olduğu için blok içinde ayrıca sıralanmaz.

**Çeldirici notu:** A bloğuna $3!$ iç sıra vermek özdeş A harflerini farklı kabul eder.

## Soru 8
**Doğru cevap:** E

**Kazanım:** Sıfırla biten tekrarsız sayıları basamak basamak oluşturma.

**Çözüm:** 10 ile bölünebilmesi için birler basamağı 0'dır. On binler basamağı için 1–7 arasından 7 seçenek, kalan üç basamak için sırasıyla 6, 5 ve 4 seçenek vardır. Toplam $7\cdot6\cdot5\cdot4=840$ sayı yazılır.

**Neden doğru?** Sıfır son basamakta kullanıldığı için baş basamakta sıfır sorunu kalmaz.

**Çeldirici notu:** Baş basamak için 8 seçenek saymak sıfırı ikinci kez kullanır ve beş basamak koşulunu bozar.

## Soru 9
**Doğru cevap:** A

**Kazanım:** Farklı nesneleri farklı kutulara tekrarsız yerleştirme.

**Çözüm:** İlk mektup için 6, sonraki mektuplar için sırasıyla 5, 4 ve 3 kutu seçeneği vardır. Toplam $6\cdot5\cdot4\cdot3=360$ dağıtım oluşur.

**Neden doğru?** Mektuplar ve kutular farklıdır; her yeni mektup daha önce kullanılan kutuya atılamaz.

**Çeldirici notu:** Yalnız dört kutuyu seçmek hangi mektubun hangi kutuya gittiğini belirtmez.

## Soru 10
**Doğru cevap:** B

**Kazanım:** Dönme ve yansıma eşdeğerliği bulunan dairesel yerleşimleri sayma.

**Çözüm:** Yalnız döndürmeler aynı kabul edilseydi $(6-1)!=120$ yerleşim olurdu. Her yerleşim ile ters çevrilmiş görüntüsü de aynı sayıldığı için sonuç $120/2=60$'tır.

**Neden doğru?** Altı taşın tümü farklı olduğundan hiçbir yerleşim, yansımasıyla kendiliğinden çakışmaz.

**Çeldirici notu:** Yalnız döndürme eşdeğerliğini kullanmak yansıyan her çifti iki kez sayar.
