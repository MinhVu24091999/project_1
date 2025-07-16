import Image from "next/image";
import React from "react";

const LeadTheWay = () => {
  return (
    <div
      className="min-h-[613px] sm:min-h-[820px] w-full bg-cover bg-center relative py-[218px] flex items-center justify-center"
      style={{ backgroundImage: "url('/images/bg-lead-the-way.svg')" }}
    >
      <Image
        src="/images/inky.png"
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[153px] sm:w-[1307px] sm:h-[616px]"
        width={1307}
        height={616}
      />
      <p className="text-[56px] sm:text-[176px] font-bold text-white leading-[64px] sm:leading-[192px] relative">
        MOVE,
        <br />
        Lead the Way
      </p>
    </div>
  );
};

export default LeadTheWay;
