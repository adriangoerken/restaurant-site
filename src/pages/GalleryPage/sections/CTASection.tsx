import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Container from '../../../components/layout/Container';
import SectionHeading from '../../../components/ui/SectionHeading';
import AnimatedButton from '../../../components/ui/AnimatedButton';
import AnimatedSection from '../../../components/ui/AnimatedSection';

const CTASection: React.FC = () => {
	const { t } = useTranslation('galleryPage');
	const navigate = useNavigate();

	const handleReserve = () => {
		// TODO: Navigate to reservation page when implemented
		console.log('Navigate to reservation page');
	};

	const handleViewMenu = () => {
		navigate('/menu');
	};

	return (
		<AnimatedSection
			className="py-16 md:py-24 bg-gradient-to-br from-background-secondary via-background-primary to-background-secondary"
			aria-labelledby="gallery-cta-heading"
		>
			<Container>
				<div className="text-center">
					<SectionHeading
						id="gallery-cta-heading"
						part1={t('cta.headingPart1')}
						part2={t('cta.headingPart2')}
						subheading={t('cta.subheading')}
						highlightColor="highlight"
					/>

					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
						<AnimatedButton
							variant="primary"
							size="lg"
							onClick={handleReserve}
							aria-label={t('cta.reserveButtonAriaLabel')}
						>
							{t('cta.reserveButton')}
						</AnimatedButton>
						<AnimatedButton
							variant="outline"
							size="lg"
							onClick={handleViewMenu}
							aria-label={t('cta.menuButtonAriaLabel')}
						>
							{t('cta.menuButton')}
						</AnimatedButton>
					</div>
				</div>
			</Container>
		</AnimatedSection>
	);
};

export default CTASection;
