import { motion } from 'framer-motion';
import AnimatedSection from '../../../../components/ui/AnimatedSection';
import { staggerContainer } from '../../../../utils/animations';
import MenuCard from './MenuCard';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../../../../components/ui/SectionHeading';

const SignatureDishesSection = () => {
	const { t } = useTranslation('signatureDishes');
	// TODO: Mock data, remove when backend is implemented
	const featuredItems = [
		{
			name: 'Black Garlic Ramen',
			description: 'House-made noodles, slow-cooked broth, soft egg',
			price: '$24',
			isSignature: true,
		},
		{
			name: 'Miso Salmon',
			description:
				'Pan-seared salmon, miso glaze, jasmine rice, bok choy',
			price: '$32',
			isSignature: true,
		},
		{
			name: 'Korean BBQ Short Ribs',
			description: 'Marinated beef ribs, kimchi fried rice',
			price: '$38',
			isSignature: false,
		},
		{
			name: 'Pork Belly Bao',
			description: 'Braised pork belly, pickled vegetables, hoisin sauce',
			price: '$18',
			isSignature: false,
		},
	];

	return (
		<AnimatedSection
			className="py-20 bg-background-primary"
			aria-labelledby="featured-menu-heading"
		>
			<div className="container mx-auto">
				<SectionHeading
					id="featured-menu-heading"
					part1={t('headingPart1')}
					part2={t('headingPart2')}
					subheading={t('subheading')}
				/>
				<motion.div
					className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{featuredItems.map((item, index) => (
						<MenuCard key={index} {...item} />
					))}
				</motion.div>
			</div>
		</AnimatedSection>
	);
};

export default SignatureDishesSection;
