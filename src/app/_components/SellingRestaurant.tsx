import clsx from "clsx";
import Image from "next/image";
import React, { ComponentPropsWithRef, FC } from "react";

const SellingRestaurant = () => {
  return (
    <div className="mt-[60px] sm:mt-[160px] flex flex-col gap-y-[40px] sm:gap-y-[80px] items-center max-w-[1440px] px-4 sm:px-10 mx-auto">
      <p className="font-bold text-3xl sm:text-[64px] text-[#000000] text-center leading-[130%]">
        飲食店売却を <br /> おすすめする理由
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-5">
        <div
          className="bg-[#CFF8EB] rounded-[20px] p-5"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="w-full h-full p-[32px_22px_34px_26px] bg-white flex flex-col sm:flex-row items-center gap-y-3 gap-x-[23px] rounded-[20px]">
            <Image
              src={"/images/img_komatta.png"}
              alt=""
              width={220}
              height={220}
              className="w-[110px] h-[110px] sm:w-[220px] sm:h-[220px]"
            />
            <div className="flex flex-col gap-y-5 text-[#000000]">
              <p className="text-xl font-medium text-center sm:text-start">
                大事なお店だけど継続が 困難になってしまった…。
              </p>
              <p className="font-medium text-sm sm:text-base">
                実は閉店以外に売却という選択肢があります。
                飲食店の売却にはこんなメリットがあるのをご存じでしょうか。
              </p>
            </div>
          </div>
        </div>
        <SellingRestaurantCard
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          label="原状回復する費用を軽減"
          content="飲食店の物件契約では、退去時に店内を原状回復することが義務付けられている事が通常です。店舗の規模によりますが、数百万円もの費用が掛かるなど、大きな負担になります。譲渡先を探し売却することで、その費用負担が無くなるだけでなく、売却益を得る事ができます。"
          imgUrl="/images/number_01.png"
          className="sm:px-[84px]"
        />
        <SellingRestaurantCard
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="600"
          label="従業員を解雇しなくて済む"
          content="飲食店の売買が成功すれば、従業員をそのまま雇用し続けるなど解雇する事は避けられるかもしれません。一緒に働いてきた従業員の雇用を守る事ができます"
          imgUrl="/images/number_02.png"
          className="sm:px-[118px]"
        />
        <SellingRestaurantCard
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="800"
          label="経営を筋肉体質にできる"
          content="複数店舗を刑している場合、不採算店舗を売却する事で、企業全体の経営を無駄の無い筋肉体質にできます。条件によっては新たな資金を入手し、次の経営に生かすことができます。"
          imgUrl="/images/number_03.png"
          className="sm:px-[100px]"
        />
      </div>
    </div>
  );
};

export default SellingRestaurant;

const SellingRestaurantCard: FC<SellingRestaurantCardProps> = ({
  imgUrl,
  label,
  content,
  className,
  ...otherProps
}) => {
  return (
    <div
      className="relative text-[#000000] flex flex-col items-center justify-center bg-[#9FF0D9] rounded-[20px] p-4"
      {...otherProps}
    >
      <div
        className={clsx(
          "relative",
          "flex flex-col gap-y-[25px] items-center justify-center",
          className
        )}
      >
        <p className="text-xl sm:text-[28px] font-bold text-center">{label}</p>
        <p className="text-sm sm:text-lg">{content}</p>
      </div>
      <Image
        src={imgUrl}
        alt=""
        width={213}
        height={180}
        className="absolute bottom-0 right-6"
      />
    </div>
  );
};

interface SellingRestaurantCardProps extends ComponentPropsWithRef<"div"> {
  imgUrl: string;
  label: string;
  content: string;
}
