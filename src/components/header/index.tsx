"use client";
import { useEffect, useRef, useState } from "react";
import { gsap, Power2, Power4 } from "gsap";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { EmailIcon, LineIcon } from "@/assets/icons";

const Header = () => {
  const pathName = usePathname();
  // References for DOM elements
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const openTriggerRef = useRef<HTMLDivElement>(null);
  const openTriggerTopRef = useRef<HTMLDivElement>(null);
  const openTriggerMiddleRef = useRef<HTMLDivElement>(null);
  const openTriggerBottomRef = useRef<HTMLDivElement>(null);
  const closeTriggerRef = useRef<HTMLDivElement>(null);
  const closeTriggerLeftRef = useRef<HTMLDivElement>(null);
  const closeTriggerRightRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const menuTopRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuMiddleRef = useRef<HTMLDivElement>(null);
  const menuBottomRef = useRef<HTMLDivElement>(null);

  // GSAP Timelines
  const tlOpen = useRef<gsap.core.Timeline>(gsap.timeline({ paused: true }));
  const tlClose = useRef<gsap.core.Timeline>(gsap.timeline({ paused: true }));

  useEffect(() => {
    const openTrigger = openTriggerRef.current;
    const openTriggerTop = openTriggerTopRef.current;
    const openTriggerMiddle = openTriggerMiddleRef.current;
    const openTriggerBottom = openTriggerBottomRef.current;
    const closeTrigger = closeTriggerRef.current;
    const closeTriggerLeft = closeTriggerLeftRef.current;
    const closeTriggerRight = closeTriggerRightRef.current;
    const logo = logoRef.current;
    const menu = menuRef.current;
    const menuTop = menuTopRef.current;
    const menuMiddle = menuMiddleRef.current;
    const menuBottom = menuBottomRef.current;

    //OPEN TIMELINE
    tlOpen.current
      .add("preOpen")
      .to(
        logo,
        0.4,
        {
          scale: 0.8,
          opacity: 0,
          ease: Power2.easeOut,
        },
        "preOpen"
      )
      .to(
        openTriggerTop,
        0.4,
        {
          x: "+80px",
          y: "-80px",
          delay: 0.1,
          ease: Power4.easeIn,
          onComplete: function () {
            closeTrigger!.style.zIndex = "25";
          },
        },
        "preOpen"
      )
      .to(
        openTriggerMiddle,
        0.4,
        {
          x: "+=80px",
          y: "-=80px",
          ease: Power4.easeIn,
          onComplete: function () {
            openTrigger!.style.visibility = "hidden";
          },
        },
        "preOpen"
      )
      .to(
        openTriggerBottom,
        0.4,
        {
          x: "+=80px",
          y: "-=80px",
          delay: 0.2,
          ease: Power4.easeIn,
        },
        "preOpen"
      )
      .add("open", "-=0.4")
      .to(
        menuTop,
        0.8,
        {
          y: "13%",
          ease: Power4.easeInOut,
        },
        "open"
      )
      .to(
        menuMiddle,
        0.8,
        {
          scaleY: 1,
          ease: Power4.easeInOut,
        },
        "open"
      )
      .to(
        menuBottom,
        0.8,
        {
          y: "-114%",
          ease: Power4.easeInOut,
        },
        "open"
      )
      .fromTo(
        menu,
        0.6,
        {
          y: 30,
          opacity: 0,
          visibility: "hidden",
        },
        {
          y: 0,
          opacity: 1,
          visibility: "visible",
          ease: Power4.easeOut,
        },
        "-=0.2"
      )
      .add("preClose", "-=0.8")
      .to(
        closeTriggerLeft,
        0.8,
        {
          x: "-=100px",
          y: "+=100px",
          ease: Power4.easeOut,
        },
        "preClose"
      )
      .to(
        closeTriggerRight,
        0.8,
        {
          x: "+=100px",
          y: "+=100px",
          delay: 0.2,
          ease: Power4.easeOut,
        },
        "preClose"
      );

    //CLOSE TIMELINE
    tlClose.current
      .add("close")
      .to(
        menuTop,
        0.2,
        {
          backgroundColor: "#6295ca",
          ease: Power4.easeInOut,
          onComplete: function () {
            closeTrigger!.style.zIndex = "5";
            openTrigger!.style.visibility = "visible";
          },
        },
        "close"
      )
      .to(
        menuMiddle,
        0.2,
        {
          backgroundColor: "#6295ca",
          ease: Power4.easeInOut,
        },
        "close"
      )
      .to(
        menuBottom,
        0.2,
        {
          backgroundColor: "#6295ca",
          ease: Power4.easeInOut,
        },
        "close"
      )
      .to(
        menu,
        0.6,
        {
          y: 20,
          opacity: 0,
          ease: Power4.easeOut,
          onComplete: function () {
            menu!.style.visibility = "hidden";
          },
        },
        "close"
      )
      .to(
        logo,
        0.8,
        {
          scale: 1,
          opacity: 1,
          ease: Power4.easeInOut,
        },
        "close"
      )
      .to(
        menuTop,
        0.8,
        {
          y: "-113%",
          ease: Power4.easeInOut,
        },
        "close"
      )
      .to(
        menuMiddle,
        0.8,
        {
          scaleY: 0,
          ease: Power4.easeInOut,
        },
        "close"
      )
      .to(
        menuBottom,
        0.8,
        {
          y: "23%",
          ease: Power4.easeInOut,
          onComplete: function () {
            menuTop!.style.backgroundColor = "#ffffff";
            menuMiddle!.style.backgroundColor = "#ffffff";
            menuBottom!.style.backgroundColor = "#ffffff";
          },
        },
        "close"
      )
      .to(
        closeTriggerLeft,
        0.2,
        {
          x: "+=100px",
          y: "-=100px",
          ease: Power4.easeIn,
        },
        "close"
      )
      .to(
        closeTriggerRight,
        0.2,
        {
          x: "-=100px",
          y: "-=100px",
          delay: 0.1,
          ease: Power4.easeIn,
        },
        "close"
      )
      .to(
        openTriggerTop,
        1,
        {
          x: "-=80px",
          y: "+=80px",
          delay: 0.2,
          ease: Power4.easeOut,
        },
        "close"
      )
      .to(
        openTriggerMiddle,
        1,
        {
          x: "-=80px",
          y: "+=80px",
          ease: Power4.easeOut,
        },
        "close"
      )
      .to(
        openTriggerBottom,
        1,
        {
          x: "-=80px",
          y: "+=80px",
          delay: 0.1,
          ease: Power4.easeOut,
        },
        "close"
      );

    // Cleanup
    return () => {
      // eslint-disable-next-line
      tlOpen.current.kill();
      // eslint-disable-next-line
      tlClose.current.kill();
    };
  }, []);

  const handleOpenClick = () => {
    if (tlOpen.current.progress() < 1) {
      tlOpen.current.play();
    } else {
      tlOpen.current.restart();
    }
    setIsOpenMenu(true);
  };

  const handleCloseClick = () => {
    if (tlClose.current.progress() < 1) {
      tlClose.current.play();
    } else {
      tlClose.current.restart();
    }
    setTimeout(() => {
      setIsOpenMenu(false);
    }, 800);
  };

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
              href={'PATH_ROUTER.INTRODUCE'}
              className={clsx(
                pathName === 'PATH_ROUTER.INTRODUCE'
                  ? "text-[#1EA68B]"
                  : "text-[#000000]"
              )}
            >
              サービス紹介
            </a>
            <a
              href={'PATH_ROUTER.COMPANY_PROFILE'}
              className={clsx(
                pathName === 'PATH_ROUTER.COMPANY_PROFILE'
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

        <div className="flex items-center gap-2 text-[30px] font-medium cursor-pointer text-black sm:hidden">
          <div
            ref={openTriggerRef}
            className="menu-trigger"
            onClick={handleOpenClick}
          >
            <div
              ref={openTriggerTopRef}
              className={`menu-trigger-bar top`}
            ></div>
            <div
              ref={openTriggerMiddleRef}
              className={`menu-trigger-bar middle`}
            ></div>
            <div
              ref={openTriggerBottomRef}
              className={`menu-trigger-bar bottom`}
            ></div>
          </div>
        </div>
        <div
          className="animation-container bg-[#e0dfe1] fixed right-0 top-0 w-[0px] h-screen z-[50] overflow-hidden"
          style={{
            width: isOpenMenu ? 500 : 0,
          }}
        >
          <div
            ref={closeTriggerRef}
            className="close-trigger"
            onClick={handleCloseClick}
          >
            <div
              ref={closeTriggerLeftRef}
              className={`close-trigger-bar left`}
            ></div>
            <div
              ref={closeTriggerRightRef}
              className={`close-trigger-bar right`}
            ></div>
          </div>
          <div className="inner-container">
            <i className="menu-bg top" ref={menuTopRef}></i>
            <i className="menu-bg middle" ref={menuMiddleRef}></i>
            <i className="menu-bg bottom" ref={menuBottomRef}></i>
            <div className="menu-container" ref={menuContainerRef}>
              <div
                className="flex flex-col items-center gap-y-5 menu"
                ref={menuRef}
              >
                <a
                  href={'PATH_ROUTER.INTRODUCE'}
                  className={clsx(
                    pathName === 'PATH_ROUTER.INTRODUCE'
                      ? "!text-[#1EA68B]"
                      : "!text-[#000000]"
                  )}
                >
                  サービス紹介
                </a>
                <a
                  href={'PATH_ROUTER.COMPANY_PROFILE'}
                  className={clsx(
                    pathName === 'PATH_ROUTER.COMPANY_PROFILE'
                      ? "!text-[#1EA68B]"
                      : "!text-[#000000]"
                  )}
                >
                  会社概要
                </a>

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
        </div>
      </div>
    </div>
  );
};

export default Header;
