"use client";

import React, { ComponentPropsWithoutRef, FC, useMemo } from "react";
import { twJoin } from "tailwind-merge";

const Pagination: FC<PaginationProps> = ({
  total,
  currentPage,
  onSelectPage
}) => {
  const totalPage = useMemo(() => {
    return Math.ceil(total / 5);
  }, [total]);
  return (
    <div className="flex items-center gap-x-5 sm:gap-x-10">
      {Array.from({ length: totalPage }, (_, index) => index + 1).map(item => (
        <button
          key={item}
          className={twJoin(
            "leading-[24px] sm:font-bold sm:text-2xl sm:leading-[32px] flex items-center justify-center",
            currentPage === item &&
              "w-[26px] h-[26px] sm:w-[36px] sm:h-[36px] border border-white rounded-full"
          )}
          onClick={() => onSelectPage(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

interface PaginationProps extends ComponentPropsWithoutRef<"div"> {
  total: number;
  currentPage: number;

  onSelectPage: (pageNum: number) => void;
}
