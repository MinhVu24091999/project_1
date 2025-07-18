import ArrowIcon from "@/assets/icons/ArrowIcon";
import TextAnimation from "@/components/TextAnimation";
import { MAP_LINK } from "@/const/path.const";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Map = () => {
  return (
    <div className="max-w-[872px] w-full mx-auto mt-[100px] sm:mt-[220px] flex flex-col items-center px-5 sm:px-0">
      <TextAnimation>
        <p className="text-[48px] leading-[56px] font-bold">Map</p>
      </TextAnimation>

      <Image
        src="/images/map.png"
        alt="map image"
        width={872}
        height={537}
        className="sm:w-[872px] sm:h-[537px] mt-[60px] w-[353px] h-[217px]"
      />

      <div className="flex flex-col sm:flex-row items-end sm:items-center sm:justify-between gap-y-[30px] w-full leading-[24px] sm:text-2xl sm:leading-[30px] mt-[30px] sm:mt-[60px]">
        <p className="w-full text-center sm:text-start font-inter">
          東京都千代田区丸の内3丁目2-2　二重橋ビル 2階
        </p>
        <Link
          href={MAP_LINK}
          className="flex items-center justify-end gap-x-2.5 min-w-[170px]"
          target="_blank"
        >
          <span>Google Map</span>
          <ArrowIcon className="text-white w-[46px] h-2" />
        </Link>
      </div>
    </div>
  );
};

export default Map;
