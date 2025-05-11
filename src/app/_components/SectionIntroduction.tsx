/* eslint-disable @next/next/no-img-element */
"use client";

import { ArrowDotIcon } from "@/assets/icons";
import AvailableButton from "@/components/AvailableButton";
import RestaurantDeal from "@/components/RestaurantDeal";
import Marquee from "react-fast-marquee";

const SectionIntroduction = () => {
  return (
    <div className="relative flex flex-col items-center">
      <img
        src="/images/bg-introduction.png"
        alt="intro image"
        className="absolute h-[686px] sm:h-[1080px] min-w-[1676px] w-full top-0 sm:-mt-[72px]"
      />

      <div className="flex flex-col items-center pt-5">
        <div className="relative">
          <Marquee direction="left" className="h-[450px] sm:h-[680px]">
            <img
              src="/images/img-intro-1.png"
              alt=""
              className="h-[450px] sm:h-[680px] w-[293px] sm:w-[440px] mr-5"
            />
            <img
              src="/images/img-intro-2.png"
              alt=""
              className="h-[450px] sm:h-[680px] w-[293px] sm:w-[440px] mr-5"
            />
            <img
              src="/images/img-intro-3.png"
              alt=""
              className="h-[450px] sm:h-[680px] w-[293px] sm:w-[440px] mr-5"
            />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-[450px] sm:h-[680px] w-[293px] sm:w-[440px] rounded-[40px] mr-5 object-cover object-center"
            >
              <source src="/videos/video-intro.mp4" type="video/mp4" />
            </video>
          </Marquee>

          <div
            data-aos="flip-left"
            data-aos-duration="500"
            data-aos-delay="500"
            className="flex flex-col gap-y-5 absolute left-4 sm:left-1/2 sm:!-translate-x-1/2 -bottom-[36px] z-[100] sm:w-[1440px] sm:ml-[60px]"
          >
            <p className="text-xl sm:text-[50px] text-[#111111] font-bold p-2.5 rounded-[10px] bg-white leading-[100%] w-fit">
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
        <RestaurantDeal
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="500"
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

      <AvailableButton
        id="available-button-introduction"
        onClick={() =>
          window.open(
            "https://line.me/R/ti/p/@042qotud?ts=04301146&oat_content=url",
            "_blank"
          )
        }
      />
    </div>
  );
};

export default SectionIntroduction;
