import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export interface EventDetailsProps {
	date: string;
	time: string;
	location: string;
	price: string;
}

const EventDetails: React.FC<EventDetailsProps> = ({
	date,
	time,
	location,
	price,
}) => {
	const { t } = useTranslation('eventsPage');

	const eventDate = new Date(date);
	const formattedDate = eventDate.toLocaleDateString('en-US', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	return (
		<div
			className="space-y-3"
			role="list"
			aria-label={t('events.detailsLabel')}
		>
			<div
				className="flex items-center gap-3 text-text-secondary"
				role="listitem"
			>
				<Calendar
					size={20}
					className="text-accent flex-shrink-0"
					aria-hidden="true"
				/>
				<div>
					<span className="font-medium text-text-primary">
						{t('events.datePrefix')}:
					</span>{' '}
					<time dateTime={date}>{formattedDate}</time>
				</div>
			</div>

			<div
				className="flex items-center gap-3 text-text-secondary"
				role="listitem"
			>
				<Clock
					size={20}
					className="text-accent flex-shrink-0"
					aria-hidden="true"
				/>
				<div>
					<span className="font-medium text-text-primary">
						{t('events.timePrefix')}:
					</span>{' '}
					<time>{time}</time>
				</div>
			</div>

			<div
				className="flex items-center gap-3 text-text-secondary"
				role="listitem"
			>
				<MapPin
					size={20}
					className="text-accent flex-shrink-0"
					aria-hidden="true"
				/>
				<div>
					<span className="font-medium text-text-primary">
						{t('events.locationPrefix')}:
					</span>{' '}
					{t(`events.${location}`)}
				</div>
			</div>

			<div
				className="flex items-center gap-3 text-text-secondary"
				role="listitem"
			>
				<Users
					size={20}
					className="text-accent flex-shrink-0"
					aria-hidden="true"
				/>
				<div>
					<span className="font-medium text-text-primary">
						{t('events.pricePrefix')}:
					</span>{' '}
					<span className="text-highlight font-semibold">
						{price}
					</span>
				</div>
			</div>
		</div>
	);
};

export default EventDetails;
