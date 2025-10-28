import { motion } from 'framer-motion';
import Container from '../../../components/layout/Container';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { useTranslation } from 'react-i18next';
import { MapPin, Navigation } from 'lucide-react';
import AnimatedSection from '../../../components/ui/AnimatedSection';
import AnimatedButton from '../../../components/ui/AnimatedButton';

const MapSection: React.FC = () => {
	const { t } = useTranslation('contactPage');

	// Mock coordinates for Downtown District, NY
	const address = `${t('contactInfo.address.street')}, ${t(
		'contactInfo.address.city'
	)}`;
	const mapUrl = `https://maps.google.com/?q=${encodeURIComponent(address)}`;

	return (
		<AnimatedSection
			className="py-20 bg-background-primary"
			aria-labelledby="map-heading"
		>
			<Container>
				<motion.div
					className="max-w-6xl mx-auto"
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<motion.div
						className="text-center mb-12"
						variants={fadeInUp}
					>
						<h2
							id="map-heading"
							className="text-3xl md:text-5xl font-bold font-display mb-4 text-text-primary"
						>
							{t('map.heading')}
						</h2>
						<p className="text-lg text-text-secondary">
							{t('map.subheading')}
						</p>
					</motion.div>

					<motion.div
						className="bg-background-elevated border-2 border-border-primary rounded-lg overflow-hidden"
						variants={fadeInUp}
					>
						{/* Mock Map Placeholder */}
						<div
							className="relative bg-gradient-to-br from-background-secondary to-background-elevated"
							style={{ paddingBottom: '56.25%' }}
							role="region"
							aria-label={`${t('map.ariaLabel')} - ${t(
								'contactInfo.address.street'
							)}, ${t('contactInfo.address.city')}`}
						>
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="text-center space-y-6 p-8">
									<div className="inline-flex p-6 bg-accent/10 rounded-full">
										<MapPin
											className="w-16 h-16 text-accent"
											aria-hidden="true"
										/>
									</div>
									<div className="space-y-2">
										<p className="text-xl font-semibold text-text-primary">
											{t('contactInfo.address.street')}
										</p>
										<p className="text-lg text-text-secondary">
											{t('contactInfo.address.city')}
										</p>
									</div>
									<AnimatedButton
										variant="primary"
										size="lg"
										onClick={() =>
											window.open(mapUrl, '_blank')
										}
										aria-label={t('map.directions')}
									>
										<Navigation
											className="w-5 h-5"
											aria-hidden="true"
										/>
										{t('map.directions')}
									</AnimatedButton>
									<p className="text-sm text-text-muted max-w-md mx-auto">
										Interactive map integration will be
										implemented in the backend phase
									</p>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Alternative: If you want to embed an actual map, use iframe */}
					{/* 
					<motion.div
						className="relative rounded-lg overflow-hidden border-2 border-border-primary"
						variants={fadeInUp}
						style={{ height: '450px' }}
					>
						<iframe
							src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(address)}`}
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title={t('map.ariaLabel')}
						></iframe>
					</motion.div>
					*/}
				</motion.div>
			</Container>
		</AnimatedSection>
	);
};

export default MapSection;
