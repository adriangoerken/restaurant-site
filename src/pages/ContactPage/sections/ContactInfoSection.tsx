import { motion } from 'framer-motion';
import Container from '../../../components/layout/Container';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin } from 'lucide-react';
import AnimatedSection from '../../../components/ui/AnimatedSection';

const ContactInfoSection: React.FC = () => {
	const { t } = useTranslation('contactPage');

	const contactMethods = [
		{
			icon: Phone,
			label: t('contactInfo.phone.label'),
			value: t('contactInfo.phone.value'),
			href: `tel:${t('contactInfo.phone.value').replace(/\D/g, '')}`,
			ariaLabel: t('contactInfo.phone.ariaLabel'),
		},
		{
			icon: Mail,
			label: t('contactInfo.email.label'),
			value: t('contactInfo.email.value'),
			href: `mailto:${t('contactInfo.email.value')}`,
			ariaLabel: t('contactInfo.email.ariaLabel'),
		},
		{
			icon: MapPin,
			label: t('contactInfo.address.label'),
			value: `${t('contactInfo.address.street')}, ${t(
				'contactInfo.address.city'
			)}`,
			href: `https://maps.google.com/?q=${encodeURIComponent(
				`${t('contactInfo.address.street')}, ${t(
					'contactInfo.address.city'
				)}`
			)}`,
			ariaLabel: t('contactInfo.address.ariaLabel'),
		},
	];

	return (
		<AnimatedSection
			className="py-20 bg-background-secondary"
			aria-labelledby="contact-info-heading"
		>
			<Container>
				<motion.h2
					id="contact-info-heading"
					className="text-3xl md:text-5xl font-bold font-display text-center mb-16 text-text-primary"
					variants={fadeInUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{t('contactInfo.heading')}
				</motion.h2>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{contactMethods.map((method, index) => (
						<motion.a
							key={index}
							href={method.href}
							className="group bg-background-elevated border-2 border-border-primary hover:border-accent rounded-lg p-8 text-center transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-secondary"
							variants={fadeInUp}
							aria-label={method.ariaLabel}
							target={
								method.icon === MapPin ? '_blank' : undefined
							}
							rel={
								method.icon === MapPin
									? 'noopener noreferrer'
									: undefined
							}
						>
							<div className="flex flex-col items-center gap-4">
								<div className="p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
									<method.icon
										className="w-8 h-8 text-accent"
										aria-hidden="true"
									/>
								</div>
								<div>
									<h3 className="text-xl font-semibold text-text-primary mb-2">
										{method.label}
									</h3>
									<p className="text-text-secondary group-hover:text-text-primary transition-colors duration-300">
										{method.value}
									</p>
								</div>
							</div>
						</motion.a>
					))}
				</motion.div>
			</Container>
		</AnimatedSection>
	);
};

export default ContactInfoSection;
