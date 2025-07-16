import { FC, SVGProps } from "react";

const CloseIcon: FC<SVGProps<SVGSVGElement>> = ({ ...otherProps }) => {
  return (
    <svg
      width="22"
      height="19"
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <line
        x1="20.4657"
        y1="0.73268"
        x2="1.68041"
        y2="18.182"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        y1="-1"
        x2="25.6392"
        y2="-1"
        transform="matrix(0.73268 0.680573 0.680573 -0.73268 2.02783 0.00997925)"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
};

CloseIcon.displayName = "CloseIcon";
export default CloseIcon;
