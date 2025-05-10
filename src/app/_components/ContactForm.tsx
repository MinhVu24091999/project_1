"use client";

import AppInput from "@/components/AppInput";
import React, { ComponentPropsWithoutRef, FC, useState } from "react";
import { Form, Input, Modal, notification } from "antd";
import clsx from "clsx";
import AppPhoneInput from "@/components/AppPhoneInput";

type NotificationType = "success" | "info" | "warning" | "error";

const { TextArea } = Input;

const ContactForm: FC<ComponentPropsWithoutRef<"div">> = ({
  className,
  ...otherProps
}) => {
  const [form] = Form.useForm();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (
    type: NotificationType,
    message: string,
    description: string
  ) => {
    api[type]({
      message,
      description,
      placement: "top",
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await form.validateFields();
      const formData = form.getFieldsValue();

      const response = await fetch(
        "https://formsubmit.co/info@tenpostation.co.jp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setIsOpenModal(false);
        form.resetFields();

        openNotificationWithIcon(
          "success",
          "送信完了",
          "お問い合わせが正常に送信されました。"
        );
      } else {
        openNotificationWithIcon(
          "error",
          "送信エラー",
          "フォームの送信に失敗しました。もう一度お試しください。"
        );
      }
    } catch (error) {
      console.error("Submission error:", error);

      openNotificationWithIcon(
        "error",
        "送信エラー",
        "フォームの送信に失敗しました。もう一度お試しください。"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {contextHolder}
      <div
        className={clsx(
          "max-w-[1000px] px-4 sm:px-10 py-10 sm:py-[100px] text-[#111111] mt-12 sm:mt-[100px] border border-[#A5A8AD] rounded-[10px]  mx-auto flex flex-col items-center gap-y-5 mb-[80px] sm:mb-[270px]",
          className
        )}
        {...otherProps}
      >
        <p className="text-3xl sm:text-[48px] font-bold leading-[100%]">
          お問い合わせフォーム
        </p>
        <p className="text-sm sm:text-base max-w-[460px] sm:text-center">
          現在の状況や課題など、できるだけ詳しくお教えください。
          <br />
          状況に合わせて最適なご提案ができるよう、検討いたします。
        </p>
        <div className="h-[1px] w-full bg-[#E0E0E0]" />

        <Form
          form={form}
          colon={false}
          requiredMark={false}
          labelCol={{ span: 7 }}
          className="max-w-[730px] mx-auto w-full flex flex-col gap-y-7 sm:gap-y-[50px]"
          labelAlign="left"
          action="https://formsubmit.co/bd282cd21f7d8524857072b67a0894af"
          method="post"
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
            label={<LabelForm label="お問い合わせ内容" isRequired />}
            name="inquiryContent"
            rules={[
              { required: true, message: "お問い合わせ内容をご入力ください" },
            ]}
          >
            <TextArea
              rootClassName="!h-[250px] sm:!h-[500px] !py-[20px] !bg-[#F1FCF9]"
              style={{ resize: "none" }}
            />
          </Form.Item>

          <button
            className="sm:w-[320px] w-full px-10 py-4 sm:py-[31px] rounded-full bg-[#1EA68B] sm:text-[24px] text-white font-bold hover:bg-[#1EA68B]/80 mx-auto"
            onClick={() => setIsOpenModal(true)}
          >
            送 信
          </button>
        </Form>
      </div>

      <Modal
        centered
        open={isOpenModal}
        onCancel={() => setIsOpenModal(false)}
        footer={null}
        closeIcon={null}
      >
        <div className="w-full flex flex-col gap-y-10 items-center justify-center p-5">
          <p className="text-2xl sm:text-[40px] font-bold">送信しますか？</p>

          <div className="flex items-center gap-x-5">
            <button
              className=" w-full px-7 py-4  rounded-full bg-[#1EA68B]  text-white font-bold hover:bg-[#1EA68B]/80 flex items-center min-w-[130px]"
              onClick={() => setIsOpenModal(false)}
            >
              キャンセル
            </button>
            <button
              className=" w-full px-7 py-4  rounded-full bg-[#1EA68B]  text-white font-bold hover:bg-[#1EA68B]/80 min-w-[130px]"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? "送信中..." : "送信"}
            </button>
          </div>
        </div>
      </Modal>
    </>
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
