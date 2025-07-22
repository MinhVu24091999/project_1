"use client";

import React from "react";
import Clause from "./Clause";

const data1 = [
  "法令遵守",
  "情報の収集と利用目的",
  "委託先の監督",
  "個人情報の第三者提供",
  "個人情報の保護",
  "プライバシーポリシーの改訂",
  "個人情報の開示・訂正・削除",
  "クッキー（Cookie）の取扱について",
  "アクセスログについて",
];

const data2 = [
  "当社のサービスをご案内するため",
  "当社のサービスをより向上させるため",
  "お客様のお問い合わせまたはご要望に対して回答または対応させていただくため",
  "お客様のご意見をお聞きするなど、制作等の企画の参考のため",
  "必要に応じてお客様に連絡をするため",
];

const data3 = [
  "情報の開示や共有について、当該お客様のご同意がある場合",
  "お客様の行為が利用規約やガイドライン等に反し、他のお客様および当社の権利、財産、サービス等を保護するために必要と認められる場合",
  "生命、身体および財産等に対する差し迫った危険があり、緊急の必要があると認められる場合",
  "法令等に定めがある場合",
  "その他正当な理由がある場合",
  "当社のサービス向上の為に当社が必要不可欠と認め、当社が信頼する第三者に個人情報を提供する場合",
];

