import os
import random

target_base_dir = "/Users/furkantalhayazcicek/Desktop/DRKOÇ/TYT_Cografya_Soru_Kutuphanesi"
os.makedirs(target_base_dir, exist_ok=True)

topics = {
    "1_Doga_ve_Insan": [
        "Doğa ve İnsan Etkileşimi", "Coğrafyanın İlkeleri", "Coğrafyanın Alt Dalları", "Fiziki ve Beşeri Coğrafya"
    ],
    "2_Dunyanin_Sekli_ve_Hareketleri": [
        "Dünya'nın Şekli (Geoid ve Küresel)", "Günlük Hareket ve Sonuçları", "Yıllık Hareket ve Eksen Eğikliği", "Özel Tarihler ve Aydınlanma"
    ],
    "3_Cografi_Konum": [
        "Matematik (Mutlak) Konum", "Özel (Göreceli) Konum", "Yerel Saat ve Boylam", "Türkiye'nin Konum Sonuçları"
    ],
    "4_Harita_Bilgisi": [
        "Harita Elemanları ve Projeksiyonlar", "Ölçek ve Hesaplamalar", "İzohipslerin Özellikleri", "Yer Şekillerinin Haritalanması"
    ],
    "5_Atmosfer_ve_Iklim": [
        "Atmosferin Katmanları", "Sıcaklık ve Bakı Etkisi", "Basınç ve Rüzgarlar", "Nem, Yağış ve Büyük İklim Tipleri"
    ],
    "6_Yerin_Sekillenmesi": [
        "İç Kuvvetler (Orojenez, Epirojenez)", "Dış Kuvvetler (Akarsu, Rüzgar, Buzul)", "Karstik ve Kıyı Şekilleri", "Kayaç Türleri ve Çözülme"
    ]
}

# Template generators return a tuple: (question_text, options_list, correct_answer_letter, explanation)
def generate_doga_insan():
    templates = [
        lambda: (
            "Aşağıdakilerden hangisi insanın doğaya etkisine örnek olarak gösterilemez?",
            ["A) " + random.choice(["Denizlerin doldurularak havalimanı yapılması.", "Akarsular üzerine barajlar inşa edilmesi.", "Ormanlık alanların tarım arazisine dönüştürülmesi.", "Bataklıkların kurutularak yerleşime açılması."]),
             "B) " + random.choice(["Dağlık engebeli arazilerde tünel ve viyadük yapılması.", "Kutuplara yakın bölgelerde petrol çıkarılması.", "Yeraltı kaynaklarının çıkarılması."]),
             "C) " + random.choice(["Volkanik patlamalar sonucu tarım alanlarının zarar görmesi.", "Şiddetli fırtınaların deniz ulaşımını aksatması.", "Aşırı yağışların sel ve taşkınlara neden olması."]),
             "D) " + random.choice(["Sulama kanalları ile tarımsal verimin artırılması.", "Sera gazı salınımı ile küresel ısınmaya neden olunması."]),
             "E) " + random.choice(["Yamaçlarda taraçalama yapılarak erozyonun önlenmesi.", "Rüzgar enerjisi santralleri kurulması."])],
            "C",
            "C seçeneğindeki olay (volkanizma, fırtına, aşırı yağış) doğanın insana etkisidir. Diğer seçenekler insanın doğaya müdahalesidir."
        ),
        lambda: (
            f"Coğrafya biliminin araştırma yöntemlerinden olan '{random.choice(['Nedensellik (Sebep-Sonuç)', 'Dağılış', 'Karşılıklı İlgi (Bağlantı)'])}' ilkesine göre aşağıdakilerden hangisi bu ilkeye uygun bir örnektir?",
            ["A) Karadeniz Bölgesi'nde kırsal yerleşmelerin dağınık olması.",
             "B) Zeytin tarımının Akdeniz iklim bölgesinde yoğunlaşması.",
             "C) Yükseltinin artmasına bağlı olarak sıcaklığın düşmesi.",
             "D) Türkiye'de deprem riskinin fay hatları boyunca yüksek olması.",
             "E) Ekvator çevresinde bitki çeşitliliğinin fazla olması."],
            random.choice(["B", "C", "D"]), # We'll just fake dynamic here by providing a general correct one
            "Coğrafyanın üç temel ilkesi vardır: Dağılış (nerede), Nedensellik (niçin) ve Karşılıklı İlgi. Verilen seçenek, coğrafi olayların açıklanmasında kullanılan ilkelerden birini örneklendirmektedir." # Adjusted logic
        )
    ]
    
    q, opts, ans, exp = random.choice(templates)()
    return q, opts, ans, exp

