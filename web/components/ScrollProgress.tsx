"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { scrollProgressSpring } from "@/lib/effects";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, scrollProgressSpring);

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] bg-neon origin-left z-[9998]"
            style={{ scaleX }}
        />
    );
}
