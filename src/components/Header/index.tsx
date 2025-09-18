import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../layout/Container';
import HeaderLogo from './HeaderLogo';
import DesktopNavigation from './DesktopNavigation';
import HeaderActions from './HeaderActions';
import MobileMenu from './MobileMenu';

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const { t } = useTranslation('header');

	const navigationLinks = [
		{
			href: '/',
			label: t('navigation.home.label'),
			ariaLabel: t('navigation.home.ariaLabel'),
		},
		{
			href: '/menu',
			label: t('navigation.menu.label'),
			ariaLabel: t('navigation.menu.ariaLabel'),
		},
		{
			href: '/story',
			label: t('navigation.story.label'),
			ariaLabel: t('navigation.story.ariaLabel'),
		},
		{
			href: '/events',
			label: t('navigation.events.label'),
			ariaLabel: t('navigation.events.ariaLabel'),
		},
		{
			href: '/gallery',
			label: t('navigation.gallery.label'),
			ariaLabel: t('navigation.gallery.ariaLabel'),
		},
		{
			href: '/contact',
			label: t('navigation.contact.label'),
			ariaLabel: t('navigation.contact.ariaLabel'),
		},
	];

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<header className="sticky top-0 z-50 bg-background-overlay border-b border-border-primary backdrop-blur-md">
			<Container>
				<nav
					className="flex items-center justify-between py-4"
					role="navigation"
					aria-label={t('ariaLabels.mainNavigation')}
				>
					<HeaderLogo />
					<DesktopNavigation links={navigationLinks} />
					<HeaderActions
						isMobileMenuOpen={isMobileMenuOpen}
						onToggleMobileMenu={toggleMobileMenu}
					/>
				</nav>
			</Container>

			<MobileMenu
				isOpen={isMobileMenuOpen}
				onClose={closeMobileMenu}
				links={navigationLinks}
			/>
		</header>
	);
};

export default Header;
