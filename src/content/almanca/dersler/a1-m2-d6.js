/**
 * DERS — A1 / Modül 2 / Ders 6
 * "Aileni tanıtan bir e-posta yaz"
 *
 * Modülü kapatan YAZMA dersi. Öğrenci artikel, Akkusativ, iyelik, çoğul
 * ve olumsuzluk konularını tek metinde birleştirir.
 *
 * E-posta biçimi bilinçli seçildi: Almancada yazışmanın kendi kalıpları
 * var (Liebe/Lieber, Viele Grüße) ve bunlar A1'de öğrenilmeye başlanır.
 */

export default {
  id: 'a1-m2-d6',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m2',
  sira: 6,
  baslik: 'Aileni tanıtan bir e-posta yaz',
  altBaslik: 'Artikel, iyelik ve çoğulu tek metinde birleştir',
  odakBeceri: 'yazma',
  beceriler: ['yazma', 'gramer', 'kelime'],
  amac: 'Bu dersin sonunda Almanca bir e-postanın kalıplarını bilecek ve aileni tanıtan 8–10 cümlelik bir metin yazabileceksin.',
  kazanim: 'E-posta açılış ve kapanış kalıplarını kullanır; aile üyelerini iyelik sözcükleriyle tanıtır; artikel ve çoğulu doğru kurar.',
  onKosullar: ['a1-m2-d5'],
  sure: 16,
  baglam: {
    durum: 'Almanya\'daki mektup arkadaşın ailesini anlattı; sıra sende.',
    neden: 'E-posta, A1 sınavlarının (Start Deutsch 1, Fit in Deutsch 1) yazma bölümünde en sık istenen metin türüdür.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Almanca e-postanın iskeleti',
      metin:
        'Almanca yazışmanın kalıpları bellidir. Bu kalıpları ezberlemek, metnin yarısını hazır hâle getirir.',
      maddeler: [
        'Açılış (samimi): Liebe Anna, / Lieber Tom, — sonra VİRGÜL, alt satıra geç.',
        'Açılış (resmî): Sehr geehrte Frau …, / Sehr geehrter Herr …,',
        'İlk cümle: Wie geht es dir? / Danke für deine E-Mail.',
        'Gövde: asıl anlatacakların.',
        'Kapanış: Viele Grüße / Liebe Grüße (samimi) — Mit freundlichen Grüßen (resmî)',
        'Son satır: adın.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Virgülden sonra küçük harf',
      yanlis: 'Liebe Anna,\nIch heiße Elif.',
      dogru: 'Liebe Anna,\nich heiße Elif.',
      neden:
        'Almancada hitaptan sonra virgül gelir ve bir sonraki cümle KÜÇÜK harfle başlar (özel ad ve isimler hariç). Türkçede ve İngilizcede böyle bir kural olmadığı için çok atlanır.',
    },
    {
      tur: 'ornek',
      baslik: 'Örnek e-posta',
      satirlar: [
        { de: 'Liebe Anna,', tr: 'Sevgili Anna,', not: 'Kadın için "Liebe", erkek için "Lieber"' },
        { de: 'danke für deine E-Mail! Jetzt schreibe ich über meine Familie.', tr: 'E-postan için teşekkürler! Şimdi ailemden söz ediyorum.', not: 'Küçük harfle başladı' },
        { de: 'Wir sind fünf Personen: meine Eltern, mein Bruder, meine Schwester und ich.', tr: 'Beş kişiyiz: annem babam, erkek kardeşim, kız kardeşim ve ben.', not: 'İyelik + çoğul' },
        { de: 'Mein Vater ist Lehrer und meine Mutter arbeitet in einem Krankenhaus.', tr: 'Babam öğretmen, annem bir hastanede çalışıyor.', not: 'Meslekte artikel yok' },
        { de: 'Mein Bruder heißt Emre. Er hat einen Hund.', tr: 'Kardeşimin adı Emre. Bir köpeği var.', not: 'Akkusativ: einen' },
        { de: 'Wir haben keine Katze, aber ich möchte eine.', tr: 'Kedimiz yok ama bir tane istiyorum.', not: 'kein + Akkusativ' },
        { de: 'Wie ist deine Familie? Schreib mir bald!', tr: 'Senin ailen nasıl? Bana yakında yaz!', not: 'Soru + rica' },
        { de: 'Viele Grüße\nElif', tr: 'Selamlar\nElif', not: 'Kapanış' },
      ],
    },
    {
      tur: 'kalip',
      baslik: 'E-posta kalıpları',
      kaliplar: [
        { de: 'Liebe … , / Lieber … ,', kullanim: 'Samimi açılış', ornek: 'Liebe Anna, / Lieber Tom,' },
        { de: 'Danke für deine E-Mail.', kullanim: 'İlk cümle', ornek: 'Danke für deine E-Mail!' },
        { de: 'Wie geht es dir?', kullanim: 'Hâl hatır', ornek: 'Wie geht es dir? Mir geht es gut.' },
        { de: 'Jetzt schreibe ich über …', kullanim: 'Konuya giriş', ornek: 'Jetzt schreibe ich über meine Familie.' },
        { de: 'Schreib mir bald!', kullanim: 'Cevap isteme', ornek: 'Schreib mir bald zurück!' },
        { de: 'Viele Grüße / Liebe Grüße', kullanim: 'Kapanış', ornek: 'Viele Grüße, Elif' },
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Aile anlatırken en çok gereken kalıplar',
      basliklar: ['Ne anlatıyorsun?', 'Kalıp', 'Örnek'],
      satirlar: [
        ['Kaç kişi', 'Wir sind … Personen.', 'Wir sind vier Personen.'],
        ['Kardeş sayısı', 'Ich habe … Geschwister.', 'Ich habe einen Bruder.'],
        ['Meslek', '… ist … (artikelsiz)', 'Mein Vater ist Ingenieur.'],
        ['Çalışma yeri', '… arbeitet bei/in …', 'Meine Mutter arbeitet in einer Schule.'],
        ['Yaş', '… ist … Jahre alt.', 'Meine Schwester ist zehn Jahre alt.'],
        ['Evcil hayvan', 'Wir haben (k)ein …', 'Wir haben einen Hund.'],
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Metni yazarken her cümlede iki şeyi kontrol et: (1) isimler büyük harf mi, (2) artikel doğru mu. Bu ikisi A1 yazma puanının en büyük kısmını belirler.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m2-d6-a1',
      tur: 'siralama',
      beceri: 'yazma',
      zorluk: 'kolay',
      yonerge: 'E-posta parçalarını doğru sıraya diz.',
      parcalar: [
        'Wir sind vier Personen.',
        'Liebe Anna,',
        'Viele Grüße, Elif',
        'danke für deine E-Mail!',
      ],
      dogruSira: [1, 3, 0, 2],
      aciklama: 'Hitap → giriş cümlesi → gövde → kapanış.',
    },
    {
      id: 'a1-m2-d6-a2',
      tur: 'hata-bul',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Liebe Anna, Ich schreibe über meine Familie.',
      hataliParca: 'Ich schreibe',
      dogruParca: 'ich schreibe',
      kabul: ['Liebe Anna, ich schreibe über meine Familie', 'ich schreibe'],
      aciklama: 'Hitaptan sonraki cümle küçük harfle başlar.',
    },
    {
      id: 'a1-m2-d6-a3',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Boşlukları doldur.',
      parcalar: [
        'Wir sind fünf ', { bosluk: 0 }, '. Ich habe ', { bosluk: 1 },
        ' Bruder und ', { bosluk: 2 }, ' Schwester. Wir haben ', { bosluk: 3 }, ' Katze.',
      ],
      cevaplar: [
        { kabul: ['Personen'], ipucu: 'çoğul' },
        { kabul: ['einen'], ipucu: 'der Bruder + nesne' },
        { kabul: ['eine'], ipucu: 'die Schwester' },
        { kabul: ['keine'], ipucu: 'olumsuz, dişil' },
      ],
    },
    {
      id: 'a1-m2-d6-a4',
      tur: 'coktan-secmeli',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru kapanıştır?',
      soru: 'Bir arkadaşına yazdığın e-postayı nasıl bitirirsin?',
      secenekler: [
        { id: 'a', metin: 'Viele Grüße, Elif' },
        { id: 'b', metin: 'Mit freundlichen Grüßen, Elif' },
        { id: 'c', metin: 'Auf Wiedersehen, Elif' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Bu resmî kapanıştır; iş yazışmalarında kullanılır.',
        c: 'Bu bir VEDA sözüdür, yazışma kapanışı değildir.',
      },
    },
    {
      id: 'a1-m2-d6-a5',
      tur: 'genisletme',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Aileni adım adım anlat.',
      adimlar: [
        { yonerge: 'Kaç kişi olduğunuzu yaz.', kabul: ['Wir sind', 'Meine Familie hat'] },
        { yonerge: 'Kardeşin olup olmadığını yaz.', kabul: ['Ich habe'] },
        { yonerge: 'Anne ya da babanın mesleğini yaz.', kabul: ['Mein Vater ist', 'Meine Mutter ist', 'Mein Vater arbeitet', 'Meine Mutter arbeitet'] },
      ],
    },
    {
      id: 'a1-m2-d6-a6',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'E-postayı aşama aşama yaz.',
      gorev: 'Schreib eine E-Mail an deinen Brieffreund. Stell deine Familie vor: Wie viele Personen? Wer sind sie? Was machen sie? Habt ihr Haustiere?',
      ornekMetin:
        'Liebe Anna,\ndanke für deine E-Mail! Jetzt schreibe ich über meine Familie. Wir sind fünf Personen: meine Eltern, mein Bruder, meine Schwester und ich. Mein Vater ist Lehrer und meine Mutter arbeitet in einem Krankenhaus. Mein Bruder heißt Emre und er ist achtzehn Jahre alt. Meine Schwester ist zehn. Wir haben einen Hund, aber keine Katze. Wie ist deine Familie? Schreib mir bald!\nViele Grüße\nElif',
      kaliplar: [
        'Liebe … , / Lieber … ,',
        'danke für deine E-Mail!',
        'Wir sind … Personen.',
        'Mein Vater ist … / Meine Mutter arbeitet …',
        'Ich habe … Geschwister.',
        'Wir haben (k)ein …',
        'Viele Grüße',
      ],
      asamalar: [
        { ad: 'Plan', aciklama: 'Aileni Türkçe olarak listele: kim var, ne yapıyor, kaç yaşında.' },
        { ad: 'İskelet', aciklama: 'Hitap ve kapanışı yaz. Arasını şimdilik boş bırak.' },
        { ad: 'Gövde', aciklama: 'Her aile üyesi için bir cümle yaz. İyelik sözcüklerine dikkat et.' },
        { ad: 'Bağlama', aciklama: 'Cümleleri und/aber ile birleştir. Bir soru cümlesi ekle.' },
        { ad: 'Kontrol', aciklama: 'İsimler büyük harf mi? Artikel doğru mu? Hitaptan sonraki cümle küçük harfle mi başlıyor?' },
      ],
      olcut: [
        'Hitapla başladım ve virgül koydum.',
        'Hitaptan sonraki cümleyi küçük harfle başlattım.',
        'Kaç kişi olduğumuzu yazdım.',
        'En az üç aile üyesini tanıttım.',
        'En az bir meslek bilgisi verdim.',
        'Evcil hayvan olup olmadığını yazdım (kein kullandım ya da kullanmam gerekmedi).',
        'Kapanış kalıbı ve adımla bitirdim.',
      ],
      enAzKelime: 50,
      aranan: [
        { etiket: 'hitap kalıbı', desen: /\b(liebe|lieber)\b/i },
        { etiket: 'iyelik sözcüğü', desen: /\b(mein|meine|meinen|unser|unsere)\b/i },
        { etiket: 'haben fiili', desen: /\b(habe|hat|haben)\b/i },
        { etiket: 'bağlaç', desen: /\b(und|aber)\b/i },
        { etiket: 'kapanış', desen: /\b(viele grüße|liebe grüße|viele gruesse)\b/i },
      ],
    },
  ],

  ozet: [
    'Almanca e-posta: hitap + virgül → küçük harfle devam → gövde → kapanış + ad.',
    'Liebe (kadın) / Lieber (erkek); resmî: Sehr geehrte(r) …',
    'Kapanış: Viele Grüße (samimi), Mit freundlichen Grüßen (resmî).',
    'Meslek söylenirken artikel kullanılmaz.',
    'Yazarken iki şeyi kontrol et: isimler büyük harf mi, artikel doğru mu.',
  ],

  miniSinav: [
    {
      id: 'a1-m2-d6-s1',
      tur: 'coktan-secmeli',
      beceri: 'yazma',
      zorluk: 'kolay',
      yonerge: 'Hangisi doğru?',
      soru: 'Tom adlı bir erkek arkadaşına yazıyorsun. Hitap nasıl olmalı?',
      secenekler: [
        { id: 'a', metin: 'Lieber Tom,' },
        { id: 'b', metin: 'Liebe Tom,' },
        { id: 'c', metin: 'Lieben Tom,' },
      ],
      dogruId: 'a',
      aciklama: 'Erkek için "Lieber", kadın için "Liebe".',
    },
    {
      id: 'a1-m2-d6-s2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Mein Vater ist ein Lehrer.',
      hataliParca: 'ein Lehrer',
      dogruParca: 'Lehrer',
      kabul: ['Mein Vater ist Lehrer', 'Lehrer'],
      aciklama: 'Meslek söylenirken artikel kullanılmaz.',
    },
    {
      id: 'a1-m2-d6-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'E-postanı bitirip arkadaşından cevap istiyorsun.',
      kabul: ['Schreib mir bald', 'Schreib mir bald!', 'Schreib mir bitte bald'],
      ornekCevap: 'Schreib mir bald! Viele Grüße, …',
    },
  ],

  kartlar: ['de-familie', 'de-eltern', 'de-bruder', 'de-schwester', 'de-kind', 'de-nett'],
  not: null,
  sonraki: 'a1-m3-d1',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
