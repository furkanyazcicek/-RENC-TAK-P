"""
DR. KOÇ HAM BİLGİ NOTU ÜRETİCİSİ
==================================================================

Etkileşimli ders notunun yanında duran, öğrencinin tekrar ve çalışma
için kullandığı PDF notunu üretir. Biçim, TYT Türkçe "Sözcükte Anlam"
notundan çıkarıldı: numaralı bölümler, madde madde ham bilgi, örnek
satırları, "Dr. Koç Taktiği" kutuları, tuzak uyarıları, karşılaştırma
tabloları, vektörel şemalar ve sonda çalışma fasikülü.

TASARIM KARARI
  Metin fontu Liberation Sans (SIL Open Font License). Türkçe karakter
  seti eksiksiz ve PDF'e gömülmesi serbest. macOS sistem fontları
  (Arial/Georgia) gömülmez — dağıtım lisansları buna uygun değil.

KULLANIM
  python3 scripts/ham-bilgi/uret.py              (tüm dersler)
  python3 scripts/ham-bilgi/uret.py biyoloji     (tek ders)

YENİ NOT EKLEME
  scripts/ham-bilgi/icerik/<ders>/<konu-slug>.py dosyası yaz; içinde
  `NOT` adlı bir sözlük bulunsun. Şema için mevcut dosyalara bak.

YAZIM KURALLARI
  · Üs ve alt indis gerçek üstsimge/altsimge olarak dizilir. Metinde
    işaretle yazılır, PDF'te küçültülüp kaydırılarak basılır:
        a^n · 2^3 · (−2)^4 · 10^(23) · x^(m+n)   →   aⁿ · 2³ · (−2)⁴ ...
        CO_2 · H_2SO_4 · NH_4                    →   CO₂ · H₂SO₄ ...
    Kural: ^ ve _ işaretinden sonra ya tek harf, ya rakam dizisi, ya da
    parantezli ifade gelir. "2^9(2 − 1)" ifadesinde üs yalnızca 9'dur.
  · Fiziksel birimlerde hazır karakter de kullanılabilir: m/s² · cm³.
    Aynı notun içinde tek bir üslup seçilir.
  · **kalın** işaretlemesi her metin alanında geçerlidir.
  · Küme sembolleri (⊂ ⊆ ∈ ∪ ∩ ∅) yedek KaTeX fontundan gelir. Ancak
    ∉ ve ⊄ hiçbir fontta yok; "elemanı değildir", "alt kümesi değildir"
    diye yazılır.
  · Çift yönlü denge oku (⇌, ⇄) yoktur; "↔" ya da "→" kullanılır.
  · Şüphedeysen `uret.py` zaten durdurur: iki fontta da bulunmayan bir
    karakter varsa PDF üretmeden hata verir.
"""

import re
from pathlib import Path

from fpdf import FPDF
from fpdf.enums import XPos, YPos

KOK = Path(__file__).resolve().parent
FONT_KLASORU = KOK / "fontlar"


def buyut(metin):
    """
    Türkçe duyarlı büyük harf.

    Python'un `.upper()` metodu "i" harfini "I" yapar; Türkçede doğrusu
    "İ"dir. Kapak ve üst bilgi başlıkları bu yüzden buradan geçer.
    """
    return metin.replace("i", "İ").replace("ı", "I").upper()

# ------------------------------------------------------------------
# Renkler — DESIGN_SYSTEM.md ile aynı (src/index.css token değerleri)
# ------------------------------------------------------------------
MUREKKEP = (19, 19, 41)          # --c-ink
MUREKKEP_SOLUK = (92, 92, 120)
MARKA = (124, 58, 237)           # --c-brand-600
MARKA_KOYU = (109, 40, 217)      # --c-brand-700
MARKA_ACIK = (245, 243, 255)     # --c-brand-50
CIZGI = (213, 213, 232)          # --c-line-strong
CIZGI_INCE = (231, 231, 242)     # --c-line
UYARI = (245, 158, 11)           # --c-warning-500
UYARI_ZEMIN = (254, 246, 231)
TEHLIKE = (244, 63, 94)          # --c-danger-500
TEHLIKE_ZEMIN = (254, 240, 243)
BASARI = (16, 185, 129)          # --c-success-500
BASARI_ZEMIN = (236, 250, 245)
BILGI = (37, 99, 235)
BILGI_ZEMIN = (238, 244, 255)
ZEMIN_SOLUK = (248, 248, 252)

# Sayfa ölçüleri (mm)
KENAR = 18.0
UST_KENAR = 20.0
ALT_KENAR = 16.0

# Üstsimge / alt indis ölçüleri
PT_MM = 0.3528          # 1 punto kaç mm
KONUM_OLCEK = 0.66      # üst/alt yazının punto oranı
UST_KAYMA = 0.32        # yukarı kayma (punto oranı)
ALT_KAYMA = 0.16        # aşağı kayma (punto oranı)

# Parantez, içinde işlem yoksa kaldırılır: 10^(−4) → 10⁻⁴ ve
# E_(k1) → Eₖ₁ okunur; ama a^(m+n) ve a^(m/n) parantezini korur.
_YALIN_US = re.compile(
    r"^[−+-]?(?=.)[0-9]*[A-Za-zğüşıöçĞÜŞİÖÇ]*[0-9]*[−+-]?$")

# İşaretsiz sayı/harf, önünde ya da ardında yük işareti taşıyabilir:
# Na^+ · Cl^− · Ca^2+ · a^-n
_ISARETLI_US = re.compile(
    r"[−+-]?(?:[0-9]+|[A-Za-zğüşıöçĞÜŞİÖÇ])[−+-]?|[−+-]")


