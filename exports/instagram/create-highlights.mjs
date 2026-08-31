import { readFile, writeFile, mkdir } from "node:fs/promises";
import { spawnSync } from "node:child_process";

const root = "/Users/furkantalhayazcicek/Desktop/DRKOÇ";
const outDir = `${root}/exports/instagram/highlights`;
await mkdir(outDir, { recursive: true });

const slides = [
  {
    key: "atlaslar",
    title: "ATLASLAR",
    subtitle: "Kavramı görerek keşfet.",
    image: `${root}/exports/instagram-atlas-mobile.png`,
    dark: true,
  },
  {
    key: "soru-kutuphanesi",
    title: "SORU KÜTÜPHANESİ",
    subtitle: "Çöz, düşün, geri bildirim al.",
    image: `${root}/exports/instagram-soru-mobile.png`,
    dark: false,
  },
  {
    key: "etkilesimli",
    title: "ETKİLEŞİMLİ",
    subtitle: "Formülü hareket ettirerek öğren.",
    image: `${root}/exports/instagram-atlas-mobile.png`,
    dark: true,
  },
  {
    key: "not-kutuphanesi",
    title: "NOT KÜTÜPHANESİ",
    subtitle: "Anlatım → bağlantı → kontrol.",
    image: `${root}/exports/instagram-notlar-mobile.png`,
    dark: false,
  },
  {
    key: "ogrenci-analiz",
    title: "ÖĞRENCİ ANALİZ",
    subtitle: "Çalışman görünür, sıradaki adım net.",
    image: `${root}/exports/instagram-ogrenci-analiz-mobile.png`,
    dark: false,
  },
  {
    key: "veli-paneli",
    title: "VELİ PANELİ",
    subtitle: "Süreci sessizce, netçe takip edin.",
    image: `${root}/exports/instagram-veli-paneli-mobile2.png`,
    dark: false,
  },
];

const esc = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

for (const slide of slides) {
  const data = (await readFile(slide.image)).toString("base64");
  const bg = slide.dark ? "#0b1022" : "#f7f7fb";
  const ink = slide.dark ? "#f7f8ff" : "#10152b";
  const muted = slide.dark ? "#a7b6dd" : "#6f7488";
  const accent = slide.dark ? "#8bb6ff" : "#6c3cf0";
  const panel = slide.dark ? "#141c38" : "#ffffff";
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" height="1920" viewBox="0 0 1080 1920">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${bg}"/>
      <stop offset="100%" stop-color="${slide.dark ? "#151d3d" : "#ecebff"}"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#050815" flood-opacity="0.25"/>
    </filter>
    <clipPath id="screenClip"><rect x="180" y="280" width="720" height="1558" rx="38"/></clipPath>
  </defs>
  <rect width="1080" height="1920" fill="url(#bg)"/>
  <circle cx="1040" cy="190" r="220" fill="${accent}" opacity="0.08"/>
  <circle cx="-20" cy="1740" r="250" fill="${accent}" opacity="0.06"/>
  <rect x="72" y="70" width="38" height="38" rx="12" fill="${accent}"/>
  <path d="M84 89h14M91 82v14" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity="0.95"/>
  <text x="128" y="97" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700" letter-spacing="1" fill="${ink}">DRKOÇ</text>
  <text x="72" y="164" font-family="Arial, Helvetica, sans-serif" font-size="56" font-weight="800" letter-spacing="1.2" fill="${ink}">${esc(slide.title)}</text>
  <text x="74" y="214" font-family="Arial, Helvetica, sans-serif" font-size="27" font-weight="500" fill="${muted}">${esc(slide.subtitle)}</text>
  <rect x="166" y="266" width="748" height="1590" rx="48" fill="${panel}" opacity="0.88" filter="url(#shadow)"/>
  <image x="180" y="280" width="720" height="1558" preserveAspectRatio="xMidYMid slice" clip-path="url(#screenClip)" xlink:href="data:image/png;base64,${data}"/>
  <rect x="180" y="280" width="720" height="1558" rx="38" fill="none" stroke="${slide.dark ? "#5f78b3" : "#d6d8e5"}" stroke-width="2"/>
  <rect x="72" y="1872" width="936" height="1" fill="${accent}" opacity="0.32"/>
  <text x="72" y="1907" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="600" letter-spacing="0.8" fill="${muted}">GÖREREK ÖĞREN · VERİNLE İLERLE</text>
  <text x="1008" y="1907" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" fill="${accent}">drkoc.app</text>
</svg>`;
  const svgPath = `${outDir}/story-${slide.key}.svg`;
  const pngPath = `${outDir}/story-${slide.key}.png`;
  await writeFile(svgPath, svg, "utf8");
  const result = spawnSync("sips", ["-s", "format", "png", svgPath, "--out", pngPath], { encoding: "utf8" });
  if (result.status !== 0) throw new Error(`sips failed for ${slide.key}: ${result.stderr}`);
}

console.log(`Hazırlandı: ${slides.length} Story görseli → ${outDir}`);
