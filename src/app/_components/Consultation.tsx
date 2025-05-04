import { PolygonIcon } from "@/assets/icons";
import Image from "next/image";
import React from "react";

const Consultation = () => {
  return (
    <div className="relative mt-[100px]">
      <Image
        src={"/images/consultation-bg.png"}
        alt=""
        className="absolute w-full h-full"
        width={1440}
        height={598}
      />

      <div className="flex flex-col sm:flex-row items-center gap-x-[82px] gap-y-10 relative max-w-[1032px] mx-auto py-[60px] sm:pt-[114px] sm:pb-[123px]">
        <div className="relative">
          <Image
            src={"/images/img-ceo-2.png"}
            alt=""
            className="rounded-full w-[250px] h-[250px] sm:w-[348px] sm:h-[348px] shadow-[10px_10px_0px_0px_#1EA58A;] ml-20"
            width={348}
            height={348}
          />
          <Image
            src={"/images/bubble-consultation.png"}
            alt=""
            className="rounded-full absolute left-10 sm:left-0 -translate-x-1/2 bottom-1/2"
            width={178}
            height={125}
          />
        </div>

        <div className="flex flex-col items-center">
          <Image
            src={"/images/restaurant_sales.png"}
            alt=""
            className="rounded-full -mr-1/2"
            width={324}
            height={62}
          />
          <p
            className="text-3xl sm:text-[36px] font-black text-[#111111] mb-[30px]"
            style={{ lineHeight: "100%" }}
          >
            店舗ステーションに <br />
            お任せください！
          </p>

          <button className="relative px-8 sm:px-[94px] pt-[21px] pb-4 rounded-full bg-[#2DBF15] shadow-[0px_10px_0px_0px_#1B800A;] flex flex-col items-center sm:gap-y-2 ">
            <div className="flex items-center gap-x-3 sm:gap-x-[25px]">
              <div className="w-10 sm:w-[80px] h-[1px] bg-[#FCFFFC] rounded-full" />
              <p className="text-2xl sm:text-[32px] font-medium">
                24時間受付中
              </p>
              <div className="w-10 sm:w-[80px] h-[1px] bg-[#FCFFFC] rounded-full" />
            </div>
            <span className="flex items-center text-3xl sm:text-[52px] font-black leading-none">
              LINEで<p className="text-[#FFEE02]">相談</p>する
            </span>

            <PolygonIcon className="h-5 w-3 sm:h-10 sm:w-7 absolute top-1/2 -translate-y-1/2 right-[13px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
