"use client";

import { ArrowUpIcon } from "@/assets/icons";
import { ReactNode, useState } from "react";
import { twJoin } from "tailwind-merge";

const QuestionItem = ({
  item,
}: {
  item: { question: string; answer: ReactNode };
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
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
          className={twJoin(
            "w-[28px] h-[28px] sm:w-[48px] sm:h-[48px]",
            "text-[#1EA68B]",
            "cursor-pointer rotate-180",
            isOpen ? "transition-all !rotate-0" : ""
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
      question: `店舗の売却を依頼した場合、手数料はかかる`,
      answer: `店舗ステーションでは実際の成約まで手数料は一切かかりません。成約時に手数料をお支払いいただいております。`,
    },
    {
      question: `売却までにはどれくらい期間かかる？`,
      answer: `お問い合わせから売却までは、書類が揃い関係者の調整がスムーズに進めば、最短2週間程度です。ご協力をお願いする場面もありますが、当社も最短最速で取り組みます。`,
    },
    {
      question: `色々な業者に声を掛けた方がいい？`,
      answer: `複数の業者への売却依頼は物件の希少性を損ない、価値を下げます。売却不成立の場合いずれ出回るため、依頼先を絞り込むことが重要です。「高く、早く売りたい」気持ちは理解できますが、希少性を保つためにもご留意ください。`,
    },
    {
      question: `対象の業態は？`,
      answer: `店舗ステーションは飲食業のみ対応しております。美容業、医療、小売業は対象外となります。食品・飲料提供でも設備や機能が不十分な場合はお断りすることがあります。`,
    },
    {
      question: `「土壇場で金額が変わった」ということはある？`,
      answer: `店舗ステーションは買主との交渉を徹底的に行い、金額の変動を防ぎます。直接買取の場合も金額は変わりません。`,
    },
    {
      question: `原状回復（スケルトン）工事っていくらぐらい？`,
      answer: `原状回復費は店舗状況で変動し、軽飲食で1坪8万円程度、重飲食で10万円程度が目安です。契約内容によっても費用は異なります。まずは原状回復せずに店舗売却を検討ください。`,
    },
    {
      question: `売却機器の中にリースがあった場合は？`,
      answer: `厨房機器にリース物品がある場合、売却時にリース残債の一括清算を推奨します。リース契約の承継は業務が煩雑で故障等のトラブルが多いため、売却価格にはリース残債を加味すべきです。`,
    },
    {
      question: `少しでも早く売却したい場合は？`,
      answer: `店舗の早期売却には、詳細な物件情報と適正な価格設定が重要です。高すぎる価格設定は問い合わせに繋がりません。物件価値を高め、「出店したい」と思わせることも重要です。内見をスムーズに行うため、店内や厨房の清掃を徹底しましょう。`,
    },
    {
      question: `売却の依頼のとき揃えておくべきものは？`,
      answer: (
        <div className="flex flex-col gap-y-2">
          <p>
            売却のご依頼の際には下記をご準備があるとスムーズな対応が可能です。
          </p>
          <p>1.賃貸借契約書</p>
          <p>2.平面図</p>
          <p>3.リース償還表／リース契約書控え</p>
        </div>
      ),
    },
  ];
  return (
    <div
      id="faq-section"
      className="mt-[60px] sm:mt-[160px] flex flex-col gap-y-10 items-center max-w-[1440px] px-4 sm:px-10 mx-auto mb-10 sm:mb-[100px]"
    >
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
