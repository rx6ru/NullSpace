"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function TechnicalOverlay() {
    const [time, setTime] = useState("");
    const [mounted, setMounted] = useState(false);
    const { scrollYProgress } = useScroll();
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    // Map scroll progress to a percentage string
    const scrollPercent = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCoords({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        setMounted(true);
        const updateTime = () => {
            const now = new Date();
            const localTime = now.toLocaleTimeString(); // User's local time
            setTime(localTime);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 z-[50] pointer-events-none mix-blend-difference text-white font-space-mono text-[10px] md:text-xs uppercase tracking-widest select-none overflow-hidden">

            {/* Top Right: Time & Connection */}
            <div className="absolute top-6 right-6 md:top-12 md:right-12 text-right flex flex-col gap-1">
                <div className="flex items-center justify-end gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span>SYS_ONLINE</span>
                </div>
                <span className="opacity-50">{time}</span>
            </div>

            {/* Bottom Left: Scroll / Coordinates */}
            <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <span className="opacity-50">SCROLL_POS:</span>
                    <motion.span>{scrollPercent}</motion.span>
                </div>
                <div className="opacity-30 text-[8px] tabular-nums">
                    COORD: {coords.x}px, {coords.y}px
                </div>
            </div>
        </div>
    );
}
