import React from "react";
import { Input } from "antd";
import clsx from "clsx";

interface Props {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const AppPhoneInput: React.FC<Props> = ({
  value = "",
  onChange,
  className,
  ...otherProps
}) => {
  const formatPhoneNumber = (val: string) => {
    // Chỉ lấy số
    const digits = val.replace(/\D/g, "").slice(0, 11); // Giới hạn 11 số

    if (digits.length <= 3) return digits;
    if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const formatted = formatPhoneNumber(raw);
    onChange?.(formatted);
  };

  return (
    <Input
      className={clsx("!bg-[#F1FCF9] px-2 py-5", className)}
      {...otherProps}
      value={value}
      onChange={handleChange}
    />
  );
};

export default AppPhoneInput;
