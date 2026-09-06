"""
HAM BİLGİ NOTU ŞEMA KÜTÜPHANESİ
==================================================================

Ders notlarına giren vektörel şemaları üretir. Her fonksiyon bir
`ciz(pdf, x, y, g, h)` işlevi döndürür; üretici bu işlevi şemaya
ayırdığı dikdörtgenin ölçüleriyle çağırır.

Şemalar rasgele resim değil, **konu şeması**dır: akış, döngü, piramit,
sınıflandırma ağacı, karşılaştırma, katmanlı yapı ve grafik. Bu yedi
kalıp biyoloji, kimya ve fizik notlarının tamamına yetiyor; her ders
için ayrı çizim kodu yazmak yerine aynı kalıplar besleniyor.

Renkler DESIGN_SYSTEM.md paletinden gelir (bkz. uretici.py).
"""

from uretici import (
    BASARI, BILGI, CIZGI, CIZGI_INCE, MARKA, MARKA_ACIK, MARKA_KOYU,
    MUREKKEP, MUREKKEP_SOLUK, TEHLIKE, UYARI, ZEMIN_SOLUK,
)

# Şemalarda kullanılan yumuşak zemin tonları
ZEMIN_MOR = (243, 240, 255)
ZEMIN_MAVI = (235, 242, 254)
ZEMIN_YESIL = (233, 249, 243)
ZEMIN_SARI = (254, 247, 233)
ZEMIN_PEMBE = (254, 238, 242)

PALET = [
    (MARKA, ZEMIN_MOR),
    (BILGI, ZEMIN_MAVI),
    (BASARI, ZEMIN_YESIL),
    (UYARI, ZEMIN_SARI),
    (TEHLIKE, ZEMIN_PEMBE),
]


# ------------------------------------------------------------------
# Temel çizim yardımcıları
# ------------------------------------------------------------------

def _yazi(pdf, metin, x, y, g, boyut=7.4, stil="", renk=MUREKKEP, hiza="C", satir=3.3):
    # Şema metinlerinde de **kalın** işaretlemesi çalışır; aksi hâlde
    # yıldızlar olduğu gibi basılır.
    pdf.set_font("Liberation", stil, boyut)
    pdf.set_text_color(*renk)
    pdf.set_xy(x, y)
    pdf.multi_cell(g, satir, metin, align=hiza, border=0, markdown=True)


def _yazi_ortala(pdf, metin, x, y, g, h, boyut=7.4, stil="B", renk=MUREKKEP, satir=3.3):
    """Metni verilen kutunun dikey ortasına yerleştirir."""
    pdf.set_font("Liberation", stil, boyut)
    n = pdf.satir_sayisi(metin, g - 1.5, satir)
    _yazi(pdf, metin, x, y + (h - n * satir) / 2, g, boyut, stil, renk, "C", satir)


def _kutu(pdf, x, y, g, h, cerceve, zemin, yaricap=1.6):
    pdf.set_draw_color(*cerceve)
    pdf.set_fill_color(*zemin)
    pdf.set_line_width(0.4)
    pdf.rect(x, y, g, h, style="DF", round_corners=True, corner_radius=yaricap)


def _ok(pdf, x1, y1, x2, y2, renk=MARKA, kalinlik=0.5, uc=1.7):
    """Düz ok. Yalnızca yatay ve dikey yönde kullanılır."""
    pdf.set_draw_color(*renk)
    pdf.set_fill_color(*renk)
    pdf.set_line_width(kalinlik)
    pdf.line(x1, y1, x2, y2)
    if abs(y2 - y1) < 0.01:                      # yatay
        yon = 1 if x2 > x1 else -1
        pdf.polygon([(x2, y2), (x2 - yon * uc, y2 - uc * 0.66),
                     (x2 - yon * uc, y2 + uc * 0.66)], style="F")
    else:                                        # dikey
        yon = 1 if y2 > y1 else -1
        pdf.polygon([(x2, y2), (x2 - uc * 0.66, y2 - yon * uc),
                     (x2 + uc * 0.66, y2 - yon * uc)], style="F")


