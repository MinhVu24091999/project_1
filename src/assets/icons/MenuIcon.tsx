import { FC, SVGProps } from "react";

const MenuIcon: FC<SVGProps<SVGSVGElement>> = ({ ...otherProps }) => {
  return (
    <svg
      width="40"
      height="22"
      viewBox="0 0 40 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path d="M0 1.41501H40" stroke="white" />
      <path d="M0 11.415H40" stroke="white" />
      <path d="M0 21.415H40" stroke="white" />
    </svg>
  );
};

MenuIcon.displayName = "MenuIcon";
export default MenuIcon;
