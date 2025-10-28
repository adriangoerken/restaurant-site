import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import Container from '../../../components/layout/Container';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import AnimatedSection from '../../../components/ui/AnimatedSection';
import AnimatedButton from '../../../components/ui/AnimatedButton';

const CTASection: React.FC = () => {
	const { t } = useTranslation('reservationPage');

	return (
		<AnimatedSection
			className="py-20 bg-gradient-to-br from-background-primary via-background-secondary to-background-primary"
			aria-labelledby="reservation-cta-heading"
		>
			<Container>
				<motion.div
					className="max-w-4xl mx-auto text-center"
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<motion.h2
						id="reservation-cta-heading"
						className="text-3xl md:text-5xl font-bold font-display mb-6 text-text-primary"
						variants={fadeInUp}
					>
						{t('ctaSection.heading')}
					</motion.h2>
					<motion.p
						className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto"
						variants={fadeInUp}
					>
						{t('ctaSection.description')}
					</motion.p>

					<motion.div
						className="flex flex-col sm:flex-row gap-4 justify-center items-center"
						variants={fadeInUp}
					>
						<Link to="/menu">
							<AnimatedButton
								variant="primary"
								size="lg"
								aria-label={t(
									'ctaSection.buttons.menu.ariaLabel'
								)}
							>
								{t('ctaSection.buttons.menu.label')}
							</AnimatedButton>
						</Link>
						<a href="tel:5551233663">
							<AnimatedButton
								variant="outline"
								size="lg"
								aria-label={t(
									'ctaSection.buttons.call.ariaLabel'
								)}
							>
								<Phone
									size={20}
									aria-hidden="true"
									className="inline-block"
								/>{' '}
								{t('ctaSection.buttons.call.label')}
							</AnimatedButton>
						</a>
					</motion.div>

					<motion.p
						className="mt-8 text-text-muted"
						variants={fadeInUp}
					>
						{t('ctaSection.note')}
					</motion.p>
				</motion.div>
			</Container>
		</AnimatedSection>
	);
};

export default CTASection;