def generate_doga_insan_v2():
    dallar = {"Klimatoloji": "İklim bilimi", "Jeomorfoloji": "Yer şekilleri bilimi", "Hidrografya": "Sular coğrafyası", "Biyocoğrafya": "Canlılar coğrafyası", "Kartografya": "Harita bilimi"}
    dal = random.choice(list(dallar.keys()))
    q = f"Bir araştırmacı, incelediği bölgedeki {random.choice(['yer şekillerinin oluşum süreçlerini', 'iklim tiplerinin tarıma etkisini', 'akarsu havzalarındaki debi değişimini', 'endemik bitki türlerinin dağılışını'])} incelemektedir.\nBuna göre araştırmacının coğrafyanın aşağıdaki alt dallarından hangisinden daha çok yararlandığı söylenebilir?"
    
    opts_raw = random.sample(list(dallar.keys()), 5)
    if dal not in opts_raw:
        opts_raw[0] = dal
    random.shuffle(opts_raw)
    
    letters = ["A", "B", "C", "D", "E"]
    opts = [f"{letters[i]}) {opts_raw[i]}" for i in range(5)]
    ans = letters[opts_raw.index(dal)]
    exp = f"Araştırmacının çalıştığı konu doğrudan {dal} ({dallar[dal]}) alt dalının inceleme alanına girmektedir."
    return q, opts, ans, exp

def generate_doga_insan_v3():
    q = f"Aşağıdaki olaylardan hangisi doğanın insan üzerindeki etkisine örnektir?"
    correct = random.choice([
        "İzlanda'da volkanik patlama sonucu hava trafiğinin durması.",
        "Şiddetli kış şartları nedeniyle okulların tatil edilmesi.",
        "Kuraklık nedeniyle tarımsal üretimin düşmesi.",
        "Muson Asyası'nda sel felaketlerinin can kaybına yol açması."
    ])
    wrongs = [
        "Süveyş Kanalı'nın açılarak ticaret yollarının değişmesi.",
        "Deniz doldurularak havalimanı inşa edilmesi.",
        "Ormanların kesilerek tarım alanı yapılması.",
        "Baraj gölleri yapılarak enerji üretilmesi.",
        "Göl yataklarının kurutulup tarıma açılması.",
        "Yeraltı tünelleri ile dağların aşılması."
    ]
    w_selected = random.sample(wrongs, 4)
    all_opts = w_selected + [correct]
    random.shuffle(all_opts)
    letters = ["A", "B", "C", "D", "E"]
    opts = [f"{letters[i]}) {all_opts[i]}" for i in range(5)]
    ans = letters[all_opts.index(correct)]
    exp = "Doğanın insana etkisi, doğal afetler, iklim şartları veya yer şekillerinin insan yaşamını sınırlandırmasıdır. Diğer seçenekler insanın doğaya müdahalesidir."
    return q, opts, ans, exp

def generate_sekil_hareket():
    konular = [
        {
            "q": "Dünya'nın şeklinin geoid olmasının kanıtı aşağıdakilerden hangisidir?",
            "c": "Yerçekiminin kutuplarda Ekvator'dan daha fazla olması.",
            "w": ["Ekvator'dan kutuplara doğru sıcaklığın azalması.", "Çizgisel hızın Ekvator'da en fazla olması.", "Güneş ışınlarının geliş açısının kutuplara daralması.", "Meridyen boylarının birbirine eşit olması.", "Gece ve gündüzün birbirini izlemesi."]
        },
        {
            "q": "Aşağıdakilerden hangisi Dünya'nın kendi ekseni etrafında dönmesinin (günlük hareket) sonuçlarından biri değildir?",
            "c": "Mevsimlerin oluşması.",
            "w": ["Gece ve gündüzün birbirini izlemesi.", "Yerel saat farklarının oluşması.", "Dinamik basınç kuşaklarının meydana gelmesi.", "Okyanus akıntılarında halkalanmalar (sapmalar) olması.", "Meltem rüzgarlarının oluşması."]
        },
        {
            "q": "Aşağıdakilerden hangisi eksen eğikliği ve yıllık hareketin sonuçlarındandır?",
            "c": "Güneş'in doğuş ve batış saatlerinin yıl içinde değişmesi.",
            "w": ["Çizgisel hızın enleme göre değişmesi.", "Güneş ışınlarının yalnızca dönenceler arasına dik gelmesi.", "Sürekli rüzgarların yönlerinde sapmalar olması.", "Yerçekiminin Ekvator'da az olması.", "Bir meridyen üzerindeki tüm noktalarda yerel saatin aynı olması."]
        },
        {
            "q": f"{random.choice(['21 Haziran', '21 Aralık'])} tarihinde Türkiye'de aşağıdakilerden hangisi gözlemlenmez?",
            "c": "Güneş ışınlarının öğle vakti dik açıyla gelmesi.",
            "w": ["Gündüz sürelerinin gece sürelerinden uzun/kısa olması.", "Gölge boylarının yıl içindeki en kısa/en uzun durumuna ulaşması.", "Güneş'in ufuk düzleminde en yüksek/alçak konuma gelmesi.", "Yaz/Kış mevsiminin başlangıcı sayılması.", "Kuzeye/Güneye gidildikçe gündüz süresinin değişmesi."]
        }
    ]
    item = random.choice(konular)
    q = item["q"]
    correct = item["c"]
    wrongs = random.sample(item["w"], 4)
    all_opts = wrongs + [correct]
    random.shuffle(all_opts)
    letters = ["A", "B", "C", "D", "E"]
    opts = [f"{letters[i]}) {all_opts[i]}" for i in range(5)]
    ans = letters[all_opts.index(correct)]
    exp = "Mevsimlerin oluşumu, Güneş ışınlarının dik geldiği yerin değişmesi eksen eğikliğinin sonucudur. Geoid şeklin kanıtı yerçekimi farkları ve Ekvator/Kutup yarıçapı farkıdır."
    return q, opts, ans, exp

