import { motion } from 'framer-motion';
import {
	fadeInUp,
	scaleIn,
	staggerContainer,
} from '../../../../utils/animations';

const HeroSection = () => {
	return (
		<section
			className={`relative min-h-screen bg-gradient-to-br from-background-primary via-background-secondary to-background-primary flex items-center justify-center overflow-hidden`}
			aria-label="Welcome to Neon Kitchen"
		>
			{/* Animated background decorative elements */}
			<div className="absolute inset-0 opacity-20">
				<motion.div
					className="absolute top-1/4 left-1/4 w-32 h-32 bg-success rounded-full blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.6, 0.3],
					}}
					transition={{
						duration: 4,
						ease: 'easeInOut',
					}}
				/>
				<motion.div
					className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-highlight rounded-full blur-2xl"
					animate={{
						scale: [1, 1.3, 1],
						opacity: [0.4, 0.7, 0.4],
					}}
					transition={{
						duration: 3,
						ease: 'easeInOut',
						delay: 1,
					}}
				/>
			</div>

			<div className="relative z-10 container mx-auto px-4 text-center">
				<motion.h1
					className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
					initial="hidden"
					animate="visible"
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: {
							opacity: 1,
							y: 0,
							transition: {
								duration: 1,
								ease: 'easeOut',
							},
						},
					}}
				>
					<span className="text-text-primary">Neon</span>{' '}
					<motion.span
						className="text-accent bg-gradient-to-r from-accent to-highlight bg-clip-text text-transparent"
						animate={{
							backgroundPosition: [
								'0% 50%',
								'100% 50%',
								'0% 50%',
							],
						}}
						transition={{
							duration: 3,
							ease: 'linear',
						}}
						style={{ backgroundSize: '200% 200%' }}
					>
						Kitchen
					</motion.span>
				</motion.h1>

				<motion.p
					className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed"
					initial="hidden"
					animate="visible"
					variants={fadeInUp}
					transition={{ delay: 0.3 }}
				>
					Modern Asian Fusion with contemporary twists on traditional
					flavors
				</motion.p>

				<motion.div
					className="flex flex-col sm:flex-row gap-4 justify-center items-center"
					initial="hidden"
					animate="visible"
					variants={staggerContainer}
					transition={{ delay: 0.6 }}
				>
					<motion.button
						className="bg-accent hover:bg-accent/90 text-text-inverse px-8 py-4 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-primary"
						variants={scaleIn}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						aria-label="Make a reservation at Neon Kitchen"
					>
						Reserve Table
					</motion.button>
					<motion.button
						className="border-2 border-highlight text-highlight hover:bg-highlight hover:text-text-inverse px-8 py-4 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-offset-2 focus:ring-offset-background-primary"
						variants={scaleIn}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						aria-label="View our menu"
					>
						View Menu
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
