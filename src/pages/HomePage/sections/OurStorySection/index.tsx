import AnimatedSection from '../../../../components/ui/AnimatedSection';
import { useTranslation } from 'react-i18next';
import Container from '../../../../components/layout/Container';
import StoryContent from './StoryContent';
import StoryVisual from './StoryVisual';

const OurStorySection: React.FC = () => {
	const { t } = useTranslation('homePage');

	const handleLearnMoreClick = () => {
		// TODO: Implement navigation to about page or modal
		console.log('Learn more clicked');
	};

	return (
		<AnimatedSection
			className="py-20 px-4 bg-background-primary"
			aria-labelledby="story-heading"
		>
			<Container>
				<div className="grid lg:grid-cols-2 gap-12 items-center overflow-hidden">
					<StoryContent onLearnMoreClick={handleLearnMoreClick} />
					<StoryVisual ariaLabel={t('ourStory.visualAriaLabel')} />
				</div>
			</Container>
		</AnimatedSection>
	);
};

export default OurStorySection;
