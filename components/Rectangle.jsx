"use client";
import { motion } from "framer-motion";

const rectangleVariants = {
  initial: {
    y: "-100%",
    height: "100%",
  },
  animate: {
    y: "0%",
    height: "0%",
  },
  exit: {
    y: ["0%", "-100%"],
    height: ["0%", "100%"],
  },
};

function Rectangle() {
  return (
    <>
      <motion.div
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0, duration: 0.6, ease: [0.63, 0, 0.17, 1] }}
        className="fixed top-full w-screen h-screen z-30 bg-[#120f41]"
      />
      <motion.div
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.8, ease: [0.63, 0, 0.17, 1] }}
        className="fixed top-full w-screen h-screen z-20 bg-[#150b34]"
      />
      <motion.div
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.3, duration: 1, ease: [0.63, 0, 0.17, 1] }} //ease defined with Bezier curve (speed of an animation over time)
        className="fixed top-full w-screen h-screen z-10 bg-[#1b1235]"
      />
      <motion.div
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 1, ease: [0.63, 0, 0.17, 1] }}
        className="fixed top-full w-screen h-screen z-10 bg-[#18122cf9]"
      />
    </>
  );
}

export default Rectangle;
