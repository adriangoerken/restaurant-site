import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../layout/Container';
import HeaderLogo from './HeaderLogo';
import DesktopNavigation from './DesktopNavigation';
import HeaderActions from './HeaderActions';
import MobileMenu from './MobileMenu';
import { NAVIGATION_LINKS } from '../../constants/navLinks';

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const { t } = useTranslation('header');

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
					<DesktopNavigation links={NAVIGATION_LINKS} />
					<HeaderActions
						isMobileMenuOpen={isMobileMenuOpen}
						onToggleMobileMenu={toggleMobileMenu}
					/>
				</nav>
			</Container>

			<MobileMenu
				isOpen={isMobileMenuOpen}
				onClose={closeMobileMenu}
				links={NAVIGATION_LINKS}
			/>
		</header>
	);
};

export default Header;
