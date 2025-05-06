import { PolygonIcon } from "@/assets/icons";
import clsx from "clsx";
import React, { ComponentPropsWithoutRef, FC } from "react";

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
      className={clsx(
        "relative px-8 sm:px-[94px] pt-[21px] pb-4 rounded-full bg-[#2DBF15] shadow-[0px 0px 20px 0px #21655F33;] flex flex-col items-center sm:gap-y-2 hover:animate-ring",
        className
      )}
      {...otherProps}
    >
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

      <PolygonIcon
        className={clsx(
          "h-5 w-3 sm:h-10 sm:w-7 absolute top-1/2 -translate-y-1/2 right-[13px]",
          iconClassName
        )}
      />
    </button>
  );
};

export default AvailableButton;

interface AvailableButtonProps extends ComponentPropsWithoutRef<"button"> {
  labelClassName?: string;
  contentClassName?: string;
  wrapperLabel?: string;
  iconClassName?: string;
}
