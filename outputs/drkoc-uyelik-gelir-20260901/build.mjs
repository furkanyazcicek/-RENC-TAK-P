import fs from "node:fs/promises";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outputDir = decodeURIComponent(new URL("./", import.meta.url).pathname);
const workbook = Workbook.create();
const summary = workbook.worksheets.add("Özet");
const assumptions = workbook.worksheets.add("Varsayımlar");
const model = workbook.worksheets.add("Gelir Tablosu");
const checks = workbook.worksheets.add("Kontroller");

const C = {
  navy: "#153D57",
  teal: "#0F766E",
  tealSoft: "#DDF4EF",
  ink: "#17212B",
  muted: "#5D6B75",
  line: "#D7E0E5",
  paper: "#F7FAFB",
  input: "#FFF7D6",
  white: "#FFFFFF",
  blue: "#0000FF",
  green: "#008000",
  good: "#DDF3E4",
  bad: "#FCE3E3",
};

const moneyFmt = '#,##0 "TL";[Red](#,##0 "TL");-';
const countFmt = '#,##0;[Red](#,##0);-';
const pctFmt = '0.0%;[Red](0.0%);-';

function setBase(sheet, range) {
  sheet.getRange(range).format = {
    font: { name: "Aptos", size: 10, color: C.ink },
    verticalAlignment: "center",
  };
}

function titleBand(sheet, range, title, subtitle) {
  sheet.getRange(range).merge();
  sheet.getRange(range).values = [[title]];
  sheet.getRange(range).format = {
    fill: C.navy,
    font: { name: "Aptos Display", size: 20, bold: true, color: C.white },
    verticalAlignment: "center",
  };
  const subtitleRange = sheet.getRange(range).offset(1, 0).resize(1, sheet.getRange(range).columnCount);
  subtitleRange.merge();
  subtitleRange.values = [[subtitle]];
  subtitleRange.format = {
    fill: C.navy,
    font: { name: "Aptos", size: 10, color: "#DCE8EF" },
    verticalAlignment: "center",
  };
}

function sectionHeader(sheet, range, text) {
  sheet.getRange(range).merge();
  sheet.getRange(range).values = [[text]];
  sheet.getRange(range).format = {
    fill: C.teal,
    font: { name: "Aptos", size: 11, bold: true, color: C.white },
    verticalAlignment: "center",
  };
}

for (const sheet of [summary, assumptions, model, checks]) sheet.showGridLines = false;

// VARSAYIMLAR
setBase(assumptions, "A1:E22");
titleBand(
  assumptions,
  "A1:E1",
  "DRKOÇ · Üyelik Gelir Modeli",
  "Mavi yazılı hücreler değiştirilebilir kaba taslak varsayımlardır. Tutarlar TL'dir."
);
assumptions.getRange("A1:E1").format.rowHeight = 34;
assumptions.getRange("A2:E2").format.rowHeight = 22;
sectionHeader(assumptions, "A4:E4", "Temel varsayımlar");
assumptions.getRange("A5:E5").values = [["Varsayım", "Değer", "Birim", "Modelde kullanım", "Not"]];
assumptions.getRange("A5:E5").format = {
  fill: "#E8EEF2",
  font: { bold: true, color: C.ink },
  borders: { bottom: { style: "thin", color: C.line } },
};
assumptions.getRange("A6:E11").values = [
  ["Aylık üyelik fiyatı", 299, "TL / kullanıcı", "Brüt ciro", "KDV dahil liste fiyatı varsayımı"],
  ["KDV oranı", 0.20, "%", "KDV ayrıştırma", "Fiyatın içindeki KDV'yi ayırır"],
  ["Tahsilat / mağaza komisyonu", 0.05, "%", "Net satış geliri", "Brüt tahsilat üzerinden"],
  ["Aylık değişken hizmet maliyeti", 20, "TL / kullanıcı", "Katkı payı", "Sunucu, yapay zekâ ve destek için kaba varsayım"],
  ["Aylık sabit işletme gideri", 250000, "TL / ay", "İşletme sonucu", "Ekip, pazarlama ve genel gider için kaba varsayım"],
  ["Yıllık dönem", 12, "ay", "Yıllıklaştırma", "Aylık değerleri 12 ay ile çarpar"],
];
assumptions.getRange("B6:B11").format = {
  fill: C.input,
  font: { color: C.blue, bold: true },
  horizontalAlignment: "right",
};
assumptions.getRange("B6").format.numberFormat = moneyFmt;
assumptions.getRange("B7:B8").format.numberFormat = pctFmt;
assumptions.getRange("B9:B10").format.numberFormat = moneyFmt;
assumptions.getRange("B11").format.numberFormat = countFmt;
assumptions.getRange("A6:E11").format.borders = {
  insideHorizontal: { style: "thin", color: C.line },
  bottom: { style: "thin", color: C.line },
};

