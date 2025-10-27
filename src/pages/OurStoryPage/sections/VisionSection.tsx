import { motion } from 'framer-motion';
import Container from '../../../components/layout/Container';
import AnimatedSection from '../../../components/ui/AnimatedSection';
import { fadeInUp } from '../../../utils/animations';
import { useTranslation } from 'react-i18next';

const VisionSection = () => {
	const { t } = useTranslation('ourStoryPage');

	return (
		<AnimatedSection
			className="py-20 bg-gradient-to-r from-background-secondary via-background-elevated to-background-secondary"
			aria-labelledby="vision-heading"
		>
			<Container>
				<div className="max-w-4xl mx-auto text-center">
					<motion.h2
						id="vision-heading"
						className="text-3xl md:text-4xl font-bold mb-6 font-display text-text-primary flex flex-wrap justify-center gap-x-2"
						variants={fadeInUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<span className="text-text-primary">
							{t('vision.headingPart1')}
						</span>
						<span className="text-accent">
							{t('vision.headingPart2')}
						</span>
					</motion.h2>
					<motion.p
						className="text-text-secondary text-lg leading-relaxed mb-6"
						variants={fadeInUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
					>
						{t('vision.paragraph1')}
					</motion.p>
					<motion.p
						className="text-text-secondary text-lg leading-relaxed"
						variants={fadeInUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ delay: 0.3 }}
					>
						{t('vision.paragraph2')}
					</motion.p>
				</div>
			</Container>
		</AnimatedSection>
	);
};

export default VisionSection;
