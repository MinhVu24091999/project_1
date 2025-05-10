import { IServiceOverviewDetail } from "@/types";
import Image from "next/image";
import React, { ComponentPropsWithoutRef, FC } from "react";

const ServiceOverviewCard: FC<ServiceOverviewCard> = ({
  children,
  serviceOverviewDetail,
}) => {
  return (
    <div className="bg-white px-4 sm:px-[30px] py-5 sm:py-[50px] rounded-[20px] grid grid-cols-1 sm:grid-cols-2 gap-x-[60px] items-start gap-y-5">
      <Image
        src={serviceOverviewDetail.urlImage || ""}
        alt=""
        width={601}
        height={380}
        className="rounded-[20px]"
      />

      <div className="flex flex-col gap-y-[30px] text-[#111111]">
        <div className="flex flex-col gap-y-5">
          <p className="text-3xl sm:text-[32px] font-bold leading-[130%] text-center sm:text-start">
            {serviceOverviewDetail.title}
          </p>

          <p className="text-sm sm:text-base font-medium leading-[150%]">
            {serviceOverviewDetail.description}
          </p>
        </div>

        <div className="flex flex-col gap-y-5 font-medium text-sm sm:text-base">
          {children}
        </div>

        {serviceOverviewDetail?.content && (
          <div className="flex flex-col p-5 rounded-[20px] bg-[#F3F3F3] gap-y-5">
            <p className="w-full text-lg sm:text-3xl font-bold leading-[130%]">
              {serviceOverviewDetail?.content?.label}
            </p>
            <div className="w-full h-[1px] bg-[#333333]/20" />
            <p className="text-sm sm:text-lg leading-[130%]">
              {serviceOverviewDetail?.content?.contentDetail}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceOverviewCard;

interface ServiceOverviewCard extends ComponentPropsWithoutRef<"div"> {
  serviceOverviewDetail: IServiceOverviewDetail;
}
