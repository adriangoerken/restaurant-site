import { motion } from 'framer-motion';
import { fadeInUp } from '../../../utils/animations';
import { useTranslation } from 'react-i18next';
import AnimatedButton from '../../../components/ui/AnimatedButton';
import type { Event } from '../../../data/eventsData';
import AvailabilityBadge from './AvailabilityBadge';
import EventDetails from './EventDetails';
import FeaturedBadge from './FeaturedBadge';

export interface EventCardProps {
	event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
	const { t } = useTranslation('eventsPage');

	const titleId = `event-title-${event.id}`;
	const descriptionId = `event-description-${event.id}`;

	return (
		<motion.article
			className={`bg-background-elevated border rounded-xl p-6 hover:border-accent transition-all duration-300 flex flex-col h-full ${
				event.featured
					? 'border-highlight shadow-lg shadow-highlight/10'
					: 'border-border-primary'
			}`}
			variants={fadeInUp}
			whileHover={{
				scale: 1.02,
				transition: { duration: 0.2 },
			}}
			role="article"
			aria-labelledby={titleId}
			aria-describedby={descriptionId}
		>
			{/* Event Icon & Title */}
			<div className="flex items-start gap-4 mb-4">
				<motion.div
					className="text-accent flex-shrink-0 mt-1"
					whileHover={{ rotate: 5 }}
					transition={{ duration: 0.2 }}
					aria-hidden="true"
				>
					{event.icon}
				</motion.div>
				<div className="flex-grow">
					<h3
						id={titleId}
						className="text-2xl font-bold text-text-primary mb-2"
					>
						{event.title}
					</h3>
					<div className="flex flex-wrap gap-2">
						<AvailabilityBadge
							availability={event.availability}
							seatsAvailable={event.seatsAvailable}
						/>
						{event.featured && <FeaturedBadge />}
					</div>
				</div>
			</div>

			{/* Description */}
			<p
				id={descriptionId}
				className="text-text-secondary mb-6 leading-relaxed flex-grow"
			>
				{event.description}
			</p>

			{/* Event Details */}
			<div className="mb-6">
				<EventDetails
					date={event.date}
					time={event.time}
					location={event.location}
					price={event.price}
				/>
			</div>

			{/* Reserve Button */}
			<AnimatedButton
				variant={
					event.availability === 'soldOut' ? 'outline' : 'primary'
				}
				size="md"
				className="w-full"
				aria-label={t('events.reserveButtonAriaLabel', {
					eventName: event.title,
				})}
				disabled={event.availability === 'soldOut'}
			>
				{event.availability === 'soldOut'
					? t('events.soldOut')
					: t('events.reserveButton')}
			</AnimatedButton>
		</motion.article>
	);
};

export default EventCard;
