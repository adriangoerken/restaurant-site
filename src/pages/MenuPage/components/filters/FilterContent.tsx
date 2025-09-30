import { useTranslation } from 'react-i18next';
import CategoryFilter from './CategoryFilter';
import DietaryFilter from './DietaryFilter';
import SpiceFilter from './SpiceFilter';
import AllergenFilterSection from './AllergenFilterSection';
import type { FilterState } from '.';

export interface FilterContentProps {
	filters: FilterState;
	onFiltersChange: (filters: FilterState) => void;
	categories: string[];
	onAllergenToggle: (allergen: string) => void;
}

const FilterContent: React.FC<FilterContentProps> = ({
	filters,
	onFiltersChange,
	categories,
	onAllergenToggle,
}) => {
	const { t } = useTranslation('menuPage');

	const updateFilter = (key: keyof FilterState, value: string | string[]) => {
		onFiltersChange({
			...filters,
			[key]: value,
		});
	};

	return (
		<div className="space-y-6">
			<CategoryFilter
				selectedCategory={filters.selectedCategory}
				categories={categories}
				onCategoryChange={(category) =>
					updateFilter('selectedCategory', category)
				}
			/>

			<div className="grid gap-6 md:grid-cols-2">
				<DietaryFilter
					selectedDietary={filters.dietaryFilter}
					onDietaryChange={(dietary) =>
						updateFilter('dietaryFilter', dietary)
					}
				/>

				<SpiceFilter
					selectedSpice={filters.spiceFilter}
					onSpiceChange={(spice) =>
						updateFilter('spiceFilter', spice)
					}
				/>
			</div>

			<div>
				<fieldset>
					<legend className="text-sm font-semibold text-text-primary mb-3">
						{t('filters.allergenLabel')}
					</legend>
					<p className="text-xs text-text-muted mb-3">
						{t('filters.allergenDescription')}
					</p>
					<AllergenFilterSection
						selectedAllergens={filters.allergenFilters}
						onAllergenToggle={onAllergenToggle}
					/>
				</fieldset>
			</div>
		</div>
	);
};

export default FilterContent;
