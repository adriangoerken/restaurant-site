export interface MenuItem {
	id: string;
	nameKey: string;
	descriptionKey: string;
	price: string;
	isSignature?: boolean;
	allergens: string[];
	isVegetarian?: boolean;
	isVegan?: boolean;
	isSpicy?: boolean;
	image?: string;
}

// Define the valid categories as a const assertion
export const MENU_CATEGORIES = [
	'appetizers',
	'mains',
	'cocktails',
	'desserts',
] as const;

// Create the union type from the const assertion
export type MenuCategory = (typeof MENU_CATEGORIES)[number];

// Use Record to ensure type safety and completeness
export type MenuData = Record<MenuCategory, MenuItem[]>;

export const menuData: MenuData = {
	appetizers: [
		{
			id: 'korean-cauliflower',
			nameKey: 'dishes:appetizers.koreanCauliflower.name',
			descriptionKey: 'dishes:appetizers.koreanCauliflower.description',
			price: '$14',
			isSignature: false,
			allergens: ['gluten', 'sesame'],
			isVegetarian: true,
		},
		{
			id: 'miso-eggplant',
			nameKey: 'dishes:appetizers.misoEggplant.name',
			descriptionKey: 'dishes:appetizers.misoEggplant.description',
			price: '$16',
			isSignature: false,
			allergens: ['soy'],
			isVegetarian: true,
			isVegan: true,
		},
		{
			id: 'pork-belly-bao',
			nameKey: 'dishes:appetizers.porkBellyBao.name',
			descriptionKey: 'dishes:appetizers.porkBellyBao.description',
			price: '$18',
			isSignature: false,
			allergens: ['gluten', 'soy'],
		},
		{
			id: 'tuna-tartare-tacos',
			nameKey: 'dishes:appetizers.tunaTartareTacos.name',
			descriptionKey: 'dishes:appetizers.tunaTartareTacos.description',
			price: '$22',
			isSignature: true,
			allergens: ['fish', 'gluten', 'soy'],
		},
	],
	mains: [
		{
			id: 'black-garlic-ramen',
			nameKey: 'dishes:mains.blackGarlicRamen.name',
			descriptionKey: 'dishes:mains.blackGarlicRamen.description',
			price: '$24',
			isSignature: true,
			allergens: ['gluten', 'egg', 'soy'],
		},
		{
			id: 'miso-salmon',
			nameKey: 'dishes:mains.misoSalmon.name',
			descriptionKey: 'dishes:mains.misoSalmon.description',
			price: '$32',
			isSignature: true,
			allergens: ['fish', 'soy'],
		},
		{
			id: 'korean-bbq-ribs',
			nameKey: 'dishes:mains.koreanBbqRibs.name',
			descriptionKey: 'dishes:mains.koreanBbqRibs.description',
			price: '$38',
			isSignature: false,
			allergens: ['soy'],
		},
		{
			id: 'thai-basil-duck',
			nameKey: 'dishes:mains.thaiBasilDuck.name',
			descriptionKey: 'dishes:mains.thaiBasilDuck.description',
			price: '$34',
			isSignature: false,
			allergens: [],
		},
		{
			id: 'szechuan-mapo-tofu',
			nameKey: 'dishes:mains.szechuanMapoTofu.name',
			descriptionKey: 'dishes:mains.szechuanMapoTofu.description',
			price: '$26',
			isSignature: false,
			allergens: ['soy', 'gluten'],
			isVegetarian: true,
			isVegan: true,
			isSpicy: true,
		},
	],
	cocktails: [
		{
			id: 'yuzu-mule',
			nameKey: 'dishes:cocktails.yuzuMule.name',
			descriptionKey: 'dishes:cocktails.yuzuMule.description',
			price: '$15',
			isSignature: true,
			allergens: ['alcohol'],
		},
		{
			id: 'sake-sangria',
			nameKey: 'dishes:cocktails.sakeSangria.name',
			descriptionKey: 'dishes:cocktails.sakeSangria.description',
			price: '$14',
			isSignature: false,
			allergens: ['alcohol'],
		},
		{
			id: 'lychee-martini',
			nameKey: 'dishes:cocktails.lycheeMartini.name',
			descriptionKey: 'dishes:cocktails.lycheeMartini.description',
			price: '$16',
			isSignature: false,
			allergens: ['alcohol'],
		},
		{
			id: 'matcha-old-fashioned',
			nameKey: 'dishes:cocktails.matchaOldFashioned.name',
			descriptionKey: 'dishes:cocktails.matchaOldFashioned.description',
			price: '$17',
			isSignature: false,
			allergens: ['alcohol'],
		},
	],
	desserts: [
		{
			id: 'matcha-creme-brulee',
			nameKey: 'dishes:desserts.matchaCremeBrulee.name',
			descriptionKey: 'dishes:desserts.matchaCremeBrulee.description',
			price: '$12',
			isSignature: true,
			allergens: ['dairy', 'egg'],
		},
		{
			id: 'mochi-ice-cream',
			nameKey: 'dishes:desserts.mochiIceCream.name',
			descriptionKey: 'dishes:desserts.mochiIceCream.description',
			price: '$10',
			isSignature: false,
			allergens: ['dairy', 'gluten'],
		},
		{
			id: 'black-sesame-cheesecake',
			nameKey: 'dishes:desserts.blackSesameCheesecake.name',
			descriptionKey: 'dishes:desserts.blackSesameCheesecake.description',
			price: '$14',
			isSignature: false,
			allergens: ['dairy', 'gluten', 'sesame', 'egg'],
		},
	],
};
