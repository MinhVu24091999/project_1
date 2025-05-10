import AvailableButton from "@/components/AvailableButton";
import RestaurantDeal from "@/components/RestaurantDeal";
import clsx from "clsx";
import Image from "next/image";
import React, { ComponentPropsWithoutRef, FC } from "react";

const Consultation: FC<ComponentPropsWithoutRef<"div">> = ({
  className,
  ...otherProps
}) => {
  return (
    <div
      className={clsx("relative sm:bg-[#9FF0D9]", className)}
      {...otherProps}
    >
      <Image
        src={"/images/deco.png"}
        alt=""
        className="absolute h-full left-0 top-0 hidden sm:block"
        width={597}
        height={597}
      />

      <div className="flex flex-col sm:flex-row items-center gap-x-[82px] gap-y-5 sm:gap-y-10 relative max-w-[1032px] mx-auto py-[60px] sm:pt-[114px] sm:pb-[123px] ">
        <div className="relative w-full py-10 sm:py-0 flex items-center bg-[#9FF0D9] sm:bg-transparent">
          <Image
            src={"/images/deco.png"}
            alt=""
            className="absolute !h-full left-0 top-0 sm:hidden"
            width={330}
            height={330}
          />
          <Image
            src={"/images/img-ceo-5.png"}
            alt=""
            className="rounded-full w-[250px] h-[250px] sm:w-[355px] sm:h-[357px] ml-20 relative"
            width={355}
            height={357}
          />
          <div className="absolute left-[100px] sm:left-[14%] -translate-x-1/2 bottom-[70%] sm:bottom-[38%]">
            <Image
              src={"/images/bubble-consultation.png"}
              alt=""
              className="rounded-full  animate-zoomLoop"
              width={178}
              height={125}
            />
          </div>
        </div>

        <div className="flex flex-col items-center sm:min-w-[506px]">
          <RestaurantDeal
            className="!text-2xl"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="500"
          />
          <p className="text-3xl sm:text-[36px] font-black text-[#111111] mb-[30px] leading-[150%]">
            店舗ステーションに <br />
            お任せください！
          </p>

          <AvailableButton
            className="shadow-[0px_10px_0px_0px_#1B800A;] sm:px-[83px] sm:min-w-[556px] !py-[17px]"
            labelClassName="!text-xl"
            contentClassName="sm:!text-[42px]"
            wrapperLabel="sm:!gap-x-4"
            iconClassName="sm:!w-[35px] sm:!h-[24px]"
            onClick={() =>
              window.open(
                "https://line.me/R/ti/p/@042qotud?ts=04301146&oat_content=url",
                "_blank"
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Consultation;
