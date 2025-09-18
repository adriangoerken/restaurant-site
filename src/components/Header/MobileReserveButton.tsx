import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { slideInLeft } from '../../utils/animations';

interface MobileReserveButtonProps {
	onClose: () => void;
}

const MobileReserveButton = ({ onClose }: MobileReserveButtonProps) => {
	const { t } = useTranslation('header');

	return (
		<motion.div
			variants={slideInLeft}
			initial="hidden"
			animate="visible"
			transition={{ delay: 0.7 }}
			className="pt-4"
		>
			<Link
				to="/reservation"
				className="block w-full bg-accent hover:bg-accent/90 text-text-inverse text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-elevated"
				onClick={onClose}
				aria-label={t('mobileMenu.reserveButtonAriaLabel')}
			>
				{t('mobileMenu.reserveButton')}
			</Link>
		</motion.div>
	);
};

export default MobileReserveButton;