const page = () => {
  const handleOnTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center max-w-[1240px] mx-auto px-5 sm:px-0 pb-[100px] sm:pb-[220px]">
      <p className="font-bold font-inter sm:text-[104px] sm:leading-[116px] sm:py-[220px] pt-[160px] pb-[100px] text-[32px] leading-[40px] mx-auto">
        プライバシーポリシー
      </p>

      <div className="flex flex-col gap-y-[60px] sm:gap-y-[100px]">
        <div className="flex flex-col gap-y-[30px] sm:gap-y-[60px] sm:text-[24px] leading-[150%]">
          <p className="font-bold sm:text-[48px] sm:leading-[56px] text-[32px] leading-[40px]">
            個人情報保護方針
          </p>
          <div className="h-[2px] w-full bg-[#FFF]" />
          <p>
            株式会社ROGYX（以下、当社）は、業務上取り扱うお客様の個人情報を次の方針に従って管理し保護に努めます。このプライバシーポリシーは
            当社が運営する【株式会社ROGYX
            コーポレートサイト】（https://www.）（以下、本ウェブサイトといいます）をご利用いただく皆様に対して、本ウェブサイトのプライバシー保護の内容を開示しています。
            <br />
            本ウェブサイトは、皆様の個人情報の保護を実践するために、個人情報の取り扱いについての下記の項目を開示いたします。
          </p>

          <ul className="flex flex-col sm:ml-[82px]">
            {data1.map((item, index) => (
              <li key={index}>{`${index + 1}. ${item}`}</li>
            ))}
          </ul>

          <div>
            皆様方が､本ウェブサイトのプライバシーポリシーに掲示された内容が、守られていないと感じられた場合には、株式会社ROGYX
            まで、まずご連絡ください。内容を確認した後、適切な対応を取らせていただきます。
          </div>
        </div>

        <Clause label="1.法令遵守">
          当社は、個人情報に関して適用される法令・規範を遵守いたします。
        </Clause>

        <Clause label="2.情報の収集と利用目的">
          当社は個人情報の収集に際しては、収集目的を明確にした上でその目的達成に必要な最小限の個人情報に限定し、あらかじめお客様の了解のもと収集いたします。本ウェブサイトで収集する個人情報はお問い合わせフォームからは、氏名、企業名、Eメールアドレス等の情報を収集します。
          <div className="flex flex-col sm:ml-[86px] mt-[30px] sm:mt-[60px] ">
            <p className="font-bold text-xl leading-[24px] sm:text-[32px] sm:leading-[40px] sm:ml-8">
              情報の収集と利用目的
            </p>

            <ul className="flex flex-col pl-8 sm:pl-12 list-disc mt-[38px] sm:mt-10">
              {data2.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <p className="mt-[30px] sm:mt-[60px]">
              本ウェブサイトのプライバシーポリシーに開示されている内容と異なる方法での個人情報の共有等は行わず、さらに収集した情報に他の情報源からの情報を補足するといったことも行いません。
            </p>
          </div>
        </Clause>

        <Clause label="3.委託先の監督">
          当社は、個人情報の取扱いを外部へ委託する際には、適切な委託先を選定し、またその委託先に対し、必要かつ適切な監督を行うことにより、お客様の個人情報の安全管理を実施させるように努めます。
        </Clause>

        <Clause label="4.個人情報の第三者提供">
          当社では、以下の場合を除き、お客様からご提供いただいた個人情報を第三者に提供開示することはありません。
          <div className="flex flex-col sm:ml-[82px]">
            <ul className="flex flex-col pl-8 sm:pl-12 list-disc mt-[30px] sm:mt-[60px]">
              {data3.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="mt-[30px] sm:mt-[60px]">
              上記の場合でも、当社は必要最低限の範囲で個人情報の適切かつ安全な管理を義務付けます。
            </p>
          </div>
        </Clause>

        <Clause label="5.個人情報の保護">
          当社はお客様の個人情報に関わる不正アクセス、紛失、破壊、改ざん等のリスクに対して、適切かつ合理的な安全対策を実施し、個人情報の保護に努めます。
        </Clause>

        <Clause label="6.プライバシーポリシーの改訂">
          今後、当社はプライバシーポリシーの改訂を行う場合がございます。その場合、このページにてその旨、全ての改訂内容をお知らせいたします。
        </Clause>

        <Clause label="7.個人情報の開示・訂正・削除">
          当社では、お客様から個人情報の開示等（利用目的の通知・開示・訂正・利用停止）のご依頼がある場合、合理的な範囲内で速やかに対応いたします。
        </Clause>

        <Clause label="8.クッキー（Cookie）の取扱について">
          当社では、お客様が当社のサービスおよび当サイトをご利用された場合、お客様のWebブラウザに対してクッキー（Cookie）を発信する場合があります。
          <br />
          ただし、クッキー（Cookie）には個人を特定する情報は含まれておりません。お客様がサービスおよびWebサイトで個人情報を入力しない限り、
          <br />
          お客様個人を特定することはできず、匿名性は維持されます。
          <br />
          お客様が、クッキー（Cookie）の活用を望まれない場合は、ご使用のWebブラウザでクッキー（Cookie）の受け入れを拒否するように設定することができます。
          <br />
          ただし、クッキー（Cookie）の受け入れを拒否された場合は、当社のサービス等のご利用ができない場合があります。
          <br />
          当社では、効果的に広告を配信するため、Googleを含む第三者配信事業者により行動ターゲティング広告を掲載しております。
          <br />
          Googleを含む第三者配信事業者はクッキー（Cookie）を使用して、当サイトへの過去のアクセス情報に基づいて広告を配信します。
          <br />
          行動履歴情報の収集に利用するクッキー（Cookie）の詳細や、オプトアウト（無効化）をご希望のお客様は、 Google広告のオプトアウトページにアクセスして、GoogleによるCookieの使用を無効にできます
          <br />
          （または、Network Advertising
          Initiativeのオプトアウトページにアクセスして、第三者配信事業者によるCookieの使用を無効にできます）。{" "}
          <br />
          Googleリマーケティングプライバシーポリシー詳細については、こちらをご参照ください。Googleリマーケティング機能については、こちらをご参照ください。
        </Clause>

        <Clause label="9.アクセスログについて">
          当社ではお客様の利用動向の把握や広告の効果測定のために、アクセスログを収集しています。{" "}
          <br />
          アクセスログではIPアドレスやWebブラウザの種類、ドメインネームなどの項目を収集していますが、収集した個人情報と紐付けて利用することはありません。
          <br />
          リンク先のサイトで行われる個人情報の取り扱い等に関しては、弊社では責任を負いかねます。
          <br />
          なお、弊社では統計や広告の効果測定のために、メールに記載されたURL等をユーザがクリックしたことによるユーザの行動履歴の取得や、画像データに同様の仕組みを持たせる開封履歴を取得することがあります。
        </Clause>

        <button
          className="px-5 py-2.5 sm:py-5 sm:px-10 leading-[24px] sm:text-2xl sm:leading-[32px] border border-white w-fit mx-auto"
          onClick={handleOnTop}
        >
          TOP
        </button>
      </div>
    </div>
  );
};

export default page;
