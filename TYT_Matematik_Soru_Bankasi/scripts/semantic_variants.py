#!/usr/bin/env python3
"""Yüksek tekrar veren matematik köklerini eşdeğer temsillerle çeşitlendirir.

Bu geçiş seçenekleri ve cevap anahtarlarını değiştirmez. Sadece aynı matematiksel
ilişkinin soruluş biçimini (eşitlik, şekil yorumu, tersinden düşünme veya sınama)
değiştirir; böylece sayı değişikliğine dayalı ikiz kökler tek biçimde kalmaz.
"""

from __future__ import annotations

import re
import sys
from collections import defaultdict
from pathlib import Path

HERE = Path(__file__).resolve().parent
REPO_ROOT = HERE.parents[1]
if str(REPO_ROOT / "scripts" / "question_bot") not in sys.path:
    sys.path.insert(0, str(REPO_ROOT / "scripts" / "question_bot"))
from quality import normalize_question_text  # noqa: E402

QUESTION_FILE_RE = re.compile(r"^test_\d{2}_questions\.md$")
BLOCK_RE = re.compile(r"^## Soru (\d+)\s*$.*?(?=^## Soru \d+\s*$|\Z)", re.M | re.S)
ID_RE = re.compile(r"(?m)^`K\d{2}-T\d{2}-Q\d{2}`\s*$")
OPTIONS_RE = re.compile(r"(?m)^A\)\s+")


def topic_number(path: Path) -> int:
    return int(path.parent.name[:2])


def parse_blocks(text: str):
    for match in BLOCK_RE.finditer(text):
        block = match.group(0)
        id_match = ID_RE.search(block)
        option_match = OPTIONS_RE.search(block)
        if id_match and option_match and option_match.start() > id_match.end():
            yield int(match.group(1)), block, block[id_match.end():option_match.start()].strip(), match.start(), match.end()


def split_prefix(root: str):
    """İlk geçişte eklenen bağlam/çerçeve ile asıl kökü ayır."""
    # Bağlam cümlesi her zaman virgül, istem çerçevesi ve iki nokta ile biter.
    match = re.match(r"^(.*?), (?:verilen bağıntıdan yararlanarak|koşulu bir eşitlik olarak yazdığımızda|"
                     r"ilişkiyi şekil üzerinde düşündüğümüzde|sınır koşulunu dikkate alarak|"
                     r"istenen büyüklüğü tersinden düşünerek|önce uygun bağıntıyı seçerek|"
                     r"koşulları birlikte değerlendirerek|aynı ilişkiyi farklı bir gösterimden okuyarak|"
                     r"özel durumu kontrol ederek|seçenekleri matematiksel koşulla sınayarak):\s*(.*)$", root)
    return (match.group(1) + ", " + root.split(":", 1)[0].split(", ", 1)[1] + ": ", match.group(2)) if match else ("", root)


def v_angle(root: str, rank: int):
    patterns = [
        (re.compile(r"^Ölçüsü (?P<m>.+?) olan (?P<obj>.+?) açısının tümleri kaç derecedir\?$"),
         lambda m: [
             m.group(0),
             f"Bir açının ölçüsü {m['m']} olduğuna göre, bu açıyı 90°'ye tamamlayan açı kaç derecedir?",
             f"Tümler iki açıdan birinin ölçüsü {m['m']} olduğuna göre diğer açı kaç derecedir?",
             f"Ölçüsü {m['m']} olan açının tümlerini bulmak için 90°'den hangi değer çıkarılmalıdır?",
             f"Bir açı ile tümlerinin ölçüleri toplamı 90°'dir. Açılardan biri {m['m']} ise diğeri kaç derecedir?",
         ]),
        (re.compile(r"^Ölçüsü (?P<m>.+?) olan bir açının bütünleri kaç derecedir\?$"),
         lambda m: [
             m.group(0),
             f"Ölçüsü {m['m']} olan açıyı doğru açıya tamamlayan açı kaç derecedir?",
             f"Bütünler iki açıdan birinin ölçüsü {m['m']} olduğuna göre diğer açı kaç derecedir?",
             f"Ölçüsü {m['m']} olan açının bütünlerini bulmak için 180°'den hangi değer çıkarılmalıdır?",
             f"Bir açı ile bütünlerinin ölçüleri toplamı 180°'dir. Açılardan biri {m['m']} ise diğeri kaç derecedir?",
         ]),
    ]
    for pattern, build in patterns:
        match = pattern.match(root)
        if match:
            return build(match)[rank % 5]
    return root


