import { motion } from 'framer-motion';
import Container from '../../../components/layout/Container';
import { fadeInUp } from '../../../utils/animations';
import { useTranslation } from 'react-i18next';
import AnimatedBackground from '../../../components/ui/AnimatedBackground';

const HeroSection = () => {
	const { t } = useTranslation('galleryPage');

	return (
		<section
			className="relative py-20 bg-gradient-to-br from-background-primary via-background-secondary to-background-primary"
			aria-labelledby="gallery-hero-heading"
		>
			<AnimatedBackground />
			<Container>
				<div className="text-center relative z-10">
					<motion.h1
						id="gallery-hero-heading"
						className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 text-text-primary flex justify-center gap-4 flex-wrap"
						variants={fadeInUp}
						initial="hidden"
						animate="visible"
					>
						<span className="text-text-primary">
							{t('hero.headingPart1')}
						</span>
						<span className="text-accent">
							{t('hero.headingPart2')}
						</span>
					</motion.h1>
					<motion.p
						className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed"
						variants={fadeInUp}
						initial="hidden"
						animate="visible"
						transition={{ delay: 0.2 }}
					>
						{t('hero.subheading')}
					</motion.p>
				</div>
			</Container>
		</section>
	);
};

export default HeroSection;
