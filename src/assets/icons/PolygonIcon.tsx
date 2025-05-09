import { FC, SVGProps } from "react";

const PolygonIcon: FC<SVGProps<SVGSVGElement>> = ({ ...otherProps }) => {
  return (
    <svg
      width="20"
      height="30"
      viewBox="0 0 20 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M19.1975 13.4737C20.1409 14.2726 20.1409 15.7274 19.1975 16.5263L3.83789 29.5325C2.5382 30.6331 0.545453 29.7093 0.545453 28.0062L0.545454 1.99377C0.545454 0.290703 2.5382 -0.633091 3.8379 0.467466L19.1975 13.4737Z"
        fill="currentColor"
      />
    </svg>
  );
};

PolygonIcon.displayName = "PolygonIcon";
export default PolygonIcon;