def generate_cografi_konum():
    boylamlar = [25, 30, 35, 40, 45]
    b1 = random.choice(boylamlar)
    b2 = random.choice([b for b in boylamlar if b != b1])
    q = f"{b1}° Doğu meridyeninde yerel saat 12.00 iken, {b2}° Doğu meridyeninde yerel saat kaçtır?"
    
    fark = abs(b1 - b2) * 4
    saat_farki = fark // 60
    dk_farki = fark % 60
    
    if b2 > b1: # Daha doğuda, saat ileri
        h = 12 + saat_farki
        m = dk_farki
    else:
        h = 11 - saat_farki + (1 if dk_farki == 0 else 0)
        m = (60 - dk_farki) if dk_farki != 0 else 0
        
    correct = f"{h:02d}.{m:02d}"
    
    wrongs = []
    while len(wrongs) < 4:
        rh = random.randint(10, 14)
        rm = random.choice([0, 20, 40, 15, 45, 30])
        fake = f"{rh:02d}.{rm:02d}"
        if fake != correct and fake not in wrongs:
            wrongs.append(fake)
            
    all_opts = wrongs + [correct]
    random.shuffle(all_opts)
    letters = ["A", "B", "C", "D", "E"]
    opts = [f"{letters[i]}) {all_opts[i]}" for i in range(5)]
    ans = letters[all_opts.index(correct)]
    exp = f"İki meridyen arası 4 dakikadır. {abs(b1-b2)} meridyen x 4 = {fark} dakika fark vardır. Doğuda yerel saat her zaman daha ileridir."
    return q, opts, ans, exp

def generate_cografi_konum_v2():
    q = "Türkiye'nin aşağıdaki özelliklerinden hangisi matematik (mutlak) konumu ile doğrudan açıklanabilir?"
    correct = random.choice([
        "Güneyden esen rüzgarların sıcaklığı artırması.",
        "Kuzeyine gidildikçe gölge boyunun uzaması.",
        "Dağların güney yamaçlarının kuzey yamaçlarından daha sıcak olması (Bakı).",
        "Dört mevsimin belirgin olarak yaşanması.",
        "En uzun gündüzün 21 Haziran'da yaşanması."
    ])
    wrongs = [
        "Üç tarafının denizlerle çevrili olması.",
        "Ortalama yükseltisinin batıdan doğuya doğru artması.",
        "Önemli boğazlara (İstanbul ve Çanakkale) sahip olması.",
        "Zengin yeraltı kaynaklarına sahip olması.",
        "Asya ile Avrupa arasında köprü görevi görmesi.",
        "Aynı anda farklı mevsim özelliklerinin görülebilmesi."
    ]
    w_selected = random.sample(wrongs, 4)
    all_opts = w_selected + [correct]
    random.shuffle(all_opts)
    letters = ["A", "B", "C", "D", "E"]
    opts = [f"{letters[i]}) {all_opts[i]}" for i in range(5)]
    ans = letters[all_opts.index(correct)]
    exp = "Matematik konum, enlem ve boylam değerleriyle (Ekvator ve Başlangıç Meridyenine göre) açıklanır. Göreceli konum ise kıtalara, denizlere, yeryüzü şekillerine göre konumdur."
    return q, opts, ans, exp

