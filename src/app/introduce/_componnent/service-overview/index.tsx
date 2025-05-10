import React from "react";
import ServiceOverviewCard from "./ServiceOverviewCard";

const ServiceOverview = () => {
  return (
    <div className="w-full bg-[#F1FCF9] pt-10 sm:pt-[100px] pb-[80px] sm:pb-[160px] px-4 sm:px-0">
      <div className="flex flex-col gap-y-[30px] max-w-[1320px] mx-auto">
        <ServiceOverviewCard
          serviceOverviewDetail={{
            urlImage: "/images/service_overview_img.png",
            title: "飲食店買収",
            description: (
              <p>
                飲食店をやってみたいけど、ノウハウがない。
                <br /> 開店資金が意外と高くて始められない。 <br />
                コストをあまりかけずに新規事業に取り組みたい。 <br />
                そんなお悩みは飲食店の買収で解消できるかもしれません！
              </p>
            ),
            content: {
              label: "なんと！最初から黒字経営も可能",
              contentDetail: (
                <p>
                  黒字経営の店舗を買収することも可能！短期間で利益が上がる可能性が高まります。{" "}
                  <br />{" "}
                  買収価格は高くなりますが、ゼロから業態を作るよりも低リスクでチャレンジできます。
                </p>
              ),
            },
          }}
        >
          <p className="text-2xl font-bold leading-[130%]">
            飲食店買収のメリット
          </p>

          <p className="text-xl font-bold leading-[130%]">
            ノウハウがなくても大丈夫
          </p>

          <p className="font-medium leading-[150%]">
            すでに運営されている飲食店を買収するので、飲食店のノウハウを丸ごと手に入れる事ができます。{" "}
            <br />{" "}
            飲食業界に初参戦する場合は、レシピや仕入れ・パッケージなど模索するコストが下げられます。
          </p>

          <p className="text-xl font-bold leading-[130%]">
            優秀な人材を獲得できる
          </p>

          <p className="font-medium leading-[150%]">
            店舗の譲渡契約が完了した後、既存の従業員に残ってもらうようにお願いする事ができます。
            <br />{" "}
            店舗業務を熟知しているスタッフを丸ごと引き継ぐことができれば、スムーズに経営をスタートできます。
            <br />
            ※スタッフが残ってくれるかどうかは、個別の交渉次第となります。
          </p>

          <p className="text-xl font-bold leading-[130%]">
            売り上げを積み上げられる
          </p>

          <p className="font-medium leading-[150%]">
            規模のメリットを出すため、上場を目指すため…など多店舗展開を目指している場合も飲食店買収は有効です。
            <br />{" "}
            会社や事業ごと買収すれば、短期間で売上規模を拡大する事ができます。
            <br />
            飲食店買収は「経営にかかる時間をお金で買う」という側面もあります。
          </p>

          <p className="text-xl font-bold leading-[130%]">
            限られた資金でスタートできる
          </p>

          <p className="font-medium leading-[150%]">
            新規事業の立ち上げには、費用だけでなく大きな労力と時間もかかります。
            <br />{" "}
            飲食店買収であれば、居抜き物件の買取りより高額の取引ではあるものの、経営リスクを軽減できます。最初期の資金と時間を抑えて、スモールスタートが可能です。
          </p>
        </ServiceOverviewCard>

        <ServiceOverviewCard
          serviceOverviewDetail={{
            urlImage: "/images/service_overview_img.png",
            title: "開業支援",
            description: (
              <p>
                飲食店を開業するには、大きく分けて開業資金と運転資金のふたつが必要です。
                <br />{" "}
                どちらもバランスよく備えておく必要があります。どのくらい、どこに費用がかかるのか手探り状態だと大きなコスト増につながる恐れがあります。{" "}
                <br />
                店舗ステーションは25店舗の経営から学んできたノウハウで、あなたの店舗の開業をしっかりサポートいたします。
              </p>
            ),
          }}
        >
          <p className="text-xl font-bold leading-[130%]">開業資金</p>

          <p className="font-medium leading-[150%]">
            飲食店を開業するには、大きく分けて開業資金と運転資金のふたつが必要です。{" "}
            <br />{" "}
            どちらもバランスよく備えておく必要があります。どのくらい、どこに費用がかかるのか手探り状態だと大きなコスト増につながる恐れがあります。{" "}
            <br />
            店舗ステーションは25店舗の経営から学んできたノウハウで、あなたの店舗の開業をしっかりサポートいたします。
          </p>

          <p className="text-xl font-bold leading-[130%]">運転資金</p>

          <p className="font-medium leading-[150%]">
            店舗の譲渡契約が完了した後、既存の従業員に残ってもらうようにお願いする事ができます。
            <br />{" "}
            店舗業務を熟知しているスタッフを丸ごと引き継ぐことができれば、スムーズに経営をスタートできます。
            <br />
            ※スタッフが残ってくれるかどうかは、個別の交渉次第となります。
          </p>
        </ServiceOverviewCard>

        <ServiceOverviewCard
          serviceOverviewDetail={{
            urlImage: "/images/service_overview_img.png",
            title: "資金調達",
            description: (
              <p>
                開業資金、運転資金どちらも自己資金で用意するとなると非常に高額な貯金が必要です。
                <br />{" "}
                現実的には自己資金は4分の1、そのほかは借入、融資などで目標額を集めることになります。
                <br />
                確実に融資を受けるにはどうすればよいか、自分に合った資金調達方法はないか、といった悩みを解決するのも店舗ステーションにお任せください。
              </p>
            ),
          }}
        >
          <p className="text-xl font-bold leading-[130%]">資金調達方法</p>

          <p className="text-xl font-bold leading-[130%]">補助金・助成金</p>

          <p className="font-medium leading-[150%]">
            開業資金としてぜひ活用したいのが、補助金・助成金制度。飲食店向けの補助金・助成金制度は様々あります。
          </p>

          <p className="text-xl font-bold leading-[130%]">
            クラウドファンディング
          </p>

          <p className="font-medium leading-[150%]">
            開業資金としてぜひ活用したいのが、補助金・助成金制度。飲食店向けの補助金・助成金制度は様々あります。
          </p>
        </ServiceOverviewCard>

        <ServiceOverviewCard
          serviceOverviewDetail={{
            urlImage: "/images/service_overview_img.png",
            title: "マーケティング",
            description: (
              <p>
                開店しただけでは残念ながらお客様は来店しません。広告宣伝の計画を立てて実施することで、継続的な来店数確保や新規顧客の獲得が見込めます。
                <br />{" "}
                とはいえ店舗の営業が始まったらなかなか手を付けづらい部分。
                <br />
                メディア露出だけでなく、SNS上での情報拡散、アプリによるメッセージ発信など、現在は情報発信の手法が多角化しています。その中でどんな手法をとると効果的に集客できるのか、といった点もぜひご相談ください。
              </p>
            ),
          }}
        ></ServiceOverviewCard>
      </div>
    </div>
  );
};

export default ServiceOverview;
