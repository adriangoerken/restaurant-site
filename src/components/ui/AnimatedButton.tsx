import { motion, type MotionProps } from 'framer-motion';
import React from 'react';
import { scaleIn } from '../../utils/animations';

interface AnimatedButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'outline';
	size?: 'sm' | 'md' | 'lg';
	children: React.ReactNode;
	'aria-label': string;
}

const variantClasses = {
	primary:
		'bg-accent hover:bg-accent/90 text-text-inverse focus:ring-accent border-2 border-transparent',
	outline:
		'border-2 border-highlight text-highlight hover:bg-highlight hover:text-text-inverse focus:ring-highlight',
};

const sizeClasses = {
	sm: 'px-6 py-2 rounded-md font-medium',
	md: 'px-8 py-4 rounded-lg font-semibold',
	lg: 'px-10 py-5 rounded-xl font-bold',
};

const AnimatedButton = ({
	variant = 'primary',
	size = 'md',
	type = 'button',
	children,
	...props
}: AnimatedButtonProps & MotionProps) => {
	const motionProps: MotionProps = {
		variants: scaleIn,
		whileHover: { scale: 1.05 },
		whileTap: { scale: 0.95 },
	};

	return (
		<motion.button
			type={type}
			className={`transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-primary ${variantClasses[variant]} ${sizeClasses[size]}`}
			{...motionProps}
			{...props}
		>
			{children}
		</motion.button>
	);
};

export default AnimatedButton;
