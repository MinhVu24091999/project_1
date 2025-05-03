"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import HoverGif from "./HoverGif";

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        onComplete();
      }, 400);
    }, 800);

    return () => clearTimeout(timer);
  }, [pathname, onComplete]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          // initial={{ opacity: 0.3 }}
          // animate={{ opacity: 1 }}
          // exit={{ opacity: 0.6 }}
          // transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }} // Gentler ease curve
        >
          <motion.div
            className="bg-black w-full h-full flex items-center justify-center p-6 rounded-lg shadow-lg"
            initial={{ y: "-100vh" }}
            transition={{
              type: "spring",
              stiffness: 100,
              velocity: 3,
              damping: 12,
            }}
            animate={{
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.6, 0, 0, 1],
              },
            }}
            exit={{
              y: "-100vh",
              transition: {
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
              },
            }}
          >
            <HoverGif
              gifSrc="/images/fish-logo.gif"
              staticSrc="/images/fish-logo.gif"
              width={112}
              height={94}
              alt="logo-fish"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