def _us_icerigi(metin, i, isaret):
    """
    `^` ya da `_` işaretinden sonraki üs/indis metnini ayıklar.

    Dönen: (icerik, sonraki_konum). İçerik yoksa (None, i) döner ve
    işaret düz metin olarak basılır.

    Tanınan biçimler:
      ^(m+n)   parantezli — parantez içi dengeli okunur
      ^23      bir ya da daha çok rakam
      ^n       tek harf
      ^+  ^−   yalın yük işareti (Na^+ · Cl^−)
      ^2+ ^3−  iyon yükü (Ca^2+ · PO_4^3−)
    '2^9(2 − 1)' ifadesinde üs yalnızca **9**'dur; ardından gelen parantez
    ayrı bir çarpandır. Bu yüzden rakam okunduktan sonra parantez aranmaz.
    """
    if i >= len(metin):
        return None, i
    if metin[i] == "(":
        derinlik, j = 0, i
        while j < len(metin):
            if metin[j] == "(":
                derinlik += 1
            elif metin[j] == ")":
                derinlik -= 1
                if derinlik == 0:
                    ic = metin[i + 1:j]
                    return (ic if _YALIN_US.match(ic) else f"({ic})"), j + 1
            j += 1
        return None, i
    esles = _ISARETLI_US.match(metin, i)
    if esles:
        return esles.group(0), esles.end()
    return None, i


def cozumle(metin):
    """
    Metni satır → kelime → parça ağacına ayırır.

    Parça: {"yazi": str, "kalin": bool, "konum": None | "UST" | "ALT"}
    Kelime: boşlukla bölünmeyen parçalar listesi.
    Satır: `\\n` ile ayrılmış kelime listesi.

    Tanınan işaretler: **kalın**, ^üs, _indis.
    """
    bloklar = []
    for satir in str(metin).split("\n"):
        parcalar, tampon, kalin, i = [], "", False, 0

        def tamponu_bosalt():
            nonlocal tampon
            if tampon:
                parcalar.append({"yazi": tampon, "kalin": kalin, "konum": None})
                tampon = ""

        while i < len(satir):
            if satir.startswith("**", i):
                tamponu_bosalt()
                kalin = not kalin
                i += 2
                continue
            if satir[i] in "^_":
                ic, sonraki = _us_icerigi(satir, i + 1, satir[i])
                if ic is not None:
                    tamponu_bosalt()
                    parcalar.append({
                        "yazi": ic, "kalin": kalin,
                        "konum": "UST" if satir[i] == "^" else "ALT",
                    })
                    i = sonraki
                    continue
            tampon += satir[i]
            i += 1
        tamponu_bosalt()

        # Parçaları boşluklarda kelimelere böl
        kelimeler, gecerli = [], []
        for parca in parcalar:
            if parca["konum"] is None and " " in parca["yazi"]:
                dilimler = parca["yazi"].split(" ")
                for k, dilim in enumerate(dilimler):
                    if k:
                        # Boş kelime de eklenir: art arda gelen boşluklar
                        # böylece korunur. Formül satırlarındaki hizalama
                        # boşlukları buna dayanıyor.
                        kelimeler.append(gecerli)
                        gecerli = []
                    if dilim:
                        gecerli.append({**parca, "yazi": dilim})
            else:
                gecerli.append(parca)
        if gecerli:
            kelimeler.append(gecerli)
        bloklar.append(kelimeler or [[{"yazi": "", "kalin": False, "konum": None}]])
    return bloklar