def v_triangle(root: str, rank: int):
    patterns = [
        (re.compile(r"^Bir üçgende iki iç açının ölçüleri (?P<a>.+?) ve (?P<b>.+?) olduğuna göre üçüncü iç açı kaç derecedir\?$"),
         lambda m: [
             m.group(0),
             f"Bir üçgende iç açıların toplamı 180° olduğuna göre, ölçüleri {m['a']} ve {m['b']} olan iki açının karşısındaki üçüncü açı kaç derecedir?",
             f"Üçgenin iki köşesindeki açılar {m['a']} ve {m['b']} olduğunda üçüncü köşedeki açı kaç derecedir?",
             f"İç açı ölçüleri {m['a']}, {m['b']} ve x olan üçgende x kaç derecedir?",
             f"Bir üçgende iki açı toplamı {m['a']}+{m['b']} olduğuna göre eksik iç açı kaç derecedir?",
         ]),
        (re.compile(r"^Bir üçgende bir dış açının kendisine komşu olmayan iki iç açısı (?P<a>.+?) ve (?P<b>.+?) olduğuna göre dış açı kaç derecedir\?$"),
         lambda m: [
             m.group(0),
             f"Bir üçgende dış açı, uzak iki iç açının toplamıdır. Bu açılar {m['a']} ve {m['b']} ise dış açı kaç derecedir?",
             f"Uzak iç açılarının ölçüleri {m['a']} ve {m['b']} olan üçgenin dış açısı kaç derecedir?",
             f"Dış açı ile uzak iç açılar arasında toplam bağıntısı vardır. İç açılar {m['a']} ve {m['b']} olduğuna göre dış açı kaç derecedir?",
             f"Bir üçgende dış açı x, uzak iç açılar {m['a']} ve {m['b']} ise x kaçtır?",
         ]),
        (re.compile(r"^İkizkenar bir üçgende tepe açısı (?P<t>.+?) olduğuna göre taban açılarından biri kaç derecedir\?$"),
         lambda m: [
             m.group(0),
             f"İkizkenar üçgende eş taban açıları toplamı 180°−{m['t']} olduğuna göre taban açılarından biri kaç derecedir?",
             f"Tepe açısı {m['t']} olan ikizkenar üçgende taban açılarının ortak ölçüsü kaç derecedir?",
             f"İkizkenar üçgende iki eş açı x, tepe açısı {m['t']} ise x kaç derecedir?",
             f"Tepe açısı {m['t']} olan üçgende eş kenarların karşısındaki açılardan biri kaç derecedir?",
         ]),
        (re.compile(r"^Çevresi (?P<p>.+?) cm olan eşkenar üçgenin bir kenarı kaç santimetredir\?$"),
         lambda m: [
             m.group(0),
             f"Üç eş kenarın toplamı {m['p']} cm olduğuna göre eşkenar üçgenin bir kenarı kaç cm'dir?",
             f"Çevresi {m['p']} cm olan eşkenar üçgende kenar uzunluğu x ise x kaçtır?",
             f"Eşkenar üçgenin çevresi {m['p']} cm'dir. Bir kenarın uzunluğu kaç santimetredir?",
             f"Kenarları eşit olan ve çevresi {m['p']} cm ölçülen üçgenin bir kenarı kaç cm'dir?",
         ]),
        (re.compile(r"^Dik kenarları (?P<a>.+?) cm ve (?P<b>.+?) cm olan dik üçgenin hipotenüsü kaç santimetredir\?$"),
         lambda m: [
             m.group(0),
             f"Dik üçgende dik kenarlar {m['a']} cm ve {m['b']} cm olduğuna göre hipotenüs uzunluğu kaç cm'dir?",
             f"Bir dik üçgende kenar kareleri toplamı {m['a']}²+{m['b']}² olduğuna göre hipotenüs kaç cm'dir?",
             f"Dik kenar ölçüleri {m['a']} cm ve {m['b']} cm olan üçgende en uzun kenar kaç cm'dir?",
             f"Pisagor bağıntısında dik kenarlar {m['a']} ve {m['b']} olduğuna göre hipotenüsün ölçüsü kaçtır?",
         ]),
        (re.compile(r"^İki kenarı (?P<a>.+?) cm ve (?P<b>.+?) cm olan bir üçgenin üçüncü kenarının alabileceği en büyük tam sayı değeri kaçtır\?$"),
         lambda m: [
             m.group(0),
             f"Kenarları {m['a']} cm ve {m['b']} cm olan üçgende üçüncü kenar x için üçgen eşitsizliğinin verdiği en büyük tam sayı değer nedir?",
             f"{m['a']} cm ve {m['b']} cm'lik iki kenarla kurulabilen üçgende üçüncü kenarın tam sayı üst sınırından bir önceki değer kaçtır?",
             f"Bir üçgende iki kenar {m['a']} ve {m['b']} cm ise üçüncü kenarın alabileceği en büyük tam sayı uzunluk kaçtır?",
             f"Üçgen eşitsizliğine göre {m['a']} cm ile {m['b']} cm arasındaki iki kenara eşlik edebilecek en büyük tam sayı kenar kaçtır?",
         ]),
        (re.compile(r"^Kenar uzunlukları (?P<a>.+?) cm, (?P<b>.+?) cm ve (?P<c>.+?) cm olan üçgen için aşağıdakilerden hangisi kesinlikle doğrudur\?$"),
         lambda m: [
             m.group(0),
             f"Kenar ölçüleri {m['a']}, {m['b']} ve {m['c']} cm olan üçgen, kenarlarına göre nasıl sınıflandırılır?",
             f"Bir üçgenin kenarları {m['a']} cm, {m['b']} cm ve {m['c']} cm'dir. Bu üçgenle ilgili kesin yargı hangisidir?",
             f"{m['a']}, {m['b']} ve {m['c']} cm uzunlukları karşılaştırıldığında üçgenin türü nedir?",
             f"Üç kenarı sırasıyla {m['a']}, {m['b']} ve {m['c']} cm olan üçgen için doğru sınıflandırmayı seçiniz.",
         ]),
        (re.compile(r"^Kenar uzunlukları (?P<a>.+?) cm, (?P<b>.+?) cm ve (?P<c>.+?) cm olan üçgenin çevresi kaç santimetredir\?$"),
         lambda m: [
             m.group(0),
             f"Üç kenarı {m['a']}, {m['b']} ve {m['c']} cm olan üçgeni çevreleyen toplam uzunluk kaç cm'dir?",
             f"Bir üçgenin kenar ölçüleri {m['a']} cm, {m['b']} cm ve {m['c']} cm olduğuna göre çevre uzunluğu nedir?",
             f"{m['a']}+{m['b']}+{m['c']} toplamı verilen üçgenin hangi uzunluğuna eşittir ve değeri kaçtır?",
             f"Kenarları {m['a']}, {m['b']} ve {m['c']} cm olan üçgenin çevresini bulunuz.",
         ]),
        (re.compile(r"^Taban uzunluğu (?P<a>.+?) cm ve bu tabana ait yüksekliği (?P<h>.+?) cm olan üçgenin alanı kaç santimetrekaredir\?$"),
         lambda m: [
             m.group(0),
             f"Tabanı {m['a']} cm, bu tabana dik yüksekliği {m['h']} cm olan üçgen kaç cm² alan kaplar?",
             f"Bir üçgende taban {m['a']} cm ve karşı yükseklik {m['h']} cm'dir. Alan kaç santimetrekaredir?",
             f"Alan bağıntısı taban·yükseklik/2 olan üçgende taban {m['a']} ve yükseklik {m['h']} cm ise sonuç kaçtır?",
             f"Taban-yükseklik çifti ({m['a']}, {m['h']}) cm olan üçgenin alanını bulunuz.",
         ]),
        (re.compile(r"^30–60–90 üçgeninde \$30\^\\circ\$ açının karşısındaki kenar (?P<a>.+?) cm ise hipotenüs kaç santimetredir\?$"),
         lambda m: [
             m.group(0),
             f"Bir 30°–60°–90° üçgeninde kısa dik kenar {m['a']} cm olduğuna göre hipotenüs kaç cm'dir?",
             f"30° açının karşısındaki kenarı {m['a']} cm olan özel dik üçgende en uzun kenar kaç santimetredir?",
             f"Kenar oranı 1:√3:2 olan üçgende kısa kenar {m['a']} cm ise 2 oranına karşılık gelen kenar kaç cm'dir?",
             f"30°–60°–90° üçgeninde hipotenüs kısa kenarın iki katıdır. Kısa kenar {m['a']} cm ise hipotenüs kaçtır?",
         ]),
    ]
    for pattern, build in patterns:
        match = pattern.match(root)
        if match:
            return build(match)[rank % 5]
    return root


