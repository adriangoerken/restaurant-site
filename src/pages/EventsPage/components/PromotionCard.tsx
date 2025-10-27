import { motion } from 'framer-motion';
import { fadeInUp } from '../../../utils/animations';
import { useTranslation } from 'react-i18next';
import type { Promotion } from '../../../data/eventsData';

export interface PromotionCardProps {
	promotion: Promotion;
}

const PromotionCard: React.FC<PromotionCardProps> = ({ promotion }) => {
	const { t } = useTranslation('eventsPage');

	const titleId = `promotion-title-${promotion.id}`;
	const descriptionId = `promotion-description-${promotion.id}`;

	return (
		<motion.article
			className="bg-background-elevated border border-border-primary rounded-xl p-6 hover:border-highlight transition-all duration-300 flex flex-col h-full focus-within:ring-2 focus-within:ring-highlight focus-within:ring-offset-2"
			variants={fadeInUp}
			whileHover={{
				scale: 1.03,
				borderColor: 'var(--color-highlight)',
				transition: { duration: 0.2 },
			}}
			role="article"
			aria-labelledby={titleId}
			aria-describedby={descriptionId}
		>
			<div className="flex items-start gap-4 flex-grow">
				{promotion.icon && (
					<motion.div
						className="text-highlight flex-shrink-0"
						whileHover={{ rotate: 5 }}
						transition={{ duration: 0.2 }}
						aria-hidden="true"
					>
						{promotion.icon}
					</motion.div>
				)}
				<div className="flex flex-col h-full flex-grow">
					<div className="flex items-start justify-between mb-2 gap-3">
						<h3
							id={titleId}
							className="text-xl font-semibold text-text-primary"
						>
							{promotion.title}
						</h3>
						{promotion.ongoing && (
							<span className="px-2 py-1 bg-success/20 text-success rounded-full text-xs font-medium whitespace-nowrap">
								{t('promotions.ongoing')}
							</span>
						)}
					</div>
					<p
						id={descriptionId}
						className="text-text-secondary mb-4 leading-relaxed flex-grow"
					>
						{promotion.description}
					</p>
					<div className="mt-auto space-y-2">
						<motion.div
							className="text-highlight font-bold text-lg"
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ delay: 0.2 }}
							role="status"
							aria-label={`Discount: ${promotion.discount}`}
						>
							{promotion.discount}
						</motion.div>
						<p className="text-text-muted text-sm">
							<span>
								{t('promotions.validUntilPrefix')}
								:&nbsp;
							</span>
							{promotion.validUntil}
						</p>
						{promotion.terms && (
							<p className="text-text-muted text-xs italic">
								{promotion.terms}
							</p>
						)}
					</div>
				</div>
			</div>
		</motion.article>
	);
};

export default PromotionCard;