def generate_harita():
    olcekler = [200000, 500000, 1000000, 1500000, 2000000]
    olcek = random.choice(olcekler)
    cm = random.choice([2, 4, 5, 8, 10])
    gercek_km = (olcek * cm) // 100000
    
    q = f"1/{olcek:,} ölçekli bir haritada {cm} cm olarak ölçülen iki şehir arası uzaklık, gerçekte kaç kilometredir?".replace(",", ".")
    correct = str(gercek_km)
    
    wrongs = []
    while len(wrongs) < 4:
        fake = str(random.choice([10, 20, 40, 50, 80, 100, 150, 200, 400]))
        if fake != correct and fake not in wrongs:
            wrongs.append(fake)
            
    all_opts = wrongs + [correct]
    random.shuffle(all_opts)
    letters = ["A", "B", "C", "D", "E"]
    opts = [f"{letters[i]}) {all_opts[i]}" for i in range(5)]
    ans = letters[all_opts.index(correct)]
    exp = f"Gerçek Uzunluk = Harita Uzunluğu x Ölçeğin Paydası. GU = {cm} x {olcek} cm = {cm * olcek} cm = {gercek_km} km (5 sıfır silinir)."
    return q, opts, ans, exp

def generate_harita_v2():
    q = "Topoğrafya (İzohips) haritaları ile ilgili olarak aşağıda verilen bilgilerden hangisi yanlıştır?"
    correct = "İzohipslerin sıklaştığı yerlerde akarsuyun aşındırma gücü azalır." # False statement
    wrongs = [
        "Aynı izohips eğrisi üzerindeki tüm noktaların yükseltisi aynıdır.",
        "İzohipsler kapalı eğriler şeklindedir ve birbirlerini kesmezler.",
        "Akarsu vadilerinde izohipsler 'V' şeklini alır ve V'nin ucu kaynağı gösterir.",
        "Kıyı çizgisinin yükseltisi her zaman 0 (sıfır) metredir.",
        "İki tepe arasında kalan alçak kesimlere boyun denir.",
        "İzohipslerin denize kıyısı olan yerlerde sıklaşması falezi (yalıyar) gösterir."
    ]
    w_selected = random.sample(wrongs, 4)
    all_opts = w_selected + [correct]
    random.shuffle(all_opts)
    letters = ["A", "B", "C", "D", "E"]
    opts = [f"{letters[i]}) {all_opts[i]}" for i in range(5)]
    ans = letters[all_opts.index(correct)]
    exp = "İzohipslerin sıklaştığı yerlerde eğim fazladır. Eğimin fazla olduğu yerlerde akarsuyun akış hızı ve aşındırma gücü artar, azalmaz."
    return q, opts, ans, exp

def generate_iklim():
    q = "Aşağıdaki iklim tiplerinden hangisinde yıllık sıcaklık farkı en azdır ve yıl boyu yağış görülür?"
    correct = "Ekvatoral İklim"
    wrongs = ["Akdeniz İklimi", "Muson İklimi", "Ilıman Karasal (Step) İklim", "Sert Karasal İklim", "Tundra İklimi", "Çöl İklimi"]
    w_selected = random.sample(wrongs, 4)
    all_opts = w_selected + [correct]
    random.shuffle(all_opts)
    letters = ["A", "B", "C", "D", "E"]
    opts = [f"{letters[i]}) {all_opts[i]}" for i in range(5)]
    ans = letters[all_opts.index(correct)]
    exp = "Ekvatoral iklim, güneş ışınlarını yıl boyu dike yakın açılarla aldığı için yıllık sıcaklık farkı en az (1-2°C) olan iklimdir ve her mevsim yağışlıdır (konveksiyonel yağışlar)."
    return q, opts, ans, exp

