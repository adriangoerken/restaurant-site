import { memo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { staggerContainer, fadeInUp } from '../../../utils/animations';
import MenuCard from './MenuCard';
import type { MenuItem, MenuCategory } from '../../../data/menuData';

export interface MenuSectionProps {
	category: MenuCategory;
	items: MenuItem[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ category, items }) => {
	const { t } = useTranslation('menuPage');
	const sectionId = `menu-section-${category}`;
	const sectionHeadingId = `heading-${category}`;

	// Early return if no items to render
	if (!items || items.length === 0) {
		return null;
	}

	// Get translated category name with fallback
	const getCategoryDisplayName = (categoryKey: MenuCategory): string => {
		try {
			return t(`categories.${categoryKey}`);
		} catch {
			// Fallback: capitalize first letter
			return categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1);
		}
	};

	const categoryDisplayName = getCategoryDisplayName(category);

	return (
		<section
			id={sectionId}
			className="py-16"
			aria-labelledby={sectionHeadingId}
			role="region"
		>
			<motion.h2
				id={sectionHeadingId}
				className="text-3xl md:text-4xl font-bold text-center mb-12 font-display text-text-primary"
				variants={fadeInUp}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: '-50px' }}
			>
				{categoryDisplayName}
			</motion.h2>

			<motion.div
				className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
				variants={staggerContainer}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: '-50px' }}
				role="list"
				aria-label={t('ariaLabels.menuItems', {
					category: categoryDisplayName,
					count: items.length,
				})}
			>
				{items.map((item) => (
					<div key={item.id} role="listitem">
						<MenuCard item={item} />
					</div>
				))}
			</motion.div>
		</section>
	);
};

export default memo(MenuSection);
