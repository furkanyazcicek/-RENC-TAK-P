import os
import random

topic = "12_Ronesans_Felsefesi"
base_dir = f"/Users/furkantalhayazcicek/Desktop/DRKOÇ/TYT_Felsefe_Soru_Kutuphanesi/{topic}"
os.makedirs(base_dir, exist_ok=True)

philosophers = ["Machiavelli", "Hobbes", "Kopernik", "Galileo", "Bacon", "Descartes", "Erasmus", "Thomas More", "Campanella", "Montaigne"]
concepts = ["Hümanizm", "Bilimsel Devrim", "Rönesans Felsefesi", "Devlet ve Toplum", "Ütopya", "Kartezyen Felsefe", "Deneycilik", "Akılcılık", "Sekülerleşme", "Gözlem ve Deney"]
question_stems = [
    "Yukarıdaki parçada {philosopher} hangi düşüncesini vurgulamaktadır?",
    "{philosopher}'un bu yaklaşımı aşağıdaki kavramlardan hangisiyle doğrudan ilişkilidir?",
    "Verilen metne göre 15.-17. yüzyıl felsefesinin temel özelliği nedir?",
    "{concept} kavramı göz önüne alındığında aşağıdaki yargılardan hangisine ulaşılabilir?",
    "Bu parçadan hareketle Rönesans felsefesi hakkında aşağıdakilerden hangisi söylenemez?",
    "Aşağıdakilerden hangisi {concept} bağlamında değerlendirildiğinde {philosopher}'a ait bir görüş olabilir?",
    "Orta Çağ ile Rönesans felsefesi arasındaki temel farkı vurgulayan bu metinde, {concept} nasıl tanımlanmıştır?",
    "{philosopher} bu argümanında temel olarak neyi eleştirmektedir?",
    "Bu durum, dönemin hangi bilimsel veya felsefi gelişmesiyle açıklanabilir?",
    "Buna göre, {philosopher}'un {concept} anlayışı aşağıdakilerden hangisine zıttır?"
]

texts = [
    "Düşünür, insanın merkeze alındığı ve aklın yüceltildiği bir yaklaşımı savunur.",
    "Bilimsel bilginin deney ve gözleme dayanması gerektiği fikri bu dönemde yaygınlaşmıştır.",
    "Devletin gücünün mutlak olması gerektiğini savunan düşünür, toplumsal sözleşme fikrini öne sürer.",
    "Dünyanın evrenin merkezi olmadığı, güneşin etrafında döndüğü fikri büyük yankı uyandırmıştır.",
    "Doğanın dili matematiktir diyen düşünür, doğa olaylarının ölçülebilir olduğunu belirtir.",
    "İdeal bir devlet tasarımı sunarak, mevcut toplum düzenini eleştiren ütopyalar kaleme alınmıştır.",
    "Otoriteye karşı çıkılarak, insanın kendi aklıyla doğrulara ulaşabileceği fikri filizlenmiştir.",
    "Şüpheyi bir yöntem olarak kullanarak, kesin bilgiye ulaşmanın yolları aranmıştır."
]

def generate_options(correct_concept):
    opts = random.sample(concepts, 4)
    if correct_concept in opts:
        opts.remove(correct_concept)
        opts.append(random.choice([c for c in concepts if c not in opts and c != correct_concept]))
    
    options = opts + [correct_concept]
    random.shuffle(options)
    return options

def generate_question(q_num):
    philosopher = random.choice(philosophers)
    concept = random.choice(concepts)
    stem = random.choice(question_stems).format(philosopher=philosopher, concept=concept)
    text = random.choice(texts)
    
    options = generate_options(concept)
    letters = ['A', 'B', 'C', 'D', 'E']
    
    correct_idx = options.index(concept)
    correct_letter = letters[correct_idx]
    
    q_str = f"**Soru {q_num}**\n{text}\n\n{stem}\n"
    for i, opt in enumerate(options):
         q_str += f"{letters[i]}) {opt}\n"
         
    q_str += f"\n**Çözüm:** Bu soruda {philosopher} ve {concept} ilişkisi bağlamında metindeki ana fikir yorumlanmalıdır. Doğru cevap {concept} kavramıdır.\n"
    q_str += f"**Cevap: {correct_letter}**\n"
    return q_str

for test_num in range(1, 21):
    file_path = os.path.join(base_dir, f"Test_{test_num:02d}.md")
    content = f"## Konu: 15. Yüzyıl - 17. Yüzyıl Felsefesi\n### Test: {test_num:02d}\n\n"
    for q in range(1, 11):
        content += generate_question(q) + "\n---\n\n"
        
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

print("Generated 20 tests.")
