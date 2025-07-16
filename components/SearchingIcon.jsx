"use client";
import { motion, AnimatePresence } from "framer-motion";
import { TbMoodLookLeft, TbMoodLookRight, TbMoodLookUp } from "react-icons/tb";
import { useState, useEffect } from "react";

function SearchingIcon() {
  const [currentIcon, setCurrentIcon] = useState(0); // 0: right, 1: left, 2: up

  useEffect(() => {
    const sequence = async () => {
      setCurrentIcon(0);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setCurrentIcon(1);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setCurrentIcon(2);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      await new Promise((resolve) => setTimeout(resolve, 2000));

      sequence();
    };

    sequence();
  }, []);

  const iconVariants = {
    right: {
      initial: { opacity: 1, x: 0 },
      animate: { opacity: 1, x: 100 },
      exit: { opacity: 1, x: 100 },
    },
    left: {
      initial: { opacity: 1, x: 100 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 1, x: 0 },
    },
    up: {
      initial: { opacity: 1, x: 0 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 1, x: 0 },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {currentIcon === 0 && (
        <motion.div
          key="right"
          variants={iconVariants.right}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          <TbMoodLookRight size={30} />
        </motion.div>
      )}

      {currentIcon === 1 && (
        <motion.div
          key="left"
          variants={iconVariants.left}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          <TbMoodLookLeft size={30} />
        </motion.div>
      )}

      {currentIcon === 2 && (
        <motion.div
          key="up"
          variants={iconVariants.up}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.2 }}
        >
          <TbMoodLookUp size={30} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SearchingIcon;