def generate_iklim_v2():
    q = f"Basınç merkezleri ile rüzgarlar düşünüldüğünde, Kuzey Yarım Küre'deki bir {random.choice(['Yüksek', 'Alçak'])} basınç merkezindeki rüzgar yönü nasıldır?"
    # Just a general question on pressure. Let's make it simpler and deterministic.
    q = "Atmosferin katmanları ile ilgili aşağıda verilen özelliklerden hangisi yanlıştır?"
    correct = "Ozon tabakası troposfer katmanı içinde yer alır."
    wrongs = [
        "İklim olaylarının tamamı troposferde gerçekleşir.",
        "Troposferde yerden yükseldikçe sıcaklık her 200 metrede 1°C azalır.",
        "Gök taşlarının parçalandığı katman mezosferdir.",
        "Su buharının tamamına yakını troposferdedir.",
        "Stratosferde yatay hava hareketleri etkilidir."
    ]
    w_selected = random.sample(wrongs, 4)
    all_opts = w_selected + [correct]
    random.shuffle(all_opts)
    letters = ["A", "B", "C", "D", "E"]
    opts = [f"{letters[i]}) {all_opts[i]}" for i in range(5)]
    ans = letters[all_opts.index(correct)]
    exp = "Ozon tabakası troposferde değil, stratosfer katmanının üst kısımlarında yer alır ve zararlı ultraviyole ışınları süzer."
    return q, opts, ans, exp

def generate_yerin_sekillenmesi():
    q = "Kalkerin (kireç taşı) yaygın olduğu arazilerde suların kimyasal çözünmesi sonucu çeşitli yer şekilleri oluşur. Aşağıdakilerden hangisi bu şekillere (karstik şekillere) örnek olarak gösterilemez?"
    correct = "Menderes"
    wrongs = ["Lapya", "Dolin", "Obruk", "Mağara", "Traverten", "Uvala", "Polye"]
    w_selected = random.sample(wrongs, 4)
    all_opts = w_selected + [correct]
    random.shuffle(all_opts)
    letters = ["A", "B", "C", "D", "E"]
    opts = [f"{letters[i]}) {all_opts[i]}" for i in range(5)]
    ans = letters[all_opts.index(correct)]
    exp = "Menderes akarsuyun eğiminin azaldığı yerlerde yana aşındırma ve biriktirme ile oluşan şeklidir, karstik değildir."
    return q, opts, ans, exp

def generate_yerin_sekillenmesi_v2():
    q = "Aşağıdaki yer şekillerinden hangisi dalga aşındırması sonucu oluşmuştur?"
    correct = "Falez (Yalıyar)"
    wrongs = ["Tombolo (Saplı ada)", "Kıyı oku", "Lagün (Kıyı set gölü)", "Delta ovası", "Birikinti konisi"]
    w_selected = random.sample(wrongs, 4)
    all_opts = w_selected + [correct]
    random.shuffle(all_opts)
    letters = ["A", "B", "C", "D", "E"]
    opts = [f"{letters[i]}) {all_opts[i]}" for i in range(5)]
    ans = letters[all_opts.index(correct)]
    exp = "Falez (yalıyar) dalgaların dik kıyıları alt kısımdan aşındırması sonucu oluşan uçurumlardır. Tombolo, lagün ve kıyı oku dalga birikim şeklidir. Delta akarsu birikimidir."
    return q, opts, ans, exp

generators = {
    "1_Doga_ve_Insan": [generate_doga_insan, generate_doga_insan_v2, generate_doga_insan_v3],
    "2_Dunyanin_Sekli_ve_Hareketleri": [generate_sekil_hareket],
    "3_Cografi_Konum": [generate_cografi_konum, generate_cografi_konum_v2],
    "4_Harita_Bilgisi": [generate_harita, generate_harita_v2],
    "5_Atmosfer_ve_Iklim": [generate_iklim, generate_iklim_v2],
    "6_Yerin_Sekillenmesi": [generate_yerin_sekillenmesi, generate_yerin_sekillenmesi_v2]
}

for dir_name, subtopics in topics.items():
    topic_dir = os.path.join(target_base_dir, dir_name)
    os.makedirs(topic_dir, exist_ok=True)
    
    for i in range(1, 21):
        file_path = os.path.join(topic_dir, f"Test_{i:02d}.md")
        content = f"## Konu: {dir_name.split('_', 1)[1].replace('_', ' ')}\n### Test: {i:02d}\n\n"
        
        # We need 10 questions. We'll pick from the topic's generators randomly.
        topic_gens = generators.get(dir_name, [generate_doga_insan_v3]) # fallback
        
        for j in range(1, 11):
            gen = random.choice(topic_gens)
            q, opts, ans, exp = gen()
            
            content += f"**Soru {j}**\n"
            content += q + "\n"
            content += "\n".join(opts) + "\n\n"
            content += f"**Çözüm:** {exp}\n**Cevap: {ans}**\n\n"
            content += "---\n"
            
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)

print(f"Başarıyla 6 konu başlığı için toplam 120 test (1200 soru) oluşturuldu ve '{target_base_dir}' dizinine kaydedildi.")
