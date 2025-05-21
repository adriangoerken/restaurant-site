import Container from '../components/Container';
import SectionHeading from '../components/ui/SectionHeading';
import { t } from 'i18next';
import DietarySymbolsLegend from '../components/MenuPage/DietarySymbolsLegend';
import MenuCategory from '../components/MenuPage/MenuCategory';

const data = [
	{
		category_id: 1,
		category_name: 'menu:categories.1.name',
		category_description: null,
		menu_items: [
			{
				item_id: 1,
				name: 'menu:items.1.name',
				description: 'menu:items.1.description',
				price: '16.00',
				price_info: 'menu:items.1.priceInfo',
				notes: 'menu:items.1.notes',
				allergens: [
					{ allergen_id: 1 },
					{ allergen_id: 2 },
					{ allergen_id: 3 },
					{
						allergen_id: 9,
					},
				],
				dietary_symbols: [
					{
						symbol_id: 4,
					},
				],
				image: 'https://i.imgur.com/pRRUbBs.jpeg',
			},
			{
				item_id: 2,
				name: 'menu:items.2.name',
				description: 'menu:items.2.description',
				price: '18.00',
				price_info: 'menu:items.2.priceInfo',
				notes: 'menu:items.2.notes',
				allergens: [
					{ allergen_id: 2 },
					{
						allergen_id: 1,
					},
					{
						allergen_id: 9,
					},
				],
				dietary_symbols: [
					{
						symbol_id: 4,
					},
				],
				image: 'https://i.imgur.com/iklvGFY.jpeg',
			},
		],
	},
	{
		category_id: 2,
		category_name: 'menu:categories.2.name',
		category_description: null,
		menu_items: [
			{
				item_id: 6,
				name: 'menu:items.6.name',
				description: 'menu:items.6.description',
				price: '19.00',
				price_info: null,
				notes: 'menu:items.6.notes',
				allergens: [
					{ allergen_id: 5 },
					{ allergen_id: 4 },
					{
						allergen_id: 1,
					},
					{
						allergen_id: 2,
					},
					{ allergen_id: 3 },
				],
				dietary_symbols: [
					{
						symbol_id: 4,
					},
				],
				image: 'https://i.imgur.com/szITcrX.jpeg',
			},
			{
				item_id: 7,
				name: 'menu:items.7.name',
				description: 'menu:items.7.description',
				price: '22.00',
				price_info: null,
				notes: null,
				allergens: [
					{ allergen_id: 4 },
					{ allergen_id: 5 },
					{ allergen_id: 2 },
					{ allergen_id: 3 },
				],
				dietary_symbols: [],
				image: 'https://i.imgur.com/pRRUbBs.jpeg',
			},
		],
	},
	{
		category_id: 3,
		category_name: 'menu:categories.3.name',
		category_description: null,
		menu_items: [
			{
				item_id: 10,
				name: 'menu:items.10.name',
				description: 'menu:items.10.description',
				price: '28.00',
				price_info: null,
				notes: 'menu:items.10.notes',
				allergens: [{ allergen_id: 4 }, { allergen_id: 2 }],
				dietary_symbols: [
					{
						symbol_id: 3,
					},
				],
				image: 'https://i.imgur.com/pRRUbBs.jpeg',
			},
			{
				item_id: 11,
				name: 'menu:items.11.name',
				description: 'menu:items.11.description',
				price: '26.00',
				price_info: null,
				notes: null,
				allergens: [
					{
						allergen_id: 2,
					},
					{
						allergen_id: 9,
					},
					{
						allergen_id: 1,
					},
				],
				dietary_symbols: [
					{
						symbol_id: 4,
					},
				],
				image: 'https://i.imgur.com/pRRUbBs.jpeg',
			},
		],
	},
	{
		category_id: 4,
		category_name: 'menu:categories.4.name',
		category_description: null,
		menu_items: [
			{
				item_id: 14,
				name: 'menu:items.14.name',
				description: 'menu:items.14.description',
				price: '19.00',
				price_info: null,
				notes: 'menu:items.14.notes',
				allergens: [
					{ allergen_id: 1 },
					{
						allergen_id: 2,
					},
					{ allergen_id: 3 },
				],
				dietary_symbols: [],
				image: 'https://i.imgur.com/pRRUbBs.jpeg',
			},
			{
				item_id: 15,
				name: 'menu:items.15.name',
				description: 'menu:items.15.description',
				price: '18.00',
				price_info: null,
				notes: 'menu:items.15.notes',
				allergens: [
					{ allergen_id: 1 },
					{
						allergen_id: 2,
					},
					{ allergen_id: 3 },
					{ allergen_id: 9 },
				],
				dietary_symbols: [
					{
						symbol_id: 4,
					},
					{
						symbol_id: 1,
					},
				],
				image: 'https://i.imgur.com/pRRUbBs.jpeg',
			},
		],
	},
	{
		category_id: 5,
		category_name: 'menu:categories.5.name',
		category_description: null,
		menu_items: [
			{
				item_id: 18,
				name: 'menu:items.18.name',
				description: 'menu:items.18.description',
				price: '6.00',
				price_info: null,
				notes: 'menu:items.18.notes',
				allergens: [{ allergen_id: 2 }],
				dietary_symbols: [
					{
						symbol_id: 1,
					},
					{
						symbol_id: 2,
					},
					{
						symbol_id: 3,
					},
					{
						symbol_id: 6,
					},
				],
				image: 'https://i.imgur.com/pRRUbBs.jpeg',
			},
			{
				item_id: 19,
				name: 'menu:items.19.name',
				description: 'menu:items.19.description',
				price: '7.00',
				price_info: null,
				notes: null,
				allergens: [
					{ allergen_id: 9 },
					{
						allergen_id: 2,
					},
				],
				dietary_symbols: [
					{
						symbol_id: 1,
					},
					{
						symbol_id: 2,
					},
					{
						symbol_id: 3,
					},
					{
						symbol_id: 6,
					},
				],
				image: 'https://i.imgur.com/pRRUbBs.jpeg',
			},
		],
	},
	{
		category_id: 6,
		category_name: 'menu:categories.6.name',
		category_description: null,
		menu_items: [
			{
				item_id: 22,
				name: 'menu:items.22.name',
				description: 'menu:items.22.description',
				price: '12.00',
				price_info: null,
				notes: null,
				allergens: [
					{ allergen_id: 1 },
					{ allergen_id: 3 },
					{
						allergen_id: 6,
					},
				],
				dietary_symbols: [
					{
						symbol_id: 1,
					},
				],
				image: 'https://i.imgur.com/pRRUbBs.jpeg',
			},
			{
				item_id: 23,
				name: 'menu:items.23.name',
				description: 'menu:items.23.description',
				price: '11.00',
				price_info: null,
				notes: null,
				allergens: [
					{ allergen_id: 6 },
					{ allergen_id: 1 },
					{ allergen_id: 3 },
				],
				dietary_symbols: [
					{
						symbol_id: 1,
					},
				],
				image: 'https://i.imgur.com/pRRUbBs.jpeg',
			},
		],
	},
	{
		category_id: 7,
		category_name: 'menu:categories.7.name',
		category_description: 'menu:categories.7.description',
		menu_items: [
			{
				item_id: 26,
				name: 'menu:items.26.name',
				description: 'menu:items.26.description',
				price: '16.00',
				price_info: null,
				notes: 'menu:items.26.notes',
				allergens: [
					{ allergen_id: 100 },
					{
						allergen_id: 7,
					},
					{
						allergen_id: 1,
					},
				],
				dietary_symbols: [],
				image: 'https://i.imgur.com/pRRUbBs.jpeg',
			},
			{
				item_id: 27,
				name: 'menu:items.27.name',
				description: 'menu:items.27.description',
				price: '15.00',
				price_info: null,
				notes: 'menu:items.27.notes',
				allergens: [{ allergen_id: 100 }, { allergen_id: 14 }],
				dietary_symbols: [],
				image: 'https://i.imgur.com/pRRUbBs.jpeg',
			},
		],
	},
];

const getAllDietarySymbols = () => {
	const symbolsMap = new Map();

	data.forEach((category) => {
		category.menu_items.forEach((item) => {
			item.dietary_symbols.forEach((symbol) => {
				if (!symbolsMap.has(symbol.symbol_id)) {
					symbolsMap.set(symbol.symbol_id, symbol);
				}
			});
		});
	});

	return Array.from(symbolsMap.values());
};

const MenuPage = () => {
	const allDietarySymbols = getAllDietarySymbols();

	return (
		<section className="py-12 min-h-screen bg-black">
			<Container>
				<SectionHeading color="rose">{t('nav.menu')}</SectionHeading>

				<DietarySymbolsLegend symbols={allDietarySymbols} />

				<div className="space-y-16">
					{data.map((category) => (
						<MenuCategory
							key={category.category_id}
							category={category}
						/>
					))}
				</div>
			</Container>
		</section>
	);
};

export default MenuPage;
