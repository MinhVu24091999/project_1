/* eslint-disable @next/next/no-img-element */
"use client";
import { LineIcon } from "@/assets/icons";
import { PATH_ROUTER } from "@/const/path.const";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="relative bg-[#F3F3F3] min-h-[400px] sm:min-h-[538px] flex flex-col sm:flex-row justify-center items-center text-[#000000] px-5 sm:px-0">
      <div className="flex items-center justify-center gap-5 md:gap-[100px] mb-10 md:mb-0 flex-wrap">
        <img
          src="/images/app_logo.png"
          alt="app logo"
          className=" sm:h-[100px] sm:w-[532px]"
        />

        <div className="w-[1px] h-[240px] bg-[#999999] hidden sm:block" />

        <div className="flex flex-col sm:flex-row items-center gap-x-[100px] gap-y-5">
          <div className="flex sm:flex-col gap-x-5 gap-y-[30px] font-bold">
            <a href={""}>サービス紹介</a>
            <a href={"PATH_ROUTER.COMPANY_PROFILE"}>会社概要</a>
          </div>

          <Link
            href={PATH_ROUTER.CONTACT}
            className="flex items-center gap-x-[5px] py-[17.5px] px-[30px] rounded-full text-lg bg-[#2DBF15] text-white"
          >
            <LineIcon />
            お問い合わせ
          </Link>
        </div>
      </div>
      <div className="absolute bottom-2 md:bottom-5 text-sm ">
        {`© ${new Date().getFullYear()} 店舗ステーション. All rights reserved.`}
      </div>
    </section>
  );
};

export default Footer;
