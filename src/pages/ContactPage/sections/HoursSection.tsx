import { motion } from 'framer-motion';
import Container from '../../../components/layout/Container';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { useTranslation } from 'react-i18next';
import { Clock, Info } from 'lucide-react';
import AnimatedSection from '../../../components/ui/AnimatedSection';

const HoursSection: React.FC = () => {
	const { t } = useTranslation('contactPage');

	const hours = [
		{
			days: t('hours.weekdays.label'),
			time: t('hours.weekdays.time'),
		},
		{
			days: t('hours.weekends.label'),
			time: t('hours.weekends.time'),
		},
	];

	return (
		<AnimatedSection
			className="py-20 bg-background-secondary"
			aria-labelledby="hours-heading"
		>
			<Container>
				<motion.div
					className="max-w-2xl mx-auto"
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<motion.h2
						id="hours-heading"
						className="text-3xl md:text-5xl font-bold font-display text-center mb-12 text-text-primary"
						variants={fadeInUp}
					>
						{t('hours.heading')}
					</motion.h2>

					<motion.div
						className="bg-background-elevated border-2 border-border-primary rounded-lg p-8"
						variants={fadeInUp}
					>
						<div className="flex items-center justify-center gap-3 mb-8">
							<Clock
								className="w-8 h-8 text-accent"
								aria-hidden="true"
							/>
							<h3 className="text-2xl font-semibold text-text-primary">
								{t('hours.heading')}
							</h3>
						</div>

						<div className="space-y-4 mb-6">
							{hours.map((schedule, index) => (
								<div
									key={index}
									className="flex justify-between items-center p-4 bg-background-primary rounded-lg"
								>
									<span className="text-lg font-semibold text-text-primary">
										{schedule.days}
									</span>
									<span className="text-lg text-accent">
										{schedule.time}
									</span>
								</div>
							))}
						</div>

						<div className="space-y-3 pt-6 border-t-2 border-border-primary">
							<div className="flex items-start gap-3 text-text-secondary">
								<Info
									className="w-5 h-5 flex-shrink-0 mt-0.5"
									aria-hidden="true"
								/>
								<p className="text-sm">
									{t('hours.kitchen.note')}
								</p>
							</div>
							<div className="flex items-start gap-3 text-text-secondary">
								<Info
									className="w-5 h-5 flex-shrink-0 mt-0.5"
									aria-hidden="true"
								/>
								<p className="text-sm">
									{t('hours.reservations.note')}
								</p>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</Container>
		</AnimatedSection>
	);
};

export default HoursSection;
