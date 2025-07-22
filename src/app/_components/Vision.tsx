"use client";

import React, { useEffect, useMemo, useState } from "react";
import TitleClipPath from "./TitleClipPath";
import Image from "next/image";
import { twJoin } from "tailwind-merge";
import TextAnimation from "@/components/TextAnimation";
import useWindowSize from "@/hooks/useWindowSize";

const data: VisionDataInterface[] = [
  {
    label: "IDEA",
    title: "そのアイデアを、解き放て。",
    description: (
      <p>
        眠れる可能性を呼び覚まし <br /> 斬新な発想でまだ見ぬ未来図を描き出す
      </p>
    ),
    urlImage: "./images/vision-1.png",
  },
  {
    label: "HEART",
    title: "その情熱で、心を揺さぶれ。",
    description: (
      <p>
        人の心を動かすものづくりを。共感と感動が、 <br />
        新たなエネルギーを生む。
      </p>
    ),
    urlImage: "./images/vision-2.png",
  },
  {
    label: "WORLD",
    title: "その力で、世界を動かせ。",
    description: (
      <p>
        小さな一歩がやがて大きなうねりとなる。
        <br />
        グローバルな視点で、変革をリードする。
      </p>
    ),
    urlImage: "./images/vision-3.png",
  },
  {
    label: "FUTURE",
    title: "その手で、未来を創造せよ。",
    description: (
      <p>
        昨日までの常識を塗り替え、次世代のスタン <br />
        ダードを私たち自身が創り上げていく。
      </p>
    ),
    urlImage: "./images/vision-4.png",
  },
  {
    label: "YOU",
    title: "そして、あなた自身を突き動かせ。",
    description: (
      <p>
        内に秘めた可能性を、ROGYXで開花させよう。 <br />
        あなたの挑戦がここから始まる。
      </p>
    ),
    urlImage: "./images/vision-5.png",
  },
];

const Vision = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [test, setTest] = useState("top");
  const { windowWidth } = useWindowSize();

  const [activeCard, setActiveCard] = useState<VisionDataInterface>(data[0]);

  const cardHeight = useMemo(() => {
    return windowWidth <= 640 ? 656 : 715;
  }, [windowWidth]);

  useEffect(() => {
    const element = document.getElementById("wrap-select-tab");
    const whatWeDoElement = document.getElementById("what-we-do-id");
    const windowHeight = window.innerHeight;
    if (!element || !whatWeDoElement) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();

      const padding = windowWidth <= 640 ? 100 : 220;

      if (rect.top <= padding && rect.bottom > windowHeight) {
        setIsFixed(true);
      } else {
        if (rect.top < 0) {
          setTest("bottom");
        } else {
          setTest("top");
        }
        setIsFixed(false);
      }

      if (rect.top < 0) {
        const currentScrollY = Math.abs(rect.top);

        const currentIndex = Math.floor(currentScrollY / cardHeight);

        if (currentIndex >= data.length) {
          setActiveCard(data[data.length - 1]);
        } else {
          const res = data.find((_, index) => index === currentIndex);

          setActiveCard(res || ({} as VisionDataInterface));
        }
      } else {
        setActiveCard(data[0]);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [windowWidth, cardHeight]);

  return (
    <div
      className="flex flex-col items-center transition-all duration-[1500] ease-in-out"
      id="wrap-select-tab"
      style={{
        height: `calc(${cardHeight}px * ${data.length})`,
        justifyContent: test === "top" ? "flex-start" : "flex-end",
      }}
    >
      <div
        className={twJoin(
          "pointer-events-none flex flex-col items-center w-full max-w-[1207px]  items-start justify-between px-8 max-w-[1137px] mx-auto px-5 sm:px-0",
          isFixed
            ? "fixed -translate-x-1/2 left-1/2  top-[100px] sm:top-[220px]"
            : "static"
        )}
      >
        <TitleClipPath className="px-[115px] sm:px-[144px]">
          Vision
        </TitleClipPath>

        <div className="flex flex-col sm:flex-row sm:items-center gap-x-[50px] mt-[30px] sm:mt-[60px] sm:w-full justify-start sm:pl-[50px]">
          <p className="text-[48px] leading-[150%] sm:text-[88px] sm:leading-[100px] font-bold">
            Make It MOVE.
          </p>
          <p className="text-[72px] leading-[80px] sm:text-[120px] sm:leading-[132px] font-bold">
            +{activeCard?.label}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full mt-[30px]">
          <div className="hidden sm:flex flex-col gap-y-[30px] w-full">
            <TextAnimation>
              <p className="sm:text-[32px] sm:leading-[40px] font-bold">
                {activeCard?.title}
              </p>
            </TextAnimation>

            <span className="sm:text-xl sm:leading-[24px]">
              {activeCard?.description}
            </span>
          </div>
          <Image
            src={activeCard?.urlImage || ""}
            alt=""
            width={576}
            height={409}
          />

          <div className="flex flex-col gap-y-[20px] sm:hidden mt-[30px]">
            <p className="text-[20px] leading-[24px] font-bold">
              {activeCard?.title}
            </p>
            <span className="leading-[24px]">{activeCard?.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;

interface VisionDataInterface {
  label: string;
  title: string;
  description: React.ReactNode;
  urlImage: string;
}
