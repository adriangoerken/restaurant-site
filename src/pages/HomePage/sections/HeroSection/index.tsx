import Container from '../../../../components/layout/Container';
import AnimatedBackground from './AnimatedBackground';
import TextContent from './TextContent';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
	const { t } = useTranslation('hero');

	return (
		<section
			className={`relative min-h-screen bg-gradient-to-br from-background-primary via-background-secondary to-background-primary flex items-center justify-center overflow-hidden`}
			aria-label={t('welcomeAriaLabel')}
		>
			<AnimatedBackground />
			<Container>
				<TextContent />
			</Container>
		</section>
	);
};

export default HeroSection;
