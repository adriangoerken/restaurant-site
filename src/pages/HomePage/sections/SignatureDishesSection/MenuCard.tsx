import { motion } from 'framer-motion';
import React from 'react';
import { fadeInUp } from '../../../../utils/animations';
import { useTranslation } from 'react-i18next';

export interface MenuCardProps {
	name: string;
	description: string;
	price: string;
	image?: string;
	isSignature?: boolean;
}

const MenuCard: React.FC<MenuCardProps> = ({
	name,
	description,
	price,
	image,
	isSignature,
}) => {
	const { t } = useTranslation('signatureDishes');
	const titleId = `dish-name-${name.replace(/\s+/g, '-').toLowerCase()}`;
	const descriptionId = `dish-description-${name
		.replace(/\s+/g, '-')
		.toLowerCase()}`;
	const priceId = `dish-price-${name.replace(/\s+/g, '-').toLowerCase()}`;

	return (
		<motion.article
			className="bg-background-elevated border border-border-primary rounded-xl overflow-hidden hover:border-accent transition-all duration-300 flex flex-col h-full focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2"
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
			<motion.div
				className="aspect-video bg-background-secondary relative overflow-hidden"
				whileHover={{ scale: 1.05 }}
				transition={{ duration: 0.3 }}
			>
				{image ? (
					<img
						src={image}
						alt={t('imageAlt', { dishName: name })}
						className="w-full h-full object-cover"
						loading="lazy"
					/>
				) : (
					<div
						className="w-full h-full flex items-center justify-center text-text-muted"
						aria-label={`Placeholder image for ${name}`}
						role="img"
					>
						<motion.span
							className="text-6xl opacity-30"
							animate={{ rotate: [0, 5, -5, 0] }}
							transition={{ duration: 2 }}
							aria-hidden="true"
						>
							🍜
						</motion.span>
					</div>
				)}
				{isSignature && (
					<motion.div
						className="absolute top-4 left-4 bg-highlight text-text-inverse px-3 py-1 rounded-full text-sm font-semibold"
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ delay: 0.3, type: 'spring' }}
						role="status"
						aria-label={`${name} is a signature dish`}
					>
						{t('signatureBadge')}
					</motion.div>
				)}
			</motion.div>
			<div className="p-6 flex flex-col flex-grow">
				<h3
					id={titleId}
					className="text-xl font-semibold text-text-primary mb-2"
				>
					{name}
				</h3>
				<p
					id={descriptionId}
					className="text-text-secondary mb-4 leading-relaxed flex-grow"
				>
					{description}
				</p>
				<motion.div
					className="text-accent font-bold text-lg mt-auto"
					whileHover={{ scale: 1.1 }}
					transition={{ duration: 0.2 }}
					role="status"
					aria-label={`Price: ${price}`}
					id={priceId}
				>
					{price}
				</motion.div>
			</div>
		</motion.article>
	);
};

export default MenuCard;
