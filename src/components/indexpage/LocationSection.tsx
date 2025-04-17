import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Container from '../Container';
import SectionHeading from '../ui/SectionHeading';

interface BusinessHours {
	days: string;
	hours: string;
}

interface LocationSectionProps {
	address?: string;
	hours?: BusinessHours[];
	buttonText?: string;
	onDirectionsClick?: () => void;
}

const defaultHours: BusinessHours[] = [
	{ days: 'Tuesday - Thursday', hours: '5:00 PM - 11:00 PM' },
	{ days: 'Friday - Saturday', hours: '5:00 PM - 1:00 AM' },
	{ days: 'Sunday - Monday', hours: 'Closed' },
];

const LocationSection: React.FC<LocationSectionProps> = ({
	address = 'Musterstraße 1, 12345 Musterstadt',
	hours = defaultHours,
	buttonText = 'Contact & Directions',
	onDirectionsClick,
}) => {
	const prefersReducedMotion = useReducedMotion();

	const sectionVariants = {
		hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: prefersReducedMotion ? 0 : 0.5 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: prefersReducedMotion ? 0 : 0.5 },
		},
	};

	return (
		<motion.section
			className="py-20 bg-black/30"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.5 }}
			variants={sectionVariants}
		>
			<Container>
				<div className="text-center">
					<SectionHeading color="rose">Find Us</SectionHeading>
					<motion.p className="text-xl mb-4" variants={itemVariants}>
						{address}
					</motion.p>
					<motion.div
						className="mb-8 text-center"
						variants={itemVariants}
					>
						{hours.map((schedule, index) => (
							<p key={index} className="text-lg">
								{schedule.days}: {schedule.hours}
							</p>
						))}
					</motion.div>
					<motion.button
						role="button"
						className="border border-rose-500 hover:bg-rose-500/10 px-8 py-3 rounded-lg transition relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-rose-500"
						variants={itemVariants}
						whileHover={{
							scale: prefersReducedMotion ? 1 : 1.05,
						}}
						whileTap={{
							scale: prefersReducedMotion ? 1 : 0.95,
						}}
						onClick={onDirectionsClick}
					>
						<span className="relative z-10">{buttonText}</span>
						{!prefersReducedMotion && (
							<motion.div
								className="absolute inset-0 bg-rose-500/10"
								initial={{ x: '-100%' }}
								whileHover={{ x: 0 }}
								transition={{ duration: 0.3 }}
								aria-hidden="true"
							/>
						)}
					</motion.button>
				</div>
			</Container>
		</motion.section>
	);
};

export default LocationSection;
