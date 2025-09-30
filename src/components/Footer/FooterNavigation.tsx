import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fadeInUp } from '../../utils/animations';
import { NAVIGATION_LINKS } from '../../constants/navLinks';

const FooterNavigation = () => {
	const { t } = useTranslation('footer');

	return (
		<motion.div variants={fadeInUp}>
			<h3 className="text-lg font-semibold text-text-primary mb-6">
				{t('sections.quickLinks')}
			</h3>
			<nav aria-label={t('sections.quickLinksAriaLabel')}>
				<ul className="space-y-3">
					{NAVIGATION_LINKS.map((link) => (
						<li key={link.href}>
							<Link
								to={link.href}
								className="text-text-secondary hover:text-text-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-secondary rounded-md p-1 inline-block"
								aria-label={t(`global:${link.ariaLabelKey}`)}
							>
								{t(`global:${link.labelKey}`)}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</motion.div>
	);
};

export default FooterNavigation;
