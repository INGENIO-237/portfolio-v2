"use client";

import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <div className="min-h-[85vh]">
      <motion.div
        initial={{ translateX: -90, opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 h-[80vh] flex flex-col items-center justify-center gap-5"
      >
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-9xl pointer-events-none"
        >
          🚧
        </motion.div>
        <div className="h-20 z-20 flex items-center">
          <h1 className="font-bold text-2xl md:text-3xl">Coming Soon</h1>
        </div>
      </motion.div>
    </div>
  );
}
