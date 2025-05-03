"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactNode, useEffect } from "react";

interface IProps {
  children: ReactNode;
}

const AOSComponent = ({ children }: IProps) => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return <>{children}</>;
};

export default AOSComponent;
