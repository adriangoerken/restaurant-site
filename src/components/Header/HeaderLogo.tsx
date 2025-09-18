import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeaderLogo = () => {
	const { t } = useTranslation('header');

	return (
		<motion.div
			variants={fadeInUp}
			initial="hidden"
			animate="visible"
			className="flex-shrink-0"
		>
			<Link
				to="/"
				className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-overlay rounded-lg p-2"
				aria-label={t('logo.ariaLabel')}
			>
				<motion.span
					className="text-2xl md:text-3xl font-bold font-display text-text-primary"
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2 }}
				>
					{t('logo.brandName.first')}
				</motion.span>
				<motion.span
					className="text-2xl md:text-3xl font-bold font-display text-accent"
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2, delay: 0.1 }}
				>
					{t('logo.brandName.second')}
				</motion.span>
			</Link>
		</motion.div>
	);
};

export default HeaderLogo;
