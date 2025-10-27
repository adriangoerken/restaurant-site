import { motion } from 'framer-motion';
import Container from '../../../components/layout/Container';
import AnimatedSection from '../../../components/ui/AnimatedSection';
import { fadeInUp } from '../../../utils/animations';
import { useTranslation } from 'react-i18next';
import AnimatedButton from '../../../components/ui/AnimatedButton';

const CTASection = () => {
	const { t } = useTranslation('eventsPage');

	return (
		<AnimatedSection
			className="py-20 bg-gradient-to-r from-background-primary via-background-secondary to-background-primary relative overflow-hidden"
			aria-labelledby="events-cta-heading"
		>
			{/* Decorative Background */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl" />
				<div className="absolute bottom-0 right-0 w-96 h-96 bg-highlight rounded-full blur-3xl" />
			</div>

			<Container>
				<div className="text-center relative z-10 max-w-4xl mx-auto">
					<motion.h2
						id="events-cta-heading"
						className="text-3xl md:text-5xl font-bold mb-6 font-display flex flex-wrap justify-center gap-x-2"
						variants={fadeInUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<span className="text-text-primary">
							{t('cta.headingPart1')}
						</span>
						<span className="text-highlight">
							{t('cta.headingPart2')}
						</span>
						<span className="text-accent">
							{t('cta.headingPart3')}
						</span>
					</motion.h2>

					<motion.p
						className="text-xl text-text-secondary mb-12 max-w-3xl mx-auto"
						variants={fadeInUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
					>
						{t('cta.subheading')}
					</motion.p>

					<motion.div
						className="flex flex-col sm:flex-row gap-4 justify-center"
						variants={fadeInUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ delay: 0.4 }}
					>
						<AnimatedButton
							variant="primary"
							size="lg"
							aria-label={t('cta.privateEventsButtonAriaLabel')}
							onClick={() => {
								// TODO: Navigate to private events inquiry form or contact page
								console.log('Navigate to private events form');
							}}
						>
							{t('cta.privateEventsButton')}
						</AnimatedButton>
						<AnimatedButton
							variant="outline"
							size="lg"
							aria-label={t('cta.contactUsButtonAriaLabel')}
							onClick={() => {
								// TODO: Navigate to contact page
								console.log('Navigate to contact page');
							}}
						>
							{t('cta.contactUsButton')}
						</AnimatedButton>
					</motion.div>
				</div>
			</Container>
		</AnimatedSection>
	);
};

export default CTASection;
