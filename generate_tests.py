import os
import random

target_dir = "/Users/furkantalhayazcicek/Desktop/DRKOÇ/TYT_Felsefe_Soru_Kutuphanesi/5_Bilim_Felsefesi"
os.makedirs(target_dir, exist_ok=True)

konular = [
    "Bilimin doğası", "Ürün olarak bilim", "Etkinlik olarak bilim", 
    "Paradigma", "Yanlışlanabilirlik", "Bilimsel yöntem"
]

filozoflar = [
    "Thomas Kuhn", "Karl Popper", "Rudolf Carnap", 
    "Hans Reichenbach", "Francis Bacon", "Auguste Comte"
]

kavramlar = [
    "tümevarım", "tümdengelim", "yanlışlanabilirlik", "doğrulanabilirlik",
    "paradigma", "bilimsel devrim", "olağan bilim", "bunalım dönemi"
]

soru_tipleri = [
    "paragraf", "öncüllü", "kavram"
]

for i in range(1, 21):
    file_path = os.path.join(target_dir, f"Test_{i:02d}.md")
    content = f"## Konu: Bilim Felsefesi\n### Test: {i:02d}\n\n"
    
    for j in range(1, 11):
        soru_tipi = random.choice(soru_tipleri)
        konu = random.choice(konular)
        filozof = random.choice(filozoflar)
        kavram = random.choice(kavramlar)
        
        content += f"**Soru {j}**\n"
        
        if soru_tipi == "paragraf":
            content += f"{filozof}'a göre bilimsel süreç, düz bir çizgide ilerlemez. Bilimde dönemsel olarak kabul gören temel inanç ve değerler sistemi vardır. Bu sistem, karşılaşılan problemleri çözmekte yetersiz kaldığında bir kriz dönemi başlar ve sonuçta yeni bir sisteme geçilir. \nBu parçada ifade edilen görüş, aşağıdaki {konu} kavramlarından hangisiyle doğrudan ilgilidir?\n"
            secenekler = [
                f"A) {kavram.capitalize()}",
                "B) Objektiflik",
                "C) Birikimsellik",
                "D) Rasyonalite",
                "E) Evrensellik"
            ]
            cevap = "A"
            cozum = f"Parçada anlatılan durum, {filozof}'un {konu} ve {kavram} görüşüne işaret etmektedir."
            
        elif soru_tipi == "öncüllü":
            content += f"I. Bilim, bilim insanlarının oluşturduğu bir topluluğun etkinliğidir.\n"
            content += f"II. Bilimsel doğruluk, dönemin {kavram} anlayışına göre şekillenir.\n"
            content += f"III. Bilim, yalnızca mantıksal ve olgusal bir süreç değil, aynı zamanda sosyolojik bir süreçtir.\n"
            content += f"Yukarıda verilen öncüller, bilim felsefesinde hangi yaklaşıma uygundur?\n"
            secenekler = [
                "A) Ürün olarak bilim",
                "B) Etkinlik olarak bilim",
                "C) Klasik bilim anlayışı",
                "D) Mantıkçı pozitivizm",
                "E) Yöntemci bilim"
            ]
            cevap = "B"
            cozum = "Öncüllerde bilimin toplumsal ve sosyolojik boyutuna vurgu yapıldığı için doğru yanıt 'Etkinlik olarak bilim' yaklaşımıdır."
            
        else: # kavram
            content += f"Aşağıdakilerden hangisi bilim felsefesi kapsamında '{konu}' kavramını en iyi açıklar?\n"
            secenekler = [
                f"A) Bilimin metafizik öğelerden tamamen arındırılması.",
                f"B) Bilimsel teorilerin {kavram} ilkesiyle test edilmesi.",
                f"C) Bilimin tarihsel ve kültürel bağlamdan bağımsız, mutlak bir hakikat arayışı olması.",
                f"D) Tüm bilimsel yasaların tümdengelimsel olarak ispatlanması.",
                f"E) Bilim insanının kişisel inançlarının bilimsel sürece yön vermesi."
            ]
            cevap = "B"
            cozum = f"{konu} konusu bağlamında teorilerin {kavram} ile test edilmesi bilim felsefesinin temel meselelerindendir."

        content += "\n".join(secenekler) + "\n\n"
        content += f"**Çözüm:** {cozum}\n**Cevap: {cevap}**\n\n"
        content += "---\n"
        
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
