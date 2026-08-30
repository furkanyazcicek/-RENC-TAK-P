# Konu 21 — Kombinasyon

## Test 16 — Çözümler

## Soru 1

**Doğru cevap:** A

**Kazanım:** Aynı tek–çiftlik özelliğindeki sayı çiftlerini seçme.

**Çözüm:**

Birden on ikiye kadar 6 tek ve 6 çift sayı vardır. İki sayı ya teklerden ya da çiftlerden seçilir.

$$\binom62+\binom62=15+15=30$$

**Neden doğru?** Tek–tek ve çift–çift seçimleri ayrık iki durum olarak bütün uygun ikilileri kapsar.

**Çeldirici notu:** Bir tek ve bir çift sayı seçmek aynı tek–çiftlik koşulunu sağlamaz.

## Soru 2

**Doğru cevap:** B

**Kazanım:** Birleşimi bütün küme olan iki adlandırılmış alt kümeyi sayma.

**Çözüm:**

Kümenin her elemanı yalnız A'da, yalnız B'de veya hem A hem B'de bulunabilir. Birleşimin bütün küme olması nedeniyle iki kümenin de dışında kalma seçeneği yoktur.

Her eleman için 3 durum olduğundan

$$3^6=729$$

ikili vardır.

**Neden doğru?** Her eleman en az bir alt kümeye yerleştirildiği için birleşim kümenin tamamını verir.

**Çeldirici notu:** Her eleman için dört durum saymak iki kümenin de dışında kalan elemanlara izin verir.

## Soru 3

**Doğru cevap:** C

**Kazanım:** Özdeş öğeleri kutulara çift miktarlarda dağıtma.

**Çözüm:**

Kutulardaki bilye sayıları $2x,2y,2z$ olsun. Toplam 8 olduğundan

$$x+y+z=4,\qquad x,y,z\ge0$$

elde edilir. Dört özdeş birimin üç kutuya dağıtım sayısı

$$\binom{4+3-1}{3-1}=\binom62=15$$

tir.

**Neden doğru?** Her kutu sayısı ikiyle çarpıldığı için elde edilen bütün dağıtımlarda bilye sayıları çifttir.

**Çeldirici notu:** Kutuların boş kalamayacağını varsaymak soruda izin verilen sıfır bilyeli kutuları dışarıda bırakır.

## Soru 4

**Doğru cevap:** D

**Kazanım:** İki birlikte bulunma koşulunun aynı doğruluk değerine sahip olmasını sayma.

**Çözüm:**

İki çift de birlikte seçilecekse grup yalnız A, B, C ve D'den oluşur; 1 grup vardır.

İki çift de birlikte seçilmeyecekse bütün $\binom{10}{4}=210$ gruptan A–B ikilisini içeren $\binom82=28$ grup ve C–D ikilisini içeren 28 grup çıkarılır. Dört özel öğrencinin birlikte olduğu grup iki kez çıkarıldığı için geri eklenir:

$$210-28-28+1=155$$

İki durumun toplamı

$$155+1=156$$

olur.

**Neden doğru?** Koşul yalnız iki birlikte bulunma durumunun ikisinin de doğru veya ikisinin de yanlış olmasına izin verir.

**Çeldirici notu:** Yalnız dört özel öğrencinin birlikte olduğu grubu saymak iki çiftin de birlikte bulunmadığı 155 grubu eksik bırakır.

## Soru 5

**Doğru cevap:** E

**Kazanım:** Kombinasyon eşitliğinden doğal sayı belirleme.

**Çözüm:**

$$\frac{n(n-1)}2=3n$$

olur. $n\ge2$ olduğundan her iki taraf $n$ ile sadeleştirilebilir:

$$\frac{n-1}{2}=3$$

Buradan $n-1=6$ ve $n=7$ bulunur.

**Neden doğru?** Verilen alt sınır, sadeleştirilen $n$ çarpanının sıfır olmamasını sağlar.

**Çeldirici notu:** Sağ taraftaki $\binom n1=n$ değerini 1 kabul etmek eşitliği bozar.

