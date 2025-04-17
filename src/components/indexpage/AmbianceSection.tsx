import { motion, useReducedMotion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Section from '../ui/Section';
import AmbianceCard from '../ui/AmbianceCard';

type AmbianceImage = {
	title: string;
	desc: string;
	img: string;
};

type AmbianceSectionProps = {
	items?: AmbianceImage[];
};

const defaultAmbianceImages: AmbianceImage[] = [
	{
		title: 'Restaurant Interior',
		desc: 'Modern design meets intimate ambiance',
		img: 'https://i.imgur.com/u0tUh3D.jpeg',
	},
	{
		title: 'Bar & Lounge',
		desc: 'Craft cocktails in a sophisticated setting',
		img: 'https://i.imgur.com/d9sGyEk.jpeg',
	},
];

const AmbianceSection = ({
	items = defaultAmbianceImages,
}: AmbianceSectionProps) => {
	const prefersReducedMotion = useReducedMotion();

	return (
		<Section background="dark">
			<SectionHeading color="rose" className="mb-16">
				Vibrant Nights. Urban Style.
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
					<AmbianceCard key={index} index={index} {...item} />
				))}
			</motion.div>
		</Section>
	);
};

export default AmbianceSection;
