import { PolygonIcon } from "@/assets/icons";
import clsx from "clsx";
import React, { ComponentPropsWithRef, FC } from "react";
import { twMerge } from "tailwind-merge";

const AvailableButton: FC<AvailableButtonProps> = ({
  className,
  wrapperLabel,
  iconClassName,
  labelClassName,
  contentClassName,
  ...otherProps
}) => {
  return (
    <button
      className={twMerge(
        "px-8 sm:px-[94px] pt-[21px] pb-4 rounded-full bg-[#2DBF15] shadow-[0px 0px 20px 0px #21655F33;] hover:animate-ring flex items-center gap-x-5 sm:gap-x-10",
        className
      )}
      {...otherProps}
    >
      <div className="flex flex-col items-center sm:gap-y-2">
        <div
          className={clsx(
            "flex items-center gap-x-3 sm:gap-x-[25px]",
            wrapperLabel
          )}
        >
          <div className="w-10 sm:w-[80px] h-[1px] bg-[#FCFFFC] rounded-full" />
          <p
            className={clsx(
              "text-2xl sm:text-[32px] font-medium",
              labelClassName
            )}
          >
            24時間受付中
          </p>
          <div className="w-10 sm:w-[80px] h-[1px] bg-[#FCFFFC] rounded-full" />
        </div>
        <span
          className={clsx(
            "flex items-center text-3xl sm:text-[52px] font-black leading-none ",
            contentClassName
          )}
        >
          LINEで<p className="text-[#FFEE02]">相談</p>する
        </span>
      </div>

      <PolygonIcon className={clsx("h-5 w-3 sm:h-10 sm:w-7", iconClassName)} />
    </button>
  );
};

export default AvailableButton;

interface AvailableButtonProps extends ComponentPropsWithRef<"button"> {
  labelClassName?: string;
  contentClassName?: string;
  wrapperLabel?: string;
  iconClassName?: string;
}
