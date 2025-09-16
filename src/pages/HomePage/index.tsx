import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import HeroSection from './sections/HeroSection';
import {
	fadeInUp,
	scaleIn,
	slideInLeft,
	slideInRight,
	staggerContainer,
} from '../../utils/animations';
import AnimatedSection from '../../components/ui/AnimatedSection';
import SpecialOffersSection from './sections/SpecialOffersSection';
import SignatureDishesSection from './sections/SignatureDishesSection';
import VisualExperienceSection from './sections/VisualExperienceSection';

// Main HomePage component
const HomePage: React.FC = () => {
	return (
		<>
			{/* Skip link for accessibility */}
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-text-inverse px-4 py-2 rounded-lg z-50"
			>
				Skip to main content
			</a>

			<HeroSection />

			<div id="main-content">
				<SpecialOffersSection />
				<SignatureDishesSection />
				<VisualExperienceSection />

				{/* Story Preview Section */}
				<AnimatedSection
					className="py-20 px-4 bg-background-primary"
					aria-labelledby="story-heading"
				>
					<div className="container mx-auto">
						<div className="grid lg:grid-cols-2 gap-12 items-center overflow-hidden">
							<motion.div
								variants={slideInLeft}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
							>
								<h2
									id="story-heading"
									className="text-4xl md:text-5xl font-bold mb-6 font-display"
								>
									<span className="text-text-primary">
										Our
									</span>{' '}
									<span className="text-highlight">
										Story
									</span>
								</h2>
								<p className="text-text-secondary text-lg leading-relaxed mb-6">
									At Neon Kitchen, we believe in the power of
									fusion - not just in our dishes, but in
									bringing together diverse culinary
									traditions to create something entirely new.
									Our chef's journey through the night markets
									of Seoul, the ramen bars of Tokyo, and the
									street food stalls of Bangkok has inspired
									every dish on our menu.
								</p>
								<p className="text-text-secondary text-lg leading-relaxed mb-8">
									We're more than a restaurant - we're a
									celebration of modern Asian cuisine, where
									traditional techniques meet contemporary
									innovation in an atmosphere that's both
									electric and intimate.
								</p>
								<motion.button
									className="text-accent hover:text-highlight font-semibold flex items-center gap-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-primary rounded-lg p-2"
									whileHover={{ x: 5 }}
									whileTap={{ scale: 0.95 }}
								>
									Learn More About Us
									<motion.span
										animate={{ x: [0, 3, 0] }}
										transition={{
											duration: 1.5,
										}}
									>
										<ArrowRight size={20} />
									</motion.span>
								</motion.button>
							</motion.div>
							<motion.div
								className="aspect-square bg-background-secondary rounded-2xl overflow-hidden"
								variants={slideInRight}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								whileHover={{ rotate: 2 }}
								transition={{ duration: 0.3 }}
							>
								<div className="w-full h-full flex items-center justify-center text-text-muted">
									<motion.span
										className="text-8xl opacity-30"
										animate={{
											rotate: [0, 5, -5, 0],
											scale: [1, 1.05, 1],
										}}
										transition={{
											duration: 4,
											ease: 'easeInOut',
										}}
									>
										👨‍🍳
									</motion.span>
								</div>
							</motion.div>
						</div>
					</div>
				</AnimatedSection>

				{/* CTA Section */}
				<AnimatedSection
					className="py-20 px-4 bg-gradient-to-r from-background-secondary via-background-elevated to-background-secondary"
					aria-labelledby="cta-heading"
				>
					<div className="container mx-auto text-center">
						<motion.h2
							id="cta-heading"
							className="text-4xl md:text-5xl font-bold mb-6 font-display"
							variants={fadeInUp}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
						>
							<span className="text-text-primary">
								Ready for an
							</span>{' '}
							<span className="text-accent">Unforgettable</span>{' '}
							<span className="text-text-primary">
								Experience?
							</span>
						</motion.h2>
						<motion.p
							className="text-text-secondary text-xl max-w-2xl mx-auto mb-12"
							variants={fadeInUp}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
						>
							Join us for an evening of exceptional food,
							innovative cocktails, and vibrant atmosphere
						</motion.p>
						<motion.div
							className="flex flex-col sm:flex-row gap-6 justify-center items-center"
							variants={staggerContainer}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
						>
							<motion.button
								className="bg-accent hover:bg-accent/90 text-text-inverse px-10 py-5 rounded-lg font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-elevated"
								variants={scaleIn}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Reserve Your Table
							</motion.button>
							<motion.button
								className="border-2 border-highlight text-highlight hover:bg-highlight hover:text-text-inverse px-10 py-5 rounded-lg font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-offset-2 focus:ring-offset-background-elevated"
								variants={scaleIn}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								View Full Menu
							</motion.button>
							<motion.button
								className="text-success hover:text-success/80 font-semibold text-lg flex items-center gap-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-success focus:ring-offset-2 focus:ring-offset-background-elevated rounded-lg p-3"
								variants={scaleIn}
								whileHover={{ x: 5 }}
								whileTap={{ scale: 0.95 }}
							>
								Contact Us
								<motion.span
									animate={{ x: [0, 3, 0] }}
									transition={{
										duration: 1.5,
									}}
								>
									<ArrowRight size={20} />
								</motion.span>
							</motion.button>
						</motion.div>
					</div>
				</AnimatedSection>
			</div>
		</>
	);
};

export default HomePage;
