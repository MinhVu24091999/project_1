"use client";

import { FlashlightWrapper } from "@/components/common-flash-light-wrapper";
import useWindowSize from "@/hooks/useWindowSize";
import clsx from "clsx";
import Image from "next/image";
import React, { FC } from "react";
import Marquee from "react-fast-marquee";

const MainServices = () => {
  const { windowWidth } = useWindowSize();
  return (
    <div className="mt-12 sm:mt-[160px]">
      <p className="text-3xl sm:text-[64px] font-black text-center text-[#000000] mb-10 sm:mb-[75px] px-10 leading-[120%]">
        店舗ステーションが提供する <br />
        主なサービス
      </p>

      <Marquee
        direction="right"
        play={windowWidth <= 640}
        className="max-w-[1440px] mx-auto"
      >
        <div className="grid grid-cols-4 ">
          {DATA.map((item) => (
            <MainServicesCard
              key={item.urlImage}
              urlImage={item.urlImage}
              content={item.content}
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MainServices;

const MainServicesCard: FC<MainServicesCardProps> = ({
  urlImage,
  content,
  className,
}) => {
  return (
    <FlashlightWrapper>
      <div
        className={clsx("relative cursor-pointer hover:scale-110", className)}
      >
        <Image src={urlImage} alt="" className="" width={360} height={480} />

        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-medium text-[32px] min-w-[241px] text-center">
          {content}
        </p>
      </div>
    </FlashlightWrapper>
  );
};

interface MainServicesCardProps {
  urlImage: string;
  content: string;
  className?: string;
}

const DATA = [
  {
    urlImage: "/images/main_services_1.png",
    content: "飲食店買収",
  },
  {
    urlImage: "/images/main_services_2.png",
    content: "開業支援",
  },
  {
    urlImage: "/images/main_services_3.png",
    content: "資金調達",
  },
  {
    urlImage: "/images/main_services_4.png",
    content: "マーケティング",
  },
];
