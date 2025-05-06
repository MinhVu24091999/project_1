import AvailableButton from "@/components/AvailableButton";
import clsx from "clsx";
import Image from "next/image";
import React, { ComponentPropsWithoutRef, FC } from "react";

const Consultation: FC<ComponentPropsWithoutRef<"div">> = ({
  className,
  ...otherProps
}) => {
  return (
    <div className={clsx("relative", className)} {...otherProps}>
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
          <div className="absolute left-10 sm:left-[14%] -translate-x-1/2 bottom-1/2 sm:bottom-[38%]">
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
          <Image
            src={"/images/restaurant_sales.png"}
            alt=""
            className="rounded-full -mr-1/2"
            width={324}
            height={62}
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="500"
          />
          <p className="text-3xl sm:text-[36px] font-black text-[#111111] mb-[30px] leading-[100%]">
            店舗ステーションに <br />
            お任せください！
          </p>

          <AvailableButton
            className="shadow-[0px_10px_0px_0px_#1B800A;] sm:px-[83px] sm:w-[506px]"
            labelClassName="!text-xl"
            contentClassName="sm:!text-[42px]"
            wrapperLabel="sm:!gap-x-4"
            iconClassName="sm:!w-[35px] sm:!h-[24px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Consultation;
