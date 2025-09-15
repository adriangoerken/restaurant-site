import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, Award } from 'lucide-react';
import HeroSection from './sections/HeroSection';
import {
	fadeIn,
	fadeInUp,
	scaleIn,
	slideInLeft,
	slideInRight,
	staggerContainer,
} from '../../utils/animations';

// Enhanced OfferCard with animations
export interface OfferCardProps {
	title: string;
	description: string;
	discount?: string;
	validUntil?: string;
	icon?: React.ReactNode;
}

const OfferCard: React.FC<OfferCardProps> = ({
	title,
	description,
	discount,
	validUntil,
	icon,
}) => {
	return (
		<motion.article
			className="bg-background-elevated border border-border-primary rounded-xl p-6 hover:border-accent transition-all duration-300"
			variants={fadeInUp}
			whileHover={{
				scale: 1.03,
				borderColor: 'var(--color-accent)',
				transition: { duration: 0.2 },
			}}
			whileTap={{ scale: 0.98 }}
		>
			<div className="flex items-start gap-4">
				{icon && (
					<motion.div
						className="text-accent flex-shrink-0"
						whileHover={{ rotate: 5 }}
						transition={{ duration: 0.2 }}
					>
						{icon}
					</motion.div>
				)}
				<div className="flex-1">
					<h3 className="text-xl font-semibold text-text-primary mb-2">
						{title}
					</h3>
					<p className="text-text-secondary mb-4 leading-relaxed">
						{description}
					</p>
					{discount && (
						<motion.div
							className="text-highlight font-bold text-lg mb-2"
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ delay: 0.2 }}
						>
							{discount}
						</motion.div>
					)}
					{validUntil && (
						<p className="text-text-muted text-sm">
							Valid until {validUntil}
						</p>
					)}
				</div>
			</div>
		</motion.article>
	);
};

// Enhanced MenuItem with animations
export interface MenuItemProps {
	name: string;
	description: string;
	price: string;
	image?: string;
	isSignature?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
	name,
	description,
	price,
	image,
	isSignature,
}) => {
	return (
		<motion.article
			className="bg-background-elevated border border-border-primary rounded-xl overflow-hidden hover:border-accent transition-all duration-300"
			variants={fadeInUp}
			whileHover={{
				scale: 1.03,
				transition: { duration: 0.2 },
			}}
		>
			<motion.div
				className="aspect-video bg-background-secondary relative overflow-hidden"
				whileHover={{ scale: 1.05 }}
				transition={{ duration: 0.3 }}
			>
				{image ? (
					<img
						src={image}
						alt={`${name} - signature dish at Neon Kitchen`}
						className="w-full h-full object-cover"
					/>
				) : (
					<div className="w-full h-full flex items-center justify-center text-text-muted">
						<motion.span
							className="text-6xl opacity-30"
							animate={{ rotate: [0, 5, -5, 0] }}
							transition={{ duration: 2, repeat: Infinity }}
						>
							🍜
						</motion.span>
					</div>
				)}
				{isSignature && (
					<motion.div
						className="absolute top-4 left-4 bg-highlight text-text-inverse px-3 py-1 rounded-full text-sm font-semibold"
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ delay: 0.3, type: 'spring' }}
					>
						Signature
					</motion.div>
				)}
			</motion.div>
			<div className="p-6">
				<h3 className="text-xl font-semibold text-text-primary mb-2">
					{name}
				</h3>
				<p className="text-text-secondary mb-4 leading-relaxed">
					{description}
				</p>
				<motion.div
					className="text-accent font-bold text-lg"
					whileHover={{ scale: 1.1 }}
					transition={{ duration: 0.2 }}
				>
					{price}
				</motion.div>
			</div>
		</motion.article>
	);
};

// Enhanced GalleryImage with animations
export interface GalleryImageProps {
	src?: string;
	alt: string;
	className?: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, className }) => {
	return (
		<motion.div
			className={`aspect-square bg-background-secondary rounded-xl overflow-hidden transition-transform duration-300 ${className}`}
			variants={scaleIn}
			whileHover={{
				scale: 1.05,
				transition: { duration: 0.2 },
			}}
		>
			{src ? (
				<img
					src={src}
					alt={alt}
					className="w-full h-full object-cover"
				/>
			) : (
				<div className="w-full h-full flex items-center justify-center text-text-muted">
					<motion.span
						className="text-4xl opacity-30"
						whileHover={{ rotate: 10 }}
						transition={{ duration: 0.2 }}
					>
						📷
					</motion.span>
				</div>
			)}
		</motion.div>
	);
};

// Animated section wrapper
interface AnimatedSectionProps {
	children: React.ReactNode;
	className?: string;
	'aria-labelledby'?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
	children,
	className,
	'aria-labelledby': ariaLabelledBy,
}) => {
	return (
		<motion.section
			className={className}
			aria-labelledby={ariaLabelledBy}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: '-100px' }}
			variants={fadeIn}
		>
			{children}
		</motion.section>
	);
};

