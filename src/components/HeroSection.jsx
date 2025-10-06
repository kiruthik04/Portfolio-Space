"use client";
import { motion } from "framer-motion";
import { heroData } from "../constants/index.js";

export default function HeroSection() {
    return (
        <section className="relative flex flex-col justify-center items-end text-right min-h-screen bg-transparent overflow-hidden px-6 md:px-25">

            {/* Background glows */}
            <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-violet-500/30 rounded-full blur-[180px]"></div>
            <div className="absolute bottom-10 right-20 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[160px]"></div>

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-extrabold leading-tight text-white max-w-3xl"
            >
                Shaping <span className="text-violet-500">{heroData.highlight.part1}</span>{" "}
                into <span className="text-blue-400">{heroData.highlight.part2}</span> that{" "}
                <span className="text-violet-500">{heroData.highlight.part3}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl"
            >
                {heroData.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-10 flex gap-5 justify-end"
            >
                {heroData.ctas.map((cta, index) => (
                    <a
                        key={index}
                        href={cta.link}
                        target={cta.link.startsWith("http") ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className={`px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-lg ${cta.type === "primary"
                                ? "bg-violet-600 hover:bg-violet-700 text-white"
                                : "border border-gray-500 text-white hover:bg-gray-800"
                            }`}
                    >
                        {cta.label}
                    </a>
                ))}
            </motion.div>
        </section>
    );
}
