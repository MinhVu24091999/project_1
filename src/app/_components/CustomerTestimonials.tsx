import clsx from "clsx";
import Image from "next/image";
import React from "react";

const CustomerTestimonials = () => {
  return (
    <div className="mt-[80px] sm:mt-[102px] flex flex-col items-center gap-y-10 sm:gap-y-[80px]">
      <p className="text-[30px] sm:text-[64px] font-semibold text-[#000000]">
        お客様の声
      </p>

      <div className="flex flex-col gap-y-5 sm:gap-y-[100px] px-4 sm:px-0 w-full">
        <CustomerTestimonialsItem
          imageSrc="/images/customer_testimonials_1.png"
          description="業界歴が長く、その経験を通して様々なノウハウを持っている担当が取引前後もしっかりサポートいたします。"
          label="のおかげで安心して取引できました！"
          hightLightText="アドバイス"
          labelClassName="sm:max-w-[471px]"
          descriptionClassName="sm:max-w-[365px]"
        />
        <CustomerTestimonialsItem
          reverse
          imageSrc="/images/customer_testimonials_2.png"
          description="飲食業界を経験してきた担当だからこそできる、細かな気遣いがあります。店舗の売買だけでなく他の課題もぜひお話しください。"
          label="だから話しやすかったです。"
          hightLightText="業界の経験者"
          className="sm:pr-[207px] sm:justify-end"
          labelClassName="sm:max-w-[409px]"
          descriptionClassName="sm:max-w-[409px]"
        />
        <CustomerTestimonialsItem
          imageSrc="/images/customer_testimonials_3.png"
          description="不採算店舗を売却する事で、企業全体の経営を、無駄の無い筋肉体質にできます。 条件によっては新たな資金を入手する事ができます。"
          label="がすぐになくなりました。"
          hightLightText="資金繰りの不安"
          className="sm:pl-[184px]"
          labelClassName="sm:max-w-[432px]"
          descriptionClassName="sm:max-w-[432px]"
        />
        <CustomerTestimonialsItem
          reverse
          imageSrc="/images/customer_testimonials_4.png"
          description="店舗の売買からが本当のスタートです。その後の開業支援や資金調達など、安心して事業を続けられるようサポートいたします。"
          label="も親身に聞いてもらえました。"
          hightLightText="次に向けた経営相談"
          className="sm:pr-[124px] sm:justify-end"
          labelClassName="sm:max-w-[509px]"
          descriptionClassName="sm:max-w-[509px]"
        />
      </div>
    </div>
  );
};

export default CustomerTestimonials;

interface TestimonialBlockProps {
  label: string;
  hightLightText: string;
  imageSrc: string;
  reverse?: boolean;
  className?: string;
  description: string;
  labelClassName?: string;
  descriptionClassName?: string;
}

const CustomerTestimonialsItem: React.FC<TestimonialBlockProps> = ({
  label,
  hightLightText,
  imageSrc,
  className,
  description,
  labelClassName,
  descriptionClassName,
  reverse = false,
}) => {
  return (
    <div className={clsx("w-full", "grid grid-cols-1 sm:grid-cols-2 ")}>
      <Image
        data-aos="fade-down-right"
        src={imageSrc}
        alt={""}
        width={760}
        height={500}
        className={clsx(
          "z-10 sm:mb-[60px] w-full h-full sm:w-[760px] sm:h-[500px] rounded-[30px]",
          reverse
            ? "sm:order-2 sm:rounded-l-[30px] sm:-ml-20"
            : "sm:order-1 sm:rounded-r-[30px] sm:-mr-20 sm:ml-auto"
        )}
      />
      <div
        data-aos="fade-up-left"
        className={clsx(
          "w-full",
          "p-4 pt-12 -mt-6 sm:px-[184px] sm:pt-4",
          "flex items-center",
          "w-full h-full sm:h-[500px] bg-[#CFF8EB]  sm:mt-[60px] ml-auto",
          reverse
            ? " sm:order-1 sm:rounded-r-[30px]"
            : "sm:order-2 sm:rounded-l-[30px]",
          className
        )}
      >
        <div className="flex flex-col gap-y-5 sm:gap-y-10">
          <span
            className={clsx(
              "text-2xl sm:text-[36px] font-bold text-[#000000] text-center sm:text-start leading-[130%]",
              labelClassName
            )}
          >
            <p className="text-[#1EA68B] inline-block">{hightLightText} </p>{" "}
            {label}
          </span>
          <p
            className={clsx("sm:text-xl text-[#000000]", descriptionClassName)}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
