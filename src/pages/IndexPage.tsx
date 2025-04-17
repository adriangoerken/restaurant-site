import React from 'react';
import Hero from '../components/indexpage/Hero';
import ConceptIntro from '../components/indexpage/ConceptIntro';
import MenuHighlights from '../components/indexpage/MenuHighlights';
import CocktailsSection from '../components/indexpage/CocktailsSection';
import AmbianceSection from '../components/indexpage/AmbianceSection';
import BookingSection from '../components/indexpage/BookingSection';
import LocationSection from '../components/indexpage/LocationSection';

const IndexPage = () => {
	// Carousel images array - can be expanded later
	const images = [
		{
			url: 'https://i.imgur.com/itMjk80.jpeg',
			alt: 'Elegant sushi platter with mood lighting',
		},
	];

	const handleBookingClick = () => {
		// Implement booking functionality
		console.log('Booking clicked');
	};

	const handleDirectionsClick = () => {
		// Implement directions functionality
		console.log('Directions clicked');
	};

	return (
		<main className="min-h-screen text-gray-300 bg-black">
			{/* Hero Section */}
			<Hero images={images} />

			{/* Concept Introduction */}
			<ConceptIntro />

			{/* Menu Highlights */}
			<MenuHighlights />

			{/* Cocktails Section */}
			<CocktailsSection />

			{/* Ambiance Section */}
			<AmbianceSection />

			{/* Booking Section */}
			<BookingSection onBookingClick={handleBookingClick} />

			{/* Location & Hours */}
			<LocationSection onDirectionsClick={handleDirectionsClick} />
		</main>
	);
};

export default IndexPage;
