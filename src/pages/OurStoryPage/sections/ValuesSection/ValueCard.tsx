import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeInUp } from '../../../../utils/animations';

export interface ValueCardProps {
	/** Icon element to display */
	icon: ReactNode;
	/** Card title */
	title: string;
	/** Card description */
	description: string;
	/** Unique identifier for ARIA labels */
	id: string;
	/** Icon color class */
	iconColor?: string;
	/** Border hover color (CSS variable) */
	hoverBorderColor?: string;
	/** Icon hover rotation amount in degrees */
	iconHoverRotation?: number;
}

const ValueCard = ({
	icon,
	title,
	description,
	id,
	iconColor = 'text-accent',
	hoverBorderColor = 'var(--color-accent)',
	iconHoverRotation = 5,
}: ValueCardProps) => {
	return (
		<motion.article
			className="bg-background-elevated border border-border-primary rounded-xl p-6 hover:border-accent transition-all duration-300 flex flex-col items-center text-center focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2"
			variants={fadeInUp}
			whileHover={{
				scale: 1.03,
				borderColor: hoverBorderColor,
				transition: { duration: 0.2 },
			}}
			whileTap={{ scale: 0.98 }}
			tabIndex={0}
			role="article"
			aria-labelledby={`${id}-title`}
			aria-describedby={`${id}-description`}
		>
			<motion.div
				className={`${iconColor} mb-4`}
				whileHover={{ rotate: iconHoverRotation }}
				transition={{ duration: 0.2 }}
				aria-hidden="true"
			>
				{icon}
			</motion.div>
			<h3
				id={`${id}-title`}
				className="text-xl font-semibold text-text-primary mb-3"
			>
				{title}
			</h3>
			<p
				id={`${id}-description`}
				className="text-text-secondary leading-relaxed"
			>
				{description}
			</p>
		</motion.article>
	);
};

export default ValueCard;
