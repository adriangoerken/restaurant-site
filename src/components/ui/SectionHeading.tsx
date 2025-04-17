import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface SectionHeadingProps {
	children: React.ReactNode;
	className?: string;
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	color?: 'default' | 'rose' | 'gradient';
	align?: 'left' | 'center' | 'right';
	animated?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
	children,
	className,
	as: Component = 'h2',
	color = 'default',
	align = 'center',
	animated = true,
}) => {
	const prefersReducedMotion = useReducedMotion();

	const baseStyles = 'text-3xl md:text-4xl mb-8 font-medium';
	const alignmentStyles = {
		left: 'text-left',
		center: 'text-center',
		right: 'text-right',
	};
	const colorStyles = {
		default: 'text-gray-100',
		rose: 'text-rose-500',
		gradient:
			'bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent',
	};

	const headingVariants = {
		hidden: {
			opacity: 0,
			y: prefersReducedMotion ? 0 : 20,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: prefersReducedMotion ? 0 : 0.5,
				ease: 'easeOut',
			},
		},
	};

	const Wrapper = animated ? motion[Component] : Component;
	const animationProps = animated
		? {
				variants: headingVariants,
				initial: 'hidden',
				whileInView: 'visible',
				viewport: { once: true, amount: 0.8 },
		  }
		: {};

	return (
		<Wrapper
			className={cn(
				baseStyles,
				alignmentStyles[align],
				colorStyles[color],
				className
			)}
			{...animationProps}
		>
			{children}
		</Wrapper>
	);
};

export default SectionHeading;
