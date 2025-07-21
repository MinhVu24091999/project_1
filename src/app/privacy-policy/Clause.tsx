import React, { ComponentPropsWithoutRef, FC } from "react";
import { twMerge } from "tailwind-merge";

const Clause: FC<ClauseProps> = ({
  label,
  children,
  className,
  ...otherProps
}) => {
  return (
    <div className={twMerge("flex flex-col w-full", className)} {...otherProps}>
      <p className="font-bold sm:text-[32px] sm:leading-[40px] text-xl leading-[24px]">
        {label}
      </p>
      <div className="h-[2px] w-full bg-[#FFF] sm:my-10 mt-[38px] mb-[30px]" />
      <div className="sm:text-2xl leading-[150%] flex flex-col">{children}</div>
    </div>
  );
};

export default Clause;

interface ClauseProps extends ComponentPropsWithoutRef<"div"> {
  label: string;
}
