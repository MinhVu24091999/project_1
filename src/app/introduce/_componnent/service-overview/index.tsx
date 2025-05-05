import React from "react";
import ServiceOverviewCard from "./ServiceOverviewCard";

const ServiceOverview = () => {
  return (
    <div className="w-full bg-[#F1FCF9] pt-10 sm:pt-[100px] pb-[80px] sm:pb-[160px] px-4 sm:px-0">
      <div className="flex flex-col gap-y-[30px] max-w-[1320px] mx-auto">
        {DATA.map((item, index) => (
          <ServiceOverviewCard key={index} serviceOverviewDetail={item} />
        ))}
      </div>
    </div>
  );
};

export default ServiceOverview;

const DATA = [
  {
    urlImage: "/images/service_overview_img.png",
    title: "サービス名",
    description:
      "説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。",
    title1: "見出し2",
    title2: "見出し3",
    content: {
      label: "見出し2",
      contentDetail:
        "説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。",
    },
  },
  {
    urlImage: "/images/service_overview_img.png",
    title: "サービス名",
    description:
      "説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。",
    title1: "見出し2",
    title2: "見出し3",
    content: {
      label: "見出し2",
      contentDetail:
        "説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。",
    },
  },
  {
    urlImage: "/images/service_overview_img.png",
    title: "サービス名",
    description:
      "説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。",
    title1: "見出し2",
    title2: "見出し3",
    content: {
      label: "見出し2",
      contentDetail:
        "説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。",
    },
  },
];
