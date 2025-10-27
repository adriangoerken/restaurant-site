import React from 'react';
import { useTranslation } from 'react-i18next';
import Badge from '../../../components/ui/Badge';

export interface AvailabilityBadgeProps {
	availability: 'available' | 'limited' | 'soldOut';
	seatsAvailable?: number;
}

const AvailabilityBadge: React.FC<AvailabilityBadgeProps> = ({
	availability,
	seatsAvailable,
}) => {
	const { t } = useTranslation('eventsPage');

	const variantMap = {
		soldOut: 'default' as const,
		limited: 'warning' as const,
		available: 'success' as const,
	};

	const labelMap = {
		soldOut: t('events.soldOut'),
		limited: t('events.limitedSeats'),
		available: t('events.availableSeats', { count: seatsAvailable }),
	};

	return (
		<Badge
			variant={variantMap[availability]}
			aria-label={labelMap[availability]}
		>
			{labelMap[availability]}
		</Badge>
	);
};

export default AvailabilityBadge;
