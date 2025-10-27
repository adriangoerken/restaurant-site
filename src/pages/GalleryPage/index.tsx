import React from 'react';
import HeroSection from './sections/HeroSection';
import GallerySection from './sections/GallerySection';
import CTASection from './sections/CTASection';

const GalleryPage: React.FC = () => {
	return (
		<>
			<HeroSection />
			<GallerySection />
			<CTASection />
		</>
	);
};

export default GalleryPage;
