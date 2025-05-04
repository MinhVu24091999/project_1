import AppInput from "@/components/AppInput";
import AppSelect from "@/components/AppSelect";
import React, { ComponentPropsWithoutRef, FC } from "react";
import { Form, Input } from "antd";
import clsx from "clsx";
import AppPhoneInput from "@/components/AppPhoneInput";

const { TextArea } = Input;

const ContactForm = () => {
  return (
    <div className="max-w-[1000px] px-4 sm:px-10 py-10 sm:py-[100px] text-[#111111] mt-12 sm:mt-[100px] border border-[#A5A8AD] rounded-[10px]  mx-auto flex flex-col items-center gap-y-5 mb-[80px] sm:mb-[270px]">
      <p
        className="text-3xl sm:text-[48px] font-bold"
        style={{ lineHeight: "100%" }}
      >
        お問い合わせフォーム
      </p>
      <p className="text-sm sm:text-base max-w-[460px]">
        現在の状況や課題など、できるだけ詳しくお教えください。
      </p>
      <div className="h-[1px] w-full bg-[#E0E0E0]" />

      <Form
        colon={false}
        requiredMark={false}
        labelCol={{ span: 7 }}
        className="max-w-[730px] mx-auto w-full flex flex-col gap-y-7 sm:gap-y-[50px]"
        labelAlign="left"
      >
        <Form.Item
          label={<LabelForm label="お名前" isRequired />}
          name="name"
          rules={[
            { required: true, message: "名前を入力してください" },
            {
              validator: (_, value) =>
                !value || value.length <= 30
                  ? Promise.resolve()
                  : Promise.reject("30文字以内で入力してください"),
            },
          ]}
        >
          <AppInput placeholder="山田　太郎" />
        </Form.Item>

        <Form.Item name="companyName" label={<LabelForm label="会社名" />}>
          <AppInput placeholder="株式会社ABC" />
        </Form.Item>

        <Form.Item
          label={<LabelForm label="メールアドレス" isRequired />}
          name="email"
          rules={[
            { required: true, message: "メールアドレスを入力してください" },
            {
              type: "email",
              message: "有効なメールアドレスを入力してください",
            },
          ]}
          labelAlign="left"
        >
          <AppInput placeholder="123abc@123abc.com" />
        </Form.Item>
        <Form.Item
          label={<LabelForm label="電話番号" isRequired />}
          name="phoneNumber"
          rules={[
            { required: true, message: "電話番号を入力してください" },
            {
              pattern: /^0\d{2}-\d{4}-\d{4}$/,
              message: "正しい形式で入力してください（例: 080-1234-5678）",
            },
          ]}
        >
          <AppPhoneInput placeholder="080-1234-5678" />
        </Form.Item>
        <Form.Item
          label={
            <LabelForm
              label="お問い合わせ項目"
              isRequired
              className="sm:mt-6"
            />
          }
          name="inquiryItems"
          rules={[
            { required: true, message: "お問い合わせ項目をご入力ください" },
          ]}
          className="!w-full !h-full mb-6"
        >
          <AppSelect placeholder="項目を選択してください" />
        </Form.Item>

        <Form.Item
          label={<LabelForm label="お問い合わせ内容" isRequired />}
          name="inquiryContent"
          rules={[
            { required: true, message: "お問い合わせ内容をご入力ください" },
          ]}
        >
          <TextArea
            rootClassName="!h-[500px] !py-[20px] !bg-[#F1FCF9]"
            style={{ resize: "none" }}
          />
        </Form.Item>

        <button className="sm:w-[320px] w-full px-10 py-4 sm:py-[31px] rounded-full bg-[#1EA68B] sm:text-[24px] text-white font-bold hover:bg-[#1EA68B]/80 mx-auto">
          送 信
        </button>
      </Form>
    </div>
  );
};

export default ContactForm;

const LabelForm: FC<LabelFormProps> = ({
  label,
  isRequired = false,
  className,
  ...otherProps
}) => {
  return (
    <span className={clsx("w-full h-full text-lg", className)} {...otherProps}>
      {label}{" "}
      {isRequired && <span className="text-[#FF5A5A] text-base">(必須)</span>}
    </span>
  );
};

interface LabelFormProps extends ComponentPropsWithoutRef<"span"> {
  label: string;
  isRequired?: boolean;
}