## Soru 6

**Doğru cevap:** A

**Kazanım:** Grup içinden ve grup dışından farklı görevler belirleme.

**Çözüm:**

Dört kişilik kurul

$$\binom84=70$$

biçimde seçilir. Başkan kurulun dört üyesinden 4, yedek üye kurul dışındaki dört öğrenciden 4 biçimde belirlenir.

$$\binom84\cdot4\cdot4=70\cdot16=1120$$

**Neden doğru?** Başkan ile yedek üye ayrı seçim havuzlarından belirlendiği için aynı kişi iki görevi üstlenemez.

**Çeldirici notu:** Her iki görevliyi de kurul üyelerinden seçmek yedek üyenin kurul dışında olma koşulunu bozar.

## Soru 7

**Doğru cevap:** B

**Kazanım:** Tamamlayıcı çiftlerden tam bir çift ve iki tek öğe seçme.

**Çözüm:**

Tam alınacak sayı çifti 6 biçimde belirlenir. Kalan beş tamamlayıcı çiftten ikisi

$$\binom52=10$$

biçimde seçilir ve bu çiftlerin her birinden alınacak sayı $2^2=4$ biçimde belirlenir.

$$6\cdot\binom52\cdot2^2=6\cdot10\cdot4=240$$

**Neden doğru?** İki ek sayı farklı tamamlayıcı çiftlerden alındığı için ikinci bir tam çift oluşmaz.

**Çeldirici notu:** Kalan on sayıdan doğrudan iki sayı seçmek ikinci bir toplamı 13 olan çiftin oluşmasına izin verir.

## Soru 8

**Doğru cevap:** C

**Kazanım:** Seçilen grubun içinde biri diğerinin dışında kalan iki görev yapısı belirleme.

**Çözüm:**

Dört kişilik kurul

$$\binom94=126$$

biçimde seçilir. Çalışma grubu kurulun dört üyesinden $\binom42=6$ biçimde seçilir. Sözcü, çalışma grubunda bulunmayan iki kurul üyesinden biri olur.

$$\binom94\binom42\cdot2=126\cdot6\cdot2=1512$$

**Neden doğru?** Sözcü kurul üyesidir ancak çalışma grubunun dışında tutulmuştur.

**Çeldirici notu:** Sözcüyü dört kurul üyesinden seçmek çalışma grubundaki bir kişinin de sözcü olmasına izin verir.

## Soru 9

**Doğru cevap:** D

**Kazanım:** Alt kümeleri eleman sayısının belirli bir sayıya bölünebilirliğine göre sayma.

**Çözüm:**

Dokuzu aşmayan ve 3'ün katı olan alt küme büyüklükleri 0, 3, 6 ve 9'dur.

$$\binom90+\binom93+\binom96+\binom99$$

$$=1+84+84+1=170$$

**Neden doğru?** Boş kümenin eleman sayısı 0 da 3'ün katı olduğundan sayıma katılmıştır.

**Çeldirici notu:** Boş kümeyi dışarıda bırakmak sonucu bir eksik verir.

## Soru 10

**Doğru cevap:** E

**Kazanım:** İki ayrı özel ikili için “tam olarak biri” ve “en az biri” koşullarını birleştirme.

**Çözüm:**

A ile B'den hangisinin seçileceği 2 biçimde belirlenir. Grubun kalan dört kitabı C, D ve diğer altı kitaptan seçilir; bu dört kitap arasında C ile D'den en az biri bulunmalıdır.

Sekiz kitaptan dört seçimden C ve D'nin ikisinin de seçilmediği seçimler çıkarılır:

$$\binom84-\binom64=70-15=55$$

Toplam

$$2\cdot55=110$$

seçim vardır.

**Neden doğru?** A–B ikilisinden yalnız biri seçilmiş, kalan seçimde C–D ikilisinin en az bir üyesi zorunlu tutulmuştur.

**Çeldirici notu:** C ile D'den tam birini seçmek, ikisinin birlikte seçildiği uygun seçimleri dışarıda bırakır.
