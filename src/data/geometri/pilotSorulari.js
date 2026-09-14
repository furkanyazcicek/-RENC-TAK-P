export const GEOMETRI_PILOT_ID = 'geometri-pilot-ucgenler-v1'

export const GEOMETRI_PILOT_SORULARI = Object.freeze([
  {
    id: 'geo-fold-perpendicular-bisector',
    topic: 'Katlama ve İkizkenar Üçgen',
    text: 'Şekildeki ABC üçgeni biçimindeki kâğıt, [AD] boyunca katlandığında B köşesi C köşesinin üzerine gelmektedir. Buna göre aşağıdakilerden hangileri kesinlikle doğrudur?\n\nI. |AB| = |AC|\nII. [AD] açıortaydır.\nIII. Alan(ABD) = Alan(ADC)',
    image: '/geometri-pilot/triangle_fold.jpg',
    options: ['Yalnız I', 'I ve II', 'II ve III', 'I ve III', 'I, II ve III'],
    answer: 4,
    solution: 'Kâğıt [AD] boyunca katlandığında B köşesi C köşesiyle çakışıyorsa, bu üçgen [AD] doğrusuna göre simetriktir. Dolayısıyla ABC ikizkenar üçgendir (|AB|=|AC|), [AD] hem yükseklik hem kenarortay hem de açıortaydır. Alanları eşittir. Üç öncül de kesinlikle doğrudur.',
  },
  {
    id: 'geo-ladder-pythagorean-3-4-5',
    topic: 'Dik Üçgen ve Pisagor Teoremi',
    text: 'Düz bir zeminde duvara dayalı duran bir merdiven görülmektedir. Merdivenin duvara değdiği noktanın yerden yüksekliği 4 metre, merdivenin ayağının duvara olan yatay uzaklığı ise 3 metredir. Buna göre merdivenin boyu kaç metredir?',
    image: '/geometri-pilot/ladder_triangle.jpg',
    options: ['3', '4', '5', '6', '7'],
    answer: 2,
    solution: 'Duvar ve zemin birbirine dik (90°) kabul edilir. Oluşan dik üçgende kenarlar 3 m ve 4 m’dir. Pisagor teoremine göre merdivenin boyu (hipotenüs) 3-4-5 üçgeninden dolayı 5 metre bulunur.',
  },
  {
    id: 'geo-shadow-similarity-tree-height',
    topic: 'Üçgenlerde Benzerlik',
    text: "Güneşli bir günde, boyu 1.8 metre olan Ali'nin gölgesinin uzunluğu 2.4 metre olarak ölçülmüştür. Aynı anda, Ali'nin hemen yanındaki bir ağacın gölge uzunluğu 12 metre olarak ölçüldüğüne göre ağacın boyu kaç metredir?",
    image: '/geometri-pilot/shadow_similarity.jpg',
    options: ['6', '8', '9', '10', '12'],
    answer: 2,
    solution: "Aynı anda güneş ışınları aynı açıyla geleceği için oluşan dik üçgenler benzerdir. Ali'nin boyu / Ali'nin gölgesi = Ağacın boyu / Ağacın gölgesi. (1.8 / 2.4) = (x / 12) ⇒ x = 9 metre.",
  },
  {
    id: 'geo-isosceles-base-angle-40',
    topic: 'Üçgende Açılar',
    text: 'Bir ikizkenar üçgenin tepe açısı 40° olarak verilmiştir. Buna göre bu üçgenin taban açılarından birinin ölçüsü kaç derecedir?',
    diagram: 'isosceles-base-angle',
    options: ['40', '50', '60', '70', '80'],
    answer: 3,
    solution: 'Üçgenin iç açıları toplamı 180°’dir. İkizkenar üçgende taban açıları eşittir. 180° - 40° = 140°. Taban açılarından her biri 140° / 2 = 70° olur.',
  },
])