sectionHeader(assumptions, "A13:E13", "Birim ekonomi ve başabaş noktası");
assumptions.getRange("A14:B18").values = [
  ["KDV hariç gelir / kullanıcı", null],
  ["Komisyon / kullanıcı", null],
  ["Net satış geliri / kullanıcı", null],
  ["Katkı payı / kullanıcı", null],
  ["Tahmini başabaş üye sayısı", null],
];
assumptions.getRange("B14:B18").formulas = [
  ["=B6/(1+B7)"],
  ["=B6*B8"],
  ["=B14-B15"],
  ["=B16-B9"],
  ["=ROUNDUP(B10/B17,0)"],
];
assumptions.getRange("B14:B17").format.numberFormat = moneyFmt;
assumptions.getRange("B18").format.numberFormat = countFmt;
assumptions.getRange("A14:B18").format.borders = {
  insideHorizontal: { style: "thin", color: C.line },
  bottom: { style: "thin", color: C.line },
};
assumptions.getRange("A20:E21").merge(true);
assumptions.getRange("A20:E21").values = [
  ["Kapsam notu: Bu çalışma vergi/muhasebe görüşü değil, karar vermeyi kolaylaştıran kaba bir üyelik gelir senaryosudur."],
  ["Üye sayıları aktif ve ödeme yapan kullanıcıyı ifade eder; ücretsiz kullanıcılar ve churn (üyelik kaybı) ayrıca modellenmemiştir."],
];
assumptions.getRange("A20:E21").format = {
  fill: C.paper,
  font: { italic: true, color: C.muted },
  wrapText: true,
};
assumptions.getRange("A20:E21").format.rowHeight = 30;
assumptions.getRange("A:A").format.columnWidth = 30;
assumptions.getRange("B:B").format.columnWidth = 18;
assumptions.getRange("C:C").format.columnWidth = 17;
assumptions.getRange("D:D").format.columnWidth = 21;
assumptions.getRange("E:E").format.columnWidth = 38;
assumptions.freezePanes.freezeRows(5);

workbook.comments.setSelf({ displayName: "User" });
const commentNotes = {
  B6: "Kaba taslak varsayım: aylık KDV dahil üyelik fiyatı. Fiyat stratejisi netleşince güncelleyin.",
  B7: "Kaba taslak varsayım. Güncel vergi ve muhasebe uygulaması için mali müşavire doğrulatın.",
  B8: "Kaba taslak varsayım: ödeme altyapısı / uygulama mağazası karışık ortalama kesinti oranı.",
  B9: "Kaba taslak varsayım: kullanıcı başına sunucu, yapay zekâ ve destek maliyeti.",
  B10: "Kaba taslak varsayım: ekip, pazarlama ve genel giderlerin aylık toplamı.",
};
for (const [cell, note] of Object.entries(commentNotes)) {
  workbook.comments.addThread({ cell: assumptions.getRange(cell) }, note);
}

