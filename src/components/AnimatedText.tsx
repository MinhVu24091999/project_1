"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface IProps {
  text: string;
  className?: string;
  separator?: string;
  duration?: number;
  initial?: object;
}

export default function AnimatedText({
  text,
  className,
  separator = "",
  duration = 0.1,
  initial = {},
}: IProps) {
  const words = text.split(separator);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={clsx("flex flex-wrap gap-0.5 overflow-hidden", className)}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{
            y: index % 2 === 0 ? "-40%" : "40%",
            opacity: 0,
            ...initial,
          }}
          animate={
            inView
              ? {
                  y: 0,
                  opacity: 1,
                }
              : {}
          }
          transition={{
            duration,
            delay: index * 0.1,
            ease: "easeOut",
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
