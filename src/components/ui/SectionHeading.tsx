import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

interface SectionHeadingProps {
	id: string;
	part1: string;
	part2: string;
	subheading?: string;
	highlightColor?: 'accent' | 'highlight' | 'success';
}

const highlightClasses = {
	accent: 'text-accent',
	highlight: 'text-highlight',
	success: 'text-success',
};

const SectionHeading: React.FC<SectionHeadingProps> = ({
	id,
	part1,
	part2,
	subheading,
	highlightColor = 'accent',
}) => {
	return (
		<>
			<motion.h2
				id={id}
				className="flex justify-center gap-x-4 text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 font-display"
				variants={fadeInUp}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				<span className="text-text-primary">{part1}</span>
				<span className={highlightClasses[highlightColor]}>
					{part2}
				</span>
			</motion.h2>

			{subheading && (
				<motion.p
					className="text-text-secondary text-center max-w-2xl mx-auto mb-12"
					variants={fadeInUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{ delay: 0.2 }}
				>
					{subheading}
				</motion.p>
			)}
		</>
	);
};

export default SectionHeading;
