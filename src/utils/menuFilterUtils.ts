import type { MenuCategory, MenuData, MenuItem } from '../data/menuData';
import type { FilterState } from '../pages/MenuPage/components/filters/';

export interface MenuItemWithCategory extends MenuItem {
	category: MenuCategory;
}

export const applyMenuFilters = (
	items: MenuItemWithCategory[],
	filters: FilterState
): MenuItemWithCategory[] => {
	return items
		.filter(
			(item) =>
				filters.selectedCategory === 'all' ||
				item.category === filters.selectedCategory
		)
		.filter((item) => {
			if (filters.dietaryFilter === 'all') return true;
			switch (filters.dietaryFilter) {
				case 'vegetarian':
					return item.isVegetarian === true;
				case 'vegan':
					return item.isVegan === true;
				default:
					return true;
			}
		})
		.filter((item) => {
			if (filters.spiceFilter === 'all') return true;
			switch (filters.spiceFilter) {
				case 'spicy':
					return item.isSpicy === true;
				case 'non-spicy':
					return !item.isSpicy;
				default:
					return true;
			}
		})
		.filter((item) => {
			if (filters.allergenFilters.length === 0) return true;
			const itemAllergens = item.allergens || [];
			return !filters.allergenFilters.some((allergen) =>
				itemAllergens.includes(allergen)
			);
		});
};

export const groupItemsByCategory = (
	items: MenuItemWithCategory[]
): Partial<MenuData> => {
	return items.reduce((grouped, item) => {
		if (!grouped[item.category]) {
			grouped[item.category] = [];
		}
		grouped[item.category]!.push(item);
		return grouped;
	}, {} as Partial<MenuData>);
};
