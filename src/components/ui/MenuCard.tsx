import { motion, useReducedMotion } from 'framer-motion';

type MenuCardProps = {
	title: string;
	desc: string;
	img: string;
	size?: string;
	index: number;
};

const MenuCard = ({ title, desc, img, size }: MenuCardProps) => {
	const prefersReducedMotion = useReducedMotion();

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
		<motion.div
			className={`group relative overflow-hidden rounded-lg ${
				size || ''
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
				src={img}
				alt={title}
				className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
				initial={prefersReducedMotion ? {} : { scale: 1.2 }}
				animate={{ scale: 1 }}
				transition={{ duration: prefersReducedMotion ? 0 : 0.7 }}
			/>
			<motion.div
				className="absolute inset-0 flex flex-col justify-end p-8 z-20"
				initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: prefersReducedMotion ? 0 : 0.2,
					duration: prefersReducedMotion ? 0 : 0.5,
				}}
			>
				<motion.div
					className="overflow-hidden"
					initial={prefersReducedMotion ? {} : { height: 0 }}
					whileInView={{ height: 'auto' }}
					transition={{
						delay: prefersReducedMotion ? 0 : 0.3,
						duration: prefersReducedMotion ? 0 : 0.5,
					}}
				>
					<h3 className="text-2xl font-semibold mb-2">{title}</h3>
					<p className="text-gray-300">{desc}</p>
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
	);
};

export default MenuCard;
