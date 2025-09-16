import { motion } from 'framer-motion';
import Container from '../../../../components/layout/Container';
import AnimatedSection from '../../../../components/ui/AnimatedSection';
import { staggerContainer } from '../../../../utils/animations';
import { Clock, Users, Award } from 'lucide-react';
import OfferCard from './OfferCard';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../../../../components/ui/SectionHeading';

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
					<SectionHeading
						id="featured-menu-heading"
						part1={t('headingPart1')}
						part2={t('headingPart2')}
						subheading={t('subheading')}
						highlightColor="highlight"
					/>

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
