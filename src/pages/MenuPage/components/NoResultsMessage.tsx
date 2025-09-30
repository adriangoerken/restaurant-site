import { motion } from 'framer-motion';
import { SearchX, ChefHat } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeInUp } from '../../../utils/animations';
import type { FilterState } from './filters';

interface NoResultsMessageProps {
	filters: FilterState;
	onClearFilters: () => void;
}

const NoResultsMessage: React.FC<NoResultsMessageProps> = ({
	filters,
	onClearFilters,
}) => {
	const { t } = useTranslation('menuPage');

	const hasActiveFilters =
		filters.selectedCategory !== 'all' ||
		filters.dietaryFilter !== 'all' ||
		filters.spiceFilter !== 'all' ||
		filters.allergenFilters.length > 0;

	return (
		<motion.div
			className="text-center py-16 px-4"
			variants={fadeInUp}
			initial="hidden"
			animate="visible"
			role="status"
			aria-live="polite"
		>
			<div className="flex justify-center items-center gap-3 mb-6">
				<SearchX
					size={48}
					className="text-text-muted"
					aria-hidden="true"
				/>
				<ChefHat size={48} className="text-accent" aria-hidden="true" />
			</div>

			<h2 className="text-2xl font-bold text-text-primary mb-4 font-display">
				{t('noResults.heading')}
			</h2>

			<p className="text-text-secondary text-lg mb-8 max-w-md mx-auto leading-relaxed">
				{hasActiveFilters
					? t('noResults.withFilters')
					: t('noResults.general')}
			</p>

			{hasActiveFilters && (
				<motion.button
					type="button"
					onClick={onClearFilters}
					className="bg-accent hover:bg-accent/90 text-text-inverse px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					aria-label={t('noResults.clearFiltersAriaLabel')}
				>
					{t('noResults.clearFilters')}
				</motion.button>
			)}
		</motion.div>
	);
};

export default NoResultsMessage;
