import {
	Calendar,
	Clock,
	Users,
	Sparkles,
	Wine,
	UtensilsCrossed,
} from 'lucide-react';

export interface Event {
	id: string;
	title: string;
	description: string;
	date: string;
	time: string;
	location: 'mainDiningRoom' | 'privateDiningRoom' | 'fullVenue' | 'barArea';
	price: string;
	availability: 'available' | 'limited' | 'soldOut';
	seatsAvailable?: number;
	icon: React.ReactNode;
	featured: boolean;
	imageUrl?: string;
}

export interface Promotion {
	id: string;
	title: string;
	description: string;
	discount: string;
	validUntil: string;
	terms?: string;
	icon: React.ReactNode;
	ongoing: boolean;
}

export interface PastEvent {
	id: string;
	title: string;
	date: string;
	imageUrl: string;
	description: string;
}

// Mock upcoming events data
export const upcomingEvents: Event[] = [
	{
		id: 'sake-pairing-dinner',
		title: 'Premium Sake Pairing Dinner',
		description:
			'Join our sommelier for an evening of expertly paired sake and our signature dishes. Experience the harmony of traditional Japanese sake with modern Asian fusion cuisine.',
		date: '2025-11-15',
		time: '19:00',
		location: 'privateDiningRoom',
		price: '$120 per person',
		availability: 'limited',
		seatsAvailable: 8,
		icon: <Wine size={32} />,
		featured: true,
	},
	{
		id: 'lunar-new-year',
		title: 'Lunar New Year Celebration',
		description:
			'Ring in the Lunar New Year with a special 8-course tasting menu featuring traditional and modern interpretations of celebratory dishes.',
		date: '2025-11-29',
		time: '18:00',
		location: 'fullVenue',
		price: '$95 per person',
		availability: 'available',
		seatsAvailable: 45,
		icon: <Sparkles size={32} />,
		featured: true,
	},
	{
		id: 'ramen-masterclass',
		title: 'Ramen Masterclass: From Broth to Bowl',
		description:
			'Learn the art of authentic ramen-making from our head chef. Hands-on workshop covering broth preparation, noodle cooking, and presentation techniques.',
		date: '2025-12-07',
		time: '14:00',
		location: 'mainDiningRoom',
		price: '$85 per person',
		availability: 'available',
		seatsAvailable: 12,
		icon: <UtensilsCrossed size={32} />,
		featured: false,
	},
	{
		id: 'holiday-tasting-menu',
		title: 'Winter Solstice Tasting Menu',
		description:
			'A seasonal 7-course menu celebrating winter ingredients and warming flavors from across Asia. Each course paired with complementary beverages.',
		date: '2025-12-21',
		time: '19:30',
		location: 'mainDiningRoom',
		price: '$110 per person',
		availability: 'limited',
		seatsAvailable: 6,
		icon: <Calendar size={32} />,
		featured: true,
	},
	{
		id: 'new-years-eve',
		title: "New Year's Eve Gala Dinner",
		description:
			"Welcome 2026 in style with our most exclusive dining experience. 10-course chef's menu, premium champagne, and live entertainment.",
		date: '2025-12-31',
		time: '20:00',
		location: 'fullVenue',
		price: '$250 per person',
		availability: 'soldOut',
		icon: <Sparkles size={32} />,
		featured: true,
	},
	{
		id: 'cocktail-workshop',
		title: 'Asian-Inspired Cocktail Workshop',
		description:
			'Master the art of craft cocktails with our head bartender. Learn to create signature drinks using yuzu, lychee, matcha, and other Asian ingredients.',
		date: '2025-11-22',
		time: '17:00',
		location: 'barArea',
		price: '$65 per person',
		availability: 'available',
		seatsAvailable: 15,
		icon: <Wine size={32} />,
		featured: false,
	},
];

// Mock promotions data
export const currentPromotions: Promotion[] = [
	{
		id: 'early-bird-special',
		title: 'Early Bird Special',
		description:
			'Dine with us between 5-6 PM and enjoy 25% off your entire meal. Perfect for those who prefer an earlier dinner.',
		discount: '25% OFF',
		validUntil: '2025-12-31',
		terms: 'Valid Monday-Thursday only. Cannot be combined with other offers.',
		icon: <Clock size={28} />,
		ongoing: true,
	},
	{
		id: 'weekend-brunch',
		title: 'Weekend Brunch Launch',
		description:
			'Introducing our new weekend brunch menu! Asian-inspired breakfast dishes and bottomless mimosas every Saturday and Sunday.',
		discount: '$45 per person',
		validUntil: '2025-11-30',
		terms: 'Reservations recommended. 2-hour seating limit applies.',
		icon: <UtensilsCrossed size={28} />,
		ongoing: false,
	},
	{
		id: 'group-dining',
		title: 'Group Dining Package',
		description:
			'Hosting a celebration? Our group dining package includes a private space, custom menu, and dedicated service for parties of 8 or more.',
		discount: '15% OFF',
		validUntil: 'Ongoing',
		terms: 'Advance booking required. Minimum 8 guests.',
		icon: <Users size={28} />,
		ongoing: true,
	},
	{
		id: 'loyalty-program',
		title: 'Loyalty Rewards Program',
		description:
			'Join our new loyalty program and earn points with every visit. Redeem for complimentary dishes, exclusive tastings, and special perks.',
		discount: 'Free to Join',
		validUntil: 'Ongoing',
		icon: <Sparkles size={28} />,
		ongoing: true,
	},
];

// Mock past events data
export const pastEvents: PastEvent[] = [
	{
		id: 'summer-sake-festival',
		title: 'Summer Sake Festival',
		date: '2025-08-15',
		imageUrl: '/images/events/sake-festival.jpg',
		description:
			'A celebration of premium sake with over 30 varieties from across Japan.',
	},
	{
		id: 'street-food-night',
		title: 'Asian Street Food Night',
		date: '2025-07-20',
		imageUrl: '/images/events/street-food.jpg',
		description:
			'A pop-up event featuring street food classics from Seoul, Bangkok, and Tokyo.',
	},
	{
		id: 'chef-collaboration',
		title: 'Guest Chef Collaboration',
		date: '2025-06-10',
		imageUrl: '/images/events/chef-collab.jpg',
		description:
			'Special menu created in partnership with Michelin-starred Chef Tanaka.',
	},
	{
		id: 'dumpling-festival',
		title: 'Dumpling Making Festival',
		date: '2025-05-25',
		imageUrl: '/images/events/dumpling.jpg',
		description:
			'Interactive workshop teaching traditional dumpling folding techniques.',
	},
];
