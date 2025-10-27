import { motion } from 'framer-motion';
import Container from '../../../components/layout/Container';
import AnimatedSection from '../../../components/ui/AnimatedSection';
import { staggerContainer } from '../../../utils/animations';
import PromotionCard from '../components/PromotionCard';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../../../components/ui/SectionHeading';
import { currentPromotions } from '../../../data/eventsData';

const PromotionsSection = () => {
	const { t } = useTranslation('eventsPage');

	return (
		<AnimatedSection
			className="py-20 bg-background-secondary"
			aria-labelledby="promotions-section-heading"
		>
			<Container>
				<SectionHeading
					id="promotions-section-heading"
					part1={t('promotions.headingPart1')}
					part2={t('promotions.headingPart2')}
					subheading={t('promotions.subheading')}
					highlightColor="highlight"
				/>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 gap-8"
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
				>
					{currentPromotions.map((promotion) => (
						<PromotionCard
							key={promotion.id}
							promotion={promotion}
						/>
					))}
				</motion.div>
			</Container>
		</AnimatedSection>
	);
};

export default PromotionsSection;
