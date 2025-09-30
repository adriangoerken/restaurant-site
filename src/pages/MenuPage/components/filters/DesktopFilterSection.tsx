import { useState } from 'react';
import FilterHeader from './FilterHeader';
import FilterStats from './FilterStats';
import CollapsibleFilterContent from './CollapsibleFilterContent';
import { type FilterContentProps } from './FilterContent';

export interface DesktopFilterSectionProps extends FilterContentProps {
	hasActiveFilters: boolean;
	activeFiltersCount: number;
	onClearAll: () => void;
	filteredCount: number;
	totalItems: number;
}

const DesktopFilterSection: React.FC<DesktopFilterSectionProps> = ({
	hasActiveFilters,
	activeFiltersCount,
	onClearAll,
	filteredCount,
	totalItems,
	filters,
	onFiltersChange,
	categories,
	onAllergenToggle,
}) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleFilters = () => setIsExpanded(!isExpanded);

	return (
		<div className="hidden md:block py-4">
			<div className="flex items-center justify-between gap-4">
				<FilterHeader
					isExpanded={isExpanded}
					onToggle={toggleFilters}
					activeFiltersCount={activeFiltersCount}
					hasActiveFilters={hasActiveFilters}
				/>
				<FilterStats
					filteredCount={filteredCount}
					totalItems={totalItems}
					hasActiveFilters={hasActiveFilters}
					onClearAll={onClearAll}
				/>
			</div>

			<CollapsibleFilterContent
				isExpanded={isExpanded}
				contentId="desktop-filters-content"
				filters={filters}
				onFiltersChange={onFiltersChange}
				categories={categories}
				onAllergenToggle={onAllergenToggle}
			/>
		</div>
	);
};

export default DesktopFilterSection;
