import { PolygonIcon } from "@/assets/icons";
import clsx from "clsx";
import React, { ComponentPropsWithoutRef, FC } from "react";

const AvailableButton: FC<ComponentPropsWithoutRef<"button">> = ({
  className,
  ...otherProps
}) => {
  return (
    <button
      className={clsx(
        "relative px-8 sm:px-[94px] pt-[21px] pb-4 rounded-full bg-[#2DBF15] shadow-[0px 0px 20px 0px #21655F33;] flex flex-col items-center sm:gap-y-2 ",
        className
      )}
      {...otherProps}
    >
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
  );
};

export default AvailableButton;
