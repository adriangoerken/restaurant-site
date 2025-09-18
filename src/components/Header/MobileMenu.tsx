import { motion, AnimatePresence } from 'framer-motion';
import Container from '../layout/Container';
import MobileNavLinks from './MobileNavLinks';
import MobileReserveButton from './MobileReserveButton';
import type { NavigationLink } from './DesktopNavigation';
import ContactInfo from './ContactInfo';
import { slideInLeft } from '../../utils/animations';

interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
	links: NavigationLink[];
}

const MobileMenu = ({ isOpen, onClose, links }: MobileMenuProps) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					id="mobile-menu"
					className="lg:hidden bg-background-elevated border-t border-border-primary"
					initial="hidden"
					animate="visible"
					exit="hidden"
					variants={{
						hidden: { height: 0, opacity: 0 },
						visible: {
							height: 'auto',
							opacity: 1,
							transition: {
								height: { duration: 0.3 },
								opacity: { duration: 0.2, delay: 0.1 },
							},
						},
					}}
				>
					<Container>
						<div className="py-6 space-y-4">
							<MobileNavLinks
								links={links}
								onLinkClick={onClose}
							/>
							<motion.div
								variants={slideInLeft}
								initial="hidden"
								animate="visible"
								transition={{ delay: 0.6 }}
							>
								<ContactInfo variant="mobile" />
							</motion.div>
							<MobileReserveButton onClose={onClose} />
						</div>
					</Container>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default MobileMenu;