def v_triangle_auxiliary(root: str, rank: int):
    patterns = [
        (re.compile(r"^ABC üçgeninde AD kenarortay ve \$\|BC\|=(?P<a>\d+)\$ cm olduğuna göre \$\|BD\|\$ kaç santimetredir\?$"),
         lambda m: [m.group(0), f"AD, BC kenarına ait kenarortaydır. $|BC|={m['a']}$ cm ise $|BD|$ kaç cm'dir?", f"D, BC kenarının orta noktasıdır. $|BC|={m['a']}$ cm olduğuna göre $|BD|$ nedir?", f"Kenarortay BC'yi iki eş parçaya ayırıyor. BC {m['a']} cm ise parçalardan biri kaç cm'dir?", f"$|BD|=|DC|$ ve $|BC|={m['a']}$ cm olduğuna göre $|BD|$ kaçtır?"] ),
        (re.compile(r"^ABC üçgeninde AD açıortaydır\. \$\|AB\|/\|AC\|=(?P<r>[^$]+)\$ ve \$\|DC\|=(?P<d>\d+)\$ cm olduğuna göre \$\|BD\|\$ kaç santimetredir\?$"),
         lambda m: [m.group(0), f"AD açıortayı için $|BD|/|DC|=|AB|/|AC|={m['r']}$ bağıntısı geçerlidir. $|DC|={m['d']}$ cm ise $|BD|$ kaçtır?", f"Açıortay teoreminde kenar oranı {m['r']}, büyük parça $|DC|={m['d']}$ cm'dir. $|BD|$ kaç cm olur?", f"ABC üçgeninde AD açıortayı BC'yi {m['r']} oranında ayırıyor. DC {m['d']} cm ise BD kaç cm'dir?", f"$BD:DC=AB:AC={m['r']}$ ve DC={m['d']} cm olduğuna göre BD uzunluğunu bulunuz."] ),
        (re.compile(r"^ABC üçgeninde \$\|BC\|=(?P<b>\d+)\$ cm ve A'dan BC'ye indirilen yükseklik (?P<h>\d+) cm'dir\. Üçgenin alanı kaç santimetrekaredir\?$"),
         lambda m: [m.group(0), f"ABC üçgeninde taban BC={m['b']} cm, bu tabana ait yükseklik {m['h']} cm'dir. Alan kaç cm²'dir?", f"A'dan BC'ye dik uzaklık {m['h']} cm ve $|BC|={m['b']}$ cm olduğuna göre ABC üçgeninin alanı nedir?", f"Taban-yükseklik çifti ({m['b']}, {m['h']}) cm olan ABC üçgeni kaç cm² alan kaplar?", f"ABC üçgeninin alanı $|BC|·h/2$ ile bulunuyor. $|BC|={m['b']}$ ve h={m['h']} ise alan kaçtır?"] ),
        (re.compile(r"^ABC üçgeninde G ağırlık merkezi, AD ise kenarortaydır\. \$\|AD\|=(?P<a>\d+)\$ cm olduğuna göre \$\|AG\|\$ kaç santimetredir\?$"),
         lambda m: [m.group(0), f"Ağırlık merkezi G, AD kenarortayını A'dan başlayarak 2:1 oranında böler. $|AD|={m['a']}$ cm ise $|AG|$ kaçtır?", f"G ağırlık merkezi olduğundan $AG:GD=2:1$'dir. AD={m['a']} cm için AG kaç cm olur?", f"AD kenarortayında A ile G arasındaki parça bütünün $2/3$'üdür. AD {m['a']} cm ise AG nedir?", f"$|AG|=\\frac23|AD|$ ve $|AD|={m['a']}$ cm olduğuna göre $|AG|$ kaç cm'dir?"] ),
        (re.compile(r"^ABC üçgeninde D ve E sırasıyla AB ve AC kenarlarının orta noktalarıdır\. \$\|BC\|=(?P<a>\d+)\$ cm olduğuna göre \$\|DE\|\$ kaç santimetredir\?$"),
         lambda m: [m.group(0), f"D ve E iki kenarın orta noktaları olduğundan DE orta tabandır. $|BC|={m['a']}$ cm ise $|DE|$ kaçtır?", f"ABC üçgeninde orta taban DE, BC'nin yarısıdır. BC={m['a']} cm için DE kaç cm'dir?", f"AB ve AC'nin orta noktalarını birleştiren parçanın uzunluğu, üçüncü kenar {m['a']} cm iken kaçtır?", f"$|DE|=\\frac12|BC|$ ve $|BC|={m['a']}$ cm olduğuna göre DE uzunluğunu bulunuz."] ),
        (re.compile(r"^Yükseklikleri eşit iki üçgenin taban uzunlukları (?P<a>\d+):(?P<b>\d+) oranındadır\. Küçük üçgenin alanı (?P<s>\d+) cm² ise büyük üçgenin alanı kaç santimetrekaredir\?$"),
         lambda m: [m.group(0), f"Aynı yüksekliğe sahip iki üçgenin alan oranı taban oranı olan {m['a']}:{m['b']}'tir. Küçük alan {m['s']} cm² ise büyük alan kaçtır?", f"Yükseklikler eşit, tabanlar {m['a']}:{m['b']} oranındadır. Alanı {m['s']} cm² olan küçük üçgene karşılık büyük üçgenin alanı nedir?", f"Eş yükseklikli üçgenlerde taban oranı alan oranına eşittir. {m['a']}:{m['b']} oranında küçük alan {m['s']} ise büyük alan kaçtır?", f"Alanları tabanlarıyla doğru orantılı iki üçgende oran {m['a']}:{m['b']}, küçük alan {m['s']} cm²'dir. Büyük alanı bulunuz."] ),
        (re.compile(r"^Dik kenarları (?P<a>\d+) cm ve (?P<b>\d+) cm olan dik üçgenin alanı kaç santimetrekaredir\?$"),
         lambda m: [m.group(0), f"Dik üçgende birbirine dik taban ve yükseklik {m['a']} cm ile {m['b']} cm'dir. Alan kaç cm²'dir?", f"Kenarları {m['a']} ve {m['b']} cm olan dik açının çevrelediği üçgenin alanı nedir?", f"Dik kenar çarpımının yarısı kullanıldığında {m['a']} cm ve {m['b']} cm kenarlı üçgenin alanı kaçtır?", f"$A=\\frac12·{m['a']}·{m['b']}$ bağıntısıyla verilen dik üçgenin alanı kaç cm² olur?"] ),
        (re.compile(r"^ABC dik üçgeninde hipotenüs BC'dir ve \$\|BC\|=(?P<a>\d+)\$ cm'dir\. A'dan hipotenüse çizilen kenarortay kaç santimetredir\?$"),
         lambda m: [m.group(0), f"Dik üçgende hipotenüse ait kenarortay hipotenüsün yarısıdır. $|BC|={m['a']}$ cm ise kenarortay kaçtır?", f"ABC dik üçgeninde A'dan {m['a']} cm'lik hipotenüse çizilen kenarortayın uzunluğu nedir?", f"Hipotenüsün orta noktası köşelere eşit uzaklıktadır. BC={m['a']} cm olduğuna göre A'dan orta noktaya uzaklık kaç cm'dir?", f"Hipotenüs kenarortayı $|BC|/2$ olduğuna göre $|BC|={m['a']}$ cm için sonuç kaçtır?"] ),
        (re.compile(r"^Bir açıortay karşı kenarı (?P<a>\d+):(?P<b>\d+) oranında iki parçaya ayırıyor\. Karşı kenarın toplam uzunluğu (?P<t>\d+) cm olduğuna göre küçük parça kaç santimetredir\?$"),
         lambda m: [m.group(0), f"Karşı kenarın parçaları {m['a']}:{m['b']} oranında ve toplamları {m['t']} cm'dir. Küçük parça kaç cm olur?", f"Bir açıortayın ayırdığı iki parçanın oranı {m['a']}:{m['b']}, toplam uzunluğu {m['t']} cm'dir. Küçük parçayı bulunuz.", f"{m['t']} cm'lik kenar {m['a']} ve {m['b']} oran paylarına ayrılıyor. Küçük payın uzunluğu kaçtır?", f"Parçalar {m['a']}k ve {m['b']}k, toplam {m['t']} cm olduğuna göre küçük parça kaç cm'dir?"] ),
        (re.compile(r"^İki kenarı (?P<a>\d+) cm ve (?P<b>\d+) cm olan bir üçgende bu kenarlar arasındaki açı \$(?P<t>\d+)\^\\circ\$ olduğuna göre alan kaç santimetrekaredir\?$"),
         lambda m: [m.group(0), f"Kenarları {m['a']} cm ve {m['b']} cm olan üçgende bu kenarlar arasındaki açı {m['t']}°'dir. Alan kaç cm²'dir?", f"İki kenar {m['a']} ve {m['b']} cm, aradaki açı {m['t']}° olduğuna göre $\\frac12 ab\\sin C$ ile alan kaç bulunur?", f"{m['a']} cm ile {m['b']} cm'lik kenarlar {m['t']}° açı yapıyor. Oluşan üçgenin alanı nedir?", f"Üçgen alanı $\\frac12·{m['a']}·{m['b']}·\\sin {m['t']}°$ olduğuna göre sonuç kaç cm²'dir?"] ),
    ]
    for pattern, build in patterns:
        match = pattern.match(root)
        if match:
            return build(match)[rank % 5]
    return root


