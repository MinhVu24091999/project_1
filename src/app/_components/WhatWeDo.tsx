import React, { ComponentPropsWithoutRef, FC } from "react";
import TitleClipPath from "./TitleClipPath";
import Image from "next/image";
import { twJoin, twMerge } from "tailwind-merge";

const data = [
  {
    label: (
      <p>
        Performance
        <br /> Unit
      </p>
    ),
    urlImage: "/images/what-we-do-1.png",
    positionText: "left"
  },
  {
    label: (
      <p>
        Creative
        <br /> Unit
      </p>
    ),
    urlImage: "/images/what-we-do-2.png",
    positionText: "right"
  }
];

const WhatWeDo = () => {
  return (
    <div className="flex flex-col items-center max-w-[1193px] mx-auto my-[100px] sm:mt-[220px] px-5 sm:px-0 gap-y-[30px] sm:gap-y-[60px]">
      <TitleClipPath className="px-[58px] sm:px-[100px]">
        What We Do
      </TitleClipPath>

      <div className="flex flex-col sm:flex-row w-full gap-x-5 sm:justify-between gap-y-[30px]">
        {data.map((item, index) => (
          <WhatWeDoCard
            key={index}
            positionText={item.positionText}
            urlImage={item.urlImage}
          >
            {item.label}
          </WhatWeDoCard>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;

const WhatWeDoCard: FC<WhatWeDoCardProps> = ({
  children,
  urlImage,
  positionText
}) => {
  return (
    <div
      className={twMerge("w-full relative flex items-center justify-center")}
    >
      <Image
        src={urlImage}
        alt=""
        width={278}
        height={271}
        className="sm:w-full max-w-[278px] sm:max-w-full"
      />

      <div
        className={twJoin(
          "absolute sm:left-1/2 top-1/2 -translate-y-1/2 sm:text-[88px] sm:leading-[100px] sm:-translate-x-1/2 sm:text-center font-bold text-[56px] leading-[64px]",
          positionText === "left" ? "left-0 text-start" : "right-0 text-end"
        )}
      >
        {children}
      </div>
    </div>
  );
};

interface WhatWeDoCardProps extends ComponentPropsWithoutRef<"div"> {
  urlImage: string;
  positionText: string;
}
