import React from 'react';

export interface BadgeProps {
	children: React.ReactNode;
	variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
	size?: 'sm' | 'md' | 'lg';
	className?: string;
	'aria-label'?: string;
}

const Badge: React.FC<BadgeProps> = ({
	children,
	variant = 'default',
	size = 'sm',
	className = '',
	'aria-label': ariaLabel,
}) => {
	const variantStyles = {
		default:
			'bg-background-elevated border border-border-primary text-text-muted',
		success: 'bg-success/20 text-success border border-success/30',
		warning: 'bg-accent/20 text-accent border border-accent/30',
		danger: 'bg-red-500/20 text-red-500 border border-red-500/30',
		info: 'bg-highlight/20 text-highlight border border-highlight/30',
	};

	const sizeStyles = {
		sm: 'px-2 py-1 text-xs',
		md: 'px-3 py-1.5 text-sm',
		lg: 'px-4 py-2 text-base',
	};

	return (
		<span
			className={`inline-flex items-center justify-center rounded-full font-medium whitespace-nowrap ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
			role="status"
			aria-label={ariaLabel}
		>
			{children}
		</span>
	);
};

export default Badge;