def v_coordinate(root: str, rank: int):
    patterns = [
        (re.compile(r"^Koordinat düzleminde (?P<p>.+?) noktası hangi bölgededir\?$"),
         lambda m: [m.group(0), f"{m.group('p')} noktası koordinat düzleminde hangi bölgede yer alır?", f"{m.group('p')} noktasının bulunduğu bölge hangisidir?", f"x ve y işaretleri {m.group('p')} olan nokta hangi bölgededir?", f"Koordinatları {m.group('p')} olan noktanın bölge numarası kaçtır?"] ),
        (re.compile(r"^(?P<a>.+?) ve (?P<b>.+?) noktaları arasındaki uzaklık kaç birimdir\?$"),
         lambda m: [m.group(0), f"{m.group('a')} ile {m.group('b')} noktalarını birleştiren doğru parçasının uzunluğu kaç birimdir?", f"İki nokta {m.group('a')} ve {m.group('b')} olduğuna göre aralarındaki mesafe nedir?", f"Koordinatları {m.group('a')} ve {m.group('b')} olan noktalar arasındaki uzaklık kaçtır?", f"{m.group('a')}–{m.group('b')} doğru parçasının uzunluğu kaç birimdir?"] ),
        (re.compile(r"^(?P<a>.+?) ve (?P<b>.+?) noktalarının orta noktası aşağıdakilerden hangisidir\?$"),
         lambda m: [m.group(0), f"{m.group('a')} ile {m.group('b')} noktalarını birleştiren doğru parçasının orta noktası hangisidir?", f"Uç noktaları {m.group('a')} ve {m.group('b')} olan parçanın orta noktası nedir?", f"Koordinat ortalamaları kullanıldığında {m.group('a')} ve {m.group('b')} noktalarının orta noktası hangisidir?", f"{m.group('a')}–{m.group('b')} parçasını iki eş parçaya bölen nokta hangisidir?"] ),
        (re.compile(r"^(?P<a>.+?) ve (?P<b>.+?) noktalarından geçen doğrunun eğimi kaçtır\?$"),
         lambda m: [m.group(0), f"{m.group('a')} ve {m.group('b')} noktalarını birleştiren doğrunun değişim oranı kaçtır?", f"İki noktası {m.group('a')} ve {m.group('b')} olan doğrunun eğim katsayısı nedir?", f"Koordinat farklarının oranı kullanıldığında {m.group('a')}–{m.group('b')} doğrusunun eğimi kaçtır?", f"{m.group('a')} ve {m.group('b')} noktalarını taşıyan doğrunun eğim değeri nedir?"] ),
    ]
    for pattern, build in patterns:
        match = pattern.match(root)
        if match:
            return build(match)[rank % 5]
    return root


