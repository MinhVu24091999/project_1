import Image from "next/image";
import React from "react";
import MessageFromCEO from "./_component/MessageFromCEO";
import Profile from "./_component/Profile";

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
          会社概要
        </p>
      </div>

      <MessageFromCEO />
      <Profile />
    </div>
  );
};

export default page;
