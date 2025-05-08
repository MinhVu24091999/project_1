"use client";

import clsx from "clsx";
import React, { ComponentPropsWithRef, FC } from "react";

const RestaurantDeal: FC<ComponentPropsWithRef<"div">> = ({
  className,
  ...otherProps
}) => {
  return (
    <div className="flex flex-col items-center" {...otherProps}>
      <div
        className={clsx(
          "bg-[#FFEE02] px-[30px] py-2 rounded-full text-2xl sm:text-[32px] text-[#000000] font-medium leading-[130%]",
          className
        )}
      >
        飲食店の売却・買収なら
      </div>
      <div className="w-0 h-0 border-l-8 border-r-8 border-t-0 border-b-8 border-transparent border-b-[#FFEE02] rotate-180"></div>
    </div>
  );
};

export default RestaurantDeal;
