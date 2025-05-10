import { FC, SVGProps } from "react";

const ArrowUpIcon: FC<SVGProps<SVGSVGElement>> = ({ ...otherProps }) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <circle cx="24" cy="24" r="23.5" stroke="currentColor" />
      <path
        d="M19.7333 26.1328L23.9999 21.8661L28.2666 26.1328"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpIcon.displayName = "ArrowUpIcon";
export default ArrowUpIcon;
