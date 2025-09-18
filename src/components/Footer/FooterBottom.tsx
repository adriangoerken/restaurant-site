import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fadeInUp } from '../../utils/animations';

const FooterBottom = () => {
	const { t } = useTranslation('footer');
	const currentYear = new Date().getFullYear();

	return (
		<motion.div
			variants={fadeInUp}
			className="pt-8 border-t border-border-primary"
		>
			<div className="flex flex-col space-y-4 md:space-y-6">
				{/* Copyright */}
				<div className="text-center md:text-left">
					<p className="text-text-muted text-sm leading-relaxed break-words">
						{t('bottom.copyright', { year: currentYear })}
					</p>
				</div>

				{/* Legal Links */}
				<nav
					aria-label={t('bottom.legalLinksAriaLabel')}
					className="flex justify-center md:justify-start"
				>
					<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-center sm:text-left">
						<Link
							to="/privacy"
							className="text-text-muted hover:text-text-primary text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-secondary rounded-md p-1 inline-block break-words"
						>
							{t('bottom.privacy')}
						</Link>
						<Link
							to="/terms"
							className="text-text-muted hover:text-text-primary text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-secondary rounded-md p-1 inline-block break-words"
						>
							{t('bottom.terms')}
						</Link>
						<Link
							to="/accessibility"
							className="text-text-muted hover:text-text-primary text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-secondary rounded-md p-1 inline-block break-words"
						>
							{t('bottom.accessibility')}
						</Link>
					</div>
				</nav>
			</div>
		</motion.div>
	);
};

export default FooterBottom;
