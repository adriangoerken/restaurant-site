import React from 'react';
import HeroSection from './sections/HeroSection';
import ContactInfoSection from './sections/ContactInfoSection';
import ContactFormSection from './sections/ContactFormSection';
import HoursSection from './sections/HoursSection';
import MapSection from './sections/MapSection';
import CTASection from './sections/CTASection';

const ContactPage: React.FC = () => {
	return (
		<>
			<HeroSection />
			<ContactInfoSection />
			<ContactFormSection />
			<HoursSection />
			<MapSection />
			<CTASection />
		</>
	);
};

export default ContactPage;
