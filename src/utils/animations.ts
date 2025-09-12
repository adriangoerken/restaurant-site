import { type Variants, easeOut } from 'framer-motion';

/**
 * Fades in an element from the bottom.
 */
export const fadeInUp: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: easeOut },
	},
};

/**
 * Fades in an element.
 */
export const fadeIn: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { duration: 0.8, ease: easeOut },
	},
};

/**
 * Scales in an element from a smaller size.
 */
export const scaleIn: Variants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.6, ease: easeOut },
	},
};

/**
 * Slides in an element from the left.
 */
export const slideInLeft: Variants = {
	hidden: { opacity: 0, x: -50 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.8, ease: easeOut },
	},
};

/**
 * Slides in an element from the right.
 */
export const slideInRight: Variants = {
	hidden: { opacity: 0, x: 50 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.8, ease: easeOut },
	},
};

/**
 * A container variant that staggers the animation of its children.
 */
export const staggerContainer: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.1,
		},
	},
};
