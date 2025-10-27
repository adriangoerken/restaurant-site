import { lazy, type ComponentType } from 'react';

export interface RouteConfig {
	path: string;
	Component: ComponentType;
}

// Lazy-loaded page components
const HomePage = lazy(() => import('../pages/HomePage'));
const MenuPage = lazy(() => import('../pages/MenuPage'));
const OurStoryPage = lazy(() => import('../pages/OurStoryPage'));
const EventsPage = lazy(() => import('../pages/EventsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

/**
 * Application route configuration
 * Defines all routes and their associated lazy-loaded components
 */
export const ROUTE_CONFIG: RouteConfig[] = [
	{
		path: '/',
		Component: HomePage,
	},
	{
		path: 'menu',
		Component: MenuPage,
	},
	{
		path: 'story',
		Component: OurStoryPage,
	},
	{
		path: 'events',
		Component: EventsPage,
	},
];

export const NOT_FOUND_ROUTE: RouteConfig = {
	path: '*',
	Component: NotFoundPage,
};
