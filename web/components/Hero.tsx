"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight, ArrowDown, FileText } from "lucide-react";
import NullStateShader from "@/components/NullStateShader";
import MagneticButton from "@/components/MagneticButton";
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
                <h1 className="text-[clamp(4rem,15vw,15rem)] leading-[0.8] font-bold tracking-tighter uppercase select-none mix-blend-difference text-monolith">
                    RXBRU
                </h1>

                <div className="flex flex-col gap-1 mt-4 ml-1 md:ml-5">
                    <span className="font-space-mono text-2xl md:text-3xl lg:text-4xl tracking-[0.15em] text-monolith uppercase font-bold">
                        Amar Mahato
                    </span>
                    {/* Fixed mobile responsiveness */}
                    <span className="font-space-mono text-lg md:text-xl lg:text-[2vw] tracking-[0.25em] text-monolith/60 uppercase mt-2">
                        Backend_Engineer
                    </span>

                    {/* Resume Button */}
                    <div className="mt-8 md:mt-10 z-40 relative w-fit">
                        <MagneticButton strength={0.2} href="https://raw.githubusercontent.com/rx6ru/rx6ru/main/.docs/Amar_Mahato_SD.pdf" target="_blank" rel="noopener noreferrer">
                            <div className="flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-void border border-monolith/20 hover:border-neon/50 text-monolith/80 hover:text-white transition-colors group relative overflow-hidden backdrop-blur-md">
                                {/* Subtle glow behind the button */}
                                <div className="absolute inset-0 bg-neon/0 group-hover:bg-neon/10 transition-colors duration-500" />

                                <FileText className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                                <span className="font-space-mono text-sm md:text-lg tracking-[0.15em] font-bold relative z-10">
                                    VIEW RESUME
                                </span>
                            </div>
                        </MagneticButton>
                    </div>
                </div>
            </div>

            {/* Bottom Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-end w-full max-w-7xl mx-auto border-t border-monolith/20 pt-8 mt-12 md:mt-0">
                {/* Bio */}
                <div className="max-w-md">
                    <p className="text-sm md:text-base font-space-mono text-monolith/60 leading-relaxed uppercase tracking-wide">
                        System Architecture <span className="text-neon/70 mx-2">//</span>
                        High-Performance Computing <span className="text-neon/70 mx-2">//</span>
                        Distributed Systems
                    </p>
                </div>

                {/* Status & Links */}
                <div className="flex flex-col gap-4 md:items-end font-space-mono text-xs md:text-sm">
                    <div className="flex items-center gap-3 text-monolith bg-monolith/5 px-3 py-1.5 rounded-full backdrop-blur-sm border border-monolith/10">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon"></span>
                        </span>
                        <span className="tracking-wider">SYSTEM_ONLINE</span>
                    </div>

                    {/* Social links - bracket text only, bigger */}
                    <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 text-monolith/60 mt-2">
                        <a
                            href="https://github.com/rx6ru"
                            className="hover:text-neon transition-colors flex items-center gap-1 group text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold tracking-tight py-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            [GITHUB]
                            <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                        <a
                            href="https://x.com/RxBRU_"
                            className="hover:text-neon transition-colors flex items-center gap-1 group text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold tracking-tight py-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            [X.COM]
                            <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/rxbru/"
                            className="hover:text-neon transition-colors flex items-center gap-1 group text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold tracking-tight py-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            [LINKEDIN]
                            <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                    </div>

                    {/* Scroll Indicator */}
                    {/* Scroll Indicator - Floating above the footer grid */}
                    <div className="absolute bottom-12 md:bottom-[-5rem] left-1/2 -translate-x-1/2 z-30 pointer-events-none opacity-20">
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        >
                            <ArrowDown size={40} />
                        </motion.div>
                    </div>
                </div>
            </div>
            <NullStateShader />
        </motion.section>
    );
}
