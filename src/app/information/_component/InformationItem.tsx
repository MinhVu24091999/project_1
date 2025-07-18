import React, { ComponentPropsWithoutRef, FC } from "react";
import { twMerge } from "tailwind-merge";

const InformationItem: FC<InformationItemProps> = ({
  time,
  content,
  className,
  ...otherProps
}) => {
  return (
    <div
      className={twMerge(
        "py-5 sm:py-[50px] px-[26px] sm:px-[50px]",
        "flex flex-col sm:flex-row sm:items-center gap-x-[50px] gap-y-[10px]",
        "border-b border-white",
        className
      )}
      {...otherProps}
    >
      <p className="leading-[24px] sm:text-2xl sm:leading-[32px] font-bold">
        {time}
      </p>
      <p className="leading-[24px] sm:text-2xl sm:leading-[32px]">{content}</p>
    </div>
  );
};

export default InformationItem;

interface InformationItemProps extends ComponentPropsWithoutRef<"div"> {
  time: string;
  content: string;
}
