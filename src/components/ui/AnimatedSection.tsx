import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

interface AnimatedSectionProps {
	children: React.ReactNode;
	className?: string;
	'aria-labelledby'?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
	children,
	className,
	'aria-labelledby': ariaLabelledBy,
}) => {
	return (
		<motion.section
			className={className}
			aria-labelledby={ariaLabelledBy}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: '-100px' }}
			variants={fadeIn}
		>
			{children}
		</motion.section>
	);
};

export default AnimatedSection;
