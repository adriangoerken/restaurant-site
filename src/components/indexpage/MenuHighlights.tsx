import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Container from '../Container';
import SectionHeading from '../ui/SectionHeading';

interface MenuItem {
	title: string;
	desc: string;
	img: string;
	size?: string;
}

interface MenuHighlightsProps {
	items?: MenuItem[];
}

const defaultMenuItems: MenuItem[] = [
	{
		title: 'Dragon Fire Roll',
		desc: 'Spicy tuna, tempura crunch, topped with torched salmon',
		img: 'https://i.imgur.com/szITcrX.jpeg',
		size: 'lg:col-span-2 lg:row-span-2',
	},
	{
		title: 'Yakitori Selection',
		desc: 'Assorted grilled skewers with house-made tare sauce',
		img: 'https://i.imgur.com/iklvGFY.jpeg',
	},
	{
		title: 'Wagyu Bao Buns',
		desc: 'Tender wagyu beef, pickled vegetables, special sauce',
		img: 'https://i.imgur.com/pRRUbBs.jpeg',
		size: 'lg:col-span-1 lg:row-span-2',
	},
	{
		title: 'Tonkotsu Ramen',
		desc: 'Rich pork broth, chashu, ajitsuke tamago',
		img: 'https://i.imgur.com/d96364L.jpeg',
	},
];

const MenuHighlights: React.FC<MenuHighlightsProps> = ({
	items = defaultMenuItems,
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
			className="py-20 bg-black/30"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
			variants={sectionVariants}
		>
			<Container>
				<SectionHeading color="rose" className="mb-16">
					Menu Highlights
				</SectionHeading>
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[minmax(300px,auto)]"
					variants={{
						visible: {
							transition: {
								staggerChildren: prefersReducedMotion ? 0 : 0.1,
							},
						},
					}}
				>
					{items.map((item, index) => (
						<motion.div
							key={index}
							className={`group relative overflow-hidden rounded-lg ${
								item.size || ''
							}`}
							variants={cardVariants}
							whileHover={prefersReducedMotion ? {} : 'hover'}
						>
							{/* Enhanced gradient overlay with multiple layers for better text contrast */}
							<div
								className="absolute inset-0 z-10 transition-opacity duration-300"
								aria-hidden="true"
							>
								{/* Dark gradient from bottom */}
								<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
								{/* Additional overlay for better readability */}
								<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
							</div>
							<motion.img
								src={item.img}
								alt={item.title}
								className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
								initial={
									prefersReducedMotion ? {} : { scale: 1.2 }
								}
								animate={{ scale: 1 }}
								transition={{
									duration: prefersReducedMotion ? 0 : 0.7,
								}}
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
									duration: prefersReducedMotion ? 0 : 0.5,
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
										delay: prefersReducedMotion ? 0 : 0.3,
										duration: prefersReducedMotion
											? 0
											: 0.5,
									}}
								>
									<h3 className="text-2xl font-semibold mb-2">
										{item.title}
									</h3>
									<p className="text-gray-300">{item.desc}</p>
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
					))}
					<motion.div
						className="flex items-center justify-center"
						variants={cardVariants}
					>
						<motion.button
							role="button"
							className="border border-rose-500 hover:bg-rose-500/10 px-8 py-3 rounded-lg transition relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-rose-500"
							whileHover={{
								scale: prefersReducedMotion ? 1 : 1.05,
							}}
							whileTap={{
								scale: prefersReducedMotion ? 1 : 0.95,
							}}
						>
							<span className="relative z-10">
								Explore Full Menu
							</span>
							{!prefersReducedMotion && (
								<motion.div
									className="absolute inset-0 bg-rose-500/10"
									initial={{ x: '-100%' }}
									whileHover={{ x: 0 }}
									transition={{ duration: 0.3 }}
									aria-hidden="true"
								/>
							)}
						</motion.button>
					</motion.div>
				</motion.div>
			</Container>
		</motion.section>
	);
};

export default MenuHighlights;
