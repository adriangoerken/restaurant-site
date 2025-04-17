import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../../utils/cn';
import Container from '../Container';

type SectionProps = {
	children: React.ReactNode;
	className?: string;
	containerClassName?: string;
	background?: 'none' | 'dark' | 'gradient';
	viewportAmount?: number;
	fullWidth?: boolean;
};

const Section = ({
	children,
	className,
	containerClassName,
	background = 'none',
	viewportAmount = 0.3,
	fullWidth = false,
}: SectionProps) => {
	const prefersReducedMotion = useReducedMotion();

	const sectionVariants = {
		hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: prefersReducedMotion ? 0 : 0.5 },
		},
	};

	const backgroundStyles = {
		none: '',
		dark: 'bg-black/30',
		gradient: 'bg-gradient-to-b from-black/30 to-black/50',
	};

	const content = fullWidth ? (
		children
	) : (
		<Container className={containerClassName}>{children}</Container>
	);

	return (
		<motion.section
			className={cn('py-20', backgroundStyles[background], className)}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: viewportAmount }}
			variants={sectionVariants}
		>
			{content}
		</motion.section>
	);
};

export default Section;
