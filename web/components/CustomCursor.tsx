"use client";

import { motion, useSpring, useMotionValue } from "motion/react";
import { useEffect } from "react";

// ============================================
// CURSOR CONFIGURATION - Easy to adjust
// ============================================

const CURSOR_CONFIG = {
    // Size of the cursor (width/height of container)
    size: 30,

    // Rotation in degrees (applied to the cursor shape)
    // The base shape points to top-left already
    // Positive = clockwise, Negative = counter-clockwise
    // 0 = default top-left angle, +15 = more vertical, -15 = more horizontal
    rotation: 10,

    // Offset from actual mouse position (for aligning the tip)
    offsetX: -2,
    offsetY: -2,

    // Spring physics
    spring: {
        stiffness: 250,
        damping: 15,
        mass: 0.1
    }
};

// ============================================

export default function CustomCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springX = useSpring(cursorX, CURSOR_CONFIG.spring);
    const springY = useSpring(cursorY, CURSOR_CONFIG.spring);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX + CURSOR_CONFIG.offsetX);
            cursorY.set(e.clientY + CURSOR_CONFIG.offsetY);
        };
        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="hidden md:block fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
            style={{
                x: springX,
                y: springY,
                width: CURSOR_CONFIG.size,
                height: CURSOR_CONFIG.size,
                rotate: CURSOR_CONFIG.rotation,
            }}
        >
            {/* Classic pointer triangle - tip at top-left corner */}
            <svg
                width={CURSOR_CONFIG.size}
                height={CURSOR_CONFIG.size}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M4 4L12 22L14 14L22 12L4 4Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
            </svg>
        </motion.div>
    );
}
