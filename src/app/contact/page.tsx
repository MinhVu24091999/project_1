import TextAnimation from "@/components/TextAnimation";
import Image from "next/image";
import React from "react";
import ContactForm from "./_component/ContacForm";

const page = () => {
  return (
    <div>
      <div className="flex items-center justify-center pt-[160px] pb-[100px] sm:pt-[220px] sm:pb-[230px] relative">
        <div className="absolute top-[58%] sm:top-1/2 left-[52%] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
          <div className="relative w-[331px] h-[108px]  sm:w-[1072px] sm:h-[325px]">
            <Image
              src="/images/paint.png"
              alt=""
              width={1072}
              height={325}
              className="w-[331px] h-[108px]  sm:w-[1072px] sm:h-[325px]"
            />
            <div className="absolute right-0 top-0 z-[20] h-full w-full animate-test1 bg-[#1B1C1F]" />
          </div>
        </div>
        <p className="text-[56px] leading-[64px] sm:text-[176px] sm:leading-[192px] font-bold relative ">
          Contact
        </p>
      </div>

      <div className="flex items-center justify-center pb-[100px] sm:pb-[220px] px-5 sm:px-0">
        <TextAnimation>
          <p className="text-[48px] leading-[150%] font-bold text-center hidden sm:block">
            お仕事のご相談、エントリーについてなど <br />
            下記フォームからお気軽にお問い合わせください。
          </p>

          <p className="text-[20px] leading-[150%] font-bold sm:hidden text-center">
            お仕事のご相談、エントリーについてなど下記フォームから <br />{" "}
            お気軽にお問い合わせください。
          </p>
        </TextAnimation>
      </div>

      <ContactForm />
    </div>
  );
};

export default page;
