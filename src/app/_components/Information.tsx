import React, { ComponentPropsWithoutRef, FC } from "react";
import TitleClipPath from "./TitleClipPath";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

const data = [
  {
    time: "2025/06/20",
    content: "タイトルが入ります。タイトルが入ります。タイトルが入ります。"
  },
  {
    time: "2025/06/20",
    content: "タイトルが入ります。タイトルが入ります。タイトルが入ります。"
  },
  {
    time: "2025/06/20",
    content: "タイトルが入ります。タイトルが入ります。タイトルが入ります。"
  }
];

const Information = () => {
  return (
    <div className="flex flex-col items-center max-w-[1193px] mx-auto my-[100px] sm:mt-[220px] px-5 sm:px-0 ">
      <TitleClipPath className="px-[67px] sm:px-[98px]">
        Information
      </TitleClipPath>

      <div className="flex flex-col w-full mt-[30px] sm:mt-[60px]">
        {data.map((item, index) => (
          <InformationItem
            key={index}
            content={item.content}
            time={item.time}
            className="first:border-t first:border-white"
          />
        ))}
      </div>

      <Link
        href={""}
        className="mt-5 sm:mt-[30px] text-xl leading-[24px] sm:text-2xl sm:leading-[32px] font-bold ml-auto"
      >
        {"more >>"}
      </Link>
    </div>
  );
};

export default Information;

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

interface InformationItemProps extends ComponentPropsWithoutRef<"div"> {
  time: string;
  content: string;
}
