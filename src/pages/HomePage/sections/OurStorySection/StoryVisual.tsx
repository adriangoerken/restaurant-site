import { motion } from 'framer-motion';
import { slideInRight } from '../../../../utils/animations';

interface StoryVisualProps {
	emoji?: string;
	ariaLabel?: string;
}

const StoryVisual: React.FC<StoryVisualProps> = ({
	emoji = '👨‍🍳',
	ariaLabel = 'Chef illustration representing our culinary expertise',
}) => {
	return (
		<motion.div
			className="aspect-square bg-background-secondary rounded-2xl overflow-hidden"
			variants={slideInRight}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			whileHover={{ rotate: 2 }}
			transition={{ duration: 0.3 }}
			role="img"
			aria-label={ariaLabel}
		>
			<div className="w-full h-full flex items-center justify-center text-text-muted">
				<motion.span
					className="text-8xl opacity-30"
					animate={{
						rotate: [0, 5, -5, 0],
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
		</motion.div>
	);
};

export default StoryVisual;
