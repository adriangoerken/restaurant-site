import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import TwoColumnStorySection from '../../../components/sections/TwoColumnStorySection';
import { Link } from 'react-router-dom';

const OurStorySection = () => {
	const { t } = useTranslation('homePage');

	const learnMoreAction = (
		<Link to="story">
			<motion.button
				className="text-accent hover:text-highlight font-semibold flex items-center gap-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-primary rounded-lg p-2"
				whileHover={{ x: 5 }}
				whileTap={{ scale: 0.95 }}
				aria-label={t('ourStory.learnMoreButtonAriaLabel')}
				type="button"
			>
				{t('ourStory.learnMoreButton')}
				<motion.span
					animate={{ x: [0, 3, 0] }}
					transition={{
						duration: 1.5,
					}}
					aria-hidden="true"
				>
					<ArrowRight size={20} />
				</motion.span>
			</motion.button>
		</Link>
	);

	return (
		<TwoColumnStorySection
			headingId="story-heading"
			headingPart1={t('ourStory.headingPart1')}
			headingPart2={t('ourStory.headingPart2')}
			highlightColor="highlight"
			paragraphs={[t('ourStory.paragraph1'), t('ourStory.paragraph2')]}
			emoji="👨‍🍳"
			visualAriaLabel={t('ourStory.visualAriaLabel')}
			backgroundColor="primary"
			layout="text-first"
			rotateDirection="clockwise"
			action={learnMoreAction}
			className="px-4"
		/>
	);
};

export default OurStorySection;
