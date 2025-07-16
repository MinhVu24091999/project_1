import React, { ComponentPropsWithoutRef, FC } from "react";
import { twMerge } from "tailwind-merge";

const TitleClipPath: FC<ComponentPropsWithoutRef<"div">> = ({
  className,
  children,
  ...otherProps
}) => {
  return (
    <div
      className={twMerge(
        "w-fit px-[144px]",
        "text-[48px] leading-[56px] sm:text-[56px] sm:leading-[64px] font-bold flex items-center justify-center bg-bgTitleClipPath py-[10px]",
        className
      )}
      style={{ clipPath: "polygon(10% 0, 100% 0%, 90% 100%, 0% 100%)" }}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default TitleClipPath;
