import clsx from "clsx";
import { DetailedHTMLProps, forwardRef, TextareaHTMLAttributes } from "react";

interface IProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  rootClassName?: string;
  className?: string;
  label?: string;
  required?: boolean;
  error?: string;
}

const AppTextarea = forwardRef(
  (props: IProps, ref: React.Ref<HTMLTextAreaElement>) => {
    const { rootClassName, className, label, error, required, ...restProps } =
      props;

    return (
      <div className={clsx("w-full", rootClassName)}>
        {label && (
          <label className="w-full max-md:mb-2 text-black text-[16px] font-bold flex items-center justify-between">
            {label}{" "}
            {required && (
              <span className="text-[12px] bg-red text-white px-1.5 rounded-md">
                必須
              </span>
            )}
          </label>
        )}
        <div className={clsx("flex flex-col gap-1 w-full border border-black")}>
          <textarea
            ref={ref}
            className={clsx(
              "w-full outline-none text-md text-[14px] p-[15px] text-black placeholder:text-gray-400 bg-white/60 resize-none",
              className
            )}
            {...restProps}
          />
          {error && <div className="text-xs text-red">{error}</div>}
        </div>
      </div>
    );
  }
);

AppTextarea.displayName = "AppTextarea";

export default AppTextarea;