// GELİR TABLOSU
setBase(model, "A1:M18");
titleBand(
  model,
  "A1:M1",
  "1.000–10.000 Ücretli Üye Senaryosu",
  "Aylık ve yıllık sonuçlar, Varsayımlar sayfasındaki düzenlenebilir girdilere bağlıdır."
);
model.getRange("A1:M1").format.rowHeight = 34;
model.getRange("A2:M2").format.rowHeight = 22;
sectionHeader(model, "A4:M4", "Senaryo gelir tablosu");
model.getRange("A6:M6").values = [[
  "Aktif ücretli üye",
  "Aylık brüt ciro",
  "Aylık KDV",
  "KDV hariç ciro",
  "Tahsilat komisyonu",
  "Net satış geliri",
  "Değişken maliyet",
  "Katkı payı",
  "Sabit gider",
  "Aylık işletme sonucu",
  "Yıllık brüt ciro",
  "Yıllık net satış geliri",
  "Yıllık işletme sonucu",
]];
model.getRange("A6:M6").format = {
  fill: "#E8EEF2",
  font: { bold: true, color: C.ink },
  wrapText: true,
  horizontalAlignment: "center",
  verticalAlignment: "center",
  borders: { bottom: { style: "medium", color: C.navy } },
};
model.getRange("A6:M6").format.rowHeight = 44;
model.getRange("A7:A16").values = Array.from({ length: 10 }, (_, i) => [(i + 1) * 1000]);
for (let row = 7; row <= 16; row++) {
  model.getRange(`B${row}:M${row}`).formulas = [[
    `=A${row}*'Varsayımlar'!$B$6`,
    `=B${row}*'Varsayımlar'!$B$7/(1+'Varsayımlar'!$B$7)`,
    `=B${row}-C${row}`,
    `=B${row}*'Varsayımlar'!$B$8`,
    `=D${row}-E${row}`,
    `=A${row}*'Varsayımlar'!$B$9`,
    `=F${row}-G${row}`,
    `='Varsayımlar'!$B$10`,
    `=H${row}-I${row}`,
    `=B${row}*'Varsayımlar'!$B$11`,
    `=F${row}*'Varsayımlar'!$B$11`,
    `=J${row}*'Varsayımlar'!$B$11`,
  ]];
}
model.getRange("A7:A16").format.numberFormat = countFmt;
model.getRange("B7:M16").format.numberFormat = moneyFmt;
model.getRange("A7:M16").format.borders = {
  insideHorizontal: { style: "thin", color: C.line },
};
model.getRange("A7:A16").format.font = { bold: true, color: C.ink };
model.getRange("B7:M16").format.font = { color: C.green };
model.getRange("J7:J16").conditionalFormats.add("cellIs", {
  operator: "lessThan",
  formula: 0,
  format: { fill: C.bad, font: { color: "#A12A2A", bold: true } },
});
model.getRange("J7:J16").conditionalFormats.add("cellIs", {
  operator: "greaterThanOrEqual",
  formula: 0,
  format: { fill: C.good, font: { color: "#17603A", bold: true } },
});
model.getRange("M7:M16").conditionalFormats.add("cellIs", {
  operator: "lessThan",
  formula: 0,
  format: { fill: C.bad, font: { color: "#A12A2A", bold: true } },
});
model.getRange("M7:M16").conditionalFormats.add("cellIs", {
  operator: "greaterThanOrEqual",
  formula: 0,
  format: { fill: C.good, font: { color: "#17603A", bold: true } },
});
model.getRange("A18:M18").merge();
model.getRange("A18:M18").values = [["Not: İşletme sonucu = net satış geliri − değişken maliyet − sabit gider. Finansman, kurumlar vergisi ve yatırım harcamaları kapsam dışıdır."]];
model.getRange("A18:M18").format = {
  fill: C.paper,
  font: { italic: true, color: C.muted },
  wrapText: true,
};
model.getRange("A18:M18").format.rowHeight = 30;
for (const col of ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"]) {
  model.getRange(`${col}:${col}`).format.columnWidth = col === "A" ? 18 : 19;
}
model.freezePanes.freezeRows(6);

