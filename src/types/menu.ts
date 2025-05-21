export type Allergen = {
	allergen_id: number;
	name?: string;
	details?: string | null;
};

export type DietarySymbol = {
	symbol_id: number;
	code?: string;
	description?: string;
	details?: string | null;
};

export type MenuItem = {
	item_id: number;
	name: string;
	description: string;
	price: string;
	price_info: string | null;
	notes: string | null;
	allergens: Allergen[];
	dietary_symbols: DietarySymbol[];
	image?: string;
};

export type MenuCategory = {
	category_id: number;
	category_name: string;
	category_description: string | null;
	menu_items: MenuItem[];
};
