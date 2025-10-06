"use client";
import { motion } from "framer-motion";

export default function SpaceShuttle() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: [100, 0, -20, 0], opacity: 1 }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute left-10 bottom-20 w-24 h-24"
    >
      {/* 🚀 Simple SVG shuttle */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="white"
        className="w-full h-full drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]"
      >
        <path d="M156 400c-14 0-26-12-26-26V138c0-14 12-26 26-26h200c14 0 26 12 26 26v236c0 14-12 26-26 26H156z" fill="#94a3b8"/>
        <path d="M256 20c30 0 54 24 54 54v364c0 30-24 54-54 54s-54-24-54-54V74c0-30 24-54 54-54z" fill="#e5e7eb"/>
        <path d="M236 438h40v40h-40z" fill="#f97316"/>
        <path d="M226 478h60v14c0 11-9 20-20 20h-20c-11 0-20-9-20-20v-14z" fill="#fb923c"/>
      </svg>
    </motion.div>
  );
}
