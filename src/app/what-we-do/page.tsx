/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import TextAnimation from "@/components/TextAnimation";
import Image from "next/image";
import React, { useMemo } from "react";
import Card from "./_component/Card";
import useWindowSize from "@/hooks/useWindowSize";

const page = () => {
  const { windowWidth } = useWindowSize();

  const data = useMemo(() => {
    return [
      {
        urlImage:
          windowWidth <= 640
            ? "/images/what-we-do-1-mobile.png"
            : "/images/what-we-do-1.png",
        label: (
          <p>
            Performance <br />
            Unit
          </p>
        ),
        titleCard: (
          <p>
            大切なクライアントの
            <br />
            ビジネス成長を最大化する
            <br />
            戦略的推進力。
          </p>
        ),
        description: (
          <p>
            主に経験豊富なディレクター陣で構成され、クライアントとの緊密なコミュニケーションを起点とします。
            <br />
            クライアントが抱える本質的な課題を深く理解し、市場の動向やデータを多角的に分析することで、具体的かつ効果的な解決策を策定・提案。
            <br />
            折衝を通じてビジネス目標を共有し、その達成に向けた戦略立案、プロジェクトの推進、さらには既存サービスの継続的な改善検討までを一貫して担当します。
            <br />
            単に提案するだけでなく、実行段階から成果創出に至るまで伴走し、クライアントの事業成長を持続的にサポートすることを使命としています。
          </p>
        ),
        listTitle: "役割",
        listData: [
          "クライアントとの折衝、課題ヒアリング",
          "市場分析、データ分析に基づく戦略立案",
          "課題解決のための企画提案、プロジェクトマネジメント",
          "Webサイト・サービスの改善提案、効果測定",
          "新規事業やサービスのコンサルティング"
        ]
      },
      {
        urlImage:
          windowWidth <= 640
            ? "/images/what-we-do-2-mobile.png"
            : "/images/what-we-do-2.png",
        label: (
          <p>
            Creative <br />
            Unit
          </p>
        ),
        titleCard: (
          <p>
            心を動かし
            <br />
            ブランドの価値を形にする
            <br />
            美的探究心。
          </p>
        ),
        description: (
          <p>
            あらゆるクリエイティブワークを担います。美しさや斬新さだけでなく、そのデザインが持つべき機能性、伝えるべきメッセージ、そしてユーザー体験（UX）を徹底的に追求します。
            <br />
            多岐にわたるデザイン領域において、ブランドの世界観を的確に捉え、ターゲットユーザーの心に響く表現を創り上げます。
            <br />
            クライアントの想いやビジョンを、記憶に残る視覚的なコミュニケーションへと昇華させることを目指しています。
          </p>
        ),
        listTitle: "役割",
        listData: [
          "ウェブサイトのUI/UXデザイン、情報設計",
          "アプリケーションのUI/UXデザイン",
          "ロゴデザイン、ブランディング戦略のビジュアル化",
          "グラフィックデザイン（パンフレット、広告等）",
          "映像制作ディレクション"
        ]
      }
    ];
  }, [windowWidth]);

  return (
    <div>
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
          What We Do
        </p>
      </div>

      <div className="flex items-center justify-center pb-[100px] sm:pb-[230px] px-5 sm:px-0">
        <TextAnimation>
          <p className="text-[48px] leading-[150%] font-bold text-center hidden sm:block">
            ROGYXは多岐にわたる分野で <br />
            お客様の課題解決と価値創造を支援している <br />
            デジタルマーケティング集団です。
          </p>

          <p className="text-[20px] leading-[150%] font-bold sm:hidden text-center">
            ROGYXは多岐にわたる分野でお客様の課題解決と価値創造を支援している
            デジタルマーケティング集団です。
          </p>
        </TextAnimation>
      </div>

      <div className="max-w-[872px] w-full flex flex-col gap-y-[94px] sm:gap-y-[220px] mx-auto px-5 sm:px-0">
        {data.map((item, index) => (
          <Card
            key={index}
            urlImage={item.urlImage}
            label={item.label}
            titleCard={item.titleCard}
            description={item.description}
            listTitle={item.listTitle}
            listData={item.listData}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
