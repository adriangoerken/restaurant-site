import { motion } from 'framer-motion';

const AnimatedBackground = () => {
	return (
		<div className="absolute inset-0 opacity-20 pointer-events-none">
			<motion.div
				className="absolute top-1/4 left-1/4 w-32 h-32 bg-success rounded-full blur-3xl"
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.3, 0.6, 0.3],
					x: [0, 20, 0],
				}}
				transition={{
					duration: 8,
					ease: 'easeInOut',
				}}
			/>
			<motion.div
				className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-highlight rounded-full blur-2xl"
				animate={{
					scale: [1, 1.3, 1],
					opacity: [0.4, 0.7, 0.4],
					y: [0, -20, 0],
				}}
				transition={{
					duration: 7,
					ease: 'easeInOut',
					delay: 1,
				}}
			/>
			<motion.div
				className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-accent rounded-full blur-3xl"
				animate={{
					scale: [1, 1.1, 1],
					opacity: [0.2, 0.5, 0.2],
					rotate: [0, 15, 0],
				}}
				transition={{
					duration: 9,
					ease: 'easeInOut',
					delay: 2,
				}}
			/>
		</div>
	);
};

export default AnimatedBackground;
