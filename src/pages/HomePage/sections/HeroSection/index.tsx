import Container from '../../../../components/layout/Container';
import AnimatedSection from '../../../../components/ui/AnimatedSection';
import AnimatedBackground from './AnimatedBackground';
import TextContent from './TextContent';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
	const { t } = useTranslation('homePage');

	return (
		<AnimatedSection
			className={`relative min-h-screen bg-gradient-to-br from-background-primary via-background-secondary to-background-primary flex items-center justify-center overflow-hidden`}
			aria-labelledby={t('hero.welcomeAriaLabel')}
		>
			<AnimatedBackground />
			<Container>
				<TextContent />
			</Container>
		</AnimatedSection>
	);
};

export default HeroSection;
