import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
	galleryCategories,
	type GalleryCategory,
} from '../../../data/galleryData';
import { fadeInUp } from '../../../utils/animations';

export interface CategoryFilterProps {
	selectedCategory: GalleryCategory;
	onCategoryChange: (category: GalleryCategory) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
	selectedCategory,
	onCategoryChange,
}) => {
	const { t } = useTranslation('galleryPage');

	return (
		<motion.div
			className="mb-12"
			variants={fadeInUp}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			<div
				className="flex flex-wrap justify-center gap-3"
				role="group"
				aria-label={t('gallery.filterLabel')}
			>
				{galleryCategories.map((category) => (
					<button
						key={category}
						onClick={() => onCategoryChange(category)}
						className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-primary ${
							selectedCategory === category
								? 'bg-accent text-text-inverse shadow-lg scale-105'
								: 'bg-background-secondary text-text-secondary hover:bg-background-secondary/80 hover:text-text-primary'
						}`}
						aria-pressed={selectedCategory === category}
						aria-label={`${t('gallery.filterLabel')}: ${t(
							`gallery.categories.${category}`
						)}`}
					>
						{t(`gallery.categories.${category}`)}
					</button>
				))}
			</div>
		</motion.div>
	);
};

export default CategoryFilter;
