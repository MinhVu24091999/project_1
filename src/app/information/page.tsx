/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { InformationInterface } from "@/types";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import InformationItem from "./_component/InformationItem";
import Pagination from "./_component/Pagination";
import InformationDetail from "./_component/InformationDetail";

const informationData: InformationInterface[] = Array.from(
  { length: 20 },
  () => {
    return {
      time: "2025/06/20",
      title: "タイトルが入ります",
      description:
        "タイトルが入ります。タイトルが入ります。タイトルが入ります。",
      content: [
        "ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。",
        "ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。"
      ]
    };
  }
);

const page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [informationDetail, setInformationDetail] = useState<
    InformationInterface | undefined
  >(undefined);

  const data = useMemo(() => {
    const start = (currentPage - 1) * 5;
    const end = start + 5;
    return informationData.slice(start, end);
  }, [currentPage, informationData]);

  return (
    <div>
      {informationDetail !== undefined ? (
        <InformationDetail
          title={informationDetail.title}
          time={informationDetail.time}
          content={informationDetail.content}
          onBack={() => setInformationDetail(undefined)}
        />
      ) : (
        <>
          <div className="flex items-center justify-center pt-[160px] pb-[100px] sm:pt-[220px] sm:pb-[230px] relative">
            <div className="absolute top-[58%] sm:top-1/2 left-[52%] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
              <div className="relative w-[331px] h-[108px]  sm:w-[1072px] sm:h-[325px]">
                <Image
                  src="/images/paint.png"
                  alt=""
                  width={1072}
                  height={325}
                  className="w-[331px] h-[108px]  sm:w-[1072px] sm:h-[325px]"
                />
                <div className="absolute right-0 top-0 z-[20] h-full w-full animate-test1 bg-[#1B1C1F]" />
              </div>
            </div>
            <p className="text-[56px] leading-[64px] sm:text-[176px] sm:leading-[192px] font-bold relative ">
              Information
            </p>
          </div>

          <div className="flex flex-col items-center gap-y-[30px] sm:gap-y-10 px-5 sm:px-0">
            <div className="flex flex-col max-w-[1240px] mx-auto w-full">
              {data.map((item, index) => (
                <InformationItem
                  key={index}
                  time={item.time}
                  content={item.description}
                  className="first:border-t first:border-white cursor-pointer"
                  onClick={() => setInformationDetail(item)}
                />
              ))}
            </div>

            <Pagination
              total={informationData.length}
              currentPage={currentPage}
              onSelectPage={value => setCurrentPage(value)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default page;