# ------------------------------------------------------------------
# 1) Yatay akış — süreç adımları
# ------------------------------------------------------------------

def akis(adimlar, alt_notlar=None, renk_dizisi=None):
    """
    adimlar    : ["Uyarı", "Reseptör", "Sinir", "Tepki"]
    alt_notlar : her kutunun altına küçük açıklama (isteğe bağlı)
    """
    def ciz(pdf, x, y, g, h):
        n = len(adimlar)
        bosluk = 7.0
        kutu_g = (g - 12 - bosluk * (n - 1)) / n
        kutu_h = min(16.0, h - (12 if alt_notlar else 6))
        y0 = y + 6
        for i, metin in enumerate(adimlar):
            cx = x + 6 + i * (kutu_g + bosluk)
            cerceve, zemin = (renk_dizisi or PALET)[i % len(renk_dizisi or PALET)]
            _kutu(pdf, cx, y0, kutu_g, kutu_h, cerceve, zemin)
            _yazi_ortala(pdf, metin, cx + 0.75, y0, kutu_g - 1.5, kutu_h, 7.3, "B", MUREKKEP)
            if i < n - 1:
                _ok(pdf, cx + kutu_g + 1.2, y0 + kutu_h / 2,
                    cx + kutu_g + bosluk - 1.2, y0 + kutu_h / 2)
            if alt_notlar and i < len(alt_notlar) and alt_notlar[i]:
                _yazi(pdf, alt_notlar[i], cx, y0 + kutu_h + 1.5, kutu_g,
                      6.4, "", MUREKKEP_SOLUK, "C", 2.9)

    ciz.onerilen_yukseklik = 30.0 if alt_notlar else 25.0
    return ciz


# ------------------------------------------------------------------
# 2) Dikey akış — sıralı basamaklar, uzun etiketli
# ------------------------------------------------------------------

def dikey_akis(adimlar, saglar=None):
    """
    adimlar : ["Glikoliz", "Krebs", "ETS"]
    saglar  : her adımın sağına yazılan kazanç/açıklama
    """
    def ciz(pdf, x, y, g, h):
        n = len(adimlar)
        bosluk = 4.6
        kutu_h = (h - 10 - bosluk * (n - 1)) / n
        kutu_g = g * 0.42 if saglar else g - 16
        for i, metin in enumerate(adimlar):
            cy = y + 5 + i * (kutu_h + bosluk)
            cerceve, zemin = PALET[i % len(PALET)]
            _kutu(pdf, x + 8, cy, kutu_g, kutu_h, cerceve, zemin)
            _yazi_ortala(pdf, metin, x + 8.75, cy, kutu_g - 1.5, kutu_h, 7.4, "B")
            if saglar and i < len(saglar) and saglar[i]:
                _yazi(pdf, saglar[i], x + kutu_g + 13, cy + 1.2,
                      g - kutu_g - 21, 6.9, "", MUREKKEP_SOLUK, "L", 3.1)
            if i < n - 1:
                _ok(pdf, x + 8 + kutu_g / 2, cy + kutu_h + 0.8,
                    x + 8 + kutu_g / 2, cy + kutu_h + bosluk - 0.8)

    ciz.onerilen_yukseklik = 10.0 + len(adimlar) * 15.5
    return ciz


# ------------------------------------------------------------------
# 3) Döngü — dört köşeli çevrim
# ------------------------------------------------------------------

def _ok_ucu(pdf, cx, cy, dx, dy, renk, boy=2.4):
    """(dx, dy) yönünü gösteren dolu üçgen. Eğri üstündeki oklar için."""
    uzunluk = (dx * dx + dy * dy) ** 0.5 or 1.0
    bx, by = dx / uzunluk, dy / uzunluk          # birim yön
    nx, ny = -by, bx                             # dike birim
    pdf.set_fill_color(*renk)
    pdf.polygon([
        (cx + bx * boy, cy + by * boy),
        (cx - bx * boy * 0.55 + nx * boy * 0.62, cy - by * boy * 0.55 + ny * boy * 0.62),
        (cx - bx * boy * 0.55 - nx * boy * 0.62, cy - by * boy * 0.55 - ny * boy * 0.62),
    ], style="F")


