/**
 * Ana sayfanın bütün pazarlama metinleri tek kaynakta tutulur.
 * Yeni bir slogan veya CTA denemesi için bileşen dosyalarını değiştirmek gerekmez.
 */
export const ANASAYFA_ICERIGI = {
  navigasyon: {
    baglantilar: [
      { href: '#deneyim', etiket: 'Deneyim' },
      { href: '#nasil-calisir', etiket: 'Nasıl çalışır' },
      { href: '#guven', etiket: 'Güven' },
    ],
    hakkimda: 'Hakkımda',
    iletisim: 'İletişim',
    giris: 'Giriş Yap',
    menuAc: 'Menüyü aç',
    menuKapat: 'Menüyü kapat',
  },

  hero: {
    etiket: 'LGS · TYT · AYT · KPSS · okul dersleri',
    slogan: 'Konuyu değiştir. Sonucu gör. Gerçekten anla.',
    aciklama:
      'Atlasları keşfet, zorlandığın soruyu adım adım çöz ve bugünkü çalışmanı kendi verine göre şekillendir. DRKOÇ, öğrenmeyi ekrandan çıkan bir deneyime dönüştürür.',
    birincilCta: { etiket: 'Öğrenmeye Başla', hedef: '/register' },
    ikincilCta: { etiket: 'Deneyimi Keşfet', hedef: '#deneyim' },
    guvenNotlari: [
      'Öğrenci, öğretmen ve veli için ayrı deneyim',
      'Tanıtım sahnesi hiçbir veriyi kaydetmez',
    ],
    sahneBasligi: 'Etkileşimli öğrenme gösterimi',
    sahneYardim: 'Bir alan seç; öğrenme nesnesinin nasıl değiştiğini gör.',
  },

  sahneler: [
    {
      id: 'atlaslar',
      sira: '01',
      sekme: 'Atlaslar',
      etiket: 'Keşfet',
      baslik: 'Değişkeni sen kontrol et.',
      aciklama:
        'Fizikten tarihe, her atlas kendi öğrenme nesnesine göre davranır. Değeri, katmanı veya zamanı değiştir; sonucu aynı anda gör.',
      kanit: 'Fizik · Kimya · Biyoloji · Coğrafya · Tarih atlasları',
      cta: 'Atlasları incele',
      hedef: '/fizik-atlasi',
      erisimNotu: 'Atlas önizlemesi',
    },
    {
      id: 'notlar',
      sira: '02',
      sekme: 'Ders notu',
      etiket: 'Bağlantı kur',
      baslik: 'Notun içindeki ilişkiyi aç.',
      aciklama:
        'Kısa anlatım, görsel model ve küçük kontrol aynı akışta ilerler. Bilgi yalnız okunmaz; seçiminle görünür hâle gelir.',
      kanit: 'Görsel ders okuyucu · etkileşimli figürler · konu testleri',
      cta: 'Kütüphaneyi gör',
      hedef: '/login',
      erisimNotu: 'Hesapla açılır',
    },
    {
      id: 'soru-coz',
      sira: '03',
      sekme: 'Soru çöz',
      etiket: 'Düşünme yolunu gör',
      baslik: 'Cevaptan önce yöntemi anla.',
      aciklama:
        'Soruyu fotoğrafla veya metinle gönder. Çözüm; verilenleri ayırır, yöntemi açıklar ve sonucu kontrol etmene yardım eder.',
      kanit: 'Fotoğraf hazırlama · tahta görünümü · adım yardımı · alternatif yöntem',
      cta: 'Soru çözümünü aç',
      hedef: '/login',
      erisimNotu: 'Öğrenci hesabıyla açılır',
    },
    {
      id: 'ai-koc',
      sira: '04',
      sekme: 'AI Koç',
      etiket: 'Rotanı kur',
      baslik: 'Bugünkü adımını verin belirlesin.',
      aciklama:
        'Deneme ve çalışma kayıtların aynı bağlamda okunur; dağınık hedefler, uygulanabilir kısa bir çalışma rotasına dönüşür.',
      kanit: 'Kişisel bağlam · kısa plan · konuşma geçmişi · analiz bağlantısı',
      cta: 'AI Koç’a git',
      hedef: '/login',
      erisimNotu: 'Öğrenci hesabıyla açılır',
    },
  ],

  deger: {
    etiket: 'DRKOÇ’un farkı',
    baslik: 'Öğrenme doğrusal değildir. Çalışma alanın da olmamalı.',
    aciklama:
      'Bir öğrenci bazen anlatıma, bazen deneye, bazen doğru soruya ihtiyaç duyar. DRKOÇ bu geçişleri koparmadan aynı öğrenme döngüsünde tutar.',
    eslesmeler: [
      {
        sira: '01',
        ihtiyac: '“Konuyu okudum ama gözümde canlanmıyor.”',
        cozum: 'Nesneyi değiştir, katmanı aç, sonucu gözle.',
        sonuc: 'Kavram soyut bir cümleden görünür bir modele dönüşür.',
      },
      {
        sira: '02',
        ihtiyac: '“Bu soruda nerede koptuğumu bulamıyorum.”',
        cozum: 'Verilenleri, yöntemi ve kontrol adımını ayrı ayrı incele.',
        sonuc: 'Yanlış cevap bir son değil, bir sonraki hamlenin ipucu olur.',
      },
      {
        sira: '03',
        ihtiyac: '“Bugün ne çalışmam gerektiğini bilmiyorum.”',
        cozum: 'Kayıtlarını tek bir kısa çalışma rotasında birleştir.',
        sonuc: 'Büyük hedef, bugün tamamlanabilir bir adıma iner.',
      },
    ],
  },

  akis: {
    etiket: 'Öğrenme döngüsü',
    baslik: 'Keşiften ilerlemeye dört sakin adım.',
    adimlar: [
      {
        sira: '01',
        etiket: 'Keşfet',
        baslik: 'Öğrenme nesnesine dokun.',
        aciklama: 'Atlas, görsel not veya soru üzerinden ilişkileri görünür kıl.',
      },
      {
        sira: '02',
        etiket: 'Dene',
        baslik: 'Değişkeni veya seçimini değiştir.',
        aciklama: 'Eylemin sonucunu gecikmeden ve aynı bağlam içinde gör.',
      },
      {
        sira: '03',
        etiket: 'Anla',
        baslik: 'Nedenini kısa açıklamayla bağla.',
        aciklama: 'Sonuç, ezberlenecek cümle yerine kurulmuş bir zihinsel modele dönüşsün.',
      },
      {
        sira: '04',
        etiket: 'İlerle',
        baslik: 'Bir sonraki adımı verinle seç.',
        aciklama: 'Test, kayıt ve koçluk aynı ilerleme hikâyesini sürdürsün.',
      },
    ],
  },

  guven: {
    etiket: 'İnsan odağında teknoloji',
    baslik: 'Öğrenci çalışır. Öğretmen yön verir. Veli süreci sakin biçimde görür.',
    aciklama:
      'Herkes aynı veriye değil, kendi sorumluluğu için gerekli görünüme ulaşır. Teknoloji öğrencinin yerine karar vermez; doğru soruyu, doğru zamanda görünür kılar.',
    roller: [
      {
        id: 'ogrenci',
        etiket: 'Öğrenci',
        baslik: 'Bugünkü işine odaklanır.',
        aciklama: 'Not, atlas, soru çözümü, ödev ve kişisel ilerleme tek çalışma alanında.',
      },
      {
        id: 'ogretmen',
        etiket: 'Öğretmen',
        baslik: 'Kayıttan anlam çıkarır.',
        aciklama: 'Ödev, mesaj ve öğrenci gelişimi bağlamı kopmadan birlikte okunur.',
      },
      {
        id: 'veli',
        etiket: 'Veli',
        baslik: 'Süreci baskı kurmadan izler.',
        aciklama: 'Çalışma ve deneme görünümü, ayrı gözlemci panelinde sade biçimde sunulur.',
      },
    ],
    kurucuEtiket: 'Kurucu yaklaşımı',
    kurucuBaslik: 'Tıp eğitiminin analitik bakışı, gerçek öğrenci koçluğu deneyimiyle birleşiyor.',
    kurucuAciklama:
      'DRKOÇ; öğrenciyi yalnızca rakamlarla değil, çalışma ritmi, zorlandığı nokta ve ihtiyaç duyduğu destekle birlikte ele almak için Furkan Talha Yazçiçek tarafından geliştiriliyor.',
  },

  final: {
    etiket: 'Bir sonraki adım',
    baslik: 'Bugün bir konuyu gerçekten anlamaya başla.',
    aciklama:
      'Kendi çalışma alanını oluştur; atlasları, ders notlarını, soru çözümünü ve takip araçlarını aynı öğrenme akışında kullan.',
    birincilCta: { etiket: 'Ücretsiz Başla', hedef: '/register' },
    ikincilCta: { etiket: 'Hesabım Var', hedef: '/login' },
  },

  footer: {
    aciklama: 'Öğrenci, öğretmen ve veliyi aynı öğrenme yolculuğunda buluşturan eğitim platformu.',
    gizlilik: 'Gizlilik Politikası',
    telif: 'Dr. Koç. Tüm hakları saklıdır.',
  },
}

export default ANASAYFA_ICERIGI
