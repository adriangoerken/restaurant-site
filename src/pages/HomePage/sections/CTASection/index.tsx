import { motion } from 'framer-motion';
import AnimatedSection from '../../../../components/ui/AnimatedSection';
import {
	fadeInUp,
	scaleIn,
	staggerContainer,
} from '../../../../utils/animations';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AnimatedButton from '../../../../components/ui/AnimatedButton';
import { Link } from 'react-router-dom';

const CTASection = () => {
	const { t } = useTranslation('homePage');

	return (
		<AnimatedSection
			className="py-20 px-4 bg-gradient-to-r from-background-secondary via-background-elevated to-background-secondary"
			aria-label={t('CTA.ariaLabel')}
		>
			<div className="container mx-auto text-center">
				<motion.h2
					id="cta-heading"
					className="flex justify-center gap-x-4 text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-display"
					variants={fadeInUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<span className="text-text-primary">
						{t('CTA.headingPart1')}
					</span>
					<span className="text-accent">{t('CTA.headingPart2')}</span>
					<span className="text-text-primary">
						{t('CTA.headingPart3')}
					</span>
				</motion.h2>
				<motion.p
					className="text-text-secondary text-xl max-w-2xl mx-auto mb-12"
					variants={fadeInUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{ delay: 0.2 }}
				>
					{t('CTA.subheading')}
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
						aria-label={t('CTA.reserveTableButtonAriaLabel')}
						type="button"
					>
						{t('CTA.reserveTableButton')}
					</AnimatedButton>
					<Link to="/menu">
						<AnimatedButton
							variant="outline"
							size="lg"
							aria-label={t('CTA.viewMenuButtonAriaLabel')}
							type="button"
						>
							{t('CTA.viewMenuButton')}
						</AnimatedButton>
					</Link>
					<motion.button
						className="text-success hover:text-success/80 font-semibold text-lg flex items-center gap-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-success focus:ring-offset-2 focus:ring-offset-background-elevated rounded-lg p-3"
						variants={scaleIn}
						whileHover={{ x: 5 }}
						whileTap={{ scale: 0.95 }}
					>
						{t('CTA.contactUsButton')}
						<motion.span
							animate={{ x: [0, 3, 0] }}
							transition={{
								duration: 1.5,
							}}
						>
							<ArrowRight size={20} />
						</motion.span>
					</motion.button>
				</motion.div>
			</div>
		</AnimatedSection>
	);
};

export default CTASection;
