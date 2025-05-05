import Image from "next/image";
import React from "react";
import SectionRepresentative from "./_componnent/SectionRepresentative";
import MainServices from "./_componnent/MainServices";
import ServiceOverview from "./_componnent/service-overview";

const Introduce = () => {
  return (
    <div>
      <div className="relative flex items-center justify-center pt-[58px] pb-[64px] bg-[#CFF8EB] w-full">
        <Image
          src="/images/img-text-service.png"
          alt=""
          width={827}
          height={240}
          className="absolute "
        />

        <p className="text-[30px] sm:text-[64px] font-black text-[#111111]">
          サービス紹介
        </p>
      </div>

      <SectionRepresentative />
      <MainServices />

      <ServiceOverview />
    </div>
  );
};

export default Introduce;
