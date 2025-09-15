import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../../../utils/animations';
import AnimatedButton from '../../../../components/ui/AnimatedButton';
import { useTranslation } from 'react-i18next';

const TextContent = () => {
	const { t } = useTranslation('hero');

	return (
		<div className="z-10 text-center">
			{/* Title heading */}
			<motion.h1
				className="flex justify-center gap-x-4  font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
				initial="hidden"
				animate="visible"
				variants={{
					hidden: { opacity: 0, y: 50 },
					visible: {
						opacity: 1,
						y: 0,
						transition: {
							duration: 1,
							ease: 'easeOut',
						},
					},
				}}
			>
				<span className="text-text-primary">{t('titlePart1')}</span>
				<motion.span
					className="bg-gradient-to-r from-accent to-highlight bg-clip-text text-transparent"
					animate={{
						backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
					}}
					transition={{
						duration: 3,
						ease: 'linear',
					}}
					style={{ backgroundSize: '200% 200%' }}
				>
					{t('titlePart2')}
				</motion.span>
			</motion.h1>

			{/* Subtitle */}
			<motion.p
				className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed"
				initial="hidden"
				animate="visible"
				variants={fadeInUp}
				transition={{ delay: 0.3 }}
			>
				{t('subtitle')}
			</motion.p>

			{/* CTA Buttons */}
			<motion.div
				className="flex flex-col sm:flex-row gap-4 justify-center items-center"
				initial="hidden"
				animate="visible"
				variants={staggerContainer}
				transition={{ delay: 0.6 }}
			>
				<AnimatedButton
					variant="primary"
					aria-label={t('reserveButtonAriaLabel')}
				>
					{t('reserveButton')}
				</AnimatedButton>
				<AnimatedButton
					variant="outline"
					aria-label={t('menuButtonAriaLabel')}
				>
					{t('menuButton')}
				</AnimatedButton>
			</motion.div>
		</div>
	);
};

export default TextContent;