def dongu(adimlar, merkez=""):
    """
    Dört adımlı çevrim (hücre döngüsü, su döngüsü, karbon döngüsü).

    Kutular bir elips üstüne oturur; yön, elipsin üstündeki dört ok ucuyla
    verilir. Kutudan kutuya düz ok çekmek çapraz yönlerde çirkin durduğu
    için tercih edilmedi.
    """
    import math

    def ciz(pdf, x, y, g, h):
        kutu_g, kutu_h = min(44.0, g * 0.26), 11.5
        ox, oy = x + g / 2, y + h / 2
        rx = min(g * 0.30, (g - kutu_g) / 2 - 4)
        ry = (h - kutu_h) / 2 - 4

        # Yörünge
        pdf.set_draw_color(*CIZGI)
        pdf.set_line_width(0.6)
        pdf.ellipse(ox - rx, oy - ry, rx * 2, ry * 2, style="D")

        # Saat yönü ok uçları — kutuların arasına düşen dört açı
        for aci in (45, 315, 225, 135):
            t = math.radians(aci)
            px, py = ox + rx * math.cos(t), oy - ry * math.sin(t)
            _ok_ucu(pdf, px, py, rx * math.sin(t), ry * math.cos(t), MARKA, 2.6)

        # Kutular: üst, sağ, alt, sol
        konumlar = [
            (ox - kutu_g / 2, oy - ry - kutu_h / 2),
            (ox + rx - kutu_g / 2, oy - kutu_h / 2),
            (ox - kutu_g / 2, oy + ry - kutu_h / 2),
            (ox - rx - kutu_g / 2, oy - kutu_h / 2),
        ]
        for i, metin in enumerate(adimlar[:4]):
            cx, cy = konumlar[i]
            cerceve, zemin = PALET[i % len(PALET)]
            _kutu(pdf, cx, cy, kutu_g, kutu_h, cerceve, zemin)
            _yazi_ortala(pdf, metin, cx + 0.75, cy, kutu_g - 1.5, kutu_h, 7.0, "B")

        if merkez:
            _yazi_ortala(pdf, merkez, ox - 24, oy - 5, 48, 10, 8.0, "B", MARKA_KOYU)

    ciz.onerilen_yukseklik = 56.0
    return ciz


# ------------------------------------------------------------------
# 4) Piramit — besin piramidi, organizasyon basamakları
# ------------------------------------------------------------------

def piramit(katmanlar, sag_etiketler=None, tepeden=True):
    """
    katmanlar : tepeden tabana sıralı ["3. tüketici", "2. tüketici", ...]
    """
    def ciz(pdf, x, y, g, h):
        n = len(katmanlar)
        kat_h = (h - 8) / n
        taban = g * 0.62 if sag_etiketler else g * 0.78
        merkez = x + (g * 0.36 if sag_etiketler else g / 2)
        for i, metin in enumerate(katmanlar):
            ust_oran = (i + 0.28) / n
            alt_oran = (i + 1.28) / n
            ust_g = taban * ust_oran
            alt_g = taban * alt_oran
            cy = y + 4 + i * kat_h
            cerceve, zemin = PALET[i % len(PALET)]
            pdf.set_draw_color(*cerceve)
            pdf.set_fill_color(*zemin)
            pdf.set_line_width(0.4)
            pdf.polygon([
                (merkez - ust_g / 2, cy), (merkez + ust_g / 2, cy),
                (merkez + alt_g / 2, cy + kat_h - 1.2),
                (merkez - alt_g / 2, cy + kat_h - 1.2),
            ], style="DF")
            _yazi_ortala(pdf, metin, merkez - alt_g / 2, cy, alt_g, kat_h - 1.2, 6.9, "B")
            if sag_etiketler and i < len(sag_etiketler) and sag_etiketler[i]:
                _yazi(pdf, sag_etiketler[i], x + g * 0.68, cy + 1.0, g * 0.30,
                      6.7, "", MUREKKEP_SOLUK, "L", 3.0)

    ciz.onerilen_yukseklik = 8.0 + len(katmanlar) * 11.0
    return ciz


