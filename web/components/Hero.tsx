"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import NullStateShader from "@/components/NullStateShader";
import { heroParallax } from "@/lib/effects";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Using parallax config from effects library
    const y = useTransform(scrollYProgress, [0, 1], heroParallax.yRange);
    const opacity = useTransform(scrollYProgress, [0, 0.8], heroParallax.opacityRange);
    const scale = useTransform(scrollYProgress, [0, 1], heroParallax.scaleRange);

    return (
        <motion.section
            ref={containerRef}
            style={{ y, opacity, scale }}
            className="relative h-screen w-full flex flex-col justify-between p-6 md:p-12 overflow-hidden"
        >
            {/* The Monolith Name Configuration */}
            <div className="flex flex-col z-10 mt-12 md:mt-0">
                <h1 className="text-[15vw] leading-[0.8] font-bold tracking-tighter uppercase select-none mix-blend-difference text-monolith">
                    RXBRU
                </h1>

                <div className="flex flex-col gap-1 mt-4 ml-1 md:ml-5">
                    <span className="font-space-mono text-xl md:text-2xl tracking-[0.15em] text-monolith uppercase font-bold">
                        Amar Mahato
                    </span>
                    {/* Fixed mobile responsiveness */}
                    <span className="font-space-mono text-sm md:text-base lg:text-[2vw] tracking-[0.25em] text-gray-400 uppercase">
                        Backend_Engineer
                    </span>
                </div>
            </div>

            {/* Bottom Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-end w-full max-w-7xl mx-auto border-t border-white/10 pt-8">
                {/* Bio */}
                <div className="max-w-md">
                    <p className="text-sm md:text-base font-space-mono text-gray-400 leading-relaxed uppercase tracking-wide">
                        System Architecture <span className="text-neon/70 mx-2">//</span>
                        High-Performance Computing <span className="text-neon/70 mx-2">//</span>
                        Distributed Systems
                    </p>
                </div>

                {/* Status & Links */}
                <div className="flex flex-col gap-4 md:items-end font-space-mono text-xs md:text-sm">
                    <div className="flex items-center gap-3 text-monolith bg-white/5 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon"></span>
                        </span>
                        <span className="tracking-wider">SYSTEM_ONLINE</span>
                    </div>

                    {/* Social links - bracket text only, bigger */}
                    <div className="flex gap-6 md:gap-8 text-gray-400 mt-2">
                        <a
                            href="https://github.com/rx6ru"
                            className="hover:text-neon transition-colors flex items-center gap-1 group text-xl md:text-3xl lg:text-4xl font-bold tracking-tight"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            [GITHUB]
                            <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                        <a
                            href="https://x.com/RxBRU_"
                            className="hover:text-neon transition-colors flex items-center gap-1 group text-xl md:text-3xl lg:text-4xl font-bold tracking-tight"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            [X.COM]
                            <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/rxbru/"
                            className="hover:text-neon transition-colors flex items-center gap-1 group text-xl md:text-3xl lg:text-4xl font-bold tracking-tight"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            [LINKEDIN]
                            <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
            <NullStateShader />
        </motion.section>
    );
}
