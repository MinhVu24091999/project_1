import { HomeIcon, Top10Icon, TwoPeopleIcon } from "@/assets/icons";
import Image from "next/image";
import React, { ComponentPropsWithoutRef, FC, ReactNode } from "react";

const TrustedProvenSupport = () => {
  return (
    <div className="mt-[60px] sm:mt-[160px] flex flex-col gap-y-10 items-center max-w-[1440px] px-4 sm:px-10 mx-auto">
      <p className="font-bold text-3xl sm:text-[64px] text-[#000000] text-center leading-[150%]">
        信頼と実績のサポート
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-[80px] gap-y-10 ">
        <TrustedProvenSupportItem
          label={
            <span>
              <p className="inline-block text-[32px] text-[#FFEE02]">
                代表自身
              </p>{" "}
              が 直接サポート
            </span>
          }
          description={
            "すべての情報を把握、集約してスピード感のある対応をいたします。"
          }
        >
          <TwoPeopleIcon />
        </TrustedProvenSupportItem>
        <TrustedProvenSupportItem
          label={
            <span>
              飲食店経営
              <p className="inline-block text-[32px] text-[#FFEE02]">25店舗</p>
            </span>
          }
          description={
            "多数の店舗経営の経験があるからこそ 様々な気配りが可能です。"
          }
        >
          <HomeIcon />
        </TrustedProvenSupportItem>
        <TrustedProvenSupportItem
          label={
            <span>
              <p className="inline-block text-[32px] text-[#FFEE02]">
                10年以上
              </p>{" "}
              の対応実績
            </span>
          }
          description={
            "出退店サポート、多店舗展開、商流開発、マーケティング、その他"
          }
        >
          <Top10Icon />
        </TrustedProvenSupportItem>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-x-[61px] max-w-[1148px] sm:mt-[56px] gap-y-8">
        <Image
          src={"/images/img-ceo-2.png"}
          alt=""
          width={404}
          height={511}
          className="sm:w-[404px] sm:h-[511px] rounded-[20px]"
        />

        <div className="flex flex-col text-[#000000]">
          <p className="text-[32px] font-bold">代表から皆様へ</p>
          <p className="text-xl font-bold mt-2.5">
            飲食店の売却・買収で、経営者・スタッフに喜びを！！
          </p>
          <p className="text-lg pt-[15px] border-t border-[#000000] mt-[15px]">
            私たちは飲食業界専門に出退店から開業支援に渡りサポート致します。
            飲食業界に特化した店舗売買の仲介業を中心に、店舗オーナー様の想い考えを形にしていくことで飲食店経営のサポートをおこなっております。
            <br />
            また飲食店経営に専念できるよう、ウィークポイントにてこ入れしブラッシュアップを約束いたします。
            <br />
            ひとりでも多くの店舗オーナー様が成功体験を重ねられるよう、飲食業界全体を活性化する礎となることが私たちの目標です。
          </p>

          <p className="font-medium ml-auto mt-[45px]">
            店舗ステーション株式会社
            <br /> 代表取締役　武藤 進哉
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrustedProvenSupport;

const TrustedProvenSupportItem: FC<TrustedProvenSupportItemProps> = ({
  children,
  label,
  description,
}) => {
  return (
    <div className="flex flex-col gap-y-10 items-center max-w-[340px]">
      <div className="w-[340px] h-[340px] rounded-full border-[21px] border-[#9FF0D9] bg-[#1EA68B] flex flex-col items-center justify-center gap-y-5">
        <div className="w-[100px] h-[100px]">{children}</div>
        <div className="max-w-[168px] text-[28px] text-center">{label}</div>
      </div>

      <p className="text-xl text-[#000000]">{description}</p>
    </div>
  );
};

interface TrustedProvenSupportItemProps
  extends ComponentPropsWithoutRef<"div"> {
  label: ReactNode;
  description: string;
}