# ------------------------------------------------------------------
# 5) Sınıflandırma ağacı — iki basamaklı dallanma
# ------------------------------------------------------------------

def agac(kok, dallar):
    """
    kok   : "Canlılar"
    dallar: [("Prokaryot", ["Bakteri", "Arke"]), ("Ökaryot", ["Protista", ...])]
    """
    def ciz(pdf, x, y, g, h):
        kok_g, kok_h = min(48.0, g * 0.30), 10.0
        kok_x = x + (g - kok_g) / 2
        _kutu(pdf, kok_x, y + 3, kok_g, kok_h, MARKA, ZEMIN_MOR)
        _yazi_ortala(pdf, kok, kok_x + 0.75, y + 3, kok_g - 1.5, kok_h, 7.6, "B")

        n = len(dallar)
        dal_g = (g - 10 - 5 * (n - 1)) / n
        dal_y = y + 3 + kok_h + 8
        omurga = y + 3 + kok_h + 4
        pdf.set_draw_color(*MARKA)
        pdf.set_line_width(0.45)
        pdf.line(kok_x + kok_g / 2, y + 3 + kok_h, kok_x + kok_g / 2, omurga)

        for i, (ad, yapraklar) in enumerate(dallar):
            cx = x + 5 + i * (dal_g + 5)
            orta = cx + dal_g / 2
            pdf.set_draw_color(*MARKA)
            pdf.line(orta, omurga, orta, dal_y)
            if i == 0:
                pdf.line(orta, omurga, kok_x + kok_g / 2, omurga)
            if i == n - 1:
                pdf.line(kok_x + kok_g / 2, omurga, orta, omurga)
            cerceve, zemin = PALET[(i + 1) % len(PALET)]
            _kutu(pdf, cx, dal_y, dal_g, 9.5, cerceve, zemin)
            _yazi_ortala(pdf, ad, cx + 0.75, dal_y, dal_g - 1.5, 9.5, 7.2, "B")

            # Yapraklar dalın altında, içeri girintili bir merdiven olarak durur:
            # dikey omurga soldan iner, her yaprağa yatay bir dal uzanır.
            yaprak_g = dal_g * 0.72
            yaprak_x = cx + (dal_g - yaprak_g) / 2 + 4
            omurga_x = yaprak_x - 4
            yaprak_y = dal_y + 11.5
            pdf.set_draw_color(*CIZGI)
            pdf.set_line_width(0.35)
            pdf.line(orta, dal_y + 9.5, orta, yaprak_y - 3)
            if yapraklar:
                pdf.line(orta, yaprak_y - 3, omurga_x, yaprak_y - 3)
            for j, yaprak in enumerate(yapraklar):
                yy = yaprak_y + j * 6.6
                if yy + 5.4 > y + h - 1:
                    break
                pdf.set_draw_color(*CIZGI)
                pdf.line(omurga_x, yaprak_y - 3, omurga_x, yy + 2.7)
                pdf.line(omurga_x, yy + 2.7, yaprak_x, yy + 2.7)
                _kutu(pdf, yaprak_x, yy, yaprak_g, 5.4, CIZGI, ZEMIN_SOLUK, 1.0)
                _yazi_ortala(pdf, yaprak, yaprak_x + 0.5, yy, yaprak_g - 1, 5.4, 6.6, "")
    ciz.onerilen_yukseklik = 34.0 + max(len(y) for _, y in dallar) * 6.6

    return ciz


# ------------------------------------------------------------------
# 6) Karşılaştırma — iki sütun, ortada ortak alan
# ------------------------------------------------------------------

