import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { fadeInUp } from '../../utils/animations';

const FooterHours = () => {
	const { t } = useTranslation('footer');

	return (
		<motion.div variants={fadeInUp}>
			<h3 className="text-lg font-semibold text-text-primary mb-6">
				{t('sections.hours')}
			</h3>
			<div className="space-y-2">
				<div className="flex justify-between gap-2">
					<span className="text-text-secondary flex-shrink-0">
						{t('hours.weekdays.label')}
					</span>
					<span className="text-text-primary font-medium text-right">
						{t('hours.weekdays.time')}
					</span>
				</div>
				<div className="flex justify-between gap-2">
					<span className="text-text-secondary flex-shrink-0">
						{t('hours.weekends.label')}
					</span>
					<span className="text-text-primary font-medium text-right">
						{t('hours.weekends.time')}
					</span>
				</div>
				<div className="flex justify-between gap-2">
					<span className="text-text-secondary flex-shrink-0">
						{t('hours.kitchen.label')}
					</span>
					<span className="text-text-primary font-medium text-right">
						{t('hours.kitchen.time')}
					</span>
				</div>
			</div>
		</motion.div>
	);
};

export default FooterHours;
