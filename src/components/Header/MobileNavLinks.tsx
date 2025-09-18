import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { slideInLeft } from '../../utils/animations';
import type { NavigationLink } from './DesktopNavigation';
import { useTranslation } from 'react-i18next';

interface MobileNavLinksProps {
	links: NavigationLink[];
	onLinkClick: () => void;
}

const MobileNavLinks = ({ links, onLinkClick }: MobileNavLinksProps) => {
	const { t } = useTranslation('header');

	return (
		<nav
			className="space-y-2"
			role="navigation"
			aria-label={t('ariaLabels.mobileMainNavigation')}
		>
			{links.map((link, index) => (
				<motion.div
					key={link.href}
					variants={slideInLeft}
					initial="hidden"
					animate="visible"
					transition={{ delay: index * 0.1 }}
				>
					<NavLink
						to={link.href}
						className={({ isActive }) =>
							`block py-3 px-4 rounded-lg text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-elevated ${
								isActive
									? 'text-accent bg-accent/10 border-l-4 border-accent'
									: 'text-text-secondary hover:text-text-primary hover:bg-background-secondary'
							}`
						}
						onClick={onLinkClick}
						aria-label={link.ariaLabel}
					>
						{link.label}
					</NavLink>
				</motion.div>
			))}
		</nav>
	);
};

export default MobileNavLinks;
