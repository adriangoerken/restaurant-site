import { motion } from 'framer-motion';
import Container from '../../../../components/layout/Container';
import AnimatedSection from '../../../../components/ui/AnimatedSection';
import { fadeInUp, staggerContainer } from '../../../../utils/animations';
import { Award, ChefHat, Heart, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ValueCard from './ValueCard';

const ValuesSection = () => {
	const { t } = useTranslation('ourStoryPage');

	const values = [
		{
			icon: <Heart size={32} />,
			titleKey: 'values.passion.title',
			descriptionKey: 'values.passion.description',
		},
		{
			icon: <Award size={32} />,
			titleKey: 'values.quality.title',
			descriptionKey: 'values.quality.description',
		},
		{
			icon: <Users size={32} />,
			titleKey: 'values.community.title',
			descriptionKey: 'values.community.description',
		},
		{
			icon: <ChefHat size={32} />,
			titleKey: 'values.innovation.title',
			descriptionKey: 'values.innovation.description',
		},
	];

	return (
		<AnimatedSection
			className="py-20 bg-background-primary"
			aria-labelledby="values-heading"
		>
			<Container>
				<motion.h2
					id="values-heading"
					className="text-3xl md:text-4xl font-bold text-center mb-4 font-display text-text-primary flex flex-wrap justify-center gap-x-2"
					variants={fadeInUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<span className="text-text-primary">
						{t('values.headingPart1')}
					</span>
					<span className="text-highlight">
						{t('values.headingPart2')}
					</span>
				</motion.h2>
				<motion.p
					className="text-text-secondary text-center max-w-2xl mx-auto mb-12 text-lg leading-relaxed"
					variants={fadeInUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{ delay: 0.2 }}
				>
					{t('values.subheading')}
				</motion.p>

				<motion.div
					className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{values.map((value) => (
						<ValueCard
							key={value.titleKey}
							id={value.titleKey}
							icon={value.icon}
							title={t(value.titleKey)}
							description={t(value.descriptionKey)}
						/>
					))}
				</motion.div>
			</Container>
		</AnimatedSection>
	);
};

export default ValuesSection;
