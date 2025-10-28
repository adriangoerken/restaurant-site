import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Clock, Users, Phone, Info } from 'lucide-react';
import Container from '../../../components/layout/Container';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import AnimatedSection from '../../../components/ui/AnimatedSection';

const InfoSection: React.FC = () => {
	const { t } = useTranslation('reservationPage');

	const infoCards = [
		{
			icon: Clock,
			titleKey: 'infoSection.cards.hours.title',
			descriptionKey: 'infoSection.cards.hours.description',
			detailKey: 'infoSection.cards.hours.detail',
		},
		{
			icon: Users,
			titleKey: 'infoSection.cards.parties.title',
			descriptionKey: 'infoSection.cards.parties.description',
			detailKey: 'infoSection.cards.parties.detail',
		},
		{
			icon: Phone,
			titleKey: 'infoSection.cards.contact.title',
			descriptionKey: 'infoSection.cards.contact.description',
			detailKey: 'infoSection.cards.contact.detail',
		},
		{
			icon: Info,
			titleKey: 'infoSection.cards.policy.title',
			descriptionKey: 'infoSection.cards.policy.description',
			detailKey: 'infoSection.cards.policy.detail',
		},
	];

	return (
		<AnimatedSection
			className="py-20 bg-background-secondary"
			aria-labelledby="reservation-info-heading"
		>
			<Container>
				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<motion.h2
						id="reservation-info-heading"
						className="text-3xl md:text-4xl font-bold font-display text-center mb-4 text-text-primary"
						variants={fadeInUp}
					>
						{t('infoSection.heading')}
					</motion.h2>
					<motion.p
						className="text-lg text-text-secondary text-center mb-12 max-w-2xl mx-auto"
						variants={fadeInUp}
					>
						{t('infoSection.subheading')}
					</motion.p>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{infoCards.map((card) => {
							const Icon = card.icon;
							return (
								<motion.div
									key={card.titleKey}
									className="bg-background-elevated rounded-lg p-6 border border-border-primary hover:border-accent transition-colors duration-300"
									variants={fadeInUp}
									whileHover={{ y: -5 }}
								>
									<div className="flex flex-col items-center text-center space-y-4">
										<div className="p-3 bg-accent/10 rounded-full">
											<Icon
												className="text-accent"
												size={32}
												aria-hidden="true"
											/>
										</div>
										<h3 className="text-xl font-semibold text-text-primary">
											{t(card.titleKey)}
										</h3>
										<p className="text-text-secondary text-sm">
											{t(card.descriptionKey)}
										</p>
										<p className="text-accent font-medium">
											{t(card.detailKey)}
										</p>
									</div>
								</motion.div>
							);
						})}
					</div>
				</motion.div>
			</Container>
		</AnimatedSection>
	);
};

export default InfoSection;
