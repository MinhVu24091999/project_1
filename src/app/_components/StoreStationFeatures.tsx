import clsx from "clsx";
import Image from "next/image";
import React, { FC } from "react";
import Marquee from "react-fast-marquee";

const StoreStationFeatures = () => {
  return (
    <div className="mt-[60px] sm:mt-[160px] flex flex-col gap-y-[40px] sm:gap-y-[80px] items-center">
      <p className="font-bold text-3xl sm:text-[64px] text-[#000000] text-center leading-[130%]">
        だから選ばれる！ <br /> 店舗ステーションの特徴
      </p>
      <div className="py-[80px] w-full bg-[#F1FCF9] ">
        <div className="max-w-[1440px] mx-auto">
          <Marquee direction="right">
            <div className="grid grid-cols-4 gap-x-5 w-fit ">
              {DATA.map((item, index) => (
                <StoreStationFeaturesCard
                  key={index}
                  content={item.content}
                  imgUrl={item.imgUrl}
                  label={item.label}
                />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default StoreStationFeatures;

interface StoreStationFeaturesCardProps {
  imgUrl: string;
  label: string;
  content: string;
  className?: string;
}

const StoreStationFeaturesCard: FC<StoreStationFeaturesCardProps> = ({
  imgUrl,
  label,
  content,
  className,
}) => {
  return (
    <div className="text-[#000000] flex flex-col items-center gap-y-[43px] bg-white rounded-[20px] p-4 w-[420px]">
      <Image
        src={imgUrl}
        alt=""
        width={380}
        height={320}
        className="rounded-[20px]"
      />
      <div
        className={clsx(
          "flex flex-col gap-y-5 items-center justify-between h-full",
          className
        )}
      >
        <p className="text-[24px] font-bold text-center max-w-[255px]">
          {label}
        </p>
        <p className="text-lg px-4">{content}</p>
      </div>
    </div>
  );
};

const DATA = [
  {
    imgUrl: "/images/store_station_features_1.png",
    label: "スピード感が違う",
    content:
      "長年の経験と実績のある代表が担当者だからこそ、対応のスピードが違います。業界を知り尽くした知見をもとに、知りたいことへのリアルタイムな回答と迅速な対応が自慢です。",
  },
  {
    imgUrl: "/images/store_station_features_2.png",
    label: "経営者だからこそ親身になれる",
    content:
      "飲食店経営をしているとよくある悩みも共有いただけます。経営課題においても経営経験者だからこその解決策を提案するなど親身にサポートいたします。",
  },
  {
    imgUrl: "/images/store_station_features_3.png",
    label: "25店舗を経営してきた豊富なノウハウ",
    content:
      "飲食業界歴10年、25店舗経営の実績を生かし、お客様の気づいていない潜在的なご要望や課題を早期に発見いたします。商流やリースのご相談も可能です。",
  },
  {
    imgUrl: "/images/store_station_features_4.png",
    label: "売却後も万全のサポート",
    content:
      "店舗の売買はゴールではなくスタート。新たなチャレンジをするお客様を様々な面からサポートいたします。",
  },
];
