import { useTranslation } from 'react-i18next';
import FilterButton from './FilterButton';

interface CategoryFilterProps {
	selectedCategory: string;
	categories: string[];
	onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
	selectedCategory,
	categories,
	onCategoryChange,
}) => {
	const { t } = useTranslation('menuPage');

	return (
		<fieldset className="mt-4">
			<legend className="text-sm font-semibold text-text-primary mb-3">
				{t('filters.categoryLabel')}
			</legend>
			<div
				className="flex flex-wrap gap-2"
				role="group"
				aria-label={t('filters.categoryLabel')}
			>
				<FilterButton
					variant="category"
					isSelected={selectedCategory === 'all'}
					onClick={() => onCategoryChange('all')}
					ariaLabel={t('filters.allCategoriesAriaLabel')}
				>
					{t('filters.allCategories')}
				</FilterButton>
				{categories.map((category) => (
					<FilterButton
						key={category}
						variant="category"
						isSelected={selectedCategory === category}
						onClick={() => onCategoryChange(category)}
						ariaLabel={t(`categories.${category}AriaLabel`)}
					>
						{t(`categories.${category}`)}
					</FilterButton>
				))}
			</div>
		</fieldset>
	);
};

export default CategoryFilter;
