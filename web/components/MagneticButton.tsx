"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";

interface MagneticButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
    target?: string;
    rel?: string;
    // Strength of the pull effect. 1 = normal, > 1 = stronger.
    strength?: number;
}

export default function MagneticButton({
    children,
    href,
    onClick,
    className = "",
    target,
    rel,
    strength = 1,
}: MagneticButtonProps) {
    const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent) => {
        if (!ref.current) return;

        // Get button dimensions and position
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();

        // Calculate center of the button
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        // Calculate pull value based on strength
        // The * 0.5 dampens the effect so it doesn't move too far outside its bounds
        setPosition({ x: middleX * 0.5 * strength, y: middleY * 0.5 * strength });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const commonProps = {
        ref: ref as any,
        onMouseMove: handleMouse,
        onMouseLeave: reset,
        animate: { x: position.x, y: position.y },
        transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 } as any,
        className: `inline-block ${className}`,
    };

    if (href) {
        return (
            <motion.a href={href} onClick={onClick} target={target} rel={rel} {...commonProps}>
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button onClick={onClick} {...commonProps}>
            {children}
        </motion.button>
    );
}
