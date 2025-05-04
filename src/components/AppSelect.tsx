import React, { FC } from "react";
import { Select, SelectProps } from "antd";
import clsx from "clsx";
import { PolygonIcon } from "@/assets/icons";

const AppSelect: FC<SelectProps> = ({ className, ...otherProps }) => {
  return (
    <Select
      notFoundContent=""
      className={clsx("focus:border-red-500 w-full", className)}
      popupClassName={clsx(
        "w-full",
        "bg-[#F1FCF9] border-[#E0E0E0] px-2 py-5 text-xl focus:bg-[#F1FCF9] focus:border-[#9FF0D9] hover:bg-[#F1FCF9] hover:border-[#9FF0D9] focus:!border-[1px]"
      )}
      suffixIcon={
        <PolygonIcon className="suffix-icon transition-transform duration-200 w-[13px] h-5 -rotate-90" />
      }
      {...otherProps}
    />
  );
};

export default AppSelect;