// Main HomePage component
const HomePage: React.FC = () => {
	const specialOffers = [
		{
			title: 'Happy Hour Special',
			description: 'Enjoy 30% off all signature cocktails and appetizers',
			discount: '30% OFF',
			validUntil: 'March 31st',
			icon: <Clock size={24} />,
		},
		{
			title: "Chef's Tasting Menu",
			description:
				'Experience our 7-course journey through modern Asian cuisine',
			discount: '$85/person',
			validUntil: 'Limited time',
			icon: <Award size={24} />,
		},
		{
			title: 'Group Dining',
			description:
				'Special pricing for parties of 6 or more. Private dining available',
			discount: '15% OFF',
			validUntil: 'Ongoing',
			icon: <Users size={24} />,
		},
	];

	const featuredItems = [
		{
			name: 'Black Garlic Ramen',
			description: 'House-made noodles, slow-cooked broth, soft egg',
			price: '$24',
			isSignature: true,
		},
		{
			name: 'Miso Salmon',
			description:
				'Pan-seared salmon, miso glaze, jasmine rice, bok choy',
			price: '$32',
			isSignature: true,
		},
		{
			name: 'Korean BBQ Short Ribs',
			description: 'Marinated beef ribs, kimchi fried rice',
			price: '$38',
			isSignature: false,
		},
		{
			name: 'Pork Belly Bao',
			description: 'Braised pork belly, pickled vegetables, hoisin sauce',
			price: '$18',
			isSignature: false,
		},
	];

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
				{/* Special Offers Section */}
				<AnimatedSection
					className="py-20 px-4 bg-background-secondary"
					aria-labelledby="special-offers-heading"
				>
					<div className="container mx-auto overflow-hidden">
						<motion.h2
							id="special-offers-heading"
							className="text-4xl md:text-5xl font-bold text-center mb-4 font-display"
							variants={fadeInUp}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
						>
							<span className="text-text-primary">Special</span>{' '}
							<span className="text-highlight">Offers</span>
						</motion.h2>
						<motion.p
							className="text-text-secondary text-center max-w-2xl mx-auto mb-12"
							variants={fadeInUp}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
						>
							Don't miss out on our exclusive deals and seasonal
							promotions
						</motion.p>
						<motion.div
							className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
							variants={staggerContainer}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
						>
							{specialOffers.map((offer, index) => (
								<OfferCard key={index} {...offer} />
							))}
						</motion.div>
					</div>
				</AnimatedSection>

				{/* Featured Menu Section */}
				<AnimatedSection
					className="py-20 px-4 bg-background-primary"
					aria-labelledby="featured-menu-heading"
				>
					<div className="container mx-auto">
						<motion.h2
							id="featured-menu-heading"
							className="text-4xl md:text-5xl font-bold text-center mb-4 font-display"
							variants={fadeInUp}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
						>
							<span className="text-text-primary">Signature</span>{' '}
							<span className="text-accent">Dishes</span>
						</motion.h2>
						<motion.p
							className="text-text-secondary text-center max-w-2xl mx-auto mb-12"
							variants={fadeInUp}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
						>
							Discover our chef's carefully crafted fusion
							creations
						</motion.p>
						<motion.div
							className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
							variants={staggerContainer}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
						>
							{featuredItems.map((item, index) => (
								<MenuItem key={index} {...item} />
							))}
						</motion.div>
					</div>
				</AnimatedSection>

				{/* Gallery Preview Section */}
				<AnimatedSection
					className="py-20 px-4 bg-background-secondary"
					aria-labelledby="gallery-heading"
				>
					<div className="container mx-auto">
						<motion.h2
							id="gallery-heading"
							className="text-4xl md:text-5xl font-bold text-center mb-4 font-display"
							variants={fadeInUp}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
						>
							<span className="text-text-primary">Visual</span>{' '}
							<span className="text-success">Experience</span>
						</motion.h2>
						<motion.p
							className="text-text-secondary text-center max-w-2xl mx-auto mb-12"
							variants={fadeInUp}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
						>
							Step inside our vibrant atmosphere and culinary
							artistry
						</motion.p>
						<motion.div
							className="grid grid-cols-2 md:grid-cols-4 gap-4"
							variants={staggerContainer}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
						>
							<GalleryImage
								alt="Interior dining room with neon lighting"
								className="col-span-2"
							/>
							<GalleryImage alt="Chef preparing signature ramen dish" />
							<GalleryImage alt="Artistic plating of miso salmon" />
							<GalleryImage alt="Bar area with craft cocktails" />
							<GalleryImage alt="Open kitchen with chefs at work" />
							<GalleryImage
								alt="Private dining room setup"
								className="col-span-2"
							/>
						</motion.div>
					</div>
				</AnimatedSection>

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
