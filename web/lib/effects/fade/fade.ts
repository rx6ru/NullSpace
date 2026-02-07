/**
 * Fade Animation Variants
 * 
 * Simple opacity transitions with optional transforms.
 * Used for: General content reveals, headlines, sections.
 */

import { Variants } from "motion/react";

// Simple fade
export const fadeVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

// Fade with slight upward movement
export const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

// Fade with slight downward movement
export const fadeDownVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
};

// Fade with scale
export const fadeScaleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
};

// Transitions
export const fadeTransition = {
    quick: {
        duration: 0.3,
        ease: "easeOut" as const
    },
    standard: {
        duration: 0.5,
        ease: "easeOut" as const
    },
    slow: {
        duration: 0.8,
        ease: "easeInOut" as const
    },
    stagger: (delay: number = 0) => ({
        delay,
        duration: 0.5,
        ease: "easeOut" as const
    })
};