// ÖZET
setBase(summary, "A1:L30");
titleBand(
  summary,
  "A1:L1",
  "DRKOÇ · Üyelik Geliri Özeti",
  "Kaba taslak senaryo · 1.000–10.000 aktif ödeme yapan üye"
);
summary.getRange("A1:L1").format.rowHeight = 34;
summary.getRange("A2:L2").format.rowHeight = 22;

const cards = [
  { range: "A5:C5", label: "1.000 ÜYE", row: 7 },
  { range: "A11:C11", label: "5.000 ÜYE", row: 11 },
  { range: "A17:C17", label: "10.000 ÜYE", row: 16 },
];
for (const card of cards) {
  summary.getRange(card.range).merge();
  summary.getRange(card.range).values = [[card.label]];
  summary.getRange(card.range).format = {
    fill: C.teal,
    font: { bold: true, color: C.white, size: 11 },
    horizontalAlignment: "center",
  };
  const start = Number(card.range.match(/\d+/)[0]) + 1;
  summary.getRange(`A${start}:B${start + 3}`).values = [
    ["Aylık brüt ciro", null],
    ["Aylık net satış", null],
    ["Aylık işletme sonucu", null],
    ["Yıllık net satış", null],
  ];
  summary.getRange(`C${start}:C${start + 3}`).formulas = [
    [`='Gelir Tablosu'!B${card.row}`],
    [`='Gelir Tablosu'!F${card.row}`],
    [`='Gelir Tablosu'!J${card.row}`],
    [`='Gelir Tablosu'!L${card.row}`],
  ];
  summary.getRange(`A${start}:C${start + 3}`).format.borders = {
    insideHorizontal: { style: "thin", color: C.line },
    bottom: { style: "thin", color: C.line },
  };
  summary.getRange(`C${start}:C${start + 3}`).format.numberFormat = moneyFmt;
  summary.getRange(`C${start}:C${start + 3}`).format.font = { color: C.green, bold: true };
}

sectionHeader(summary, "A23:C23", "Başabaş görünümü");
summary.getRange("A24:B26").values = [
  ["Tahmini başabaş üye", null],
  ["Net satış / kullanıcı", null],
  ["Katkı payı / kullanıcı", null],
];
summary.getRange("C24:C26").formulas = [
  ["='Varsayımlar'!B18"],
  ["='Varsayımlar'!B16"],
  ["='Varsayımlar'!B17"],
];
summary.getRange("C24").format.numberFormat = countFmt;
summary.getRange("C25:C26").format.numberFormat = moneyFmt;
summary.getRange("C24:C26").format.font = { color: C.green, bold: true };
summary.getRange("A24:C26").format.borders = {
  insideHorizontal: { style: "thin", color: C.line },
  bottom: { style: "thin", color: C.line },
};

summary.getRange("E23:L23").merge();
summary.getRange("E23:L23").values = [["Kullanım"]];
summary.getRange("E23:L23").format = {
  fill: C.tealSoft,
  font: { bold: true, color: C.teal },
};
summary.getRange("E24:L27").merge(true);
summary.getRange("E24:L27").values = [
  ["1. Sarı/mavi Varsayımlar hücrelerini güncelleyin."],
  ["2. Gelir Tablosu sayfasında 1.000–10.000 üye sonuçlarını inceleyin."],
  ["3. İşletme sonucu, finansman ve kurumlar vergisi öncesi kaba göstergedir."],
  ["4. Üye sayıları aktif ve ödeme yapan kullanıcıyı ifade eder."],
];
summary.getRange("E24:L27").format = { wrapText: true, font: { color: C.muted } };
summary.getRange("E24:L27").format.rowHeight = 24;

