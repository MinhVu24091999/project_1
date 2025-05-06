import clsx from "clsx";
import React, { ComponentPropsWithoutRef, FC } from "react";

const Profile = () => {
  const data = [
    {
      label: "社名",
      content: "店舗ステーション株式会社",
    },
    {
      label: "所在地",
      content: (
        <p>
          東京都品川区西五反田2-9-7 <br />
          ドルミ五反田アンメゾン1005
        </p>
      ),
    },
    {
      label: "設立",
      content: "2025年",
    },
    {
      label: "資本金",
      content: "10,000,000円",
    },
    {
      label: "代表者",
      content: "武藤　進哉",
    },
    {
      label: "事業内容",
      content: (
        <p>
          飲食店プロデュース <br />
          コンサルティング <br />
          不動産　企画 <br />
          医療消耗品販売 <br />
          サプリメント販売
        </p>
      ),
    },
  ];

  return (
    <div className="w-full bg-[#F1FCF9] pt-10 pb-[60px] sm:py-[80px] px-4 sm:px-0 mt-12 sm:mt-[120px]">
      <div className="grid sm:grid-cols-2 gap-y-[30px] max-w-[1320px] mx-auto">
        <p className="text-[#000000] text-[36px] sm:text-[64px] font-bold flex items-center justify-center">
          会社概要
        </p>

        <div className="flex flex-col gap-y-10 sm:max-w-[479px]">
          {data.map((item, index) => (
            <ProfileItem
              key={index}
              label={item.label}
              className="last:border-transparent"
            >
              {item.content}
            </ProfileItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;

const ProfileItem: FC<ProfileItemProps> = ({
  label,
  children,
  className,
  ...otherProps
}) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-[40%_60%] text-[#000000] py-5 border-b border-[#CDCDCD]",
        className
      )}
      {...otherProps}
    >
      <p>{label}</p>
      <span className="text-lg">{children}</span>
    </div>
  );
};

interface ProfileItemProps extends ComponentPropsWithoutRef<"div"> {
  label: string;
}