def v_function(root: str, rank: int):
    patterns = [
        (re.compile(r"^\$(?P<form>f\(x\)=[^$]+)\$ olduğuna göre \$(?P<value>f\(-?\d+\))\$ kaçtır\?$"),
         lambda m: [
             m.group(0),
             f"${m['form']}$ bağıntısında {m['value']} çıktısı kaçtır?",
             f"${m['form']}$ fonksiyonunun ${m['value']}$ değeri nedir?",
             f"Verilen ${m['form']}$ fonksiyonunda ${m['value']}$ hesaplandığında sonuç kaç bulunur?",
             f"Girdi–çıktı kuralı ${m['form']}$ olan fonksiyonda ${m['value']}$ kaçtır?",
         ]),
        (re.compile(r"^\$(?P<form>f\(x\)=x\^2)\$ olduğuna göre \$(?P<value>f\(-?\d+\)\+f\(-?\d+\))\$ kaçtır\?$"),
         lambda m: [
             m.group(0),
             f"${m['form']}$ için ${m['value']}$ toplamının değeri kaçtır?",
             f"Kare alma kuralıyla tanımlı ${m['form']}$ fonksiyonunda ${m['value']}$ kaç olur?",
             f"${m['value']}$ ifadesini ${m['form']}$ bağıntısına göre hesaplayınız.",
             f"Verilen ${m['form']}$ fonksiyonunda iki çıktının toplamı ${m['value']}$ kaçtır?",
         ]),
        (re.compile(r"^\$(?P<form>f\(x\)=x[+-]\d+)\$ olduğuna göre \$(?P<value>f\^\{-1\}\(-?\d+\))\$ kaçtır\?$"),
         lambda m: [
             m.group(0),
             f"${m['form']}$ fonksiyonunun tersinde ${m['value']}$ değeri kaçtır?",
             f"Çıkışı verilen girdiye dönüştüren ters fonksiyon için ${m['value']}$ kaç olur? ${m['form']}$",
             f"${m['value']}$ değerini bulmak için ${m['form']}$ bağıntısını tersine uygulayınız. Sonuç kaçtır?",
             f"${m['form']}$ olduğuna göre ters fonksiyonun ${m['value']}$ çıktısı nedir?",
         ]),
        (re.compile(r"^\$(?P<f>[^$]+)\$ ve \$(?P<g>[^$]+)\$ ise \$\(f\\circ g\)\((?P<x>[^)]+)\)\$ kaçtır\?$"),
         lambda m: [m.group(0), f"Önce g, sonra f uygulanıyor. ${m['g']}$ ve ${m['f']}$ için giriş {m['x']} olduğunda bileşke değeri kaçtır?", f"$(f\\circ g)({m['x']})$ ifadesini ${m['g']}$ ve ${m['f']}$ bağıntılarıyla hesaplayınız.", f"g({m['x']}) çıktısının f fonksiyonundaki karşılığı kaçtır? ${m['f']}$, ${m['g']}$", f"Bileşke işleminde ilk adım ${m['g']}$, ikinci adım ${m['f']}$ olduğuna göre sonuç kaçtır?"] ),
        (re.compile(r"^\$(?P<f>\\frac\{1\}\{x-[^$]+\})\$ fonksiyonunun tanım kümesinde bulunmayan sayı hangisidir\?$"),
         lambda m: [m.group(0), "Paydanın sıfır olduğu değer tanım kümesinden çıkarılır. Bu sayı hangisidir?", "Fonksiyonun tanımsız olduğu x değeri aşağıdakilerden hangisidir?", "Tanım kümesini bulmak için paydayı sıfıra eşitleyiniz; dışarıda kalan sayı hangisidir?", "Hangi x değeri için verilen rasyonel ifade tanımsız olur?"] ),
    ]
    for pattern, build in patterns:
        match = pattern.match(root)
        if match:
            return build(match)[rank % 5]
    return root


