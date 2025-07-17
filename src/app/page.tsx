"use client";

import Image from "next/image";
import Information from "./_components/Information";
import LeadTheWay from "./_components/LeadTheWay";
import Vision from "./_components/Vision";
import WhatWeDo from "./_components/WhatWeDo";

export default function HomePage() {
  return (
    <div>
      <LeadTheWay />
      <div className="flex flex-col items-center gap-y-[30px] sm:gap-y-10 my-[100px] sm:my-[220px]">
        <div className="flex flex-col gap-y-5 sm:gap-y-[30px] items-center">
          <p className="text-[32px] leading-[40px] sm:text-[72px] sm:leading-[80px] font-bold">
            MOVE, Lead the Way.
          </p>
          <p className="text-xl leading-[32px] sm:text-[32px] sm:leading-[40px] max-w-[220px] sm:max-w-full text-center">
            自ら動き、道を拓き、未来を導け。
          </p>
        </div>
        <div className="h-[2px] w-[340px] sm:w-[254px] bg-white" />
        <p className="text-2xl leading-[32px] text-center hidden sm:block">
          現状に満足しない。
          <br />
          常に革新を求め、主体的な行動で新たな価値を創造する。
        </p>
        <p className="leading-[24px] sm:text-2xl sm:leading-[32px] text-center max-w-[294px] sm:hidden">
          現状に満足しない。
          常に革新を求め、主体的な行動で新たな価値を創造する。
        </p>
      </div>
      <Vision />
      <WhatWeDo />
      <Information />
      <div className="flex flex-col sm:flex-row sm:items-center max-w-[1240px] mx-auto my-[100px] sm:mt-[220px] px-5 sm:px-0 gap-y-[30px]">
        <div className="w-full relative">
          <Image src="/images/company.png" alt="" width={620} height={403} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-y-[10px]">
            <p className="text-[48px] leading-[56px] sm:text-[72px] sm:leading-[80px] font-bold">
              Company
            </p>
            <div className="h-2 w-[65px] sm:w-[100px] bg-white" />
            <p className="leading-[24px] sm:text-2xl sm:leading-[32px] font-bold">
              About ROGYX
            </p>
          </div>
        </div>
        <div className="w-full relative">
          <Image src="/images/joinUs.png" alt="" width={620} height={403} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-y-[10px]">
            <p className="text-[48px] leading-[56px] sm:text-[72px] sm:leading-[80px] font-bold">
              Join us
            </p>
            <div className="h-2 w-[65px] sm:w-[100px] bg-white" />
            <p className="leading-[24px] sm:text-2xl sm:leading-[32px] font-bold">
              And make it move
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
