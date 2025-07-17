import React, { ComponentPropsWithoutRef, FC } from "react";
import { twMerge } from "tailwind-merge";

const TextAnimation: FC<TextAnimationProps> = ({
  className,
  children,
  animationDelay = 0.1,
  ...otherProps
}) => {
  return (
    <div
      className={twMerge("relative w-fit overflow-hidden pr-[1%]", className)}
      {...otherProps}
    >
      <div
        className="animate-test3"
        style={{ animationDelay: `${animationDelay + 0.2}s` }}
      >
        {children}
      </div>
      <div
        className="absolute right-0 top-0 z-[20] h-full w-full animate-test1 bg-bgTest"
        style={{ animationDelay: `${animationDelay}s` }}
      />
      <div
        className="absolute bottom-0 left-0 z-[10] h-[95%] w-full animate-test2 bg-bgTitleClipPath"
        style={{ animationDelay: `${animationDelay}s` }}
      />
    </div>
  );
};

export default TextAnimation;

interface TextAnimationProps extends ComponentPropsWithoutRef<"div"> {
  animationDelay?: number;
}
