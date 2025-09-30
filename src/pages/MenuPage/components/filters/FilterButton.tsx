import React from 'react';

interface FilterButtonProps {
	variant: 'category' | 'dietary' | 'spice';
	isSelected: boolean;
	onClick: () => void;
	children: React.ReactNode;
	className?: string;
	ariaLabel: string;
}

const variantStyles = {
	category: {
		selected: 'bg-accent text-text-inverse',
		unselected:
			'bg-background-elevated text-text-secondary hover:text-text-primary border border-border-primary hover:border-accent',
	},
	dietary: {
		selected: 'bg-highlight text-text-inverse',
		unselected:
			'text-text-secondary hover:text-text-primary hover:bg-background-elevated',
	},
	spice: {
		selected: 'bg-success text-text-inverse',
		unselected:
			'text-text-secondary hover:text-text-primary hover:bg-background-elevated',
	},
};

const FilterButton: React.FC<FilterButtonProps> = ({
	variant,
	isSelected,
	onClick,
	children,
	className = '',
	ariaLabel,
}) => {
	const baseStyles =
		'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2';
	const variantClasses = isSelected
		? variantStyles[variant].selected
		: variantStyles[variant].unselected;

	const fullWidth =
		variant !== 'category' ? 'w-full text-left rounded-md' : '';

	return (
		<button
			type="button"
			onClick={onClick}
			className={`${baseStyles} ${variantClasses} ${fullWidth} ${className}`}
			aria-pressed={isSelected}
			aria-label={ariaLabel}
		>
			{children}
		</button>
	);
};

export default FilterButton;