def karsilastirma(sol_baslik, sol, sag_baslik, sag, ortak_baslik=None, ortak=None):
    """Mitoz/mayoz, bitki/hayvan hücresi, DNA/RNA gibi ikili ayrımlar."""
    def ciz(pdf, x, y, g, h):
        sutun = 3 if ortak else 2
        bosluk = 4.0
        sut_g = (g - 12 - bosluk * (sutun - 1)) / sutun
        bloklar = [(sol_baslik, sol, PALET[0])]
        if ortak:
            bloklar.append((ortak_baslik or "Ortak", ortak, PALET[2]))
        bloklar.append((sag_baslik, sag, PALET[1]))

        for i, (baslik, ogeler, (cerceve, zemin)) in enumerate(bloklar):
            cx = x + 6 + i * (sut_g + bosluk)
            _kutu(pdf, cx, y + 4, sut_g, h - 8, cerceve, zemin)
            pdf.set_fill_color(*cerceve)
            pdf.rect(cx, y + 4, sut_g, 6.6, style="F", round_corners=("TOP_LEFT", "TOP_RIGHT"),
                     corner_radius=1.6)
            _yazi_ortala(pdf, baslik, cx + 0.75, y + 4, sut_g - 1.5, 6.6, 7.2, "B", (255, 255, 255))
            yy = y + 13
            for oge in ogeler:
                if yy > y + h - 7:
                    break
                pdf.set_fill_color(*cerceve)
                pdf.circle(cx + 3.0, yy + 1.6, 0.7, style="F")
                pdf.set_font("Liberation", "", 6.9)
                pdf.set_text_color(*MUREKKEP)
                pdf.set_xy(cx + 5.0, yy)
                pdf.multi_cell(sut_g - 6.5, 3.2, oge, align="L", markdown=True)
                yy = pdf.get_y() + 1.3
    ciz.onerilen_yukseklik = 16.0 + max(
        len(sol), len(sag), len(ortak or [])
    ) * 7.4

    return ciz


# ------------------------------------------------------------------
# 7) Katmanlı yapı — zar, toprak, atmosfer, epitel
# ------------------------------------------------------------------

def katmanlar(satirlar, sol_baslik=None):
    """
    satirlar : [("Fosfolipit çift tabaka", "Yağda çözünenler doğrudan geçer"), ...]
               Üstten alta doğru sıralanır.
    """
    def ciz(pdf, x, y, g, h):
        n = len(satirlar)
        kat_h = (h - 8) / n
        sol_g = g * 0.40
        for i, (ad, aciklama) in enumerate(satirlar):
            cy = y + 4 + i * kat_h
            cerceve, zemin = PALET[i % len(PALET)]
            _kutu(pdf, x + 6, cy, sol_g, kat_h - 1.6, cerceve, zemin, 1.2)
            _yazi_ortala(pdf, ad, x + 6.75, cy, sol_g - 1.5, kat_h - 1.6, 7.0, "B")
            if aciklama:
                _yazi(pdf, aciklama, x + sol_g + 10, cy + 0.8, g - sol_g - 16,
                      6.8, "", MUREKKEP_SOLUK, "L", 3.1)
        if sol_baslik:
            _yazi(pdf, sol_baslik, x + 6, y + 0.5, sol_g, 6.6, "B", MARKA_KOYU, "C", 3.0)
    ciz.onerilen_yukseklik = 8.0 + len(satirlar) * 12.0

    return ciz


# ------------------------------------------------------------------
# 8) Grafik — enzim hızı, popülasyon, çözünürlük
# ------------------------------------------------------------------

