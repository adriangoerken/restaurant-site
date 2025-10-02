import { useTranslation } from 'react-i18next';
import TwoColumnStorySection from '../../../components/sections/TwoColumnStorySection';

const OriginStorySection = () => {
	const { t } = useTranslation('ourStoryPage');

	return (
		<TwoColumnStorySection
			headingId="origin-heading"
			headingPart1={t('origin.headingPart1')}
			headingPart2={t('origin.headingPart2')}
			highlightColor="accent"
			paragraphs={[
				t('origin.paragraph1'),
				t('origin.paragraph2'),
				t('origin.paragraph3'),
			]}
			emoji="🍜"
			visualAriaLabel={t('origin.imageAlt')}
			backgroundColor="primary"
			layout="text-first"
			rotateDirection="clockwise"
		/>
	);
};

export default OriginStorySection;
