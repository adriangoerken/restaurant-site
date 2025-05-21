import { motion } from 'framer-motion';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import AnimatedButton from '../ui/AnimatedButton';
import { useTranslation } from 'react-i18next';

type BusinessHours = {
	days: string;
	hours: string;
};

type LocationSectionProps = {
	address?: string;
};

const LocationSection = ({
	address = 'Musterstraße 1, 12345 Musterstadt',
}: LocationSectionProps) => {
	const { t } = useTranslation();

	const hours: BusinessHours[] = [
		{ days: t('location.hours1.days'), hours: t('location.hours1.time') },
		{ days: t('location.hours2.days'), hours: t('location.hours2.time') },
		{ days: t('location.hours3.days'), hours: t('location.hours3.time') },
	];

	return (
		<Section background="dark">
			<div className="text-center">
				<SectionHeading color="rose">
					{t('location.title')}
				</SectionHeading>{' '}
				<motion.p
					className="text-xl mb-4"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.5 }}
				>
					{address}
				</motion.p>
				<motion.div
					className="mb-8 text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.5 }}
				>
					{hours.map((schedule, index) => (
						<p key={index} className="text-lg">
							{schedule.days}: {schedule.hours}{' '}
						</p>
					))}
				</motion.div>
				<AnimatedButton variant="outline">
					{t('location.button')}
				</AnimatedButton>
			</div>
		</Section>
	);
};

export default LocationSection;
