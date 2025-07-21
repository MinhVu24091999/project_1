import clsx from "clsx";
import React, { FC } from "react";
import { Input, InputProps } from "antd";

const AppInput: FC<InputProps> = ({ className, ...otherProps }) => {
  return (
    <Input
      className={clsx("px-4 py-2 !bg-[#FFF]", className)}
      {...otherProps}
    />
  );
};

AppInput.displayName = "AppInput";

export default AppInput;
