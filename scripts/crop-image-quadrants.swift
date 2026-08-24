import Foundation
import ImageIO
import UniformTypeIdentifiers

guard CommandLine.arguments.count == 7 else {
  fputs("Usage: swift crop-image-quadrants.swift input output-dir top-left top-right bottom-left bottom-right\n", stderr)
  exit(64)
}

let inputURL = URL(fileURLWithPath: CommandLine.arguments[1])
let outputDirectory = URL(fileURLWithPath: CommandLine.arguments[2], isDirectory: true)
let names = Array(CommandLine.arguments[3...6])

guard
  let source = CGImageSourceCreateWithURL(inputURL as CFURL, nil),
  let image = CGImageSourceCreateImageAtIndex(source, 0, nil)
else {
  fputs("Could not decode input image: \(inputURL.path)\n", stderr)
  exit(65)
}

try FileManager.default.createDirectory(at: outputDirectory, withIntermediateDirectories: true)

let halfWidth = image.width / 2
let halfHeight = image.height / 2
let rectangles = [
  CGRect(x: 0, y: 0, width: halfWidth, height: halfHeight),
  CGRect(x: halfWidth, y: 0, width: halfWidth, height: halfHeight),
  CGRect(x: 0, y: halfHeight, width: halfWidth, height: halfHeight),
  CGRect(x: halfWidth, y: halfHeight, width: halfWidth, height: halfHeight),
]

for (name, rectangle) in zip(names, rectangles) {
  guard let cropped = image.cropping(to: rectangle) else {
    fputs("Could not crop quadrant for \(name)\n", stderr)
    exit(66)
  }

  let outputURL = outputDirectory.appendingPathComponent("\(name).jpg")
  guard let destination = CGImageDestinationCreateWithURL(
    outputURL as CFURL,
    UTType.jpeg.identifier as CFString,
    1,
    nil
  ) else {
    fputs("Could not create output image: \(outputURL.path)\n", stderr)
    exit(67)
  }

  let properties = [kCGImageDestinationLossyCompressionQuality: 0.88] as CFDictionary
  CGImageDestinationAddImage(destination, cropped, properties)
  guard CGImageDestinationFinalize(destination) else {
    fputs("Could not write output image: \(outputURL.path)\n", stderr)
    exit(68)
  }
}
