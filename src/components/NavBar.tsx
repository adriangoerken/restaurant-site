import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './Container';

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navItems = [
		{ name: 'Menu', path: '/' },
		{ name: 'Reservation', path: '/' },
		{ name: 'Our Story', path: '/' },
		{ name: 'Gallery', path: '/' },
		{ name: 'Contact & Location', path: '/' },
		{ name: 'Feedback', path: '/' },
		{ name: 'Order', path: '/' },
	];

	return (
		<nav
			className="fixed w-full z-50 bg-black/80 backdrop-blur-md"
			role="navigation"
			aria-label="Main navigation"
		>
			<Container>
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link
						to="/"
						className="flex-shrink-0"
						aria-label="Umami Nights - Return to homepage"
					>
						<span className="text-2xl font-bold text-rose-500">
							Umami Nights
						</span>
					</Link>

					{/* Desktop Navigation */}
					<div
						className="hidden lg:flex items-center space-x-8"
						role="menubar"
						aria-label="Desktop navigation"
					>
						{navItems.map((item) => (
							<Link
								key={item.name}
								to={item.path}
								className="text-gray-300 hover:text-rose-500 py-2 font-medium transition-colors duration-200"
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
									? 'Close main menu'
									: 'Open main menu'
							}
						>
							<span className="sr-only">
								{isMenuOpen
									? 'Close main menu'
									: 'Open main menu'}
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
						aria-label="Mobile navigation"
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
