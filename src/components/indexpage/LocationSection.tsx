import { motion } from 'framer-motion';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import AnimatedButton from '../ui/AnimatedButton';

type BusinessHours = {
	days: string;
	hours: string;
};

type LocationSectionProps = {
	address?: string;
	hours?: BusinessHours[];
	buttonText?: string;
	onDirectionsClick?: () => void;
};

const defaultHours: BusinessHours[] = [
	{ days: 'Tuesday - Thursday', hours: '5:00 PM - 11:00 PM' },
	{ days: 'Friday - Saturday', hours: '5:00 PM - 1:00 AM' },
	{ days: 'Sunday - Monday', hours: 'Closed' },
];

const LocationSection = ({
	address = 'Musterstraße 1, 12345 Musterstadt',
	hours = defaultHours,
	buttonText = 'Contact & Directions',
	onDirectionsClick,
}: LocationSectionProps) => {
	return (
		<Section background="dark">
			<div className="text-center">
				<SectionHeading color="rose">Find Us</SectionHeading>
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
							{schedule.days}: {schedule.hours}
						</p>
					))}
				</motion.div>
				<AnimatedButton variant="outline" onClick={onDirectionsClick}>
					{buttonText}
				</AnimatedButton>
			</div>
		</Section>
	);
};

export default LocationSection;
