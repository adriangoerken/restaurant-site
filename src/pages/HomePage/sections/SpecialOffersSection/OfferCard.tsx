import { motion } from 'framer-motion';
import { fadeInUp } from '../../../../utils/animations';
import { useTranslation } from 'react-i18next';

interface OfferCardProps {
	title: string;
	description: string;
	discount?: string;
	validUntil?: string;
	icon?: React.ReactNode;
}

const OfferCard: React.FC<OfferCardProps> = ({
	title,
	description,
	discount,
	validUntil,
	icon,
}) => {
	const { t } = useTranslation('specialOffers');
	const titleId = `offer-title-${title.replace(/\s+/g, '-').toLowerCase()}`;
	const descriptionId = `offer-description-${title
		.replace(/\s+/g, '-')
		.toLowerCase()}`;

	return (
		<motion.article
			className="bg-background-elevated border border-border-primary rounded-xl p-6 hover:border-accent transition-all duration-300 flex flex-col h-full focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2"
			variants={fadeInUp}
			whileHover={{
				scale: 1.03,
				borderColor: 'var(--color-accent)',
				transition: { duration: 0.2 },
			}}
			whileTap={{ scale: 0.98 }}
			role="article"
			aria-labelledby={titleId}
			aria-describedby={descriptionId}
			tabIndex={0}
		>
			<div className="flex items-start gap-4 flex-grow">
				{icon && (
					<motion.div
						className="text-accent flex-shrink-0"
						whileHover={{ rotate: 5 }}
						transition={{ duration: 0.2 }}
						aria-hidden="true"
					>
						{icon}
					</motion.div>
				)}
				<div className="flex flex-col h-full flex-grow">
					<h3
						id={titleId}
						className="text-xl font-semibold text-text-primary mb-2"
					>
						{title}
					</h3>
					<p
						id={descriptionId}
						className="text-text-secondary mb-4 leading-relaxed flex-grow"
					>
						{description}
					</p>
					<div className="mt-auto">
						{discount && (
							<motion.div
								className="text-highlight font-bold text-lg mb-2"
								initial={{ scale: 0.8, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								transition={{ delay: 0.2 }}
								role="status"
								aria-label={`Discount: ${discount}`}
							>
								{discount}
							</motion.div>
						)}
						{validUntil && (
							<p className="text-text-muted text-sm">
								<span className="sr-only">
									Offer valid until:
								</span>
								{t('validUntilPrefix')} {validUntil}
							</p>
						)}
					</div>
				</div>
			</div>
		</motion.article>
	);
};

export default OfferCard;
