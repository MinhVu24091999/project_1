import TextAnimation from "@/components/TextAnimation";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex items-center justify-center pt-[160px] pb-[100px] sm:pt-[220px] sm:pb-[230px] relative">
        <div className="absolute top-[58%] sm:top-1/2 left-[52%] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
          <div className="relative w-[331px] h-[108px]  sm:w-[1072px] sm:h-[325px]">
            <Image
              src="/images/paint.png"
              alt=""
              width={1072}
              height={325}
              className="w-[331px] h-[108px]  sm:w-[1072px] sm:h-[325px]"
            />
            <div className="absolute right-0 top-0 z-[20] h-full w-full animate-test1 bg-[#1B1C1F]" />
          </div>
        </div>
        <p className="text-[56px] leading-[64px] sm:text-[176px] sm:leading-[192px] font-bold relative ">
          Join us
        </p>
      </div>

      <div className="flex items-center justify-center pb-[110px] sm:pb-[240px] px-4 sm:px-0">
        <TextAnimation>
          <p className="text-[48px] leading-[150%] font-bold text-center hidden sm:block">
            エントリー募集中！ <br />
            Visionに共感できたり、自ら道を切り開いてみたい方は <br />
            下記からお気軽にエントリーください。
          </p>

          <p className="text-[20px] leading-[150%] font-bold sm:hidden text-center">
            エントリー募集中！
            <br />
            Visionに共感できたり、
            <br />
            自ら道を切り開いてみたい方は <br />
            下記からお気軽にエントリーください。
          </p>
        </TextAnimation>
      </div>

      <div className="text-xl leading-[24px] sm:text-[48px] sm:leading-[56px] w-fit flex flex-col gap-y-2.5 mx-auto">
        募集中の職種と内容のリンクを記載?
        <div className="h-[2px] w-full bg-[#FFF]" />
      </div>
    </div>
  );
};

export default page;
