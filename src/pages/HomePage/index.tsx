import React from 'react';
import HeroSection from './sections/HeroSection';
import SpecialOffersSection from './sections/SpecialOffersSection';
import SignatureDishesSection from './sections/SignatureDishesSection';
import VisualExperienceSection from './sections/VisualExperienceSection';
import OurStorySection from './sections/OurStorySection';
import CTASection from './sections/CTASection';

const HomePage: React.FC = () => {
	return (
		<>
			<HeroSection /> <SpecialOffersSection />
			<SignatureDishesSection />
			<VisualExperienceSection />
			<OurStorySection />
			<CTASection />
		</>
	);
};

export default HomePage;
