import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Leaf, Vegan, Flame } from 'lucide-react';
import { fadeInUp } from '../../../utils/animations';
import AllergenInfo from './AllergenInfo';
import type { MenuItem } from '../../../data/menuData';

interface MenuCardProps {
	item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
	const { t } = useTranslation(['menuPage']);

	const { allergens } = item;

	const titleId = `dish-name-${item.id}`;
	const descriptionId = `dish-description-${item.id}`;

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
			role="listitem"
			aria-labelledby={titleId}
			aria-describedby={descriptionId}
			tabIndex={0}
		>
			{item.image && (
				<div className="aspect-video bg-background-secondary overflow-hidden">
					<motion.img
						src={item.image}
						alt={t(item.nameKey)}
						className="w-full h-full object-cover"
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.3 }}
						loading="lazy"
					/>
				</div>
			)}
			<div className="p-6 flex flex-col flex-grow">
				<div className="flex justify-between items-start mb-2">
					<h3
						id={titleId}
						className="text-xl font-semibold text-text-primary pr-4"
					>
						{t(item.nameKey)}
					</h3>
					<div className="text-accent font-bold text-lg whitespace-nowrap">
						{item.price}
					</div>
				</div>

				<div className="flex items-center space-x-3 mb-3 text-text-muted">
					{item.isVegan && (
						<div
							className="flex items-center gap-1"
							title={t('badges.vegan')}
						>
							<Vegan size={16} className="text-success" />
							<span className="text-xs font-medium">
								{t('badges.vegan')}
							</span>
						</div>
					)}
					{!item.isVegan && item.isVegetarian && (
						<div
							className="flex items-center gap-1"
							title={t('badges.vegetarian')}
						>
							<Leaf size={16} className="text-success" />
							<span className="text-xs font-medium">
								{t('badges.vegetarian')}
							</span>
						</div>
					)}
					{item.isSpicy && (
						<div
							className="flex items-center gap-1"
							title={t('badges.spicy')}
						>
							<Flame size={16} className="text-red-500" />
							<span className="text-xs font-medium">
								{t('badges.spicy')}
							</span>
						</div>
					)}
				</div>

				<p
					id={descriptionId}
					className="text-text-secondary mb-4 leading-relaxed flex-grow"
				>
					{t(item.descriptionKey)}
				</p>

				{item.isSignature && (
					<div className="mb-4">
						<span className="bg-highlight/10 text-highlight px-3 py-1 rounded-full text-xs font-semibold">
							{t('badges.signature')}
						</span>
					</div>
				)}

				{allergens && allergens.length > 0 && (
					<AllergenInfo allergens={allergens} />
				)}
			</div>
		</motion.article>
	);
};

export default MenuCard;
