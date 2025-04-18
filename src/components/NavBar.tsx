import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './Container';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
	const { t } = useTranslation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navItems = [
		{ name: t('nav.menu'), path: 'menu' },
		{ name: t('nav.reservation'), path: 'reservation' },
		{ name: t('nav.order'), path: 'order' },
		{ name: t('nav.story'), path: '/story' },
		{ name: t('nav.gallery'), path: '/gallery' },
		{ name: t('nav.contactLocation'), path: '/contact' },
		{ name: t('nav.feedback'), path: '/feedback' },
	];

	return (
		<nav
			className="fixed w-full z-50 bg-black/80 backdrop-blur-md"
			role="navigation"
			aria-label={t('nav.ariaLabelMain')}
		>
			<Container>
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link
						to="/"
						className="flex-shrink-0"
						aria-label={t('nav.ariaHomepage')}
					>
						<span className="text-2xl font-bold text-rose-500">
							{t('brand.name')}
						</span>
					</Link>

					{/* Desktop Navigation */}
					<div
						className="hidden lg:flex items-center space-x-8"
						role="menubar"
						aria-label={t('nav.ariaLabelDesktop')}
					>
						{navItems.map((item) => (
							<Link
								key={item.name}
								to={item.path}
								className="text-gray-300 hover:text-rose-500 py-2 font-medium text-sm transition-colors duration-200"
								role="menuitem"
								aria-current={
									item.path === window.location.pathname
										? 'page'
										: undefined
								}
							>
								{item.name}
							</Link>
						))}
					</div>

					{/* Mobile menu button */}
					<div className="flex lg:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="text-gray-300 hover:text-rose-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500 p-2"
							aria-expanded={isMenuOpen}
							aria-controls="mobile-menu"
							aria-label={
								isMenuOpen
									? t('nav.ariaCloseMenu')
									: t('nav.ariaOpenMenu')
							}
						>
							<span className="sr-only">
								{isMenuOpen
									? t('nav.ariaCloseMenu')
									: t('nav.ariaOpenMenu')}
							</span>
							{!isMenuOpen ? (
								<svg
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								</svg>
							) : (
								<svg
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
			</Container>

			{/* Mobile Navigation */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						id="mobile-menu"
						className="lg:hidden"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.2 }}
						role="menu"
						aria-label={t('nav.ariaLabelMobile')}
					>
						<Container>
							<div className="py-2 space-y-1 text-center">
								{navItems.map((item) => (
									<Link
										key={item.name}
										to={item.path}
										className="text-gray-300 hover:text-rose-500 hover:bg-gray-900 block py-2 rounded-md text-base font-medium transition-colors duration-200"
										onClick={() => setIsMenuOpen(false)}
										role="menuitem"
										aria-current={
											item.path ===
											window.location.pathname
												? 'page'
												: undefined
										}
									>
										{item.name}
									</Link>
								))}
							</div>
						</Container>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default NavBar;
