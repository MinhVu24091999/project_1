import TextAnimation from "@/components/TextAnimation";
import React, { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import { twJoin } from "tailwind-merge";

const data = [
  {
    label: "会社名",
    content: "株式会社ROGYX（ロジクス）"
  },
  {
    label: "設立",
    content: "2018年9月19日"
  },
  {
    label: "代表者",
    content: "HIROTOMO NAGAO"
  },
  {
    label: "所在地",
    content: "東京都千代田区丸の内3丁目2-2　二重橋ビル 2階"
  },
  {
    label: "事業内容",
    content: (
      <ul className="list-disc list-inside">
        <li>テキストテキストテキスト</li>
        <li>テキストテキストテキスト</li>
        <li>テキストテキストテキスト</li>
      </ul>
    )
  }
];

const CompanyProfile = () => {
  return (
    <div className="flex flex-col items-center gap-y-[30px] sm:gap-y-[60px] max-w-[872px] w-full mx-auto px-5 sm:px-0">
      <TextAnimation>
        <p className="text-xl leading-[24px] sm:text-[48px] sm:leading-[56px] font-bold">
          会社概要
        </p>
      </TextAnimation>

      <div className="flex flex-col w-full">
        {data.map((item, index) => (
          <CompanyProfileItem
            key={index}
            label={item.label}
            contentData={item.content}
            className="first:border-t"
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyProfile;

const CompanyProfileItem: FC<CompanyProfileItemProps> = ({
  label,
  contentData,
  className
}) => {
  return (
    <div
      className={twJoin(
        "leading-[24px]",
        "py-5 sm:py-[50px] border-b border-white",
        "flex items-start sm:text-2xl sm:leading-[32px] gap-x-[30px] sm:gap-x-[100px] font-bold",
        className
      )}
    >
      <div className="min-w-[96px]">{label}</div>
      <div className="w-full">{contentData}</div>
    </div>
  );
};

interface CompanyProfileItemProps extends ComponentPropsWithoutRef<"div"> {
  label: string;
  contentData: ReactNode;
}
