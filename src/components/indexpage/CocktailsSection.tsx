import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Section from '../ui/Section';
import CocktailCard from '../ui/CocktailCard';
import { useTranslation } from 'react-i18next';
type Cocktail = {
	title: string;
	desc: string;
	img: string;
};

const CocktailsSection = () => {
	const { t } = useTranslation();

	const items: Cocktail[] = [
		{
			title: t('cocktails.item1.title'),
			desc: t('cocktails.item1.desc'),
			img: 'https://i.imgur.com/PuSelT2.jpeg',
		},
		{
			title: t('cocktails.item2.title'),
			desc: t('cocktails.item2.desc'),
			img: 'https://i.imgur.com/dBKRQrD.jpeg',
		},
	];

	return (
		<Section>
			<SectionHeading color="rose" className="mb-16">
				{t('cocktails.title')}
			</SectionHeading>
			<motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{items.map((item, index) => (
					<CocktailCard key={item.title} index={index} {...item} />
				))}
			</motion.div>
		</Section>
	);
};

export default CocktailsSection;
