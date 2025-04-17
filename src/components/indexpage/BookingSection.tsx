import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Container from '../Container';
import SectionHeading from '../ui/SectionHeading';

interface BookingSectionProps {
	title?: string;
	buttonText?: string;
	onBookingClick?: () => void;
}

const BookingSection: React.FC<BookingSectionProps> = ({
	title = 'Reserve Your Experience',
	buttonText = 'Book a Table',
	onBookingClick,
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
			className="py-20"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.5 }}
			variants={sectionVariants}
		>
			<Container>
				<div className="text-center">
					<SectionHeading color="rose">{title}</SectionHeading>
					<motion.button
						role="button"
						className="bg-rose-500 hover:bg-rose-600 text-white px-12 py-4 rounded-lg text-lg transition relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-rose-500"
						variants={itemVariants}
						whileHover={{
							scale: prefersReducedMotion ? 1 : 1.05,
						}}
						whileTap={{
							scale: prefersReducedMotion ? 1 : 0.95,
						}}
						onClick={onBookingClick}
					>
						<span className="relative z-10">{buttonText}</span>
						{!prefersReducedMotion && (
							<motion.div
								className="absolute inset-0 bg-rose-400"
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

export default BookingSection;
