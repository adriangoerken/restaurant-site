import {
	motion,
	useScroll,
	useTransform,
	useReducedMotion,
} from 'framer-motion';
import Container from '../Container';
import ImageCarousel, { CarouselImage } from '../ui/ImageCarousel';
import SectionHeading from '../ui/SectionHeading';
import AnimatedButton from '../ui/AnimatedButton';
import { useTranslation } from 'react-i18next';

interface HeroProps {
	images: CarouselImage[];
}

const Hero = ({ images }: HeroProps) => {
	const { t } = useTranslation();
	const prefersReducedMotion = useReducedMotion();
	const { scrollY } = useScroll();
	const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
	const heroY = useTransform(
		scrollY,
		[0, 300],
		[0, prefersReducedMotion ? 0 : 100]
	);

	return (
		<section className="relative h-screen">
			<ImageCarousel images={images} />

			<motion.div
				className="relative h-full flex flex-col justify-center items-center text-center"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				style={{ opacity: heroOpacity, y: heroY }}
			>
				<Container>
					<SectionHeading
						as="h1"
						color="rose"
						className="text-5xl md:text-7xl mb-6 font-bold"
						animated={false}
					>
						{t('brand.name')}
					</SectionHeading>
					<motion.p
						className="text-xl md:text-2xl mb-8 text-gray-300"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.5 }}
					>
						{t('hero.headline')}
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.5 }}
						className="flex flex-col mx-auto gap-4 md:flex-row w-fit"
					>
						<AnimatedButton
							variant="primary"
							size="lg"
							to="/reservation"
						>
							{t('hero.bookTable')}
						</AnimatedButton>
						<AnimatedButton
							variant="secondary"
							size="lg"
							to="/menu"
						>
							{t('hero.viewMenu')}
						</AnimatedButton>
					</motion.div>
				</Container>
			</motion.div>
		</section>
	);
};

export default Hero;