class HamBilgiPDF(FPDF):
    """Üst bilgi, alt bilgi ve blok çizim yardımcılarını taşıyan belge."""

    def __init__(self, ustbilgi_sol, ustbilgi_sag):
        super().__init__(orientation="P", unit="mm", format="A4")
        self.ustbilgi_sol = ustbilgi_sol
        self.ustbilgi_sag = ustbilgi_sag
        self.set_margins(KENAR, UST_KENAR, KENAR)
        self.set_auto_page_break(True, margin=ALT_KENAR)
        self._fontlari_yukle()
        self.set_font("Liberation", "", 10.5)

    def _fontlari_yukle(self):
        self.add_font("Liberation", "", FONT_KLASORU / "LiberationSans-Regular.ttf")
        self.add_font("Liberation", "B", FONT_KLASORU / "LiberationSans-Bold.ttf")
        self.add_font("Liberation", "I", FONT_KLASORU / "LiberationSans-Italic.ttf")
        self.add_font("Liberation", "BI", FONT_KLASORU / "LiberationSans-BoldItalic.ttf")

        # Liberation Sans'ta küme sembolleri yok. Matematiğin "Kümeler"
        # konusu bunlarsız yazılamadığı için KaTeX'in matematik fontu
        # yedek olarak bağlanıyor: eksik bir karakterle karşılaşıldığında
        # fpdf2 kendiliğinden buraya düşüyor. (KaTeX, MIT lisanslıdır.)
        self.add_font("Matematik", "", FONT_KLASORU / "KaTeX_Main-Regular.ttf")
        self.add_font("Matematik", "B", FONT_KLASORU / "KaTeX_Main-Bold.ttf")
        self.set_fallback_fonts(["Matematik"], exact_match=False)

    # -------------------- üst / alt bilgi --------------------

    def header(self):
        if self.page_no() <= 1:
            return
        self.set_font("Liberation", "B", 7.5)
        self.set_text_color(*MUREKKEP_SOLUK)
        y = 11.0
        self.set_xy(KENAR, y)
        self.cell(self.epw / 2, 4, self.ustbilgi_sol, align="L")
        self.set_xy(KENAR + self.epw / 2, y)
        self.cell(self.epw / 2, 4, self.ustbilgi_sag, align="R")
        self.set_draw_color(*CIZGI_INCE)
        self.set_line_width(0.3)
        self.line(KENAR, y + 5.2, self.w - KENAR, y + 5.2)
        self.set_xy(KENAR, UST_KENAR)
        self.set_text_color(*MUREKKEP)

    def footer(self):
        # Kapakta sayfa numarası olmaz; numaralandırma ilk içerik
        # sayfasından "1" diye başlar.
        if self.page_no() <= 1:
            return
        self.set_y(-12)
        self.set_font("Liberation", "", 8)
        self.set_text_color(*MUREKKEP_SOLUK)
        self.cell(0, 5, str(self.page_no() - 1), align="C")
        self.set_text_color(*MUREKKEP)

    # -------------------- ölçüm yardımcıları --------------------

    # -------------------- zengin metin --------------------
    #
    # multi_cell yalnızca **kalın** işaretlemesini tanır; üstsimge ve alt
    # indis desteği yoktur. Matematikte üsler, kimyada formüller bunlarsız
    # doğru yazılamadığı için satır dizimi burada elle yapılıyor: metin
    # parçalara ayrılır, her parça kendi punto ve taban çizgisiyle çizilir.

    def _parca_fontu(self, parca, boyut, taban_stil):
        """Bir parçanın punto ve stilini ayarlar; kullanılan puntoyu döndürür."""
        stil = taban_stil
        if parca["kalin"] and "B" not in stil:
            stil += "B"
        p = boyut * KONUM_OLCEK if parca["konum"] else boyut
        self.set_font("Liberation", stil, p)
        return p

    def _parca_genislik(self, parca, boyut, taban_stil):
        self._parca_fontu(parca, boyut, taban_stil)
        return self.get_string_width(parca["yazi"])

    def _satirlara_bol(self, metin, genislik, boyut, taban_stil):
        """Metni, verilen genişliğe sığacak satırlara böler."""
        satirlar = []
        for blok in cozumle(metin):                 # \n ile ayrılmış bloklar
            gecerli, gecerli_en = [], 0.0
            for kelime in blok:
                en = sum(self._parca_genislik(p, boyut, taban_stil) for p in kelime)
                bosluk = 0.0
                if gecerli:
                    self.set_font("Liberation", taban_stil, boyut)
                    bosluk = self.get_string_width(" ")
                if gecerli and gecerli_en + bosluk + en > genislik:
                    satirlar.append(gecerli)
                    gecerli, gecerli_en = [kelime], en
                else:
                    gecerli.append(kelime)
                    gecerli_en += bosluk + en
            satirlar.append(gecerli)
        return satirlar

    def zengin_metin(self, genislik, satir_yuksekligi, metin, boyut=None,
                     stil="", renk=None, hiza="L", olcum=False):
        """
        Üstsimge ve alt indis destekli, satır kaydıran metin çizer.

        `olcum=True` verilirse hiçbir şey çizmez, yalnızca kaplayacağı
        yüksekliği döndürür. Kutu ve tablo yükseklikleri buradan gelir.
        """
        boyut = boyut or self.font_size_pt
        satirlar = self._satirlara_bol(metin, genislik, boyut, stil)
        if olcum:
            return len(satirlar) * satir_yuksekligi

        if renk:
            self.set_text_color(*renk)
        sol, y = self.get_x(), self.get_y()
        for satir in satirlar:
            enler = [sum(self._parca_genislik(p, boyut, stil) for p in k) for k in satir]
            self.set_font("Liberation", stil, boyut)
            bosluk_en = self.get_string_width(" ")
            toplam = sum(enler) + bosluk_en * max(0, len(satir) - 1)
            if hiza == "C":
                x = sol + (genislik - toplam) / 2
            elif hiza == "R":
                x = sol + genislik - toplam
            else:
                x = sol
            for kelime in satir:
                for parca in kelime:
                    p = self._parca_fontu(parca, boyut, stil)
                    kayma = 0.0
                    if parca["konum"] == "UST":
                        kayma = -boyut * UST_KAYMA * PT_MM
                    elif parca["konum"] == "ALT":
                        kayma = boyut * ALT_KAYMA * PT_MM
                    self.set_xy(x, y + kayma)
                    self.cell(self.get_string_width(parca["yazi"]),
                              satir_yuksekligi, parca["yazi"])
                    x += self.get_string_width(parca["yazi"])
                x += bosluk_en
            y += satir_yuksekligi
        self.set_xy(sol, y)
        self.set_font("Liberation", stil, boyut)
        return len(satirlar) * satir_yuksekligi

    def metin_yuksekligi(self, metin, genislik, satir_yuksekligi, markdown=True):
        """
        Metnin kaç mm yer kaplayacağını, hiçbir şey çizmeden hesaplar.

        Kutuların ve tablo satırlarının yüksekliği buradan gelir; yanlış
        ölçüm doğrudan taşan çerçeve demektir.
        """
        return self.zengin_metin(genislik, satir_yuksekligi, metin,
                                 boyut=self.font_size_pt,
                                 stil=self._taban_stil(), olcum=True)

    def satir_sayisi(self, metin, genislik, satir_yuksekligi, markdown=True):
        """Metnin kaç satıra bölüneceğini döndürür."""
        return round(self.metin_yuksekligi(metin, genislik, satir_yuksekligi)
                     / satir_yuksekligi)

    def _taban_stil(self):
        """O an ayarlı olan font stilini (kalın/italik) döndürür."""
        return self.font_style.replace("U", "")

    def yer_ayir(self, yukseklik):
        """İstenen yükseklik sayfaya sığmıyorsa yeni sayfaya geçer."""
        if self.get_y() + yukseklik > self.h - ALT_KENAR:
            self.add_page()


# ==================================================================
# BLOK ÇİZİCİLER
# ==================================================================

def _yaz(pdf, metin, boyut=10.5, stil="", satir=5.0, renk=MUREKKEP, alt_bosluk=0.0, girinti=0.0):
    pdf.set_font("Liberation", stil, boyut)
    pdf.set_text_color(*renk)
    pdf.set_x(KENAR + girinti)
    pdf.zengin_metin(pdf.epw - girinti, satir, metin)
    if alt_bosluk:
        pdf.ln(alt_bosluk)


