import React from 'react';
import type { LucideIcon } from 'lucide-react';

export interface NavigationButtonProps {
	onClick: (e: React.MouseEvent) => void;
	disabled?: boolean;
	ariaLabel: string;
	icon: LucideIcon;
	position: 'left' | 'right';
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
	onClick,
	disabled = false,
	ariaLabel,
	icon: Icon,
	position,
}) => {
	const positionClass = position === 'left' ? 'left-4' : 'right-4';

	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`absolute ${positionClass} z-10 p-3 bg-background-secondary/80 hover:bg-background-secondary rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-primary disabled:opacity-50 disabled:cursor-not-allowed`}
			aria-label={ariaLabel}
			type="button"
		>
			<Icon className="w-6 h-6 text-text-primary" aria-hidden="true" />
		</button>
	);
};

export default NavigationButton;
