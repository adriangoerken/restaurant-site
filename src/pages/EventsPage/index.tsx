import React from 'react';
import HeroSection from './sections/HeroSection';
import EventsSection from './sections/EventsSection';
import PromotionsSection from './sections/PromotionsSection';
import NewsletterSection from './sections/NewsletterSection';
import CTASection from './sections/CTASection';

const EventsPage: React.FC = () => {
	return (
		<>
			<HeroSection />
			<EventsSection />
			<PromotionsSection />
			<NewsletterSection />
			<CTASection />
		</>
	);
};

export default EventsPage;
