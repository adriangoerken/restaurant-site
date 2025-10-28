import React from 'react';
import HeroSection from './sections/HeroSection';
import ReservationFormSection from './sections/ReservationFormSection';
import InfoSection from './sections/InfoSection';
import CTASection from './sections/CTASection';

const ReservationPage: React.FC = () => {
	return (
		<>
			<HeroSection />
			<ReservationFormSection />
			<InfoSection />
			<CTASection />
		</>
	);
};

export default ReservationPage;
