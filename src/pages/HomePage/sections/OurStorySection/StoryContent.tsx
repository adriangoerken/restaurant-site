import { motion } from 'framer-motion';
import { slideInLeft } from '../../../../utils/animations';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface StoryContentProps {
	onLearnMoreClick?: () => void;
}

const StoryContent: React.FC<StoryContentProps> = ({ onLearnMoreClick }) => {
	const { t } = useTranslation('homePage');

	return (
		<motion.div
			variants={slideInLeft}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			<h2
				id="story-heading"
				className="flex gap-x-4 text-4xl md:text-5xl font-bold mb-6 font-display"
			>
				<span className="text-text-primary">
					{t('ourStory.headingPart1')}
				</span>
				<span className="text-highlight">
					{t('ourStory.headingPart2')}
				</span>
			</h2>
			<p className="text-text-secondary text-lg leading-relaxed mb-6">
				{t('ourStory.paragraph1')}
			</p>
			<p className="text-text-secondary text-lg leading-relaxed mb-8">
				{t('ourStory.paragraph2')}
			</p>
			<motion.button
				className="text-accent hover:text-highlight font-semibold flex items-center gap-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-primary rounded-lg p-2 ml-1"
				whileHover={{ x: 5 }}
				whileTap={{ scale: 0.95 }}
				onClick={onLearnMoreClick}
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
		</motion.div>
	);
};

export default StoryContent;
