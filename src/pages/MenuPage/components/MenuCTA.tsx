import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { staggerContainer } from '../../../utils/animations';
import AnimatedButton from '../../../components/ui/AnimatedButton';
import Container from '../../../components/layout/Container';

const MenuCTA = () => {
	const { t } = useTranslation('menuPage');

	return (
		<section
			className="py-20 bg-gradient-to-r from-background-secondary via-background-elevated to-background-secondary"
			aria-labelledby="menu-cta-heading"
		>
			<Container>
				<div className="text-center">
					<motion.h2
						id="menu-cta-heading"
						className="text-3xl md:text-4xl font-bold text-text-primary mb-6 font-display"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						{t('cta.heading')}
					</motion.h2>
					<motion.p
						className="text-text-secondary text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						{t('cta.subheading')}
					</motion.p>
					<motion.div
						className="flex flex-col sm:flex-row gap-6 justify-center items-center"
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<AnimatedButton
							variant="primary"
							size="lg"
							aria-label={t('cta.reserveButtonAriaLabel')}
							type="button"
						>
							{t('cta.reserveButton')}
						</AnimatedButton>
						<AnimatedButton
							variant="outline"
							size="lg"
							aria-label={t('cta.takeawayButtonAriaLabel')}
							type="button"
						>
							{t('cta.takeawayButton')}
						</AnimatedButton>
					</motion.div>
				</div>
			</Container>
		</section>
	);
};

export default MenuCTA;
