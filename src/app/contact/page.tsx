"use client";

import Image from "next/image";
import React from "react";
import Consultation from "../_components/Consultation";
import ContactForm from "../_components/ContactForm";

const page = () => {
  return (
    <div>
      <div className="relative flex items-center justify-center pt-[58px] pb-[64px] bg-[#CFF8EB] w-full">
        <Image
          src="/images/img-text-company.png"
          alt=""
          width={827}
          height={240}
          className="absolute "
        />

        <p className="text-[30px] sm:text-[64px] font-black text-[#111111]">
          お問い合わせ
        </p>
      </div>

      <Consultation />
      <ContactForm className="sm:!mt-[58px] sm:!mb-[162px]" />
    </div>
  );
};

export default page;
