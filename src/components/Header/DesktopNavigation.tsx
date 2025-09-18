import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import { NavLink } from 'react-router-dom';

export interface NavigationLink {
	href: string;
	label: string;
	ariaLabel: string;
}

interface DesktopNavigationProps {
	links: NavigationLink[];
}

const DesktopNavigation = ({ links }: DesktopNavigationProps) => {
	return (
		<motion.div
			className="hidden lg:flex items-center space-x-8"
			variants={fadeInUp}
			initial="hidden"
			animate="visible"
			transition={{ delay: 0.2 }}
		>
			{links.map((link) => (
				<NavLink
					key={link.href}
					to={link.href}
					className={({ isActive }) =>
						`text-sm font-medium transition-colors duration-300 relative py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-overlay ${
							isActive
								? 'text-accent'
								: 'text-text-secondary hover:text-text-primary'
						}`
					}
					aria-label={link.ariaLabel}
				>
					{({ isActive }) => (
						<>
							{link.label}
							{isActive && (
								<motion.div
									className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
									layoutId="activeTab"
									transition={{
										type: 'spring',
										duration: 0.6,
									}}
								/>
							)}
						</>
					)}
				</NavLink>
			))}
		</motion.div>
	);
};

export default DesktopNavigation;
