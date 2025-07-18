import TextAnimation from "@/components/TextAnimation";
import Image from "next/image";
import React, { ComponentPropsWithoutRef, FC, ReactNode } from "react";

const Card: FC<CardProps> = ({
  urlImage,
  label,
  titleCard,
  description,
  listTitle,
  listData
}) => {
  return (
    <div className="flex flex-col gap-y-[30px] sm:gap-y-[60px]">
      <div className="flex items-center justify-end relative">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 z-[100]">
          <TextAnimation>
            <span className="text-[56px] leading-[64px] sm:text-[88px] sm:leading-[100px] font-bold">
              {label}
            </span>
          </TextAnimation>
        </div>

        <Image
          src={urlImage}
          alt=""
          width={751}
          height={469}
          className="w-[240px] h-[195px] sm:w-[751px] sm:h-[469px]"
        />
      </div>

      <TextAnimation>
        <span className="sm:text-[48px] sm:!leading-[150%] font-bold text-2xl !leading-[32px]">
          {titleCard}
        </span>
      </TextAnimation>

      <span className="sm:text-2xl leading-[150%]">{description}</span>

      <div className="flex flex-col gap-y-5 sm:gap-y-10">
        <span className="text-xl leading-[24px] sm:text-[32px] sm:leading-[40px] font-bold">
          {listTitle}
        </span>

        <ul className="flex flex-col list-disc ml-8 sm:ml-12">
          {listData.map((item, index) => (
            <li key={index} className="sm:text-2xl sm:leading-[150%]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;

interface CardProps extends ComponentPropsWithoutRef<"div"> {
  urlImage: string;
  label: ReactNode;
  titleCard: ReactNode;
  description: ReactNode;
  listTitle: string;
  listData: string[];
}
