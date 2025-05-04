import clsx from "clsx";
import React, { FC } from "react";
import { Input, InputProps } from "antd";

const AppInput: FC<InputProps> = ({ className, ...otherProps }) => {
  return (
    <Input
      className={clsx("!bg-[#F1FCF9] px-2 py-5", className)}
      {...otherProps}
    />
  );
};

AppInput.displayName = "AppInput";

export default AppInput;
