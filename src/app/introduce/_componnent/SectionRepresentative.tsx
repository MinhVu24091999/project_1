import AvailableButton from "@/components/AvailableButton";
import Image from "next/image";
import React from "react";

const SectionRepresentative = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={"/images/representative-bg.png"}
          alt=""
          className="absolute w-full h-full"
          width={1440}
          height={600}
        />

        <div className="relative flex flex-col sm:flex-row gap-x-[70px] max-w-[1261px] mx-auto py-10 sm:py-[151px] px-4 sm:px-0 items-center sm:items-start gap-y-8">
          <Image
            src={"/images/img-ceo-3.png"}
            alt=""
            className="rounded-[30px] w-[250px] h-[250px] sm:w-[450px] sm:h-[360px]"
            width={450}
            height={360}
          />

          <div className="flex flex-col">
            <p
              className="sm:text-[40px] font-bold drop-shadow-[3px_3px_0px_0px_#000000;] mb-[13px] text-center sm:text-start text-3xl leading-[140%]"
              style={{ textShadow: "3px 3px 0px #000000" }}
            >
              代表が担当する <br /> 唯一無二のサービス
            </p>

            <p className="sm:text-2xl mb-[30px] leading-[100%]">
              様々な状態の店舗オーナー様に向けて、幅広いサポートができます。
            </p>

            <p className="text-sm sm:text-lg leading-[200%]">
              店舗ステーションでは代表自ら担当となり、店舗オーナー様をサポートしていきます。営業マンがサポートする大手のサービスとは異なり、店舗経営者ならではの幅広い経験や知識で皆様を多くの面でサポートできるのが、店舗ステーションの強みです。
              <br />
              店舗の売却だけでなく、買収による事業拡大、運営ノウハウ、商流のご相談、資金調達、人材育成など、ぜひご相談ください。
            </p>
          </div>
        </div>
      </div>
      <AvailableButton className="mx-auto mt-10" />
    </div>
  );
};

export default SectionRepresentative;
