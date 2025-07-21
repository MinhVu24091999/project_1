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
      placement: "top"
    });
  };

  const handleOpenModal = async () => {
    try {
      await form.validateFields();
      setIsOpenModal(true);
    } catch (error) {
      // Form validation failed, do nothing (error messages will be shown automatically)
      console.log("Validation failed:", error);
    }
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
            Accept: "application/json"
          },
          body: JSON.stringify(formData)
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
          "max-w-[872px] mx-auto flex flex-col items-center gap-y-[30px] sm:gap-y-[60px] px-5 sm:px-0",
          className
        )}
        {...otherProps}
      >
        <p className="text-center font-bold sm:text-[48px] sm:leading-[56px] text-xl leading-[24px]">
          お問合せフォーム
        </p>

        <Form
          form={form}
          colon={false}
          requiredMark={false}
          labelCol={{ span: 7 }}
          className="w-full flex flex-col gap-y-[30px] sm:gap-y-[60px]"
          labelAlign="left"
        >
          <Form.Item
            label={<LabelForm label="会社名" />}
            name="companyName"
            rules={[
              { required: true, message: "会社名を入力してください" },
              {
                validator: (_, value) =>
                  !value || value.length <= 30
                    ? Promise.resolve()
                    : Promise.reject("30文字以内で入力してください")
              }
            ]}
          >
            <AppInput placeholder="〇〇株式会社" />
          </Form.Item>

          <Form.Item
            name="name"
            label={<LabelForm label="電話番号" />}
            rules={[
              { required: true, message: "名前を入力してください" },
              {
                validator: (_, value) =>
                  !value || value.length <= 30
                    ? Promise.resolve()
                    : Promise.reject("30文字以内で入力してください")
              }
            ]}
          >
            <AppInput placeholder="山田太郎" />
          </Form.Item>

          <Form.Item
            label={<LabelForm label="電話番号" />}
            name="phoneNumber"
            rules={[
              { required: true, message: "電話番号を入力してください" },
              {
                pattern: /^0\d{2}-\d{4}-\d{4}$/,
                message: "正しい形式で入力してください（例: 000-0000-0000）"
              }
            ]}
          >
            <AppPhoneInput placeholder="000-0000-0000" />
          </Form.Item>

          <Form.Item
            label={<LabelForm label="メールアドレス" />}
            name="email"
            rules={[
              { required: true, message: "メールアドレスを入力してください" },
              {
                type: "email",
                message: "有効なメールアドレスを入力してください"
              }
            ]}
            labelAlign="left"
          >
            <AppInput />
          </Form.Item>

          <Form.Item
            label={<LabelForm label="お問い合わせ内容" />}
            name="inquiryContent"
            rules={[
              { required: true, message: "お問い合わせ内容をご入力ください" }
            ]}
          >
            <TextArea
              rootClassName="!h-[103px] !py-2 !px-4 !bg-[#FFF]"
              style={{ resize: "none" }}
            />
          </Form.Item>

          <button
            className="leading-[24px] py-2.5 px-5 border border-white sm:py-5 sm:px-[56px] sm:text-2xl sm:leading-[32px] text-white w-fit mx-auto"
            onClick={() => handleOpenModal()}
          >
            送信
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
              className=" w-full px-7 py-4 bg-white  text-black font-bold flex items-center min-w-[130px] border border-black justify-center"
              onClick={() => setIsOpenModal(false)}
            >
              キャンセル
            </button>
            <button
              className="w-full px-7 py-4 bg-white  text-black font-bold flex items-center min-w-[130px] border border-black justify-center"
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

const LabelForm: FC<LabelFormProps> = ({ label, className, ...otherProps }) => {
  return (
    <span
      className={clsx(
        "flex items-center gap-x-3 pb-[2px] sm:pb-0",
        "w-full h-full sm:text-xl sm:leading-[32px] text-[#FFF]",
        className
      )}
      {...otherProps}
    >
      {label}
      <p className="text-[#F95A2C]">*</p>
    </span>
  );
};

interface LabelFormProps extends ComponentPropsWithoutRef<"span"> {
  label: string;
}
