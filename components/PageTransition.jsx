"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

function PageTransition({ children }) {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.5, duration: 0.2, ease: "easeInOut" },
          }}
          className="min-h-screen w-screen fixed top-0 pointer-events-none"
        ></motion.div>

        {children}
      </div>
      ;
    </AnimatePresence>
  );
}

export default PageTransition;
