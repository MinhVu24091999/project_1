/* eslint-disable @next/next/no-img-element */
import { ArrowDotIcon, PolygonIcon } from "@/assets/icons";
import Marquee from "react-fast-marquee";

const SectionIntroduction = () => {
  return (
    <div className="relative flex flex-col items-center">
      <img
        src="/images/bg-introduction.png"
        alt="intro image"
        className="absolute h-[1080px] min-w-[1676px] w-full top-0 sm:-mt-[72px]"
      />

      <div className="flex flex-col items-center pt-5">
        <div className="relative">
          <Marquee direction="right" className="h-[680px]">
            <img
              src="/images/slide-introduction.png"
              alt=""
              className="h-[680px] w-[4140px]"
            />
          </Marquee>

          <div className="flex flex-col gap-y-5 absolute left-4 sm:left-[60px] -bottom-[36px] z-10 animate-delay-[800ms] animate-fade-right animate-once animate-duration-200 animate-ease-in-out animate-fill-both">
            <p className="text-xl sm:text-[50px] text-[#111111] font-bold p-2.5 rounded-[10px] bg-white leading-[100%]">
              飲食店舗の経営経験のある代表が
            </p>
            <p className="text-xl sm:text-[50px] text-[#111111] font-bold p-2.5 rounded-[10px] bg-white w-fit leading-[100%]">
              あなたの元へ伺います
            </p>

            <div className="flex items-center gap-x-[17px]">
              <img
                src="/images/initial_fee.png"
                alt=""
                className="w-[100px] h-[100px] sm:w-[196px] sm:h-[196px]"
              />
              <img
                src="/images/compatible_speed.png"
                alt=""
                className="w-[100px] h-[100px] sm:w-[196px] sm:h-[196px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col relative items-center mt-10 px-4 sm:px-0">
        <img
          src="/images/restaurant_sales.png"
          alt="restaurant sales image"
          className="h-[63px] w-[412px]"
        />
        <p className="text-[42px] sm:text-[84px] font-black text-[#111111] -mt-3">
          店舗ステーション
        </p>
      </div>

      <div className="flex flex-col relative mb-[26px]">
        <ArrowDotIcon className="w-20 h-[48px] animate-wave-1 opacity-50" />
        <ArrowDotIcon className="-mt-4 w-20 h-[48px] animate-wave-2 opacity-70" />
        <ArrowDotIcon className="-mt-4 w-20 h-[48px] animate-wave-3 opacity-100" />
      </div>

      <button className="relative px-8 sm:px-[94px] pt-[21px] pb-4 rounded-full bg-[#2DBF15] shadow-[0px 0px 20px 0px #21655F33;] flex flex-col items-center sm:gap-y-2 ">
        <div className="flex items-center gap-x-3 sm:gap-x-[25px]">
          <div className="w-10 sm:w-[80px] h-[1px] bg-[#FCFFFC] rounded-full" />
          <p className="text-2xl sm:text-[32px] font-medium">24時間受付中</p>
          <div className="w-10 sm:w-[80px] h-[1px] bg-[#FCFFFC] rounded-full" />
        </div>
        <span className="flex items-center text-3xl sm:text-[52px] font-black leading-none">
          LINEで<p className="text-[#FFEE02]">相談</p>する
        </span>

        <PolygonIcon className="h-5 w-3 sm:h-10 sm:w-7 absolute top-1/2 -translate-y-1/2 right-[13px]" />
      </button>
    </div>
  );
};

export default SectionIntroduction;
