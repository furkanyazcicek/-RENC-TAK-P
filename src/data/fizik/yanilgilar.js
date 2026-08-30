/**
 * Fizik Atlası — Kavram Pusulası sözlüğü
 * ==================================================================
 * Öğrenme kontrolündeki her sorunun bir `yanilgi` kodu vardır. Öğrenci
 * yanlış cevap verdiğinde bu kod işaretlenir. Burası o kodların insan
 * diline çevrildiği yerdir: hangi kavramda takılmış ve ne yapmalı?
 *
 * Amaç puan vermek ya da sıralamak değil; öğrenciye "şu konuya bir daha
 * bak" demek. Bu yüzden her kaydın bir **tavsiye** alanı vardır ve
 * doğrudan ilgili bölgeye götürür.
 */

export const YANILGILAR = {
  /* — Ölçme — */
  'temel-turetilmis-karisimi': { bolge: 'olcme', ad: 'Temel ve türetilmiş büyüklük ayrımı', tavsiye: 'Bir birimin hangi temel birimlerden kurulduğuna bak: paskal aslında kg·m⁻¹·s⁻².' },
  'belirsizlik-yarim-bolme': { bolge: 'olcme', ad: 'Ölçüm belirsizliği', tavsiye: 'Belirsizlik, en küçük bölmenin yarısıdır. Ölçüm Tezgâhı’nda duyarlılığı değiştirip aralığın nasıl daraldığını izle.' },
  'hiz-surat-karisimi': { bolge: 'olcme', ad: 'Hız ile sürat farkı', tavsiye: 'Sürat yalnızca büyüklüktür; hız yön de taşır. "Yönünü söylemezsem eksik kalır mı?" sorusunu sor.' },

  /* — Vektörler — */
  'vektor-cebirsel-toplama': { bolge: 'vektorler', ad: 'Vektörleri sayı gibi toplama', tavsiye: 'Vektörler cebirsel değil geometrik toplanır. Vektör Tezgâhı’nda 6 ve 8 birimlik iki vektörün açısını değiştirip bileşkeyi izle.' },
  'sinus-kosinus-karisimi': { bolge: 'vektorler', ad: 'Sinüs–kosinüs karışması', tavsiye: 'Yatay bileşen kosinüs, düşey bileşen sinüs ister. Tezgâhta açıyı değiştirip bileşen kartlarını izle.' },
  'vektor-cikarma': { bolge: 'vektorler', ad: 'Vektör çıkarma', tavsiye: 'A − B, A + (−B) demektir. Tezgâhta "A − B" işlemini seçip kırmızı kesikli oku izle.' },
  'yol-yerdegistirme': { bolge: 'vektorler', ad: 'Alınan yol ile yer değiştirme', tavsiye: '"Yol mu, Yer Değiştirme mi?" deneyinde kapalı bir rota çiz: yol büyürken yer değiştirme sıfırlanır.' },

  /* — Madde — */
  'grafik-egimi-yorumu': { bolge: 'madde', ad: 'Grafik eğiminin anlamı', tavsiye: 'Eğim, düşey eksendeki değişimin yataya oranıdır. Kütle–hacim grafiğinde bu doğrudan özkütledir.' },
  'ters-oranti': { bolge: 'madde', ad: 'Ters orantı', tavsiye: 'Bir büyüklük paydadaysa, o büyüyünce sonuç küçülür. Kılcallık deneyinde yarıçapı yarıya indirip yükselmeyi izle.' },
  'adezyon-kohezyon': { bolge: 'madde', ad: 'Adezyon ve kohezyon', tavsiye: 'Kohezyon aynı cins, adezyon farklı cins moleküllerin çekimidir. Su ile cıvayı yan yana dene.' },

  /* — Kuvvet ve hareket — */
  'alan-yerdegistirme': { bolge: 'kuvvet-hareket', ad: 'Grafik altındaki alan', tavsiye: 'Hız–zaman grafiğinin altındaki alan yer değiştirmedir; alınan yol için alanların mutlak değerleri toplanır.' },
  'statik-surtunme-sabit': { bolge: 'kuvvet-hareket', ad: 'Statik sürtünmenin sabit sanılması', tavsiye: 'Statik sürtünme bir tepkidir: uygulanan kuvvet kadar büyür, μs·N sınırına kadar. Sürtünme Laboratuvarı’ndaki grafiğe bak.' },
  'hiz-sifir-ivme-sifir': { bolge: 'kuvvet-hareket', ad: 'Hız sıfırken ivme de sıfır sanılması', tavsiye: 'Yukarı atılan taşın tepe noktasında hızı sıfır, ivmesi g’dir. Atış Laboratuvarı’nda tepe anını adımla.' },

  /* — Atışlar — */
  'yatay-hiz-degisimi': { bolge: 'atislar', ad: 'Yatay hızın değiştiği sanılması', tavsiye: 'Hava direnci yoksa yatay yönde kuvvet yoktur; vₓ sabittir. Hız bileşenleri grafiğinde düz çizgiyi izle.' },
  'bilesen-ayirma': { bolge: 'atislar', ad: 'Hızı bileşenlerine ayırma', tavsiye: 'Yükseklik hesabına yalnızca düşey bileşen (v₀·sinθ) girer, yatay bileşen hiç girmez.' },
  'ivme-sabitligi': { bolge: 'atislar', ad: 'İvmenin değiştiği sanılması', tavsiye: 'Eğik atışta ivme her an aşağı yönde ve g büyüklüğündedir — tepe noktasında bile. Kırmızı g okunu izle.' },

  /* — Enerji — */
  'kare-bagimlilik': { bolge: 'enerji', ad: 'Kareyle orantı', tavsiye: 'Kinetik enerji hızın karesiyle artar: hız 3 kat olursa enerji 9 kat olur. Yay Fırlatıcı’da sıkışmayı ikiye katla.' },
  'is-aci': { bolge: 'enerji', ad: 'İşte açının rolü', tavsiye: 'İşi yapan, kuvvetin yer değiştirme yönündeki bileşenidir. "İş ve Açı" deneyinde açıyı 90°ye getir.' },
  'enerji-yok-olur': { bolge: 'enerji', ad: 'Enerjinin yok olduğu sanılması', tavsiye: 'Sürtünmede enerji ısıya dönüşür. Enerji Parkuru’ndaki akış şemasında girenle çıkanın hep eşit olduğunu gör.' },
  'is-guc-karisimi': { bolge: 'enerji', ad: 'İş ile güç karışması', tavsiye: 'İş bir miktardır (J), güç bu işin ne kadar hızlı yapıldığıdır (W). Süreyi değiştir, iş sütununun sabit kaldığını gör.' },

  /* — Isı — */
  'hal-degisimi-sicaklik': { bolge: 'isi', ad: 'Hâl değişiminde sıcaklık', tavsiye: 'Erime ve kaynamada sıcaklık sabittir; enerji bağları koparmaya gider. Isınma Eğrisi’ndeki düz platolara bak.' },
  'isil-denge-ortalama': { bolge: 'isi', ad: 'Denge sıcaklığının ortalama sanılması', tavsiye: 'Denge, kütle ve öz ısıyla ağırlıklandırılmış ortalamadır. Kalorimetre’de kütleleri değiştirip izle.' },
  'isi-aktarim-yollari': { bolge: 'isi', ad: 'Isı aktarım yolları', tavsiye: 'İletim ve taşınım madde ister; ışınım istemez. Güneş enerjisi boşluğu ışınımla geçer.' },

  /* — Basınç — */
  'batan-hacim-orani': { bolge: 'basinc', ad: 'Batan hacim oranı', tavsiye: 'Yüzen cisimde batan oran, cismin özkütlesinin sıvınınkine oranıdır. Arşimet Havuzu’nda sıvıyı değiştirip izle.' },
  'pascal-is-kazanci': { bolge: 'basinc', ad: 'Hidrolik preste iş kazancı sanılması', tavsiye: 'Kuvvet kazanılır ama yol o oranda kaybedilir; iş her iki tarafta eşittir. Pres deneyindeki iki kutuyu karşılaştır.' },

  /* — Elektrostatik — */
  'elektriklenme-yollari': { bolge: 'elektrostatik', ad: 'Elektriklenme yollarının karışması', tavsiye: 'Dokunmada aynı işaret, etki + topraklamada zıt işaret oluşur. Elektroskop deneyinde üçünü de dene.' },
  'coulomb-oranti': { bolge: 'elektrostatik', ad: 'Coulomb yasasındaki orantılar', tavsiye: 'Kuvvet yüklerin çarpımıyla doğru, uzaklığın karesiyle ters orantılıdır. Yük Alanı’ndaki karşılaştırma tablosuna bak.' },
  'alan-cizgisi-yorunge': { bolge: 'elektrostatik', ad: 'Alan çizgisinin yörünge sanılması', tavsiye: 'Çizgiler yalnızca o noktadaki kuvvetin yönünü verir; hareket eden bir yük eylemsizlik nedeniyle çizgiden sapar.' },
  'yuk-paylasimi': { bolge: 'elektrostatik', ad: 'Yük paylaşımı', tavsiye: 'Özdeş küreler toplam yükü eşit paylaşır. Önce toplamı bul, sonra ikiye böl.' },

  /* — Devreler — */
  'paralel-esdeger': { bolge: 'devreler', ad: 'Paralel eşdeğer direnç', tavsiye: 'Paralel bağlamak yeni bir yol açmaktır; eşdeğer direnç en küçük dirençten bile küçük olur.' },
  'gerilim-bolunmesi': { bolge: 'devreler', ad: 'Seri devrede gerilim bölünmesi', tavsiye: 'Seri devrede akım her yerde aynıdır; gerilim dirençle orantılı paylaşılır. Devre Tezgâhı’ndaki tabloya bak.' },
  'ampermetre-baglanti': { bolge: 'devreler', ad: 'Ölçü aleti bağlantısı', tavsiye: 'Ampermetre seri, voltmetre paralel bağlanır. "Arızayı Bul" deneyinde ikisinin de yanlış bağlanmış hâlini gör.' },
  'guc-enerji-karisimi': { bolge: 'devreler', ad: 'Güç ile enerji karışması', tavsiye: 'Fatura enerjiye (kWh) göre kesilir; ampulün üstünde güç (W) yazar. E = P·t.' },

  /* — Manyetizma — */
  'ters-kare-karisimi': { bolge: 'manyetizma', ad: 'Ters kare ile ters orantı karışması', tavsiye: 'Düz telin alanı 1/r ile azalır, 1/r² ile değil. Tel bir çizgi kaynağıdır, nokta kaynak değil.' },
  'coklu-oranti': { bolge: 'manyetizma', ad: 'Birden çok değişkenin etkisi', tavsiye: 'B = μ₀nI. Hem n hem I ikiye katlanırsa alan dört katına çıkar. Alan Tezgâhı’nda iki kaydırıcıyı birlikte oynat.' },
  'lenz-yasasi': { bolge: 'manyetizma', ad: 'Lenz yasası', tavsiye: 'İndüksiyon akımı kendisini doğuran değişime karşı koyar. İndüksiyon deneyinde mıknatısı hem yaklaştır hem uzaklaştır.' },

  /* — Dalgalar — */
  'dalga-bagintisi': { bolge: 'dalgalar', ad: 'Dalga bağıntısı', tavsiye: 'v = λ·f. Dalga Tezgâhı’nda frekansı değiştirip dalga boyunun nasıl tepki verdiğini izle.' },
  'yansima-fazi': { bolge: 'dalgalar', ad: 'Uçtan yansımada faz', tavsiye: 'Sabit uçta atma ters döner, serbest uçta dönmez. Yansıma deneyinde uç türünü değiştirip karşılaştır.' },
  'ses-ortam': { bolge: 'dalgalar', ad: 'Sesin ortam gereksinimi', tavsiye: 'Ses mekanik bir dalgadır; boşlukta yayılamaz. Katılarda en hızlı, gazlarda en yavaştır.' },
  'genlik-frekans-karisimi': { bolge: 'dalgalar', ad: 'Genlik ile frekans karışması', tavsiye: 'Genlik gürlüğü, frekans inceliği belirler. İkisi bağımsızdır; tezgâhta ayrı ayrı değiştir.' },

  /* — Optik — */
  'kirilma-yonu': { bolge: 'optik', ad: 'Kırılma yönü', tavsiye: 'Yoğundan aza geçişte ışık hızlanır ve normalden uzaklaşır. Kırılma Tezgâhı’nda ortamları takas et.' },
  'goruntu-ozellikleri': { bolge: 'optik', ad: 'Görüntü özellikleri', tavsiye: 'Önce 1/f = 1/d₀ + 1/dᵢ ile dᵢ’yi bul, sonra m = −dᵢ/d₀. İşaret gerçek/sanal, mutlak değer boyu söyler.' },
  'golge-yarigolge': { bolge: 'optik', ad: 'Tam gölge ve yarı gölge', tavsiye: 'Yarı gölge yalnızca boyutu olan kaynaklarda oluşur. Gölge Tezgâhı’nda kaynak boyunu büyüt.' },
  'renk-karisimi': { bolge: 'optik', ad: 'Renk karışımı', tavsiye: 'Işıkta renkler eklenir (K+Y = Sarı), filtrede çıkarılır. Renk Tezgâhı’nda ikisini de dene.' },
}

