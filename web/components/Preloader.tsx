"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { slideUpVariants, slideTransition } from "@/lib/effects";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [counter, setCounter] = useState(0);

    const [coords, setCoords] = useState({ lat: 40.7128, lng: -74.006 });

    useEffect(() => {
        const interval = setInterval(() => {
            setCoords({
                lat: 40 + Math.random() * 2,
                lng: -74 + Math.random() * 2
            });
        }, 120); // Rapid updates for "searching" effect
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Eased counter animation - smoother increments
        let current = 0;
        const interval = setInterval(() => {
            // Smoother: smaller increments, longer intervals
            const remaining = 100 - current;
            const increment = Math.max(1, Math.ceil(remaining / 15));

            current += increment;

            if (current >= 100) {
                setCounter(100);
                clearInterval(interval);
                setTimeout(() => setIsLoading(false), 800);
            } else {
                setCounter(current);
            }
        }, 70);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] bg-void text-monolith cursor-none flex flex-col justify-between p-6 md:p-12 overflow-hidden font-space-mono"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    {/* Header Metadata: Pinned Corners */}
                    <div className="flex justify-between items-start w-full text-xs uppercase tracking-widest text-gray-500">
                        {/* Top Left */}
                        <div className="flex flex-col gap-1">
                            <span className="text-monolith">RXBRU®</span>
                            <span>Portfolio // 2026</span>
                        </div>

                        {/* Top Right */}
                        <div className="hidden md:flex flex-col gap-1 text-right tabular-nums">
                            <span>N {coords.lat.toFixed(4)}°</span>
                            <span>W {coords.lng.toFixed(4)}°</span>
                        </div>
                    </div>

                    {/* Central Void */}
                    <div className="flex-grow"></div>

                    {/* Bottom Footer & Counter */}
                    <div className="relative w-full flex items-end justify-between">
                        {/* Bottom Left Status */}
                        <div className="text-xs uppercase tracking-widest text-neon flex flex-col gap-1">
                            <span>Memory: 64GB OK</span>
                            <span className="animate-pulse">{counter === 100 ? "BOOT_SEQUENCE_COMPLETE" : "LOADING_MODULES..."}</span>
                        </div>

                        {/* Massive Counter at Bottom Right - using effects library */}
                        <div className="overflow-hidden">
                            <motion.h1
                                className="text-[18vw] leading-[0.8] font-bold tracking-tighter tabular-nums will-change-transform"
                                variants={slideUpVariants}
                                initial="hidden"
                                animate="visible"
                                transition={slideTransition.snap}
                            >
                                {counter.toString().padStart(2, "0")}
                            </motion.h1>
                        </div>
                    </div>

                    {/* Subtle Grain Overlay - dark and subtle */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-noise bg-repeat mix-blend-overlay" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
