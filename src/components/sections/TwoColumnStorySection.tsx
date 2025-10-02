import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import Container from '../layout/Container';
import { slideInLeft, slideInRight } from '../../utils/animations';

export interface TwoColumnStorySectionProps {
	/** Unique ID for the heading (for aria-labelledby) */
	headingId: string;
	/** First part of the heading (normal color) */
	headingPart1: string;
	/** Second part of the heading (highlighted) */
	headingPart2: string;
	/** Color for the highlighted heading part */
	highlightColor?: 'accent' | 'success' | 'highlight';
	/** Array of paragraph texts */
	paragraphs: string[];
	/** Emoji or icon to display */
	emoji: string;
	/** Alt text for the visual element */
	visualAriaLabel: string;
	/** Background color variant */
	backgroundColor?: 'primary' | 'secondary';
	/** Layout order - 'text-first' or 'visual-first' */
	layout?: 'text-first' | 'visual-first';
	/** Rotation direction for emoji animation */
	rotateDirection?: 'clockwise' | 'counterclockwise';
	/** Hover rotation amount */
	hoverRotation?: number;
	/** Optional action button/content to show after paragraphs */
	action?: ReactNode;
	/** Additional class names for the section */
	className?: string;
}

const TwoColumnStorySection = ({
	headingId,
	headingPart1,
	headingPart2,
	highlightColor = 'accent',
	paragraphs,
	emoji,
	visualAriaLabel,
	backgroundColor = 'primary',
	layout = 'text-first',
	rotateDirection = 'clockwise',
	hoverRotation = 2,
	action,
	className = '',
}: TwoColumnStorySectionProps) => {
	const rotationValues =
		rotateDirection === 'clockwise' ? [0, 5, -5, 0] : [0, -5, 5, 0];

	const bgClass =
		backgroundColor === 'primary'
			? 'bg-background-primary'
			: 'bg-background-secondary';

	const textOrder =
		layout === 'text-first' ? 'order-1' : 'order-2 lg:order-1';
	const visualOrder =
		layout === 'text-first' ? 'order-2 lg:order-2' : 'order-1 lg:order-2';

	return (
		<AnimatedSection
			className={`py-20 ${bgClass} overflow-hidden ${className}`}
			aria-labelledby={headingId}
		>
			<Container>
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Text Content */}
					<motion.div
						className={textOrder}
						variants={slideInLeft}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<h2
							id={headingId}
							className="text-3xl md:text-4xl font-bold mb-6 font-display text-text-primary"
						>
							<span className="text-text-primary">
								{headingPart1}
							</span>{' '}
							<span className={`text-${highlightColor}`}>
								{headingPart2}
							</span>
						</h2>
						{paragraphs.map((paragraph, index) => (
							<p
								key={index}
								className={`text-text-secondary text-lg leading-relaxed ${
									index < paragraphs.length - 1 || action
										? 'mb-6'
										: ''
								}`}
							>
								{paragraph}
							</p>
						))}
						{action && <div className="mt-8">{action}</div>}
					</motion.div>

					{/* Visual Content */}
					<motion.div
						className={visualOrder}
						variants={slideInRight}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						whileHover={{ rotate: hoverRotation }}
						transition={{ duration: 0.3 }}
					>
						<div
							className="aspect-square bg-background-elevated rounded-2xl overflow-hidden"
							role="img"
							aria-label={visualAriaLabel}
						>
							<div className="w-full h-full flex items-center justify-center text-text-muted">
								<motion.span
									className="text-8xl opacity-30"
									animate={{
										rotate: rotationValues,
										scale: [1, 1.05, 1],
									}}
									transition={{
										duration: 4,
										ease: 'easeInOut',
									}}
									aria-hidden="true"
								>
									{emoji}
								</motion.span>
							</div>
						</div>
					</motion.div>
				</div>
			</Container>
		</AnimatedSection>
	);
};

export default TwoColumnStorySection;
