/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { DATA_PATH } from "../header";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="relative flex flex-col items-center max-w-[1155px] w-full pb-[80px] mx-auto px-[50px] sm:px-0">
      <div className="flex flex-col items-center max-w-[1240px] mx-auto my-[100px] sm:my-[220px] px-5 sm:px-0 gap-y-[10px]">
        <p className="text-[56px] leading-[64px] sm:text-[88px] sm:leading-[100px] font-bold">
          Contact us
        </p>
        <div className="h-2 w-[70px] sm:w-[100px] bg-white" />
        <p className="leading-[24px] sm:text-2xl sm:leading-[32px] font-bold">
          Go for it !
        </p>
      </div>
      <Image
        src="/images/logo-desktop.svg"
        alt="app logo"
        className="h-[45px] w-[182px]"
        width={182}
        height={45}
      />
      <div className="w-full flex items-center sm:justify-between gap-x-[30px] mt-5 sm:mt-[30px] flex-wrap gap-y-5">
        {DATA_PATH.map((item, index) => (
          <Link key={index} href={item.path} className="sm:text-2xl">
            {item.title}
          </Link>
        ))}
        <p className="sm:text-2xl">プライバシーポリシー</p>
      </div>
      <div className="mt-[30px] sm:mt-[50px]">{`© ${new Date().getFullYear()} ROGYX CO.LTD.`}</div>
    </section>
  );
};

export default Footer;
