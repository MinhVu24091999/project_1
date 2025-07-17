import React from "react";
import TitleClipPath from "./TitleClipPath";
import Image from "next/image";

const Vision = () => {
  return (
    <div className="flex flex-col items-center max-w-[1137px] mx-auto my-[100px] sm:mt-[220px] px-5 sm:px-0">
      <TitleClipPath className="px-[115px] sm:px-[144px]">Vision</TitleClipPath>

      <div className="flex flex-col sm:flex-row sm:items-center gap-x-[50px] mt-[30px] sm:mt-[60px] sm:w-full justify-start sm:pl-[50px]">
        <p className="text-[48px] leading-[150%] sm:text-[88px] sm:leading-[100px] font-bold">
          Make It MOVE.
        </p>
        <p className="text-[72px] leading-[80px] sm:text-[120px] sm:leading-[132px] font-bold">
          +IDEA
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full mt-[30px]">
        <div className="hidden sm:flex flex-col gap-y-[30px]">
          <p className="sm:text-[32px] sm:leading-[40px] font-bold">
            そのアイデアを、解き放て。
          </p>
          <p className="sm:text-xl sm:leading-[24px]">
            眠れる可能性を呼び覚まし
            <br />
            斬新な発想でまだ見ぬ未来図を描き出す
          </p>
        </div>
        <Image src="/images/vision-1.png" alt="" width={576} height={409} />

        <div className="flex flex-col gap-y-[20px] sm:hidden mt-[30px]">
          <p className="text-[20px] leading-[24px] font-bold">
            そのアイデアを、解き放て。
          </p>
          <p className="leading-[24px]">
            眠れる可能性を呼び覚まし、斬新な発想で、 まだ見ぬ未来図を描き出す。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
