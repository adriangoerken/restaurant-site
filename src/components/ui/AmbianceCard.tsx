import { motion, useReducedMotion } from 'framer-motion';

type AmbianceCardProps = {
	title: string;
	desc: string;
	img: string;
	index: number;
};

const AmbianceCard = ({ title, desc, img, index }: AmbianceCardProps) => {
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
								rotateY: index % 2 === 0 ? 5 : -5,
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
					src={img}
					alt={`${title} - ${desc}`}
					className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
					style={{ transformOrigin: 'center center' }}
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
		</motion.div>
	);
};

export default AmbianceCard;
