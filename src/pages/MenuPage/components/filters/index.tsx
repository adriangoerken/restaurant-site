import { motion } from 'framer-motion';
import { useState } from 'react';
import { fadeInUp } from '../../../../utils/animations';
import Container from '../../../../components/layout/Container';
import MobileFilterButton from '../filters/MobileFilterButton';
import DesktopFilterSection from './DesktopFilterSection';
import MobileFilterModal from './MobileFilterModal';

export interface FilterState {
	selectedCategory: string;
	dietaryFilter: 'all' | 'vegetarian' | 'vegan';
	spiceFilter: 'all' | 'spicy' | 'non-spicy';
	allergenFilters: string[];
}

interface MenuFiltersProps {
	filters: FilterState;
	onFiltersChange: (filters: FilterState) => void;
	categories: string[];
	totalItems: number;
	filteredCount: number;
}

const MenuFilters: React.FC<MenuFiltersProps> = ({
	filters,
	onFiltersChange,
	categories,
	totalItems,
	filteredCount,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const updateFilter = (key: keyof FilterState, value: string | string[]) => {
		onFiltersChange({
			...filters,
			[key]: value,
		});
	};

	const handleAllergenToggle = (allergen: string) => {
		const currentFilters = filters.allergenFilters;
		const newFilters = currentFilters.includes(allergen)
			? currentFilters.filter((a) => a !== allergen)
			: [...currentFilters, allergen];

		updateFilter('allergenFilters', newFilters);
	};

	const clearAllFilters = () => {
		onFiltersChange({
			selectedCategory: 'all',
			dietaryFilter: 'all',
			spiceFilter: 'all',
			allergenFilters: [],
		});
		setIsModalOpen(false);
	};

	const hasActiveFilters =
		filters.selectedCategory !== 'all' ||
		filters.dietaryFilter !== 'all' ||
		filters.spiceFilter !== 'all' ||
		filters.allergenFilters.length > 0;

	const getActiveFiltersCount = () => {
		let count = 0;
		if (filters.selectedCategory !== 'all') count++;
		if (filters.dietaryFilter !== 'all') count++;
		if (filters.spiceFilter !== 'all') count++;
		if (filters.allergenFilters.length > 0) count++;
		return count;
	};

	const closeModal = () => setIsModalOpen(false);

	return (
		<>
			{/* Desktop Sticky Filter Bar */}
			<motion.div
				className="sticky top-20 z-40 bg-background-primary/95 backdrop-blur-sm border-b border-border-primary mb-8"
				variants={fadeInUp}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				<Container>
					<MobileFilterButton
						hasActiveFilters={hasActiveFilters}
						activeFiltersCount={getActiveFiltersCount()}
						onClearAll={clearAllFilters}
						onOpenModal={() => setIsModalOpen(true)}
						filteredCount={filteredCount}
						totalItems={totalItems}
					/>

					<DesktopFilterSection
						hasActiveFilters={hasActiveFilters}
						activeFiltersCount={getActiveFiltersCount()}
						onClearAll={clearAllFilters}
						filteredCount={filteredCount}
						totalItems={totalItems}
						filters={filters}
						onFiltersChange={onFiltersChange}
						categories={categories}
						onAllergenToggle={handleAllergenToggle}
					/>
				</Container>
			</motion.div>

			<MobileFilterModal
				isOpen={isModalOpen}
				onClose={closeModal}
				onClearAll={clearAllFilters}
				filters={filters}
				onFiltersChange={onFiltersChange}
				categories={categories}
				onAllergenToggle={handleAllergenToggle}
			/>
		</>
	);
};

export default MenuFilters;
