import { Filter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export interface MobileFilterButtonProps {
	hasActiveFilters: boolean;
	activeFiltersCount: number;
	onClearAll: () => void;
	onOpenModal: () => void;
	filteredCount: number;
	totalItems: number;
}

const MobileFilterButton: React.FC<MobileFilterButtonProps> = ({
	hasActiveFilters,
	activeFiltersCount,
	onClearAll,
	onOpenModal,
	filteredCount,
	totalItems,
}) => {
	const { t } = useTranslation('menuPage');

	return (
		<div className="py-3 md:hidden">
			<div className="flex items-center justify-between gap-4">
				<button
					type="button"
					onClick={onOpenModal}
					className="flex items-center gap-2 bg-background-elevated hover:bg-background-secondary px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
					aria-label={t('filters.openFiltersAriaLabel')}
				>
					<Filter size={16} aria-hidden="true" />
					<span className="text-sm font-medium text-text-primary">
						{t('filters.filtersLabel')}
					</span>
					{hasActiveFilters && (
						<span className="bg-accent text-text-inverse text-xs px-2 py-0.5 rounded-full font-medium">
							{activeFiltersCount}
						</span>
					)}
				</button>

				<div className="flex items-center gap-3">
					<div
						className="text-sm text-text-muted"
						role="status"
						aria-live="polite"
					>
						{filteredCount === totalItems
							? t('filters.showingAll', {
									count: totalItems,
							  })
							: t('filters.showingFiltered', {
									filtered: filteredCount,
									total: totalItems,
							  })}
					</div>
					{hasActiveFilters && (
						<button
							type="button"
							onClick={onClearAll}
							className="text-xs text-accent hover:text-accent/80 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-md px-2 py-1"
							aria-label={t('filters.clearAllAriaLabel')}
						>
							{t('filters.clearAll')}
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default MobileFilterButton;
