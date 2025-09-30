import { useState, useMemo, useCallback } from 'react';
import type { FilterState } from '../components/filters';
import {
	type MenuData,
	type MenuItem,
	type MenuCategory,
	MENU_CATEGORIES,
} from '../../../data/menuData';
import {
	applyMenuFilters,
	groupItemsByCategory,
} from '../../../utils/menuFilterUtils';

interface MenuItemWithCategory extends MenuItem {
	category: MenuCategory;
}

interface UseMenuFiltersReturn {
	filters: FilterState;
	setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
	filteredMenuData: Partial<MenuData>;
	availableCategories: MenuCategory[];
	categories: MenuCategory[];
	totalItems: number;
	filteredCount: number;
	clearAllFilters: () => void;
}

export const useMenuFilters = (menuData: MenuData): UseMenuFiltersReturn => {
	const [filters, setFilters] = useState<FilterState>({
		selectedCategory: 'all',
		dietaryFilter: 'all',
		spiceFilter: 'all',
		allergenFilters: [],
	});

	const clearAllFilters = useCallback(() => {
		setFilters({
			selectedCategory: 'all',
			dietaryFilter: 'all',
			spiceFilter: 'all',
			allergenFilters: [],
		});
	}, []);

	const categories = useMemo((): MenuCategory[] => [...MENU_CATEGORIES], []);

	const allItems = useMemo((): MenuItemWithCategory[] => {
		return Object.entries(menuData).flatMap(([category, items]) =>
			items.map((item) => ({
				...item,
				category: category as MenuCategory,
			}))
		);
	}, [menuData]);

	const filteredItems = useMemo((): MenuItemWithCategory[] => {
		return applyMenuFilters(allItems, filters);
	}, [allItems, filters]);

	const filteredMenuData = useMemo((): Partial<MenuData> => {
		return groupItemsByCategory(filteredItems);
	}, [filteredItems]);

	const availableCategories = useMemo((): MenuCategory[] => {
		return categories.filter(
			(category) => (filteredMenuData[category]?.length ?? 0) > 0
		);
	}, [categories, filteredMenuData]);

	return {
		filters,
		setFilters,
		filteredMenuData,
		availableCategories,
		categories,
		totalItems: allItems.length,
		filteredCount: filteredItems.length,
		clearAllFilters,
	};
};
