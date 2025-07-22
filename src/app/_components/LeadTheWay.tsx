import Image from "next/image";
import React from "react";

const LeadTheWay = () => {
  return (
    <div
      className="h-[613px] sm:h-[820px] w-full bg-cover bg-center relative py-[218px] flex items-center justify-center"
      style={{ backgroundImage: "url('/images/bg-lead-the-way.svg')" }}
    >
      <Image
        src="/images/inky.png"
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[153px] sm:w-[1307px] sm:h-[616px]"
        width={1307}
        height={616}
      />
      <div className="absolute left-1/2 -translate-x-1/2 sm:top-1/2 sm:-translate-y-1/2">
        <div className="min-w-[310px] flex animate-full-block flex-col gap-y-1 w-full sm:min-w-[934px]">
          <p className="text-[56px] sm:text-[176px] font-bold text-white leading-[64px] sm:leading-[192px] relative">
            MOVE,
            <br />
            Lead the Way
          </p>
          <div
            className="flex animate-slide-down-mobile flex-col gap-y-[2px] sm:animate-slide-down-desktop sm:gap-y-1"
            style={{ animationDelay: "1.5s" }}
          >
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="flex h-6 animate-slide-up items-end overflow-hidden opacity-0 sm:h-[68px]"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <p className="text-[56px] sm:text-[176px] font-bold text-white leading-[64px] sm:leading-[192px]">
                  Lead the Way
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadTheWay;
