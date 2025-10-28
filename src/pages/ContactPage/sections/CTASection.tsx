import { motion } from 'framer-motion';
import Container from '../../../components/layout/Container';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { useTranslation } from 'react-i18next';
import AnimatedButton from '../../../components/ui/AnimatedButton';
import AnimatedBackground from '../../../components/ui/AnimatedBackground';
import { Calendar } from 'lucide-react';

const CTASection: React.FC = () => {
	const { t } = useTranslation('contactPage');

	const handleReservation = () => {
		// Mock reservation action - in real app would navigate to reservation page
		console.log('Navigating to reservations...');
		alert('Reservation system will be implemented in the backend phase!');
	};

	return (
		<section
			className="relative py-20 bg-gradient-to-br from-background-primary via-background-secondary to-background-primary overflow-hidden"
			aria-labelledby="contact-cta-heading"
		>
			<AnimatedBackground />
			<Container>
				<motion.div
					className="text-center relative z-10 max-w-4xl mx-auto"
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<motion.h2
						id="contact-cta-heading"
						className="text-3xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-text-primary"
						variants={fadeInUp}
					>
						{t('cta.heading')}
					</motion.h2>
					<motion.p
						className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed"
						variants={fadeInUp}
					>
						{t('cta.subheading')}
					</motion.p>
					<motion.div variants={fadeInUp}>
						<AnimatedButton
							variant="primary"
							size="lg"
							onClick={handleReservation}
							aria-label={t('cta.button.ariaLabel')}
						>
							<Calendar className="w-5 h-5" aria-hidden="true" />
							{t('cta.button.reserve')}
						</AnimatedButton>
					</motion.div>
				</motion.div>
			</Container>
		</section>
	);
};

export default CTASection;
