"use client";

import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { EmailIcon, LineIcon } from "@/assets/icons";
import { PATH_ROUTER } from "@/const/path.const";
import Image from "next/image";
import Link from "next/link";
import { Drawer } from "antd";
import { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 bg-[#FFFFFF] border-b border-[#9FF0D9] z-[500] w-full">
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

              <div className="flex items-center gap-x-5">
                <button
                  className="flex items-center gap-x-[5px] py-[17.5px] px-[30px] rounded-full text-lg bg-[#2DBF15]"
                  onClick={() =>
                    window.open(
                      "https://line.me/R/ti/p/@042qotud?ts=04301146&oat_content=url",
                      "_blank"
                    )
                  }
                >
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

          <div
            className="w-5 flex flex-col gap-y-1 cursor-pointer sm:hidden"
            onClick={() => setIsOpen(true)}
          >
            <div className="bg-black w-full h-[3px] rounded-full" />
            <div className="bg-black w-full h-[3px] rounded-full" />
            <div className="bg-black w-full h-[3px] rounded-full" />
          </div>
        </div>
      </div>

      <Drawer
        title={
          <button
            className="ml-auto w-full flex justify-end"
            onClick={() => setIsOpen(false)}
          >
            <CloseOutlined size={20} />
          </button>
        }
        width={"85%"}
        placement="right"
        closable={false}
        onClose={() => setIsOpen(false)}
        open={isOpen}
        style={{ background: "#CFF8EB" }}
      >
        <div className="flex flex-col gap-y-5 h-full">
          <Link
            href={PATH_ROUTER.ROOT}
            className={clsx(
              pathName === "/" ? "!text-[#1EA68B]" : "!text-[#000000]"
            )}
            onClick={() => setIsOpen(false)}
          >
            ホーム
          </Link>
          <Link
            href={PATH_ROUTER.INTRODUCE}
            className={clsx(
              pathName.replaceAll("/", "") ===
                PATH_ROUTER.INTRODUCE.replaceAll("/", "")
                ? "!text-[#1EA68B]"
                : "!text-[#000000]"
            )}
            onClick={() => setIsOpen(false)}
          >
            サービス紹介
          </Link>
          <Link
            href={PATH_ROUTER.COMPANY_PROFILE}
            className={clsx(
              pathName.replaceAll("/", "") ===
                PATH_ROUTER.COMPANY_PROFILE.replaceAll("/", "")
                ? "!text-[#1EA68B]"
                : "!text-[#000000]"
            )}
            onClick={() => setIsOpen(false)}
          >
            会社概要
          </Link>

          <div className="mt-auto flex flex-col gap-y-5">
            <button className="!text-white flex items-center justify-center gap-x-[5px] py-3 px-[30px] rounded-full  bg-[#2DBF15] w-full min-h-[54px]">
              <LineIcon />
              LINEでお問い合わせ
            </button>

            <button
              className="!text-white flex items-center justify-center gap-x-[5px] py-3 px-[30px] rounded-full bg-[#174A42] w-full min-h-[54px]"
              onClick={() => router.push(PATH_ROUTER.CONTACT)}
            >
              <EmailIcon className="w-[23px] h-[18px] " />
              メールでお問い合わせ
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
