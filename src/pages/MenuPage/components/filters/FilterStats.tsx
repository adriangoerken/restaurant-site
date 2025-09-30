import { useTranslation } from 'react-i18next';

interface FilterStatsProps {
	filteredCount: number;
	totalItems: number;
	hasActiveFilters: boolean;
	onClearAll: () => void;
	className?: string;
}

const FilterStats: React.FC<FilterStatsProps> = ({
	filteredCount,
	totalItems,
	hasActiveFilters,
	onClearAll,
	className = '',
}) => {
	const { t } = useTranslation('menuPage');

	return (
		<div className={`flex items-center gap-4 ${className}`}>
			<div
				className="text-sm text-text-muted"
				role="status"
				aria-live="polite"
			>
				{filteredCount === totalItems
					? t('filters.showingAll', { count: totalItems })
					: t('filters.showingFiltered', {
							filtered: filteredCount,
							total: totalItems,
					  })}
			</div>
			{hasActiveFilters && (
				<button
					type="button"
					onClick={onClearAll}
					className="text-sm text-accent hover:text-accent/80 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-md px-3 py-1"
					aria-label={t('filters.clearAllAriaLabel')}
				>
					{t('filters.clearAll')}
				</button>
			)}
		</div>
	);
};

export default FilterStats;
