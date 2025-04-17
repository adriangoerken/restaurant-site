import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Container from '../Container';
import SectionHeading from '../ui/SectionHeading';

interface Cocktail {
	title: string;
	desc: string;
	img: string;
}

interface CocktailsSectionProps {
	items?: Cocktail[];
}

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

const CocktailsSection: React.FC<CocktailsSectionProps> = ({
	items = defaultCocktails,
}) => {
	const prefersReducedMotion = useReducedMotion();

	const sectionVariants = {
		hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: prefersReducedMotion ? 0 : 0.5 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: prefersReducedMotion ? 0 : 0.5 },
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: prefersReducedMotion ? 0 : 0.3 },
		},
		hover: {
			scale: prefersReducedMotion ? 1 : 1.05,
			transition: {
				duration: prefersReducedMotion ? 0 : 0.3,
				ease: 'easeInOut',
			},
		},
	};

	return (
		<motion.section
			className="py-20"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.3 }}
			variants={sectionVariants}
		>
			<Container>
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
						<motion.div
							key={index}
							className="relative rounded-lg overflow-hidden h-[500px] perspective-1000"
							variants={cardVariants}
							whileHover={prefersReducedMotion ? {} : 'hover'}
						>
							<motion.div
								className="absolute inset-0 group"
								whileHover={
									prefersReducedMotion
										? {}
										: {
												rotateY:
													index % 2 === 0 ? 5 : -5,
												rotateX: 5,
												scale: 1.05,
												transition: { duration: 0.4 },
										  }
								}
							>
								<div
									className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"
									aria-hidden="true"
								/>
								<motion.img
									src={item.img}
									alt={`${item.title} cocktail with ${item.desc}`}
									className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
									style={{ transformOrigin: 'center center' }}
								/>
								<motion.div
									className="absolute inset-0 flex flex-col justify-end p-8 z-20"
									initial={
										prefersReducedMotion
											? {}
											: { opacity: 0, y: 20 }
									}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										delay: prefersReducedMotion ? 0 : 0.2,
										duration: prefersReducedMotion
											? 0
											: 0.5,
									}}
								>
									<motion.div
										className="overflow-hidden"
										initial={
											prefersReducedMotion
												? {}
												: { height: 0 }
										}
										whileInView={{ height: 'auto' }}
										transition={{
											delay: prefersReducedMotion
												? 0
												: 0.3,
											duration: prefersReducedMotion
												? 0
												: 0.5,
										}}
									>
										<h3 className="text-2xl font-semibold mb-2">
											{item.title}
										</h3>
										<p className="text-gray-300">
											{item.desc}
										</p>
									</motion.div>
									{!prefersReducedMotion && (
										<motion.div
											className="h-1 w-0 bg-rose-500 mt-4 group-hover:w-full transition-all duration-300"
											initial={{ width: 0 }}
											whileInView={{ width: '2rem' }}
											whileHover={{ width: '100%' }}
											aria-hidden="true"
										/>
									)}
								</motion.div>
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</Container>
		</motion.section>
	);
};

export default CocktailsSection;
