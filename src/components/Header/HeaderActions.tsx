import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeInUp } from '../../utils/animations';
import LanguageToggle from './LanguageToggle';
import ContactInfo from './ContactInfo';

interface HeaderActionsProps {
	isMobileMenuOpen: boolean;
	onToggleMobileMenu: () => void;
}

const HeaderActions = ({
	isMobileMenuOpen,
	onToggleMobileMenu,
}: HeaderActionsProps) => {
	const { t } = useTranslation('header');

	return (
		<motion.div
			className="flex items-center space-x-4"
			variants={fadeInUp}
			initial="hidden"
			animate="visible"
			transition={{ delay: 0.4 }}
		>
			<ContactInfo />
			<LanguageToggle />

			<Link
				to="/reservation"
				className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-text-inverse px-6 py-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-overlay"
				aria-label={t('actions.reserveAriaLabel')}
			>
				{t('actions.reserve')}
			</Link>

			<button
				type="button"
				className="lg:hidden text-text-primary hover:text-accent transition-colors duration-300 p-2 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-overlay rounded-md"
				onClick={onToggleMobileMenu}
				aria-expanded={isMobileMenuOpen}
				aria-controls="mobile-menu"
				aria-label={
					isMobileMenuOpen
						? t('actions.toggleMenu.closeAriaLabel')
						: t('actions.toggleMenu.openAriaLabel')
				}
			>
				{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
			</button>
		</motion.div>
	);
};

export default HeaderActions;
