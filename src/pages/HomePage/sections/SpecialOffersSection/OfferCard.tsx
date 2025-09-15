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

	return (
		<motion.article
			className="bg-background-elevated border border-border-primary rounded-xl p-6 hover:border-accent transition-all duration-300"
			variants={fadeInUp}
			whileHover={{
				scale: 1.03,
				borderColor: 'var(--color-accent)',
				transition: { duration: 0.2 },
			}}
			whileTap={{ scale: 0.98 }}
		>
			<div className="flex items-start gap-4">
				{/* Icon */}
				{icon && (
					<motion.div
						className="text-accent flex-shrink-0"
						whileHover={{ rotate: 5 }}
						transition={{ duration: 0.2 }}
					>
						{icon}
					</motion.div>
				)}

				{/* Text content */}
				<div className="flex-1">
					<h3 className="text-xl font-semibold text-text-primary mb-2">
						{title}
					</h3>
					<p className="text-text-secondary mb-4 leading-relaxed">
						{description}
					</p>
					{discount && (
						<motion.div
							className="text-highlight font-bold text-lg mb-2"
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ delay: 0.2 }}
						>
							{discount}
						</motion.div>
					)}
					{validUntil && (
						<p className="text-text-muted text-sm">
							{t('validUntilPrefix')} {validUntil}
						</p>
					)}
				</div>
			</div>
		</motion.article>
	);
};

export default OfferCard;
