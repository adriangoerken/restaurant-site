import { motion, useReducedMotion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Section from '../ui/Section';
import CocktailCard from '../ui/CocktailCard';

type Cocktail = {
	title: string;
	desc: string;
	img: string;
};

type CocktailsSectionProps = {
	items?: Cocktail[];
};

const defaultCocktails: Cocktail[] = [
	{
		title: 'Tokyo Nights',
		desc: 'Japanese whisky, yuzu, shiso, smoke',
		img: 'https://i.imgur.com/PuSelT2.jpeg',
	},
	{
		title: 'Sakura Spring',
		desc: 'Gin, cherry blossom, lychee, prosecco',
		img: 'https://i.imgur.com/dBKRQrD.jpeg',
	},
];

const CocktailsSection = ({
	items = defaultCocktails,
}: CocktailsSectionProps) => {
	const prefersReducedMotion = useReducedMotion();

	return (
		<Section>
			<SectionHeading color="rose" className="mb-16">
				Crafted Cocktails
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
					<CocktailCard key={index} index={index} {...item} />
				))}
			</motion.div>
		</Section>
	);
};

export default CocktailsSection;
