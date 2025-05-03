"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import { EmailIcon, LineIcon } from "@/assets/icons";

const Header = () => {
  const pathName = usePathname();

  return (
    <div className="fixed top-0 bg-[#FFFFFF] border-b border-[#9FF0D9] z-50 w-full">
      <div className="px-5 sm:px-10 py-5 flex items-center justify-between right-0 left-0 z-50 max-w-screen-2xl mx-auto overflow-hidden ">
        <img
          src="/images/app_logo.png"
          alt="app logo"
          className="h-10 w-[204px]"
        />

        <div className="hidden sm:flex items-center gap-x-5">
          <div className="flex items-center gap-x-10 text-lg font-medium">
            <a
              href={"PATH_ROUTER.INTRODUCE"}
              className={clsx(
                pathName === "PATH_ROUTER.INTRODUCE"
                  ? "text-[#1EA68B]"
                  : "text-[#000000]"
              )}
            >
              サービス紹介
            </a>
            <a
              href={"PATH_ROUTER.COMPANY_PROFILE"}
              className={clsx(
                pathName === "PATH_ROUTER.COMPANY_PROFILE"
                  ? "text-[#1EA68B]"
                  : "text-[#000000]"
              )}
            >
              会社概要
            </a>
          </div>

          <button className="flex items-center gap-x-[5px] py-[17.5px] px-[30px] rounded-full text-lg bg-[#2DBF15]">
            <LineIcon />
            LINEでお問い合わせ
          </button>

          <button className="flex items-center gap-x-[5px] py-[17.5px] px-[30px] rounded-full text-lg bg-[#174A42]">
            <EmailIcon className="w-[23px] h-[18px]" />
            メールでお問い合わせ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
