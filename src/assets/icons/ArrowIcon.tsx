import { FC, SVGProps } from "react";

const ArrowIcon: FC<SVGProps<SVGSVGElement>> = ({ ...otherProps }) => {
  return (
    <svg
      width="32"
      height="9"
      viewBox="0 0 32 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path d="M0 7.5H31L16 1.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
};

ArrowIcon.displayName = "ArrowIcon";
export default ArrowIcon;