/**
 * Kavram Pusulası özeti: öğrencinin hangi kavramlarda takıldığı.
 * Yalnızca **net yanlışı olan** kavramlar döner; doğruya çevrilen
 * kavramlar listeden düşer. Amaç ceza değil, yönlendirme.
 */
export function pusulaOzeti(kavramPusulasi) {
  return Object.entries(kavramPusulasi ?? {})
    .map(([kod, sayac]) => ({
      kod,
      ...(YANILGILAR[kod] ?? { bolge: null, ad: kod, tavsiye: '' }),
      yanlis: sayac.yanlis ?? 0,
      dogru: sayac.dogru ?? 0,
      netYanlis: (sayac.yanlis ?? 0) - (sayac.dogru ?? 0),
    }))
    .filter((k) => k.netYanlis > 0)
    .sort((a, b) => b.netYanlis - a.netYanlis)
}

/** Öğrencinin çözüp geçtiği (artık doğru bildiği) kavramlar. */
export function asilanKavramlar(kavramPusulasi) {
  return Object.entries(kavramPusulasi ?? {})
    .filter(([, s]) => (s.dogru ?? 0) > 0 && (s.dogru ?? 0) >= (s.yanlis ?? 0))
    .map(([kod]) => ({ kod, ...(YANILGILAR[kod] ?? { ad: kod }) }))
}
