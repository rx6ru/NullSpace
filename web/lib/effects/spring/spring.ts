/**
 * Spring Animation Configs
 * 
 * Physics-based spring transitions for natural movement.
 * Used for: Cursor, interactive elements, hover states.
 */

// Cursor following spring - deliberate, not too fast
export const cursorSpring = {
    stiffness: 150,
    damping: 25,
    mass: 0.5
};

// Snappy spring for quick responses
export const snappySpring = {
    stiffness: 400,
    damping: 30
};

// Bouncy spring for playful interactions
export const bouncySpring = {
    stiffness: 300,
    damping: 20
};

// Smooth spring for gentle movements
export const smoothSpring = {
    stiffness: 100,
    damping: 30
};

// Tight spring for precise control
export const tightSpring = {
    stiffness: 500,
    damping: 40
};
