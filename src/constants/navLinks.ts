export interface NavigationLink {
	href: string;
	labelKey: string;
	ariaLabelKey: string;
}

export const NAVIGATION_LINKS = [
	{
		href: '/',
		labelKey: 'navigation.home.label',
		ariaLabelKey: 'navigation.home.ariaLabel',
	},
	{
		href: '/menu',
		labelKey: 'navigation.menu.label',
		ariaLabelKey: 'navigation.menu.ariaLabel',
	},
	{
		href: '/story',
		labelKey: 'navigation.story.label',
		ariaLabelKey: 'navigation.story.ariaLabel',
	},
	{
		href: '/events',
		labelKey: 'navigation.events.label',
		ariaLabelKey: 'navigation.events.ariaLabel',
	},
	{
		href: '/gallery',
		labelKey: 'navigation.gallery.label',
		ariaLabelKey: 'navigation.gallery.ariaLabel',
	},
	{
		href: '/contact',
		labelKey: 'navigation.contact.label',
		ariaLabelKey: 'navigation.contact.ariaLabel',
	},
] satisfies NavigationLink[];
