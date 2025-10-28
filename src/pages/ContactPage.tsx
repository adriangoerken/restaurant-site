import React from 'react';
import HeroSection from './ContactPage/sections/HeroSection';
import ContactInfoSection from './ContactPage/sections/ContactInfoSection';
import ContactFormSection from './ContactPage/sections/ContactFormSection';
import HoursSection from './ContactPage/sections/HoursSection';
import MapSection from './ContactPage/sections/MapSection';
import CTASection from './ContactPage/sections/CTASection';

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
