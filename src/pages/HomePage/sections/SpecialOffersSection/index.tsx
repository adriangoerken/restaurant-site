import { motion } from 'framer-motion';
import Container from '../../../../components/layout/Container';
import AnimatedSection from '../../../../components/ui/AnimatedSection';
import { fadeInUp, staggerContainer } from '../../../../utils/animations';
import { Clock, Users, Award } from 'lucide-react';
import OfferCard from './OfferCard';
import { useTranslation } from 'react-i18next';

const index = () => {
	const { t } = useTranslation('specialOffers');
	// TODO: Mock data, remove when backend is implemented
	const specialOffers = [
		{
			title: 'Happy Hour Special',
			description: 'Enjoy 30% off all signature cocktails and appetizers',
			discount: '30% OFF',
			validUntil: 'March 31st',
			icon: <Clock size={24} />,
		},
		{
			title: "Chef's Tasting Menu",
			description:
				'Experience our 7-course journey through modern Asian cuisine',
			discount: '$85/person',
			validUntil: 'Limited time',
			icon: <Award size={24} />,
		},
		{
			title: 'Group Dining',
			description:
				'Special pricing for parties of 6 or more. Private dining available',
			discount: '15% OFF',
			validUntil: 'Ongoing',
			icon: <Users size={24} />,
		},
	];

	return (
		<AnimatedSection
			className="py-20 bg-background-secondary"
			aria-labelledby="special-offers-heading"
		>
			<Container>
				<div className="container mx-auto">
					{/* Section heading */}
					<motion.h2
						id="special-offers-heading"
						className="flex justify-center gap-x-4 text-4xl md:text-5xl font-bold text-center mb-4 font-display"
						variants={fadeInUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<span className="text-text-primary">
							{t('headingPart1')}
						</span>
						<span className="text-highlight">
							{t('headingPart2')}
						</span>
					</motion.h2>

					{/* Subtitle */}
					<motion.p
						className="text-text-secondary text-center max-w-2xl mx-auto mb-12"
						variants={fadeInUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
					>
						{t('subtitle')}
					</motion.p>

					{/* Special offer cards */}
					<motion.div
						className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						{specialOffers.map((offer, index) => (
							<OfferCard key={index} {...offer} />
						))}
					</motion.div>
				</div>
			</Container>
		</AnimatedSection>
	);
};

export default index;
