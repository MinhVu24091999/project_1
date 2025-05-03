import Image from "next/image";
import React from "react";

const StoreStation = () => {
  return (
    <div className="relative mt-[127px] pb-10 sm:pb-[81px]">
      <Image
        src={"/images/bg-store-station.png"}
        alt=""
        width={1440}
        height={884}
        className="absolute -bottom-9 w-full h-[884px]"
      />
      <div className="flex flex-col items-center max-w-[1049px] mx-auto relative">
        <Image
          src={"/images/store-station.png"}
          alt=""
          width={372}
          height={107}
          className="w-[186px] h-[54px] sm:w-[372px] sm:h-[107px]"
        />

        <p
          className="px-4 sm:px-0 text-[52px] sm:text-[96px] font-black text-[#000000] text-center decoration-[22px] underline decoration-[#FFEE02] "
          style={{ textUnderlineOffset: "-16px" }}
        >
          店舗ステーションに <br />
          お任せください！
        </p>

        <div className="flex flex-col sm:flex-row items-center sm:items-end mt-10">
          <Image
            src={"/images/img-ceo.png"}
            alt=""
            width={485}
            height={405}
            className="-mr-[70px] z-10"
          />

          <div className="flex flex-col py-10  bg-white rounded-[30px] gap-y-[37px] text-[#000000] sm:min-w-[633px]">
            <p className="text-3xl sm:text-[32px] font-bold text-center px-[30px]">
              飲食店25店舗を経営してきた 代表が、直接あなたを担当いたします。
            </p>

            <p
              className="sm:text-xl px-[46px] underline decoration-dashed decoration-[#999999] underline-offset-4 w-full"
              style={{ lineHeight: "200%" }}
            >
              飲食店経営の10年以上の経験や、これまでのお取引で培ったノウハウがあります。
              <br />
              ただの飲食店売買にとどまらず、様々なお悩みをプロに相談できるのが
              <p className="font-black inline-block underline decoration-dashed decoration-[#999999] px-1.5 underline-offset-4">
                店舗ステーションの強み
              </p>
              です！
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreStation;
