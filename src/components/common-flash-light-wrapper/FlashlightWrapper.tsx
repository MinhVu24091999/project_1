"use client";
import clsx from "clsx";
import "./style.css";

import React, { useRef, useEffect, ComponentPropsWithoutRef } from "react";

const FlashlightWrapper = ({
  children,
  flashlightOffset = 30,
  className,
  ...otherProps
}: FlashlightWrapperProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const flashlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const flashlight = flashlightRef.current;

    if (!container || !flashlight) return;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { left, top } = container.getBoundingClientRect();

      flashlight.style.left = `${clientX - left - flashlightOffset}px`;
      flashlight.style.top = `${clientY - top - flashlightOffset}px`;
      flashlight.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      flashlight.style.opacity = "0";
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={clsx("relative overflow-hidden h-full w-full", className)}
      {...otherProps}
    >
      {children}
      <div
        ref={flashlightRef}
        className="flashlight absolute rounded-full pointer-events-none"
      ></div>
    </div>
  );
};

interface FlashlightWrapperProps extends ComponentPropsWithoutRef<"div"> {
  flashlightOffset?: number;
}

export default FlashlightWrapper;