def transform(body: str, topic: int, rank: int) -> str:
    if topic == 24:
        return v_angle(body, rank)
    if topic == 25:
        return v_triangle(body, rank)
    if topic == 26:
        return v_triangle_auxiliary(body, rank)
    if topic == 31:
        return v_coordinate(body, rank)
    if topic == 18:
        return v_function(body, rank)
    return body


def repair_function_roots():
    """Önceki varyant geçişinde eksilen fonksiyon tanımlarını geri kur."""
    changed = 0
    for path in sorted(REPO_ROOT.glob("TYT_Matematik_Soru_Bankasi/18_fonksiyonlar/test_*_questions.md")):
        text = path.read_text(encoding="utf-8")
        blocks = list(parse_blocks(text))
        roots = {qnum: root for qnum, _block, root, _start, _end in blocks}
        q2 = roots.get(2, "")
        q3 = roots.get(3, "")
        linear = re.search(r"\$f\(x\)=([^$]+)\$\s+ve", q2)
        shift = re.search(r"\$f\(x\)=(x[+-]\d+)\$", q3)
        if not linear or not shift:
            raise ValueError(f"Fonksiyon tanımı çözümlenemedi: {path}")
        form_q1 = linear.group(1)
        form_q7 = shift.group(1)
        replacements = []
        for qnum, block, root, start, end in blocks:
            if qnum not in {1, 6, 7}:
                continue
            prefix, body = split_prefix(root)
            if qnum == 1:
                value = re.search(r"f\((-?\d+)\)", body)
                if not value:
                    value = re.search(r"giriş\s+(-?\d+)", body)
                if not value:
                    raise ValueError(f"f değeri çözümlenemedi: {path}")
                repaired = f"$f(x)={form_q1}$ olduğuna göre $f({value.group(1)})$ kaçtır?"
            elif qnum == 6:
                value = re.search(r"f\((-?\d+)\)\+f\((-?\d+)\)", body)
                if not value:
                    value = re.search(r"giriş\s+(-?\d+)\)\+f\((-?\d+)", body)
                if not value:
                    raise ValueError(f"fonksiyon toplamı çözümlenemedi: {path}")
                repaired = f"$f(x)=x^2$ olduğuna göre $f({value.group(1)})+f({value.group(2)})$ kaçtır?"
            else:
                value = re.search(r"f\^\{-1\}\((-?\d+)\)", body)
                if not value:
                    value = re.search(r"giriş\s+(-?\d+)", body)
                if not value:
                    raise ValueError(f"ters fonksiyon değeri çözümlenemedi: {path}")
                repaired = f"$f(x)={form_q7}$ olduğuna göre $f^{{-1}}({value.group(1)})$ kaçtır?"
            new_root = prefix + repaired
            if new_root != root:
                replacements.append((start, end, block.replace(root, new_root, 1)))
                changed += 1
        for start, end, block in reversed(replacements):
            text = text[:start] + block + text[end:]
        if replacements:
            path.write_text(text, encoding="utf-8")
    print({"repairedFunctionRoots": changed})


