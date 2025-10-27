export type GalleryCategory =
	| 'all'
	| 'ambiance'
	| 'dishes'
	| 'events'
	| 'chef'
	| 'cocktails'
	| 'desserts';

export interface GalleryImage {
	id: string;
	url: string;
	thumbnail: string;
	alt: string;
	category: GalleryCategory;
	description: string;
	featured?: boolean;
}

// Available gallery categories for filtering
export const galleryCategories: readonly GalleryCategory[] = [
	'all',
	'ambiance',
	'dishes',
	'events',
	'chef',
	'cocktails',
	'desserts',
] as const;

// Mock gallery data with placeholder images from Unsplash
export const galleryImages: GalleryImage[] = [
	// Ambiance
	{
		id: 'amb-1',
		url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
		thumbnail:
			'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80',
		alt: 'Modern restaurant interior with neon lighting',
		category: 'ambiance',
		description: 'Main dining area with contemporary Asian-inspired decor',
		featured: true,
	},
	{
		id: 'amb-2',
		url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=80',
		thumbnail:
			'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&q=80',
		alt: 'Elegant restaurant bar area',
		category: 'ambiance',
		description: 'Bar area with premium spirits and craft cocktails',
	},
	{
		id: 'amb-3',
		url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80',
		thumbnail:
			'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80',
		alt: 'Private dining room setup',
		category: 'ambiance',
		description: 'Intimate private dining space for special occasions',
	},
	{
		id: 'amb-4',
		url: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?w=1200&q=80',
		thumbnail:
			'https://images.unsplash.com/photo-1592861956120-e524fc739696?w=400&q=80',
		alt: 'Restaurant outdoor seating',
		category: 'ambiance',
		description: 'Cozy outdoor dining area with ambient lighting',
	},

	// Signature Dishes
	{
		id: 'dish-1',
		url: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1200&q=80',
		thumbnail:
			'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80',
		alt: 'Black Garlic Ramen with soft egg',
		category: 'dishes',
		description: 'Our signature Black Garlic Ramen with house-made noodles',
		featured: true,
	},
	{
		id: 'dish-2',
		url: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=1200&q=80',
		thumbnail:
			'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400&q=80',
		alt: 'Miso Salmon with bok choy',
		category: 'dishes',
		description: 'Pan-seared Miso Salmon with jasmine rice and bok choy',
		featured: true,
	},
	{
		id: 'dish-3',
		url: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80',
		thumbnail:
			'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80',
		alt: 'Pork Belly Bao',
		category: 'dishes',
		description:
			'Steamed bao buns with braised pork belly and pickled vegetables',
	},
	{
		id: 'dish-4',
		url: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?w=1200&q=80',
		thumbnail:
			'https://images.unsplash.com/photo-1563612116625-3012372fccce?w=400&q=80',
		alt: 'Korean BBQ Short Ribs',
		category: 'dishes',
		description: 'Marinated beef short ribs with kimchi fried rice',
	},
	{
		id: 'dish-5',
		url: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=1200&q=80',
		thumbnail:
			'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&q=80',
		alt: 'Thai Basil Duck',
		category: 'dishes',
		description: 'Roasted duck breast with coconut curry and sticky rice',
	},
	{
		id: 'dish-6',
		url: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=1200&q=80',
		thumbnail:
			'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&q=80',
		alt: 'Tuna Tartare Tacos',
		category: 'dishes',
		description: 'Spicy tuna tartare on crispy wonton shells',
	},

	// Cocktails
	{
		id: 'cocktail-1',
		url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&q=80',
		thumbnail:
			'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80',
		alt: 'Yuzu Mule cocktail',
		category: 'cocktails',
		description: 'Refreshing Yuzu Mule with fresh mint',
		featured: true,
	},
	{
		id: 'cocktail-2',
		url: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1200&q=80',
		thumbnail:
			'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&q=80',
		alt: 'Lychee Martini',
		category: 'cocktails',
		description: 'Elegant Lychee Martini with rose water',
	},
	{
		id: 'cocktail-3',
		url: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=1200&q=80',
		thumbnail:
			'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&q=80',
		alt: 'Matcha Old Fashioned',
		category: 'cocktails',
		description: 'Whiskey-based Matcha Old Fashioned with orange bitters',
	},
	{
		id: 'cocktail-4',
		url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=1200&q=80',
		thumbnail:
			'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=80',
		alt: 'Sake Sangria',
		category: 'cocktails',
		description: 'Light and fruity Sake Sangria with seasonal fruits',
	},

	// Desserts
	{
		id: 'dessert-1',
		url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=1200&q=80',
		thumbnail:
			'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80',
		alt: 'Matcha Crème Brûlée',
		category: 'desserts',
		description: 'Green tea custard with caramelized sugar crust',
	},
	{
		id: 'dessert-2',
		url: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=1200&q=80',
		thumbnail:
			'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&q=80',
		alt: 'Mochi Ice Cream Trio',
		category: 'desserts',
		description: 'Assorted mochi ice cream flavors',
	},
	{
		id: 'dessert-3',
		url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&q=80',
		thumbnail:
			'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80',
		alt: 'Black Sesame Cheesecake',
		category: 'desserts',
		description: 'Creamy black sesame cheesecake with sesame tuile',
	},

	// Events
	{
		id: 'event-1',
		url: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?w=1200&q=80',
		thumbnail:
			'https://images.unsplash.com/photo-1530023367847-a683933f4172?w=400&q=80',
		alt: 'Wine tasting event',
		category: 'events',
		description: 'Exclusive wine pairing dinner event',
	},
	{
		id: 'event-2',
		url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80',
		thumbnail:
			'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80',
		alt: 'Chef cooking demonstration',
		category: 'events',
		description: 'Interactive cooking class with our head chef',
	},
	{
		id: 'event-3',
		url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200&q=80',
		thumbnail:
			'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&q=80',
		alt: 'Private celebration',
		category: 'events',
		description: 'Private birthday celebration in our dining room',
	},

	// Chef & Team
	{
		id: 'chef-1',
		url: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1200&q=80',
		thumbnail:
			'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80',
		alt: 'Head chef in kitchen',
		category: 'chef',
		description: 'Our head chef preparing signature dishes',
		featured: true,
	},
	{
		id: 'chef-2',
		url: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=1200&q=80',
		thumbnail:
			'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&q=80',
		alt: 'Kitchen team at work',
		category: 'chef',
		description: 'Our talented culinary team in action',
	},
	{
		id: 'chef-3',
		url: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1200&q=80',
		thumbnail:
			'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400&q=80',
		alt: 'Chef plating dish',
		category: 'chef',
		description: 'Attention to detail in every plate',
	},
];
