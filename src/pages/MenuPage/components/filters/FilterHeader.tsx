import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FilterHeaderProps {
	isExpanded: boolean;
	onToggle: () => void;
	activeFiltersCount: number;
	hasActiveFilters: boolean;
	className?: string;
}

const FilterHeader: React.FC<FilterHeaderProps> = ({
	isExpanded,
	onToggle,
	activeFiltersCount,
	hasActiveFilters,
	className = '',
}) => {
	const { t } = useTranslation('menuPage');

	return (
		<button
			type="button"
			onClick={onToggle}
			className={`flex items-center gap-2 text-lg font-semibold text-text-primary hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-md ${className}`}
			aria-expanded={isExpanded}
			aria-controls="filters-content"
			aria-label={
				isExpanded
					? t('filters.hideFiltersAriaLabel')
					: t('filters.showFiltersAriaLabel')
			}
		>
			{t('filters.filtersLabel')}
			{isExpanded ? (
				<ChevronUp size={20} aria-hidden="true" />
			) : (
				<ChevronDown size={20} aria-hidden="true" />
			)}
			{hasActiveFilters && (
				<span
					className="bg-accent text-text-inverse text-xs px-2 py-0.5 rounded-full font-medium ml-1"
					role="status"
					aria-label={t('filters.activeFiltersCount', {
						count: activeFiltersCount,
					})}
				>
					{activeFiltersCount}
				</span>
			)}
		</button>
	);
};

export default FilterHeader;
