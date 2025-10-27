import React from 'react';
import { useTranslation } from 'react-i18next';
import Badge from '../../../components/ui/Badge';

const FeaturedBadge: React.FC = () => {
	const { t } = useTranslation('eventsPage');

	return (
		<Badge variant="info" aria-label={t('events.featured')}>
			{t('events.featured')}
		</Badge>
	);
};

export default FeaturedBadge;
