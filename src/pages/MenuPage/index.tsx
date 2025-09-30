import Container from '../../components/layout/Container';
import MenuSection from './components/MenuSection';
import MenuCTA from './components/MenuCTA';
import MenuHero from './components/MenuHero';
import AllergenDisclaimer from './components/AllergenDisclaimer';
import MenuFilters from './components/filters';
import NoResultsMessage from './components/NoResultsMessage';
import { menuData } from '../../data/menuData';
import { useMenuFilters } from './hooks/useMenuFilters';

const MenuPage: React.FC = () => {
	const {
		filters,
		setFilters,
		filteredMenuData,
		availableCategories,
		categories,
		totalItems,
		filteredCount,
		clearAllFilters,
	} = useMenuFilters(menuData);

	const hasResults = filteredCount > 0;

	// Create a unique key that changes when filters change to force re-render
	const renderKey = `${filters.selectedCategory}-${filters.dietaryFilter}-${
		filters.spiceFilter
	}-${filters.allergenFilters.join('-')}`;

	return (
		<>
			<MenuHero />
			<section>
				{/* Filters */}
				<MenuFilters
					filters={filters}
					onFiltersChange={setFilters}
					categories={categories}
					totalItems={totalItems}
					filteredCount={filteredCount}
				/>
				<Container>
					{/* Menu Content */}
					{hasResults ? (
						<div key={renderKey}>
							{availableCategories.map((category) => (
								<MenuSection
									key={`${category}-${renderKey}`}
									category={category}
									items={filteredMenuData[category] || []}
								/>
							))}
						</div>
					) : (
						<NoResultsMessage
							filters={filters}
							onClearFilters={clearAllFilters}
						/>
					)}
				</Container>

				{/* Only show these sections if there are results */}
				{hasResults && (
					<>
						<AllergenDisclaimer />
						<MenuCTA />
					</>
				)}
			</section>
		</>
	);
};

export default MenuPage;
