"use client";

import { motion } from "framer-motion";

const FadeInText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }} // Thời gian hiệu ứng
      className={className}
    >
      {text}
    </motion.span>
  );
};

export default FadeInText;