def grafik(x_etiket, y_etiket, egriler, notlar=None, gosterge="sol-ust"):
    """
    egriler  : [(ad, [(x, y), ...], renk)] — x ve y 0..1 aralığında oran
    notlar   : [(x_oran, y_oran, "metin")] grafiğin üstüne düşülen not
    gosterge : "sol-ust" | "sag-ust" | "sag-alt" — eğrilerin boş bıraktığı köşe
    """
    def ciz(pdf, x, y, g, h):
        sol, alt = x + 14, y + h - 12
        sag, ust = x + g - 10, y + 9
        gen, yuk = sag - sol, alt - ust

        pdf.set_draw_color(*CIZGI_INCE)
        pdf.set_line_width(0.2)
        for i in range(1, 4):
            pdf.line(sol, alt - yuk * i / 4, sag, alt - yuk * i / 4)
            pdf.line(sol + gen * i / 4, ust, sol + gen * i / 4, alt)

        pdf.set_draw_color(*MUREKKEP_SOLUK)
        pdf.set_line_width(0.5)
        pdf.line(sol, ust, sol, alt)
        pdf.line(sol, alt, sag, alt)

        for _, noktalar, renk in egriler:
            pdf.set_draw_color(*renk)
            pdf.set_line_width(0.9)
            for i in range(len(noktalar) - 1):
                x1, y1 = noktalar[i]
                x2, y2 = noktalar[i + 1]
                pdf.line(sol + gen * x1, alt - yuk * y1, sol + gen * x2, alt - yuk * y2)

        # Eksen adları — eğrilerin üstüne düşmesin diye çerçevenin dışına
        _yazi(pdf, y_etiket, x + 1, ust - 5.4, gen * 0.6, 6.8, "B", MUREKKEP_SOLUK, "L", 3.0)
        _yazi(pdf, x_etiket, sag - 46, alt + 3.0, 46, 6.8, "B", MUREKKEP_SOLUK, "R", 3.0)

        # Gösterge — sağ üst köşede, eğri adları burada okunur
        adli = [(ad, renk) for ad, _, renk in egriler if ad]
        if adli:
            kutu_h = 3.9 * len(adli) + 2.4
            kutu_g = 40.0
            kx = sol + 2.5 if gosterge.startswith("sol") else sag - kutu_g - 2.5
            ky = ust + 1.5 if gosterge.endswith("ust") else alt - kutu_h - 2.5
            pdf.set_fill_color(255, 255, 255)
            pdf.set_draw_color(*CIZGI)
            pdf.set_line_width(0.25)
            pdf.rect(kx, ky, kutu_g, kutu_h, style="DF", round_corners=True, corner_radius=1.0)
            for i, (ad, renk) in enumerate(adli):
                yy = ky + 1.4 + i * 3.9
                pdf.set_draw_color(*renk)
                pdf.set_line_width(0.9)
                pdf.line(kx + 2, yy + 1.6, kx + 7, yy + 1.6)
                _yazi(pdf, ad, kx + 8.5, yy, kutu_g - 10, 6.3, "", MUREKKEP, "L", 3.1)

        for nx, ny, metin in (notlar or []):
            _yazi(pdf, metin, sol + gen * nx, alt - yuk * ny, 30, 6.4, "", MUREKKEP, "L", 2.9)
    ciz.onerilen_yukseklik = 48.0

    return ciz


# ------------------------------------------------------------------
# 9) Etiketli kutu dizisi — kavram kartları (yatay ızgara)
# ------------------------------------------------------------------

def kartlar(ogeler, sutun=3):
    """
    ogeler : [("Başlık", "kısa açıklama"), ...]
    Organel listesi, biyomoleküller, element grupları için.
    """
    def ciz(pdf, x, y, g, h):
        n = len(ogeler)
        satir = (n + sutun - 1) // sutun
        bosluk = 3.4
        kart_g = (g - 12 - bosluk * (sutun - 1)) / sutun
        kart_h = (h - 8 - bosluk * (satir - 1)) / satir
        for i, (baslik, aciklama) in enumerate(ogeler):
            r, c = divmod(i, sutun)
            cx = x + 6 + c * (kart_g + bosluk)
            cy = y + 4 + r * (kart_h + bosluk)
            cerceve, zemin = PALET[i % len(PALET)]
            _kutu(pdf, cx, cy, kart_g, kart_h, cerceve, zemin, 1.4)
            _yazi(pdf, baslik, cx + 1.5, cy + 1.6, kart_g - 3, 7.0, "B", MUREKKEP, "C", 3.1)
            if aciklama:
                _yazi(pdf, aciklama, cx + 1.5, cy + 5.6, kart_g - 3, 6.4,
                      "", MUREKKEP_SOLUK, "C", 2.8)
    ciz.onerilen_yukseklik = 8.0 + ((len(ogeler) + sutun - 1) // sutun) * 15.0

    return ciz
