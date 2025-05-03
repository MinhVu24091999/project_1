"use client";
import clsx from "clsx";
import { motion } from "framer-motion";

const EaseInOutText = ({
  text,
  className,
  rootClassName,
}: {
  text: string;
  className?: string;
  rootClassName?: string;
}) => {
  // Split the text into two parts: "ABOUT" and "US"
  const [firstWord, secondWord] = text.split(" ");

  return (
    <div className={clsx("flex", rootClassName)}>
      {/* Animate the first word */}
      <div className="flex">
        {firstWord.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{
              opacity: 0,
              y: index % 2 === 0 ? "-50%" : "50%",
            }}
            animate={{ strokeDashoffset: 0, y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: index % 2 === 0 ? 0 : 0.3,
            }}
            className={clsx("tracking-wide", className)}
          >
            {char}
          </motion.span>
        ))}
      </div>

      <div className="mx-1" />

      {/* Animate the second word */}
      {secondWord && (
        <div className="flex">
          {secondWord.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                y: index % 2 === 0 ? "-50%" : "50%",
              }}
              animate={{ strokeDashoffset: 0, y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: index % 2 === 0 ? 0 : 0.3,
              }}
              className={clsx("tracking-wide", className)}
            >
              {char}
            </motion.span>
          ))}
        </div>
      )}
    </div>
  );
};

export default EaseInOutText;
