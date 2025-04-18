import { motion, useReducedMotion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Section from '../ui/Section';
import AmbianceCard from '../ui/AmbianceCard';
import { useTranslation } from 'react-i18next';

type AmbianceImage = {
	title: string;
	desc: string;
	img: string;
};

const AmbianceSection = () => {
	const { t } = useTranslation();
	const prefersReducedMotion = useReducedMotion();

	// Derive items from translations
	const items: AmbianceImage[] = [
		{
			title: t('ambiance.item1.title'),
			desc: t('ambiance.item1.desc'),
			img: 'https://i.imgur.com/u0tUh3D.jpeg',
		},
		{
			title: t('ambiance.item2.title'),
			desc: t('ambiance.item2.desc'),
			img: 'https://i.imgur.com/d9sGyEk.jpeg',
		},
	];

	return (
		<Section background="dark">
			<SectionHeading color="rose" className="mb-16">
				{t('ambiance.title')}
			</SectionHeading>
			<motion.div
				className="grid grid-cols-1 md:grid-cols-2 gap-8"
				variants={{
					visible: {
						transition: {
							staggerChildren: prefersReducedMotion ? 0 : 0.2,
						},
					},
				}}
			>
				{items.map((item, index) => (
					<AmbianceCard key={item.title} index={index} {...item} />
				))}
			</motion.div>
		</Section>
	);
};

export default AmbianceSection;
