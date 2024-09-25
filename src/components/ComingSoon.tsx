"use client";

import Hat from "@/public/images/luffy-strawhat.gif";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className="min-h-[85vh]">
      <motion.div
        initial={{ translateX: -90, opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 h-[80vh] flex flex-col items-center justify-center gap-5"
      >
        <Image
          src={Hat}
          width={300}
          height={300}
          alt="luffy-strawhat"
          className="pointer-events-none"
        />
        <div className="h-20 z-20 flex items-center">
          <h1 className="font-bold text-2xl md:text-3xl">Coming Soon</h1>
        </div>
      </motion.div>
    </div>
  );
}
