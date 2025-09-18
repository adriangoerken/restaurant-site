import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fadeInUp } from '../../utils/animations';

interface SocialLink {
	name: string;
	href: string;
	icon: React.ComponentType<{ size?: number }>;
	ariaLabel: string;
}

const FooterBrand = () => {
	const { t } = useTranslation('footer');

	const socialLinks: SocialLink[] = [
		{
			name: 'Instagram',
			href: 'https://instagram.com/neonkitchen',
			icon: Instagram,
			ariaLabel: t('social.instagram.ariaLabel'),
		},
		{
			name: 'Facebook',
			href: 'https://facebook.com/neonkitchen',
			icon: Facebook,
			ariaLabel: t('social.facebook.ariaLabel'),
		},
		{
			name: 'Twitter',
			href: 'https://twitter.com/neonkitchen',
			icon: Twitter,
			ariaLabel: t('social.twitter.ariaLabel'),
		},
	];

	return (
		<motion.div variants={fadeInUp} className="lg:col-span-1">
			<Link
				to="/"
				className="inline-flex items-center space-x-2 mb-6 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-secondary rounded-lg p-2 pl-0"
				aria-label={t('brand.logoAriaLabel')}
			>
				<span className="text-2xl font-bold font-display text-text-primary">
					{t('brand.name.first')}
				</span>
				<span className="text-2xl font-bold font-display text-accent">
					{t('brand.name.second')}
				</span>
			</Link>
			<p className="text-text-secondary leading-relaxed mb-6">
				{t('brand.description')}
			</p>

			<div
				className="flex space-x-4"
				role="list"
				aria-label={t('social.ariaLabel')}
			>
				{socialLinks.map((social) => (
					<motion.a
						key={social.name}
						href={social.href}
						target="_blank"
						rel="noopener noreferrer"
						className="text-text-muted hover:text-accent transition-colors duration-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-secondary"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
						aria-label={social.ariaLabel}
						role="listitem"
					>
						<social.icon size={20} aria-hidden="true" />
					</motion.a>
				))}
			</div>
		</motion.div>
	);
};

export default FooterBrand;