def kapak(pdf, not_verisi):
    """Başlık, künye ve içindekiler listesini taşıyan ilk sayfa."""
    pdf.add_page()
    pdf.set_y(30)

    # Marka şeridi
    pdf.set_fill_color(*MARKA)
    pdf.rect(KENAR, pdf.get_y(), 26, 1.6, style="F")
    pdf.ln(7)

    pdf.set_font("Liberation", "B", 10)
    pdf.set_text_color(*MARKA_KOYU)
    pdf.set_x(KENAR)
    pdf.cell(0, 5, buyut(not_verisi["ust_etiket"]), new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.ln(3)

    pdf.set_font("Liberation", "B", 25)
    pdf.set_text_color(*MUREKKEP)
    pdf.set_x(KENAR)
    pdf.zengin_metin(pdf.epw, 10.5, not_verisi["baslik"])
    pdf.ln(2.5)

    pdf.set_font("Liberation", "", 11.5)
    pdf.set_text_color(*MUREKKEP_SOLUK)
    pdf.set_x(KENAR)
    pdf.zengin_metin(pdf.epw, 5.6, not_verisi["alt_baslik"])
    pdf.ln(7)

    # Künye kutusu
    kunye = not_verisi["kunye"]
    satirlar = [
        ("Sınav / Ders", f"{kunye['sinav']} · {kunye['ders']}"),
        ("Konu", kunye["konu"]),
        ("Kazanımlar", kunye["kazanimlar"]),
        ("Bu notta ne var", kunye["kapsam"]),
        ("Nasıl çalışılır", kunye["nasil"]),
    ]
    # Ölçüm genişliği, çizim genişliğiyle AYNI olmalı; aksi hâlde satır
    # sayısı eksik hesaplanır ve künye yazısı kutunun altından taşar.
    kunye_genislik = pdf.epw - 48
    # Ölçüm, çizimde kullanılacak fontla yapılmalı. Aksi hâlde satır sayısı
    # yanlış çıkar; kutu içeriğinden uzun olur ve içindekiler listesi
    # kutunun içine taşar.
    pdf.set_font("Liberation", "", 9.4)
    yukseklik = 5.5
    for _, deger in satirlar:
        yukseklik += max(5.0, pdf.metin_yuksekligi(deger, kunye_genislik, 4.8))
    pdf.set_fill_color(*ZEMIN_SOLUK)
    pdf.set_draw_color(*CIZGI)
    pdf.set_line_width(0.3)
    pdf.rect(KENAR, pdf.get_y(), pdf.epw, yukseklik, style="DF")
    pdf.set_fill_color(*MARKA)
    pdf.rect(KENAR, pdf.get_y(), 1.4, yukseklik, style="F")

    pdf.ln(2.5)
    for etiket, deger in satirlar:
        y0 = pdf.get_y()
        pdf.set_font("Liberation", "B", 8.6)
        pdf.set_text_color(*MARKA_KOYU)
        pdf.set_xy(KENAR + 6, y0)
        pdf.cell(36, 4.8, etiket)
        pdf.set_font("Liberation", "", 9.4)
        pdf.set_text_color(*MUREKKEP)
        pdf.set_xy(KENAR + 42, y0)
        pdf.zengin_metin(kunye_genislik, 4.8, deger)

    # İçindekiler — bölüm başlıklarından türetilir, elle yazılmaz.
    basliklar = [b for b in not_verisi["bloklar"] if b["tur"] == "bolum"]
    if not_verisi.get("fasikul"):
        basliklar = basliklar + [
            {"numara": not_verisi["fasikul"]["baslik"]["numara"],
             "baslik": not_verisi["fasikul"]["baslik"]["metin"]},
            {"numara": not_verisi["fasikul"]["cevap_baslik"]["numara"],
             "baslik": not_verisi["fasikul"]["cevap_baslik"]["metin"]},
        ]
    if basliklar:
        pdf.ln(9)
        pdf.set_font("Liberation", "B", 9)
        pdf.set_text_color(*MARKA_KOYU)
        pdf.set_x(KENAR)
        pdf.cell(0, 5, "İÇİNDEKİLER", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        pdf.ln(2)
        for b in basliklar:
            y0 = pdf.get_y()
            pdf.set_font("Liberation", "B", 9.4)
            pdf.set_text_color(*MARKA)
            pdf.set_xy(KENAR + 1, y0)
            pdf.cell(8, 5.4, str(b["numara"]))
            pdf.set_font("Liberation", "", 9.8)
            pdf.set_text_color(*MUREKKEP)
            pdf.set_xy(KENAR + 9, y0)
            pdf.zengin_metin(pdf.epw - 9, 5.4, b["baslik"])

    pdf.set_y(pdf.h - 32)
    pdf.set_draw_color(*CIZGI_INCE)
    pdf.line(KENAR, pdf.get_y(), pdf.w - KENAR, pdf.get_y())
    pdf.ln(3)
    pdf.set_font("Liberation", "", 8.4)
    pdf.set_text_color(*MUREKKEP_SOLUK)
    pdf.set_x(KENAR)
    pdf.zengin_metin(pdf.epw, 4.2, not_verisi["kapak_dipnot"])


def bolum(pdf, numara, baslik):
    pdf.yer_ayir(20)
    pdf.ln(3.5)
    y0 = pdf.get_y()
    pdf.set_fill_color(*MARKA)
    pdf.rect(KENAR, y0 + 0.6, 8.6, 8.6, style="F")
    pdf.set_font("Liberation", "B", 11)
    pdf.set_text_color(255, 255, 255)
    pdf.set_xy(KENAR, y0 + 0.6)
    pdf.cell(8.6, 8.6, str(numara), align="C")
    pdf.set_font("Liberation", "B", 14)
    pdf.set_text_color(*MUREKKEP)
    pdf.set_xy(KENAR + 12, y0)
    pdf.zengin_metin(pdf.epw - 12, 6.0, baslik)
    pdf.set_draw_color(*CIZGI)
    pdf.set_line_width(0.4)
    pdf.line(KENAR, pdf.get_y() + 1.6, pdf.w - KENAR, pdf.get_y() + 1.6)
    pdf.ln(4.5)


def altbolum(pdf, baslik):
    pdf.yer_ayir(14)
    pdf.ln(2.2)
    y0 = pdf.get_y()
    pdf.set_fill_color(*MARKA)
    pdf.rect(KENAR, y0 + 1.1, 2.0, 4.4, style="F")
    pdf.set_font("Liberation", "B", 11)
    pdf.set_text_color(*MARKA_KOYU)
    pdf.set_xy(KENAR + 4.6, y0)
    pdf.zengin_metin(pdf.epw - 4.6, 5.4, baslik)
    pdf.ln(1.4)


def paragraf(pdf, metin):
    pdf.yer_ayir(10)
    _yaz(pdf, metin, boyut=10.2, satir=5.0, alt_bosluk=1.6)


def tanim(pdf, kavram, aciklama):
    """Kalın kavram + tanımı. Ham bilgi notunun omurgası."""
    metin = f"**{kavram}:** {aciklama}"
    pdf.yer_ayir(pdf.metin_yuksekligi(metin, pdf.epw - 4.5, 5.0) + 2)
    y0 = pdf.get_y()
    _yaz(pdf, metin, boyut=10.2, satir=5.0, girinti=4.5)
    pdf.set_fill_color(*MARKA)
    pdf.rect(KENAR, y0 + 1.2, 1.5, pdf.get_y() - y0 - 2.2, style="F")
    pdf.ln(1.4)


def maddeler(pdf, ogeler, isaret="ok"):
    """
    Örnek/madde listesi.
    isaret="ok"   → ▶ üçgen (örnek cümleler)
    isaret="nokta"→ • daire (sıralı bilgi)
    """
    for oge in ogeler:
        yukseklik = pdf.metin_yuksekligi(oge, pdf.epw - 6.5, 4.9)
        pdf.yer_ayir(yukseklik + 1)
        y0 = pdf.get_y()
        pdf.set_fill_color(*MARKA)
        if isaret == "ok":
            # ▶ üçgen — cp1254'te olmayan glifi vektörel çiziyoruz
            pdf.polygon(
                [(KENAR + 1.0, y0 + 1.5), (KENAR + 3.6, y0 + 2.75), (KENAR + 1.0, y0 + 4.0)],
                style="F",
            )
        else:
            pdf.circle(KENAR + 2.2, y0 + 2.5, 0.9, style="F")
        _yaz(pdf, oge, boyut=10.0, satir=4.9, girinti=6.5)
        pdf.ln(0.5)
    pdf.ln(1.2)


def _kutu(pdf, baslik, govde, cerceve, zemin, ogeler=None):
    """
    Renkli çerçeveli uyarı/taktik kutusu. Sayfaya sığmıyorsa bütün olarak
    sonraki sayfaya taşınır.

    Yükseklik, aşağıda gerçekten çizilen parçaların ölçüsüyle birebir
    hesaplanır — tahmin yapılırsa uzun kutularda metin çerçeveyi taşar.
    """
    ic_genislik = pdf.epw - 11
    ust_bosluk, alt_bosluk = 2.6, 2.8

    pdf.set_font("Liberation", "B", 9.6)
    yukseklik = ust_bosluk + pdf.metin_yuksekligi(baslik, ic_genislik, 4.6, markdown=False)
    if govde:
        pdf.set_font("Liberation", "", 9.7)
        yukseklik += pdf.metin_yuksekligi(govde, ic_genislik, 4.8)
    if ogeler:
        pdf.set_font("Liberation", "", 9.7)
        yukseklik += 0.6
        for oge in ogeler:
            yukseklik += pdf.metin_yuksekligi(oge, ic_genislik - 5, 4.6) + 0.8
    yukseklik += alt_bosluk

    pdf.yer_ayir(yukseklik + 3)
    y0 = pdf.get_y()
    pdf.set_fill_color(*zemin)
    pdf.set_draw_color(*cerceve)
    pdf.set_line_width(0.35)
    pdf.rect(KENAR, y0, pdf.epw, yukseklik, style="DF")
    pdf.set_fill_color(*cerceve)
    pdf.rect(KENAR, y0, 2.2, yukseklik, style="F")

    pdf.set_xy(KENAR + 6, y0 + ust_bosluk)
    pdf.set_font("Liberation", "B", 9.6)
    pdf.set_text_color(*cerceve)
    pdf.zengin_metin(ic_genislik, 4.6, baslik)

    pdf.set_text_color(*MUREKKEP)
    if govde:
        pdf.set_x(KENAR + 6)
        pdf.set_font("Liberation", "", 9.7)
        pdf.zengin_metin(ic_genislik, 4.8, govde)
    if ogeler:
        pdf.ln(0.6)
        for oge in ogeler:
            y1 = pdf.get_y()
            pdf.set_fill_color(*cerceve)
            pdf.circle(KENAR + 7.6, y1 + 2.3, 0.85, style="F")
            pdf.set_x(KENAR + 11)
            pdf.set_font("Liberation", "", 9.7)
            pdf.zengin_metin(ic_genislik - 5, 4.6, oge)
            pdf.ln(0.8)

    pdf.set_y(y0 + yukseklik + 3)


def taktik(pdf, baslik, govde=None, ogeler=None):
    _kutu(pdf, f"DR. KOÇ TAKTİĞİ — {baslik}", govde, MARKA, MARKA_ACIK, ogeler)


def tuzak(pdf, baslik, govde=None, ogeler=None):
    _kutu(pdf, f"TUZAK — {baslik}", govde, TEHLIKE, TEHLIKE_ZEMIN, ogeler)


def dikkat(pdf, baslik, govde=None, ogeler=None):
    _kutu(pdf, f"DİKKAT — {baslik}", govde, UYARI, UYARI_ZEMIN, ogeler)


def ezber(pdf, baslik, govde=None, ogeler=None):
    _kutu(pdf, f"EZBER KARTI — {baslik}", govde, BASARI, BASARI_ZEMIN, ogeler)


def cikmis(pdf, baslik, govde=None, ogeler=None):
    _kutu(pdf, f"ÖSYM NASIL SORAR — {baslik}", govde, BILGI, BILGI_ZEMIN, ogeler)


def tablo(pdf, basliklar, satirlar, oranlar=None, boyut=8.8):
    """Karşılaştırma tablosu. Satırlar sayfa sonunda bölünmez."""
    sutun = len(basliklar)
    oranlar = oranlar or [1.0 / sutun] * sutun
    genislikler = [pdf.epw * o for o in oranlar]
    satir_yuksekligi = 4.4

    def _satir_yuksekligi(hucreler, stil):
        pdf.set_font("Liberation", stil, boyut)
        en = 1
        for metin, gen in zip(hucreler, genislikler):
            en = max(en, pdf.satir_sayisi(metin, gen - 3, satir_yuksekligi))
        return en * satir_yuksekligi + 2.6

    def _basligi_ciz():
        y = pdf.get_y()
        h = _satir_yuksekligi(basliklar, "B")
        pdf.set_fill_color(*MARKA)
        pdf.rect(KENAR, y, pdf.epw, h, style="F")
        x = KENAR
        pdf.set_font("Liberation", "B", boyut)
        pdf.set_text_color(255, 255, 255)
        for metin, gen in zip(basliklar, genislikler):
            pdf.set_xy(x + 1.5, y + 1.3)
            pdf.zengin_metin(gen - 3, satir_yuksekligi, metin)
            x += gen
        pdf.set_text_color(*MUREKKEP)
        pdf.set_y(y + h)

    pdf.yer_ayir(24)
    _basligi_ciz()

    for i, satir in enumerate(satirlar):
        h = _satir_yuksekligi(satir, "")
        if pdf.get_y() + h > pdf.h - ALT_KENAR:
            pdf.add_page()
            _basligi_ciz()
        y = pdf.get_y()
        pdf.set_fill_color(*(ZEMIN_SOLUK if i % 2 == 0 else (255, 255, 255)))
        pdf.rect(KENAR, y, pdf.epw, h, style="F")
        pdf.set_draw_color(*CIZGI_INCE)
        pdf.set_line_width(0.2)
        pdf.line(KENAR, y + h, pdf.w - KENAR, y + h)
        x = KENAR
        pdf.set_font("Liberation", "", boyut)
        for j, (metin, gen) in enumerate(zip(satir, genislikler)):
            pdf.set_xy(x + 1.5, y + 1.3)
            pdf.zengin_metin(gen - 3, satir_yuksekligi, metin)
            if j:
                pdf.set_draw_color(*CIZGI_INCE)
                pdf.line(x, y, x, y + h)
            x += gen
        pdf.set_y(y + h)
    pdf.ln(3)


def formul(pdf, ifade, baslik=None, terimler=None, not_metni=None):
    """
    Ortada duran, çerçeveli formül levhası.

    Sayısal derslerde formülün metnin içinde kaybolması en sık şikâyet.
    Burada formül kendi zemininde durur, altında terimler tek tek açılır —
    öğrenci sembolü nereden bulacağını aramak zorunda kalmaz.
    """
    ic_genislik = pdf.epw - 12
    yukseklik = 5.0
    if baslik:
        yukseklik += 4.6
    pdf.set_font("Liberation", "B", 13)
    yukseklik += pdf.metin_yuksekligi(ifade, ic_genislik, 6.4, markdown=False)
    # Etiket sütunu, en uzun etikete göre genişler. Sabit genişlikte
    # "Kuvvetin kuvveti" gibi uzun etiketler açıklama sütununa taşıyordu.
    etiket_en = 22.0
    if terimler:
        pdf.set_font("Liberation", "B", 9)
        etiket_en = max(22.0, *(pdf.get_string_width(s) + 3 for s, _ in terimler))
        etiket_en = min(etiket_en, ic_genislik * 0.42)
    aciklama_en = ic_genislik - etiket_en - 6
    if terimler:
        pdf.set_font("Liberation", "", 9)
        yukseklik += 1.6
        for _, anlam in terimler:
            yukseklik += max(4.4, pdf.metin_yuksekligi(anlam, aciklama_en, 4.4))
    if not_metni:
        pdf.set_font("Liberation", "", 9)
        yukseklik += 1.4 + pdf.metin_yuksekligi(not_metni, ic_genislik, 4.4)
    yukseklik += 4.0

    pdf.yer_ayir(yukseklik + 3)
    y0 = pdf.get_y()
    pdf.set_fill_color(*ZEMIN_SOLUK)
    pdf.set_draw_color(*CIZGI)
    pdf.set_line_width(0.35)
    pdf.rect(KENAR, y0, pdf.epw, yukseklik, style="DF", round_corners=True, corner_radius=2)

    pdf.set_y(y0 + 2.6)
    if baslik:
        pdf.set_font("Liberation", "B", 8.6)
        pdf.set_text_color(*MARKA_KOYU)
        pdf.set_x(KENAR + 6)
        pdf.zengin_metin(ic_genislik, 4.6, buyut(baslik))

    pdf.set_font("Liberation", "B", 13)
    pdf.set_text_color(*MUREKKEP)
    pdf.set_x(KENAR + 6)
    pdf.zengin_metin(ic_genislik, 6.4, ifade, hiza="C")

    if terimler:
        pdf.ln(1.6)
        for sembol, anlam in terimler:
            y1 = pdf.get_y()
            pdf.set_font("Liberation", "B", 9)
            pdf.set_text_color(*MARKA_KOYU)
            pdf.set_xy(KENAR + 8, y1)
            pdf.zengin_metin(etiket_en, 4.4, sembol, boyut=9, stil="B")
            pdf.set_text_color(*MUREKKEP)
            pdf.set_xy(KENAR + 8 + etiket_en, y1)
            pdf.zengin_metin(aciklama_en, 4.4, anlam, boyut=9)

    if not_metni:
        pdf.ln(1.4)
        pdf.set_font("Liberation", "", 9)
        pdf.set_text_color(*MUREKKEP_SOLUK)
        pdf.set_x(KENAR + 6)
        pdf.zengin_metin(ic_genislik, 4.4, not_metni)

    pdf.set_y(y0 + yukseklik + 3)
    pdf.set_text_color(*MUREKKEP)


def cozum(pdf, soru, adimlar, sonuc=None, baslik="Çözümlü Örnek"):
    """
    Numaralı basamaklarla çözülen örnek soru.

    Sayısal derslerde "anladım ama yapamıyorum" sorununun ilacı budur:
    her basamak ayrı satırda, ne yapıldığı açıkça yazılı.
    """
    ic_genislik = pdf.epw - 12
    yukseklik = 5.2 + 4.6
    pdf.set_font("Liberation", "", 9.8)
    yukseklik += pdf.metin_yuksekligi(soru, ic_genislik, 4.8) + 2.0
    for adim in adimlar:
        yukseklik += max(4.6, pdf.metin_yuksekligi(adim, ic_genislik - 8, 4.6)) + 1.0
    if sonuc:
        yukseklik += 2.0 + pdf.metin_yuksekligi(sonuc, ic_genislik - 8, 4.8)
    yukseklik += 3.0

    pdf.yer_ayir(yukseklik + 3)
    y0 = pdf.get_y()
    pdf.set_fill_color(255, 255, 255)
    pdf.set_draw_color(*MARKA)
    pdf.set_line_width(0.35)
    pdf.rect(KENAR, y0, pdf.epw, yukseklik, style="DF", round_corners=True, corner_radius=2)
    pdf.set_fill_color(*MARKA)
    pdf.rect(KENAR, y0, 2.2, yukseklik, style="F")

    pdf.set_xy(KENAR + 6, y0 + 2.6)
    pdf.set_font("Liberation", "B", 9.2)
    pdf.set_text_color(*MARKA_KOYU)
    pdf.zengin_metin(ic_genislik, 4.6, buyut(baslik))

    pdf.set_x(KENAR + 6)
    pdf.set_font("Liberation", "", 9.8)
    pdf.set_text_color(*MUREKKEP)
    pdf.zengin_metin(ic_genislik, 4.8, soru)
    pdf.ln(2.0)

    for i, adim in enumerate(adimlar, start=1):
        y1 = pdf.get_y()
        pdf.set_font("Liberation", "B", 8.8)
        pdf.set_text_color(*MARKA)
        pdf.set_xy(KENAR + 7, y1)
        pdf.cell(7, 4.6, f"{i}.")
        pdf.set_font("Liberation", "", 9.4)
        pdf.set_text_color(*MUREKKEP)
        pdf.set_xy(KENAR + 14, y1)
        pdf.zengin_metin(ic_genislik - 8, 4.6, adim)
        pdf.ln(1.0)

    if sonuc:
        pdf.ln(2.0)
        pdf.set_x(KENAR + 14)
        pdf.set_font("Liberation", "B", 9.8)
        pdf.set_text_color(*BASARI)
        pdf.zengin_metin(ic_genislik - 8, 4.8, sonuc)

    pdf.set_y(y0 + yukseklik + 3)
    pdf.set_text_color(*MUREKKEP)


def gorsel(pdf, ciz, yukseklik=None, baslik=None, aciklama=None):
    """
    Vektörel şema yerleştirir.

    `ciz(pdf, x, y, g, y_boyut)` çizim fonksiyonudur; kendisine ayrılan
    dikdörtgenin sol üst köşesi ve ölçüleri verilir. Şema bir sayfada
    bütün olarak durur, ortadan bölünmez.

    Yükseklik verilmezse şemanın kendi bildirdiği ölçü kullanılır. Elle
    yazılan yükseklik küçük kalırsa şema sessizce kırpılır — bu yüzden
    varsayılan davranış, şemaya kendi boyunu sordurmaktır.
    """
    if yukseklik is None:
        yukseklik = getattr(ciz, "onerilen_yukseklik", 40.0)
    toplam = yukseklik + 7
    if baslik:
        toplam += 5
    if aciklama:
        toplam += pdf.metin_yuksekligi(aciklama, pdf.epw - 4, 4.2)
    pdf.yer_ayir(toplam + 2)

    if baslik:
        pdf.set_font("Liberation", "B", 9.2)
        pdf.set_text_color(*MARKA_KOYU)
        pdf.set_x(KENAR)
        pdf.zengin_metin(pdf.epw, 5, baslik)

    y0 = pdf.get_y() + 1.5
    pdf.set_draw_color(*CIZGI)
    pdf.set_fill_color(255, 255, 255)
    pdf.set_line_width(0.3)
    pdf.rect(KENAR, y0, pdf.epw, yukseklik, style="DF")
    ciz(pdf, KENAR, y0, pdf.epw, yukseklik)
    pdf.set_y(y0 + yukseklik + 2)

    if aciklama:
        pdf.set_font("Liberation", "I", 8.6)
        pdf.set_text_color(*MUREKKEP_SOLUK)
        pdf.set_x(KENAR + 2)
        pdf.zengin_metin(pdf.epw - 4, 4.2, aciklama)
    pdf.set_text_color(*MUREKKEP)
    pdf.ln(2.5)


def fasikul(pdf, baslik, giris, sorular, satir_sayisi=2):
    """
    Çalışma fasikülü: numaralı açık uçlu sorular ve altında öğrencinin
    yazması için çizgili boşluk.
    """
    pdf.add_page()
    bolum(pdf, baslik["numara"], baslik["metin"])
    pdf.set_font("Liberation", "", 10)
    pdf.set_text_color(*MUREKKEP)
    pdf.set_x(KENAR)
    pdf.zengin_metin(pdf.epw, 5.0, giris)
    pdf.ln(4)

    for i, soru in enumerate(sorular, start=1):
        numara = f"{i}."
        metin_genislik = pdf.epw - 9
        soru_yuksekligi = pdf.metin_yuksekligi(soru, metin_genislik, 4.9)
        blok = soru_yuksekligi + satir_sayisi * 6.2 + 4
        pdf.yer_ayir(blok)

        y0 = pdf.get_y()
        pdf.set_font("Liberation", "B", 10)
        pdf.set_text_color(*MARKA_KOYU)
        pdf.set_xy(KENAR, y0)
        pdf.cell(9, 4.9, numara)
        pdf.set_font("Liberation", "", 10)
        pdf.set_text_color(*MUREKKEP)
        pdf.set_xy(KENAR + 9, y0)
        pdf.zengin_metin(metin_genislik, 4.9, soru)

        pdf.ln(1.6)
        pdf.set_draw_color(*CIZGI_INCE)
        pdf.set_line_width(0.25)
        for _ in range(satir_sayisi):
            y = pdf.get_y() + 4.2
            pdf.line(KENAR + 9, y, pdf.w - KENAR, y)
            pdf.set_y(y + 2.0)
        pdf.ln(2.2)


def cevap_anahtari(pdf, baslik, cevaplar):
    """Fasikül sorularının kısa cevapları — öğrenci kendini denetlesin."""
    pdf.add_page()
    bolum(pdf, baslik["numara"], baslik["metin"])
    paragraf(
        pdf,
        "Önce soruları kendi cümlelerinle yanıtla, sonra buraya bak. "
        "Cevabın birebir aynı olmak zorunda değil; **anahtar kavramı** "
        "yakalayıp yakalamadığına bak.",
    )
    for i, cevap in enumerate(cevaplar, start=1):
        metin = f"**{i}.** {cevap}"
        pdf.yer_ayir(pdf.metin_yuksekligi(metin, pdf.epw - 3, 4.6) + 1.5)
        _yaz(pdf, metin, boyut=9.3, satir=4.6, girinti=3)
        pdf.ln(0.8)


# ==================================================================
# BELGE KURUCU
# ==================================================================

BLOK_CIZICILER = {
    "bolum": lambda pdf, b: bolum(pdf, b["numara"], b["baslik"]),
    "altbolum": lambda pdf, b: altbolum(pdf, b["baslik"]),
    "paragraf": lambda pdf, b: paragraf(pdf, b["metin"]),
    "tanim": lambda pdf, b: tanim(pdf, b["kavram"], b["aciklama"]),
    "maddeler": lambda pdf, b: maddeler(pdf, b["ogeler"], b.get("isaret", "ok")),
    "taktik": lambda pdf, b: taktik(pdf, b["baslik"], b.get("govde"), b.get("ogeler")),
    "tuzak": lambda pdf, b: tuzak(pdf, b["baslik"], b.get("govde"), b.get("ogeler")),
    "dikkat": lambda pdf, b: dikkat(pdf, b["baslik"], b.get("govde"), b.get("ogeler")),
    "ezber": lambda pdf, b: ezber(pdf, b["baslik"], b.get("govde"), b.get("ogeler")),
    "cikmis": lambda pdf, b: cikmis(pdf, b["baslik"], b.get("govde"), b.get("ogeler")),
    "tablo": lambda pdf, b: tablo(pdf, b["basliklar"], b["satirlar"], b.get("oranlar")),
    "formul": lambda pdf, b: formul(pdf, b["ifade"], b.get("baslik"), b.get("terimler"), b.get("not")),
    "cozum": lambda pdf, b: cozum(pdf, b["soru"], b["adimlar"], b.get("sonuc"),
                                  b.get("baslik", "Çözümlü Örnek")),
    "gorsel": lambda pdf, b: gorsel(pdf, b["ciz"], b.get("yukseklik"), b.get("baslik"), b.get("aciklama")),
    "sayfa": lambda pdf, b: pdf.add_page(),
}


def belge_uret(not_verisi, cikti_yolu):
    pdf = HamBilgiPDF(not_verisi["ustbilgi_sol"], not_verisi["ustbilgi_sag"])
    pdf.set_title(not_verisi["baslik"])
    pdf.set_author("Dr. Koç Eğitim & Koçluk")
    pdf.set_subject(f"{not_verisi['kunye']['sinav']} {not_verisi['kunye']['ders']} — {not_verisi['kunye']['konu']}")
    pdf.set_creator("Dr. Koç ham bilgi notu üreticisi")

    kapak(pdf, not_verisi)
    pdf.add_page()

    for blok in not_verisi["bloklar"]:
        cizici = BLOK_CIZICILER.get(blok["tur"])
        if cizici is None:
            raise ValueError(f"Bilinmeyen blok türü: {blok['tur']}")
        cizici(pdf, blok)

    if not_verisi.get("fasikul"):
        f = not_verisi["fasikul"]
        fasikul(pdf, f["baslik"], f["giris"], f["sorular"], f.get("satir_sayisi", 2))
        if f.get("cevaplar"):
            cevap_anahtari(pdf, f["cevap_baslik"], f["cevaplar"])

    cikti_yolu = Path(cikti_yolu)
    cikti_yolu.parent.mkdir(parents=True, exist_ok=True)
    pdf.output(str(cikti_yolu))
    return cikti_yolu, pdf.page_no()
