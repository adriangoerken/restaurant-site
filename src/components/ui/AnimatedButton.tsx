import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { Link } from 'react-router-dom';

type AnimatedButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
	variant?: 'primary' | 'secondary' | 'outline';
	size?: 'sm' | 'md' | 'lg';
	className?: string;
	type?: 'button' | 'submit' | 'reset';
	to?: string;
	disabledAnimation?: boolean;
};

const MotionLink = motion(Link);

const AnimatedButton = ({
	children,
	onClick,
	variant = 'primary',
	size = 'md',
	className,
	type = 'button',
	to,
	disabledAnimation = false,
}: AnimatedButtonProps) => {
	const prefersReducedMotion = useReducedMotion();

	const baseStyles =
		'relative overflow-hidden group rounded-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black';

	const variantStyles = {
		primary: 'bg-rose-500 hover:bg-rose-600 text-white focus:ring-rose-500',
		secondary:
			'border border-white hover:bg-white/10 text-white focus:ring-white',
		outline:
			'border border-rose-500 hover:bg-rose-500/10 text-white focus:ring-rose-500',
	};

	const sizeStyles = {
		sm: 'px-6 py-2 text-sm',
		md: 'px-8 py-3 text-base',
		lg: 'px-12 py-4 text-lg',
	};

	const hoverBackgroundColors = {
		primary: 'bg-rose-400',
		secondary: 'bg-white/10',
		outline: 'bg-rose-500/10',
	};

	const commonProps = {
		className: cn(
			baseStyles,
			variantStyles[variant],
			sizeStyles[size],
			className
		),
		whileHover: {
			scale: prefersReducedMotion ? 1 : 1.05,
		},
		whileTap: {
			scale: prefersReducedMotion ? 1 : 0.95,
		},
		onClick: to ? undefined : onClick,
	};

	const content = (
		<>
			<span className="relative z-10">{children}</span>
			{!prefersReducedMotion && !disabledAnimation && (
				<motion.div
					className={`absolute inset-0 ${hoverBackgroundColors[variant]}`}
					initial={{ x: '-100%' }}
					whileHover={{ x: 0 }}
					transition={{ duration: 0.3 }}
					aria-hidden="true"
				/>
			)}
		</>
	);

	if (to) {
		return (
			<MotionLink to={to} {...commonProps}>
				{content}
			</MotionLink>
		);
	}

	return (
		<motion.button
			type={type}
			role="button"
			{...commonProps}
			onClick={onClick}
		>
			{content}
		</motion.button>
	);
};

export default AnimatedButton;
