import { motion } from 'framer-motion';
import { Phone, MapPin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeInUp } from '../../utils/animations';

const FooterContact = () => {
	const { t } = useTranslation('footer');

	return (
		<motion.div variants={fadeInUp}>
			<h3 className="text-lg font-semibold text-text-primary mb-6">
				{t('sections.contact')}
			</h3>
			<div className="space-y-4">
				<div className="flex items-start space-x-3">
					<Phone
						size={18}
						className="text-accent mt-1 flex-shrink-0"
						aria-hidden="true"
					/>
					<div className="min-w-0">
						<a
							href="tel:+15551233666"
							className="text-text-secondary hover:text-text-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-secondary rounded-md p-1 inline-block break-all"
							aria-label={t('contact.phone.ariaLabel')}
						>
							{t('contact.phone.number')}
						</a>
					</div>
				</div>

				<div className="flex items-start space-x-3">
					<Mail
						size={18}
						className="text-accent mt-1 flex-shrink-0"
						aria-hidden="true"
					/>
					<div className="min-w-0">
						<a
							href="mailto:info@neonkitchen.com"
							className="text-text-secondary hover:text-text-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-secondary rounded-md p-1 inline-block break-all"
							aria-label={t('contact.email.ariaLabel')}
						>
							{t('contact.email.address')}
						</a>
					</div>
				</div>

				<div className="flex items-start space-x-3">
					<MapPin
						size={18}
						className="text-accent mt-1 flex-shrink-0"
						aria-hidden="true"
					/>
					<div className="min-w-0">
						<address className="text-text-secondary not-italic break-words">
							{t('contact.address.street')}
							<br />
							{t('contact.address.city')}
						</address>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default FooterContact;
