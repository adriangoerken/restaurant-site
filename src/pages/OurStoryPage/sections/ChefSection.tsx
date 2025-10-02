import { useTranslation } from 'react-i18next';
import TwoColumnStorySection from '../../../components/sections/TwoColumnStorySection';

const ChefSection = () => {
	const { t } = useTranslation('ourStoryPage');

	return (
		<TwoColumnStorySection
			headingId="chef-heading"
			headingPart1={t('chef.headingPart1')}
			headingPart2={t('chef.headingPart2')}
			highlightColor="success"
			paragraphs={[
				t('chef.paragraph1'),
				t('chef.paragraph2'),
				t('chef.paragraph3'),
			]}
			emoji="👨‍🍳"
			visualAriaLabel={t('chef.imageAlt')}
			backgroundColor="secondary"
			layout="visual-first"
			rotateDirection="counterclockwise"
			hoverRotation={-2}
		/>
	);
};

export default ChefSection;
