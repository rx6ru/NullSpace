/**
 * Slide Animation Variants
 * 
 * Various slide-in/slide-up effects.
 * Used for: Preloader counter, text entrances, hero elements.
 */

import { Variants } from "motion/react";

// Slide up from bottom (overflow hidden parent required)
export const slideUpVariants: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: "0%", opacity: 1 }
};

// Slide up without opacity
export const slideUpSolidVariants: Variants = {
    hidden: { y: "100%" },
    visible: { y: "0%" }
};

// Slide in from left
export const slideInLeftVariants: Variants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: "0%", opacity: 1 }
};

// Slide in from right
export const slideInRightVariants: Variants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: "0%", opacity: 1 }
};

// Transitions
export const slideTransition = {
    // Fast snap - good for counters/numbers
    snap: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1] as const // ease-out-cubic
    },
    // Standard smooth slide
    smooth: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const // ease-out-expo
    },
    // Bouncy entrance
    bouncy: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30
    },
    // Slow cinematic
    cinematic: {
        duration: 1.2,
        ease: [0.25, 1, 0.5, 1] as const
    }
};
