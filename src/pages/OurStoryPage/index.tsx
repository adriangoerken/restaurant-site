import React from 'react';
import HeroSection from './sections/HeroSection';
import OriginStorySection from './sections/OriginStorySection';
import ChefSection from './sections/ChefSection';
import ValuesSection from './sections/ValuesSection/ValuesSection';
import VisionSection from './sections/VisionSection';

const OurStoryPage: React.FC = () => {
	return (
		<>
			<HeroSection />
			<OriginStorySection />
			<ChefSection />
			<ValuesSection />
			<VisionSection />
		</>
	);
};

export default OurStoryPage;