def main():
    records = []
    for path in sorted(REPO_ROOT.glob("TYT_Matematik_Soru_Bankasi/[0-9][0-9]_*/test_*_questions.md")):
        for qnum, block, root, start, end in parse_blocks(path.read_text(encoding="utf-8")):
            prefix, body = split_prefix(root)
            if prefix and topic_number(path) in {18, 24, 25, 26, 31}:
                records.append({"path": path, "qnum": qnum, "start": start, "end": end, "block": block, "prefix": prefix, "body": body, "fp": normalize_question_text(body)})
    groups = defaultdict(list)
    for record in records:
        if record["fp"]:
            groups[(topic_number(record["path"]), record["fp"])].append(record)
    ranks = {}
    for items in groups.values():
        if len(items) < 2:
            continue
        for rank, item in enumerate(sorted(items, key=lambda x: (str(x["path"]), x["qnum"]))):
            ranks[(str(item["path"]), item["qnum"])] = rank
    changed = 0
    replacements = []
    for item in records:
        if (str(item["path"]), item["qnum"]) not in ranks:
            continue
        rank = ranks[(str(item["path"]), item["qnum"])]
        new_body = transform(item["body"], topic_number(item["path"]), rank).replace("\\$", "$")
        if new_body == item["body"]:
            continue
        new_root = item["prefix"] + new_body
        replacements.append((item["path"], item["start"], item["end"], item["block"].replace(item["body"], new_body, 1)))
        changed += 1
    by_path = defaultdict(list)
    for path, start, end, block in replacements:
        by_path[path].append((start, end, block))
    for path, items in by_path.items():
        text = path.read_text(encoding="utf-8")
        for start, end, block in reversed(items):
            text = text[:start] + block + text[end:]
        path.write_text(text, encoding="utf-8")
    print({"candidateRoots": len(records), "semanticVariants": changed, "duplicateFamilies": sum(len(v) > 1 for v in groups.values())})


if __name__ == "__main__":
    if "--repair-functions" in sys.argv:
        repair_function_roots()
    else:
        main()
