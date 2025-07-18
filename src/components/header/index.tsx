"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Drawer } from "antd";
import { Fragment, useState } from "react";
import { twJoin } from "tailwind-merge";
import CloseIcon from "@/assets/icons/CloseIcon";
import MenuIcon from "@/assets/icons/MenuIcon";
import useWindowSize from "@/hooks/useWindowSize";
import ArrowIcon from "@/assets/icons/ArrowIcon";

const Header = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { windowWidth } = useWindowSize();

  return (
    <>
      <div className="fixed bg-transparent top-0 z-[500] w-full">
        <div className="px-7 sm:px-0 pt-5 sm:pt-[50px] flex items-center justify-between right-0 left-0 z-50 max-w-[1326px] mx-auto overflow-hidden ">
          {windowWidth <= 640 ? (
            <Image
              src="/images/logo-mobile.svg"
              alt="app logo"
              className="h-[50px] w-[74px]"
              width={74}
              height={50}
            />
          ) : (
            <Image
              src="/images/logo-desktop.svg"
              alt="app logo"
              className="h-[45px] w-[182px]"
              width={182}
              height={45}
            />
          )}

          <div className="hidden sm:flex items-start gap-x-10">
            {DATA_PATH.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className={twJoin(
                  "text-2xl font-bold leading-[32px] flex flex-col gap-y-1"
                )}
              >
                {item.title}

                {pathName.replaceAll("/", "") ===
                item.path.replaceAll("/", "") ? (
                  <div className="w-full h-[1px] bg-white" />
                ) : (
                  <Fragment />
                )}
              </Link>
            ))}
          </div>

          <div
            className="flex flex-col gap-y-1 cursor-pointer sm:hidden"
            onClick={() => setIsOpen(true)}
          >
            <MenuIcon className="w-10 h-5" />
          </div>
        </div>
      </div>

      <Drawer
        title={""}
        width={"100%"}
        placement="right"
        closable={false}
        onClose={() => setIsOpen(false)}
        open={isOpen}
        style={{ background: "#FFFFFF" }}
      >
        <div className="flex flex-col items-center pt-[6px] gap-y-[80px] relative">
          <Image
            src="/images/logo-black.png"
            alt="app logo"
            className="h-[50px] w-[74px]"
            width={74}
            height={50}
          />

          <button
            className="absolute top-3 right-[10px]"
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon className="w-5 h-[17px]" />
          </button>
          <div className="flex flex-col gap-y-[30px] h-full items-center">
            {DATA_PATH.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className={twJoin(
                  "text-2xl font-bold leading-[150%] flex items-center justify-between font-oswald w-[189px]"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.title}

                <ArrowIcon className="text-black" />
              </Link>
            ))}
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Header;

export const DATA_PATH = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "What We Do",
    path: "/what-we-do"
  },
  {
    title: "Information",
    path: "/information"
  },
  {
    title: "Company",
    path: "/company"
  },
  {
    title: "Join Us",
    path: "/join-us"
  },
  {
    title: "Contact",
    path: "/contact"
  }
];
