import { Variants, Transition } from 'framer-motion';

// Common transition configuration
export const commonTransition: Transition = {
    type: "spring",
    bounce: 0,
    duration: 0.8,
};

// Container for staggering children (divs, items)
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
            ...commonTransition
        }
    }
};

// Standard Fade Up using translate3d
export const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        transform: "translate3d(0, 40px, 0)"
    },
    visible: {
        opacity: 1,
        transform: "translate3d(0, 0, 0)",
        transition: commonTransition
    }
};

// Fade In (Simple)
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: commonTransition
    }
};

// Word Stagger for Titles
export const wordContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1
        }
    }
};

export const wordItem: Variants = {
    hidden: {
        opacity: 0,
        transform: "translate3d(0, 20px, 0)"
    },
    visible: {
        opacity: 1,
        transform: "translate3d(0, 0, 0)",
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.6
        }
    }
};

/**
 * Utility to split text into words for animation
 */
export const cleanText = (text: string) => {
    return text.split(" ").map((word, i) => ({
        id: i,
        text: word
    }));
};
