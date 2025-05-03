"use client";
import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface HoverGifProps extends Omit<ImageProps, "src" | "alt"> {
  staticSrc: string;
  gifSrc: string;
  alt: string;
}

export default function HoverGif({
  staticSrc,
  gifSrc,
  alt,
  ...props
}: HoverGifProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-fit h-fit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={isHovered ? gifSrc : staticSrc}
        alt={alt}
        {...props} // Kế thừa các props khác từ next/image
      />
    </div>
  );
}
