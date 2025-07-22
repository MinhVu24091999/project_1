import React, { FC } from "react";

const InformationDetail: FC<InformationDetailProps> = ({
  title,
  time,
  content,
  onBack,
}) => {
  return (
    <div className="flex flex-col max-w-[1240px] w-full mx-auto sm:pt-[315px] pt-[160px] px-5 sm:px-0">
      <p className="sm:text-[48px] sm:leading-[56px] font-bold mb-5 sm:mb-[50px] text-xl leading-[24px]">
        {title}
      </p>
      <div className="w-full h-[2px] bg-white" />
      <p className="font-bold sm:text-2xl sm:leading-[32px] sm:mt-[30px] mt-2.5">
        {time}
      </p>

      <ul className="flex flex-col sm:mt-[50px] gap-y-[30px] sm:gap-y-[50px] mt-[30px]">
        {content.map((item, index) => (
          <li
            key={index}
            className="sm:text-2xl sm:leading-[150%] leading-[24px]"
          >
            {item}
          </li>
        ))}
      </ul>

      <button
        className="px-5 py-2.5 sm:py-5 sm:px-10 leading-[24px] sm:text-2xl sm:leading-[32px] border border-white w-fit mx-auto sm:mt-[100px] mt-[50px]"
        onClick={onBack}
      >
        {"<< back "}
      </button>
    </div>
  );
};

export default InformationDetail;

interface InformationDetailProps {
  title: string;
  time: string;
  content: string[];
  onBack: () => void;
}
