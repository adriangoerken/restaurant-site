import React from 'react';
import {
	motion,
	useScroll,
	useTransform,
	useReducedMotion,
} from 'framer-motion';
import Container from '../Container';
import ImageCarousel, { CarouselImage } from '../ui/ImageCarousel';
import SectionHeading from '../ui/SectionHeading';

interface HeroProps {
	images: CarouselImage[];
}

const Hero = ({ images }: HeroProps) => {
	// Animation preferences and scroll-based effects
	const prefersReducedMotion = useReducedMotion();
	const { scrollY } = useScroll();
	const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
	const heroY = useTransform(
		scrollY,
		[0, 300],
		[0, prefersReducedMotion ? 0 : 100]
	);

	// Animation variants for staggered animations
	const itemVariants = {
		hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: prefersReducedMotion ? 0 : 0.5 },
		},
	};

	return (
		<section className="relative h-screen">
			<ImageCarousel images={images} />

			{/* Hero content with scroll-based animations */}
			<motion.div
				className="relative h-full flex flex-col justify-center items-center text-center"
				initial="hidden"
				animate="visible"
				style={{ opacity: heroOpacity, y: heroY }}
				variants={{
					visible: {
						transition: {
							staggerChildren: prefersReducedMotion ? 0 : 0.2,
						},
					},
				}}
			>
				<Container>
					<SectionHeading
						as="h1"
						color="default"
						className="text-5xl md:text-7xl mb-6 font-bold"
					>
						Umami Nights
					</SectionHeading>
					<motion.p
						className="text-xl md:text-2xl mb-8 text-gray-300"
						initial={
							prefersReducedMotion ? {} : { opacity: 0, y: 20 }
						}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							delay: prefersReducedMotion ? 0 : 0.2,
							duration: prefersReducedMotion ? 0 : 0.5,
						}}
					>
						Modern Asian Fusion in the Heart of the City
					</motion.p>
					<motion.div
						initial={
							prefersReducedMotion ? {} : { opacity: 0, y: 20 }
						}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							delay: prefersReducedMotion ? 0 : 0.4,
							duration: prefersReducedMotion ? 0 : 0.5,
						}}
					>
						<motion.button
							role="button"
							className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-lg text-lg transition relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-rose-500 mr-4"
							whileHover={{
								scale: prefersReducedMotion ? 1 : 1.05,
							}}
							whileTap={{
								scale: prefersReducedMotion ? 1 : 0.95,
							}}
						>
							<span className="relative z-10">Book a Table</span>
							{!prefersReducedMotion && (
								<motion.div
									className="absolute inset-0 bg-rose-400"
									initial={{ x: '-100%' }}
									whileHover={{ x: 0 }}
									transition={{ duration: 0.3 }}
									aria-hidden="true"
								/>
							)}
						</motion.button>
						<motion.button
							role="button"
							className="border border-white hover:bg-white/10 text-white px-8 py-3 rounded-lg text-lg transition relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
							whileHover={{
								scale: prefersReducedMotion ? 1 : 1.05,
							}}
							whileTap={{
								scale: prefersReducedMotion ? 1 : 0.95,
							}}
						>
							<span className="relative z-10">View Menu</span>
							{!prefersReducedMotion && (
								<motion.div
									className="absolute inset-0 bg-white/10"
									initial={{ x: '-100%' }}
									whileHover={{ x: 0 }}
									transition={{ duration: 0.3 }}
									aria-hidden="true"
								/>
							)}
						</motion.button>
					</motion.div>
				</Container>
			</motion.div>
		</section>
	);
};

export default Hero;