// Grafik için formül bağlantılı yardımcı alan.
summary.getRange("N1:P1").values = [["Üye", "Aylık net satış", "Aylık işletme sonucu"]];
for (let i = 0; i < 10; i++) {
  const sRow = i + 2;
  const mRow = i + 7;
  summary.getRange(`N${sRow}:P${sRow}`).formulas = [[
    `='Gelir Tablosu'!A${mRow}`,
    `='Gelir Tablosu'!F${mRow}`,
    `='Gelir Tablosu'!J${mRow}`,
  ]];
}
const chart = summary.charts.add("line", summary.getRange("N1:P11"));
chart.title = "Üye sayısına göre aylık sonuç (TL)";
chart.titleTextStyle.fontSize = 12;
chart.hasLegend = true;
chart.xAxis = { axisType: "textAxis", textStyle: { fontSize: 9 } };
chart.yAxis = { numberFormatCode: '#,##0 "TL"', textStyle: { fontSize: 9 } };
chart.setPosition("E4", "L20");

summary.getRange("A:A").format.columnWidth = 26;
summary.getRange("B:B").format.columnWidth = 3;
summary.getRange("C:C").format.columnWidth = 18;
for (const col of ["D", "E", "F", "G", "H", "I", "J", "K", "L"]) {
  summary.getRange(`${col}:${col}`).format.columnWidth = col === "D" ? 3 : 14;
}
summary.getRange("N:P").format.columnWidth = 18;

// KONTROLLER
setBase(checks, "A1:G15");
titleBand(
  checks,
  "A1:G1",
  "Model Kontrolleri",
  "Kaba taslak modelin temel tutarlılık ve giriş kontrolleri"
);
checks.getRange("A1:G1").format.rowHeight = 34;
checks.getRange("A2:G2").format.rowHeight = 22;
sectionHeader(checks, "A4:G4", "Kontrol özeti");
checks.getRange("A5:G5").values = [["Kontrol", "Gerçek", "Beklenen", "Fark", "Tolerans", "Durum", "Düzeltme / not"]];
checks.getRange("A5:G5").format = {
  fill: "#E8EEF2",
  font: { bold: true },
  wrapText: true,
  borders: { bottom: { style: "medium", color: C.navy } },
};
checks.getRange("A6:G11").values = [
  ["Üyelik fiyatı pozitif", null, 1, null, 0, null, "Varsayımlar!B6"],
  ["KDV oranı 0–100% aralığında", null, 1, null, 0, null, "Varsayımlar!B7"],
  ["Komisyon oranı 0–100% aralığında", null, 1, null, 0, null, "Varsayımlar!B8"],
  ["Kullanıcı başı katkı payı pozitif", null, 1, null, 0, null, "Varsayımlar!B17"],
  ["10.000 üye brüt ciro = 10 × 1.000", null, null, null, 0.01, null, "Gelir Tablosu!B7 ve B16"],
  ["Yıllık net satış = 12 × aylık net satış", null, null, null, 0.01, null, "Gelir Tablosu!F16 ve L16"],
];
checks.getRange("B6:B11").formulas = [
  ["=IF('Varsayımlar'!B6>0,1,0)"],
  ["=IF(AND('Varsayımlar'!B7>=0,'Varsayımlar'!B7<1),1,0)"],
  ["=IF(AND('Varsayımlar'!B8>=0,'Varsayımlar'!B8<1),1,0)"],
  ["=IF('Varsayımlar'!B17>0,1,0)"],
  ["='Gelir Tablosu'!B16"],
  ["='Gelir Tablosu'!L16"],
];
checks.getRange("C10:C11").formulas = [
  ["='Gelir Tablosu'!B7*10"],
  ["='Gelir Tablosu'!F16*'Varsayımlar'!B11"],
];
checks.getRange("D6:D11").formulas = [
  ["=B6-C6"],
  ["=B7-C7"],
  ["=B8-C8"],
  ["=B9-C9"],
  ["=B10-C10"],
  ["=B11-C11"],
];
checks.getRange("F6:F11").formulas = [
  ["=IF(ABS(D6)<=E6,\"OK\",\"HATA\")"],
  ["=IF(ABS(D7)<=E7,\"OK\",\"HATA\")"],
  ["=IF(ABS(D8)<=E8,\"OK\",\"HATA\")"],
  ["=IF(ABS(D9)<=E9,\"OK\",\"HATA\")"],
  ["=IF(ABS(D10)<=E10,\"OK\",\"HATA\")"],
  ["=IF(ABS(D11)<=E11,\"OK\",\"HATA\")"],
];
checks.getRange("A6:G11").format.borders = {
  insideHorizontal: { style: "thin", color: C.line },
};
checks.getRange("B6:F11").format.numberFormat = countFmt;
checks.getRange("B10:E11").format.numberFormat = moneyFmt;
checks.getRange("F6:F11").conditionalFormats.add("containsText", {
  text: "OK",
  format: { fill: C.good, font: { color: "#17603A", bold: true } },
});
checks.getRange("F6:F11").conditionalFormats.add("containsText", {
  text: "HATA",
  format: { fill: C.bad, font: { color: "#A12A2A", bold: true } },
});
checks.getRange("A13:E13").merge();
checks.getRange("A13:E13").values = [["MODEL DURUMU"]];
checks.getRange("A13:E13").format = { fill: C.navy, font: { bold: true, color: C.white } };
checks.getRange("F13:G13").merge();
checks.getRange("F13:G13").formulas = [["=IF(COUNTIF(F6:F11,\"HATA\")=0,\"PASS\",\"FAIL\")"]];
checks.getRange("F13:G13").format = { font: { bold: true }, horizontalAlignment: "center" };
checks.getRange("F13:G13").conditionalFormats.add("containsText", {
  text: "PASS",
  format: { fill: C.good, font: { color: "#17603A", bold: true } },
});
checks.getRange("F13:G13").conditionalFormats.add("containsText", {
  text: "FAIL",
  format: { fill: C.bad, font: { color: "#A12A2A", bold: true } },
});
checks.getRange("A:A").format.columnWidth = 34;
checks.getRange("B:F").format.columnWidth = 15;
checks.getRange("G:G").format.columnWidth = 29;
checks.freezePanes.freezeRows(5);

