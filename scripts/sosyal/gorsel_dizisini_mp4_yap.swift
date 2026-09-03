import AVFoundation
import CoreImage
import CoreVideo
import Foundation
import ImageIO

guard CommandLine.arguments.count == 4 else {
  fputs("Kullanım: swift gorsel_dizisini_mp4_yap.swift <kare-klasoru> <cikti.mp4> <fps>\n", stderr)
  exit(2)
}

let kareKlasoru = URL(fileURLWithPath: CommandLine.arguments[1], isDirectory: true)
let cikti = URL(fileURLWithPath: CommandLine.arguments[2])
let fps = Int32(CommandLine.arguments[3]) ?? 12
let dosyaYoneticisi = FileManager.default

let kareler = try dosyaYoneticisi.contentsOfDirectory(
  at: kareKlasoru,
  includingPropertiesForKeys: nil,
  options: [.skipsHiddenFiles]
).filter { ["jpg", "jpeg", "png"].contains($0.pathExtension.lowercased()) }
 .sorted { $0.lastPathComponent < $1.lastPathComponent }

guard let ilkKare = kareler.first,
      let ilkKaynak = CGImageSourceCreateWithURL(ilkKare as CFURL, nil),
      let ilkGorsel = CGImageSourceCreateImageAtIndex(ilkKaynak, 0, nil) else {
  throw NSError(domain: "DRKOCVideo", code: 1, userInfo: [NSLocalizedDescriptionKey: "Kare klasöründe okunabilir görsel bulunamadı."])
}

let genislik = ilkGorsel.width
let yukseklik = ilkGorsel.height
try? dosyaYoneticisi.removeItem(at: cikti)

let yazici = try AVAssetWriter(outputURL: cikti, fileType: .mp4)
let ayarlar: [String: Any] = [
  AVVideoCodecKey: AVVideoCodecType.h264,
  AVVideoWidthKey: genislik,
  AVVideoHeightKey: yukseklik,
  AVVideoCompressionPropertiesKey: [
    AVVideoAverageBitRateKey: 12_000_000,
    AVVideoProfileLevelKey: AVVideoProfileLevelH264HighAutoLevel,
  ],
]

let girdi = AVAssetWriterInput(mediaType: .video, outputSettings: ayarlar)
girdi.expectsMediaDataInRealTime = false

let pikselAyarlari: [String: Any] = [
  kCVPixelBufferPixelFormatTypeKey as String: Int(kCVPixelFormatType_32BGRA),
  kCVPixelBufferWidthKey as String: genislik,
  kCVPixelBufferHeightKey as String: yukseklik,
  kCVPixelBufferIOSurfacePropertiesKey as String: [:],
]
let donusturucu = AVAssetWriterInputPixelBufferAdaptor(
  assetWriterInput: girdi,
  sourcePixelBufferAttributes: pikselAyarlari
)

guard yazici.canAdd(girdi) else {
  throw NSError(domain: "DRKOCVideo", code: 2, userInfo: [NSLocalizedDescriptionKey: "Video girdisi eklenemedi."])
}
yazici.add(girdi)
yazici.startWriting()
yazici.startSession(atSourceTime: .zero)

let ciBaglami = CIContext(options: [.useSoftwareRenderer: false])
let renkUzayi = CGColorSpaceCreateDeviceRGB()

for (sira, kareURL) in kareler.enumerated() {
  while !girdi.isReadyForMoreMediaData {
    Thread.sleep(forTimeInterval: 0.002)
  }

  guard let kaynak = CGImageSourceCreateWithURL(kareURL as CFURL, nil),
        let gorsel = CGImageSourceCreateImageAtIndex(kaynak, 0, nil) else {
    throw NSError(domain: "DRKOCVideo", code: 3, userInfo: [NSLocalizedDescriptionKey: "Kare okunamadı: \(kareURL.lastPathComponent)"])
  }

  var pikselTamponu: CVPixelBuffer?
  let durum = CVPixelBufferPoolCreatePixelBuffer(nil, donusturucu.pixelBufferPool!, &pikselTamponu)
  guard durum == kCVReturnSuccess, let tampon = pikselTamponu else {
    throw NSError(domain: "DRKOCVideo", code: 4, userInfo: [NSLocalizedDescriptionKey: "Piksel tamponu oluşturulamadı."])
  }

  let ciGorsel = CIImage(cgImage: gorsel)
  ciBaglami.render(
    ciGorsel,
    to: tampon,
    bounds: CGRect(x: 0, y: 0, width: genislik, height: yukseklik),
    colorSpace: renkUzayi
  )

  let zaman = CMTime(value: Int64(sira), timescale: fps)
  guard donusturucu.append(tampon, withPresentationTime: zaman) else {
    throw yazici.error ?? NSError(domain: "DRKOCVideo", code: 5, userInfo: [NSLocalizedDescriptionKey: "Kare videoya eklenemedi."])
  }
}

girdi.markAsFinished()
let tamamlandi = DispatchSemaphore(value: 0)
yazici.finishWriting { tamamlandi.signal() }
tamamlandi.wait()

guard yazici.status == .completed else {
  throw yazici.error ?? NSError(domain: "DRKOCVideo", code: 6, userInfo: [NSLocalizedDescriptionKey: "Video tamamlanamadı."])
}

print("Hazır: \(cikti.path)")
