'use client'
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const TextAnimation = ({ text, className, rootClassName }: { text: string; className?: string; rootClassName?:string }) => {
  const [inView, setInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); 
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Check if the element is in the viewport
  useEffect(() => {
    const handleScroll = () => {
      if (hasAnimated) return;
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setInView(true);
        setHasAnimated(true); 
      } 
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  // Split the text into two parts: "ABOUT" and "US"
  const [firstWord, secondWord] = text.split(" ");

  return (
    <div ref={containerRef} className={clsx("flex", rootClassName)}>
      {/* Animate the first word */}
      <div className="flex">
        {firstWord.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 20,
              transition: {
                delay: index * 0.2, // Delay the animation for each letter
                duration: 0.5, // Duration for each letter animation
              },
            }}
            className={clsx("tracking-wide", className)}

          >
            {char}
          </motion.span>
        ))}
      </div>

      <div className="mx-1" /> 

      {/* Animate the second word */}
      {secondWord &&  <div className="flex">
        {secondWord.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 20,
              transition: {
                delay: (firstWord.length + index) * 0.1, // Stagger the second word's animation
                duration: 0.5,
              },
            }}
            className={clsx("tracking-wide", className)}
          >
            {char}
          </motion.span>
        ))}
      </div>}
     
    </div>
  );
};

export default TextAnimation;