await fs.mkdir(outputDir, { recursive: true });

const inspection = await workbook.inspect({
  kind: "table",
  range: "'Gelir Tablosu'!A6:M16",
  include: "values,formulas",
  tableMaxRows: 15,
  tableMaxCols: 13,
});
console.log("MODEL_INSPECT\n" + inspection.ndjson);

const checkInspection = await workbook.inspect({
  kind: "table",
  range: "Kontroller!A5:G13",
  include: "values,formulas",
  tableMaxRows: 12,
  tableMaxCols: 8,
});
console.log("CHECK_INSPECT\n" + checkInspection.ndjson);

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 300 },
  summary: "final formula error scan",
});
console.log("ERROR_SCAN\n" + errors.ndjson);

for (const [sheetName, range, filename] of [
  ["Özet", "A1:L27", "preview-ozet.png"],
  ["Varsayımlar", "A1:E21", "preview-varsayimlar.png"],
  ["Gelir Tablosu", "A1:M18", "preview-gelir-tablosu.png"],
  ["Kontroller", "A1:G13", "preview-kontroller.png"],
]) {
  const preview = await workbook.render({ sheetName, range, scale: 1.5, format: "png" });
  await fs.writeFile(`${outputDir}${filename}`, new Uint8Array(await preview.arrayBuffer()));
}

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(`${outputDir}DRKOC_Uyelik_Gelir_Taslagi.xlsx`);
console.log(`OUTPUT ${outputDir}DRKOC_Uyelik_Gelir_Taslagi.xlsx`);
