"use client";

import { ArrowUpIcon } from "@/assets/icons";
import clsx from "clsx";
import { useState } from "react";

const QuestionItem = ({
  item,
}: {
  item: { question: string; answer: string };
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      id="faq-section"
      data-aos="fade-up"
      data-aos-duration="1000"
      className="w-full bg-white py-6 md:py-11 px-4 md:px-[30px] border border-[#1EA68B] rounded-[20px]"
    >
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4 md:gap-10">
          <span className="font-bold text-[24px] md:text-[32px] text-[#1EA68B]">
            Q
          </span>
          <p className="sm:text-[22px] leading-[30px] font-bold text-black">
            {item?.question}
          </p>
        </div>
        <ArrowUpIcon
          className={clsx(
            "w-[28px] h-[28px] sm:w-[48px] sm:h-[48px]",
            "text-[#1EA68B]",
            "cursor-pointer rotate-180",
            isOpen ? "transition-all rotate-0" : ""
          )}
        />
      </div>
      <div
        className="overflow-hidden text-sm sm:text-base leading-[24px] tracking-[3%] text-black mt-[10px]"
        style={{
          maxHeight: isOpen ? "300px" : "0",
          transition: "max-height 0.3s ease",
          marginTop: isOpen ? "10px" : "0px",
        }}
      >
        {item?.answer}
      </div>
    </div>
  );
};

const FAQ = () => {
  const QUESTIONS = [
    {
      question: `話が具体化するまで、スタッフや貸主に知られずに進めることはできるの？`,
      answer: `店舗ステーションは、お客様の秘密を厳守する事をお約束します。お客様への連絡手段は必ず事前に確認させていただいており、基本的には携帯電話にご連絡しています。許可なく店舗に直接連絡するような事はありませんので、ご安心下さい。<br /> また、出店希望者が内見する際にも同行し、秘密が漏れないよう細心の注意を払います。`,
    },
    {
      question: `原状回復（スケルトン）工事にはいくらぐらいかかるの？`,
      answer: `店舗ステーションは、お客様の秘密を厳守する事をお約束します。お客様への連絡手段は必ず事前に確認させていただいており、基本的には携帯電話にご連絡しています。許可なく店舗に直接連絡するような事はありませんので、ご安心下さい。<br /> また、出店希望者が内見する際にも同行し、秘密が漏れないよう細心の注意を払います。`,
    },
    {
      question: `売却までにはどれくらい期間かかるの？`,
      answer: `店舗ステーションは、お客様の秘密を厳守する事をお約束します。お客様への連絡手段は必ず事前に確認させていただいており、基本的には携帯電話にご連絡しています。許可なく店舗に直接連絡するような事はありませんので、ご安心下さい。<br /> また、出店希望者が内見する際にも同行し、秘密が漏れないよう細心の注意を払います。`,
    },
    {
      question: `タイトルテキストが入ります。`,
      answer: `店舗ステーションは、お客様の秘密を厳守する事をお約束します。お客様への連絡手段は必ず事前に確認させていただいており、基本的には携帯電話にご連絡しています。許可なく店舗に直接連絡するような事はありませんので、ご安心下さい。<br /> また、出店希望者が内見する際にも同行し、秘密が漏れないよう細心の注意を払います。`,
    },
    {
      question: `タイトルテキストが入ります。`,
      answer: `店舗ステーションは、お客様の秘密を厳守する事をお約束します。お客様への連絡手段は必ず事前に確認させていただいており、基本的には携帯電話にご連絡しています。許可なく店舗に直接連絡するような事はありませんので、ご安心下さい。<br /> また、出店希望者が内見する際にも同行し、秘密が漏れないよう細心の注意を払います。`,
    },
  ];
  return (
    <div className="mt-[60px] sm:mt-[160px] flex flex-col gap-y-10 items-center max-w-[1440px] px-4 sm:px-10 mx-auto mb-10 sm:mb-[100px]">
      <p className="font-bold text-3xl sm:text-[64px] text-[#000000] text-center leading-[100%]">
        よくある質問
      </p>

      <div className="flex flex-wrap items-center gap-5 md:gap-[46px] max-w-[920px] mx-auto rounded-[20px]">
        {QUESTIONS.map((item, index) => (
          <QuestionItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
