import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type CarouselImage = {
	url: string;
	alt: string;
};

interface ImageCarouselProps {
	images: CarouselImage[];
	autoPlayInterval?: number;
	showNavigation?: boolean;
	overlayGradient?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
	images,
	autoPlayInterval = 5000,
	showNavigation = true,
	overlayGradient = 'from-black/70 via-black/50 to-black/70',
}) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		if (images.length <= 1) return;

		const timer = setInterval(() => {
			setCurrentImageIndex((prev) => (prev + 1) % images.length);
		}, autoPlayInterval);

		return () => clearInterval(timer);
	}, [images.length, autoPlayInterval]);

	return (
		<div className="absolute inset-0">
			{/* Animated image carousel */}
			<AnimatePresence mode="wait">
				<motion.img
					key={currentImageIndex}
					src={images[currentImageIndex].url}
					alt={images[currentImageIndex].alt}
					className="w-full h-full object-cover"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.7 }}
				/>
			</AnimatePresence>

			{/* Gradient overlay for better text readability */}
			<div
				className={`absolute inset-0 bg-gradient-to-b ${overlayGradient}`}
			/>

			{/* Carousel navigation dots */}
			{showNavigation && images.length > 1 && (
				<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
					{images.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentImageIndex(index)}
							className={`w-2 h-2 rounded-full transition-all duration-300 ${
								index === currentImageIndex
									? 'bg-rose-500 w-4'
									: 'bg-gray-400 hover:bg-rose-400'
							}`}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default ImageCarousel;
