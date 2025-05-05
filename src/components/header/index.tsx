"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import { EmailIcon, LineIcon } from "@/assets/icons";
import { PATH_ROUTER } from "@/const/path.const";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const pathName = usePathname();

  return (
    <div className="fixed top-0 bg-[#FFFFFF] border-b border-[#9FF0D9] z-50 w-full">
      <div className="px-5 sm:px-10 py-5 flex items-center justify-between right-0 left-0 z-50 max-w-screen-2xl mx-auto overflow-hidden ">
        <Link href={PATH_ROUTER.ROOT}>
          <Image
            src="/images/app_logo.png"
            alt="app logo"
            className="h-10 w-[204px]"
            width={204}
            height={40}
          />
        </Link>

        <div className="hidden sm:flex items-center gap-x-5">
          <div className="flex items-center gap-x-10 text-lg font-medium">
            <Link
              href={PATH_ROUTER.INTRODUCE}
              className={clsx(
                pathName.replaceAll("/", "") ===
                  PATH_ROUTER.INTRODUCE.replaceAll("/", "")
                  ? "text-[#1EA68B]"
                  : "text-[#000000]"
              )}
            >
              サービス紹介
            </Link>
            <Link
              href={PATH_ROUTER.COMPANY_PROFILE}
              className={clsx(
                pathName.replaceAll("/", "") ===
                  PATH_ROUTER.COMPANY_PROFILE.replaceAll("/", "")
                  ? "text-[#1EA68B]"
                  : "text-[#000000]"
              )}
            >
              会社概要
            </Link>
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
