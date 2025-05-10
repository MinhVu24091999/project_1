import AvailableButton from "@/components/AvailableButton";
import Image from "next/image";
import React from "react";

const MessageFromCEO = () => {
  return (
    <div>
      <div className="relative bg-[#1EA68B]">
        <Image
          src={"/images/deco-1.png"}
          alt=""
          className="absolute h-full left-0 top-0 hidden sm:block"
          width={597}
          height={597}
        />

        <div className="relative grid grid-cols-1 sm:grid-cols-[36%_58%] gap-x-[70px] max-w-[1261px] mx-auto py-10 sm:py-[151px] px-4 sm:px-0 items-center sm:items-start gap-y-8">
          <div className="flex flex-col gap-y-[15px] items-center w-[250px] sm:w-[450px] mx-auto">
            <Image
              src={"/images/img-ceo-8.png"}
              alt=""
              className="rounded-[30px] w-[250px] h-[250px] sm:w-[450px] sm:h-[360px]"
              width={450}
              height={360}
            />
            <p className="font-medium leading-[180%] text-center">
              店舗ステーション株式会社 代表取締役　武藤 進哉
            </p>
          </div>

          <div className="flex flex-col">
            <p
              className="sm:text-[40px] font-bold drop-shadow-[3px_3px_0px_0px_#000000;] mb-[13px] text-center sm:text-start text-3xl leading-[140%]"
              style={{ textShadow: "3px 3px 0px #000000" }}
            >
              代表から皆様へ
            </p>

            <p className="text-lg sm:text-2xl mb-[30px] leading-[180%]">
              飲食店の売却・買収で、経営者・スタッフに喜びを！！
            </p>

            <p className="text-sm sm:text-lg !leading-[200%]">
              私たちは飲食業界専門に出退店から開業支援に渡りサポート致します。
              <br />
              飲食業界に特化した店舗売買の仲介業を中心に、店舗オーナー様の想い考えを形にしていくことで飲食店経営のサポートをおこなっております。
              <br />
              また飲食店経営に専念できるよう、ウィークポイントにてこ入れしブラッシュアップを約束いたします。
              <br />
              ひとりでも多くの店舗オーナー様が成功体験を重ねられるよう、飲食業界全体を活性化する礎となることが私たちの目標です。
            </p>
          </div>
        </div>
      </div>
      <AvailableButton className="mx-auto mt-10" />
    </div>
  );
};

export default MessageFromCEO;
