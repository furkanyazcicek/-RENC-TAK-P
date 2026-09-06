"""
HAM BİLGİ NOTLARINI ÜRET
==================================================================

    python3 scripts/ham-bilgi/uret.py             tüm dersler
    python3 scripts/ham-bilgi/uret.py biyoloji    tek ders
    python3 scripts/ham-bilgi/uret.py biyoloji hucre   tek konu

Çıktılar `public/kutuphane-notlari/<sinav>-<ders>/<slug>.pdf` altına
yazılır ve siteyle birlikte yayına gider. Kütüphane sayfası bu
dosyaları `src/content/hamBilgiNotlari.js` üzerinden bulur; üretim
bittiğinde o defter de burada güncellenir.
"""

import importlib.util
import json
import sys
from pathlib import Path

KOK = Path(__file__).resolve().parent
sys.path.insert(0, str(KOK))

from uretici import belge_uret  # noqa: E402

PROJE = KOK.parent.parent
CIKTI_KOKU = PROJE / "public" / "kutuphane-notlari"
DEFTER = PROJE / "src" / "content" / "hamBilgiNotlari.js"

DERSLER = ["biyoloji", "kimya", "fizik", "matematik", "geometri",
           "turkce", "tarih", "cografya", "felsefe", "din-kulturu"]


def konu_modulleri(ders):
    klasor = KOK / "icerik" / ders
    if not klasor.is_dir():
        return []
    return sorted(p for p in klasor.glob("*.py") if not p.name.startswith("_"))


def modulu_yukle(yol):
    ad = f"hambilgi_{yol.parent.name}_{yol.stem}".replace("-", "_")
    spec = importlib.util.spec_from_file_location(ad, yol)
    modul = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(modul)
    return modul


def eksik_karakterleri_bul(veri):
    """
    Fontta karşılığı olmayan karakterleri toplar.

    Gömülü Liberation Sans'ta bulunmayan bir karakter PDF'te sessizce
    boşluk olarak çıkar. Bir eğitim ürününde bu, öğrencinin "CO2"
    yerine "CO" okuması demektir; bu yüzden üretim, karakter eksikse
    hata verip durur.
    """
    from fontTools.ttLib import TTFont

    # Ana font ve yedek matematik fontu birlikte taranır; yedekte bulunan
    # bir sembol (küme işaretleri gibi) eksik sayılmaz.
    kapsam = set()
    for dosya in ("LiberationSans-Regular.ttf", "KaTeX_Main-Regular.ttf"):
        font = TTFont(KOK / "fontlar" / dosya)
        for tablo in font["cmap"].tables:
            kapsam.update(tablo.cmap.keys())

    bulunanlar = set()

    def gez(deger):
        if isinstance(deger, str):
            for ch in deger:
                if ord(ch) > 127 and ord(ch) not in kapsam:
                    bulunanlar.add(ch)
        elif isinstance(deger, dict):
            for v in deger.values():
                gez(v)
        elif isinstance(deger, (list, tuple)):
            for v in deger:
                gez(v)

    gez(veri)
    return sorted(bulunanlar)


def defteri_yaz(kayitlar):
    """Kütüphanenin okuduğu JS defterini üretir (elle düzenlenmez)."""
    govde = json.dumps(kayitlar, ensure_ascii=False, indent=2)
    DEFTER.write_text(
        "/**\n"
        " * HAM BİLGİ NOTLARI DEFTERİ  (otomatik üretilir — elle düzenlemeyin)\n"
        " * ==================================================================\n"
        " *\n"
        " * Her etkileşimli ders notunun yanında duran, yazdırılabilir PDF\n"
        " * çalışma notudur. Dosyalar `public/kutuphane-notlari/` altında\n"
        " * durur ve siteyle birlikte yayına gider; kütüphane bu defterden\n"
        " * hangi konuda hangi notun olduğunu öğrenir.\n"
        " *\n"
        " * Yeniden üretmek için:  python3 scripts/ham-bilgi/uret.py\n"
        " */\n\n"
        f"export const HAM_BILGI_NOTLARI = {govde}\n\n"
        "/** Bir konunun ham bilgi notunu döndürür; yoksa null. */\n"
        "export function hamBilgiNotuBul({ examType, subject, topic }) {\n"
        "  return (\n"
        "    HAM_BILGI_NOTLARI.find(\n"
        "      (kayit) =>\n"
        "        kayit.sinav === examType &&\n"
        "        kayit.ders === subject &&\n"
        "        kayit.konu === topic,\n"
        "    ) ?? null\n"
        "  )\n"
        "}\n\n"
        "export default HAM_BILGI_NOTLARI\n",
        encoding="utf-8",
    )


def main():
    hedef_ders = sys.argv[1] if len(sys.argv) > 1 else None
    hedef_konu = sys.argv[2] if len(sys.argv) > 2 else None
    dersler = [hedef_ders] if hedef_ders else DERSLER

    kayitlar = []
    uretilen = 0
    for ders in dersler:
        for yol in konu_modulleri(ders):
            if hedef_konu and yol.stem != hedef_konu:
                continue
            modul = modulu_yukle(yol)
            veri = modul.NOT
            eksik = eksik_karakterleri_bul(veri)
            if eksik:
                print(f"  ✗ {yol.name}: fontta olmayan karakter → "
                      f"{' '.join(eksik)}  (PDF'te boşluk çıkar, düzeltin)")
                return 1
            kunye = veri["kunye"]
            klasor = f"{kunye['sinav'].lower()}-{ders}"
            cikti = CIKTI_KOKU / klasor / f"{yol.stem}.pdf"
            _, sayfa = belge_uret(veri, cikti)
            boyut = cikti.stat().st_size
            uretilen += 1
            print(f"  ✓ {kunye['sinav']} · {kunye['ders']} · {kunye['konu']}"
                  f"  →  {sayfa} sayfa, {boyut // 1024} KB")
            kayitlar.append({
                "sinav": kunye["sinav"],
                "ders": kunye["ders"],
                "konu": kunye["konu"],
                "baslik": veri["baslik"],
                "ozet": veri["alt_baslik"],
                "dosya": f"/kutuphane-notlari/{klasor}/{yol.stem}.pdf",
                "sayfa": sayfa,
                "boyutKB": round(boyut / 1024),
            })

    # Tek konu üretiminde defteri bozmamak için yalnızca tam
    # çalıştırmada yeniden yazılır.
    if not hedef_ders and not hedef_konu:
        defteri_yaz(kayitlar)
        print(f"\nDefter güncellendi: {DEFTER.relative_to(PROJE)}")

    print(f"\nToplam {uretilen} not üretildi.")
    return 0 if uretilen else 1


if __name__ == "__main__":
    raise SystemExit(main())
