import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../../../components/layout/Container';
import { fadeInUp, staggerContainer } from '../../../utils/animations';

const HeroSection: React.FC = () => {
	const { t } = useTranslation('reservationPage');

	return (
		<section
			className="relative py-20 md:py-32 bg-gradient-to-br from-background-primary via-background-secondary to-background-primary overflow-hidden"
			aria-labelledby="reservation-hero-heading"
		>
			{/* Animated background decoration */}
			<motion.div
				className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.3, 0.5, 0.3],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
				aria-hidden="true"
			/>
			<motion.div
				className="absolute bottom-0 left-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl"
				animate={{
					scale: [1, 1.3, 1],
					opacity: [0.3, 0.5, 0.3],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: 'easeInOut',
					delay: 1,
				}}
				aria-hidden="true"
			/>

			<Container>
				<motion.div
					className="relative z-10 max-w-4xl mx-auto text-center"
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<motion.h1
						id="reservation-hero-heading"
						className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6"
						variants={fadeInUp}
					>
						{t('hero.heading.normal')}{' '}
						<span className="bg-gradient-to-r from-accent to-highlight bg-clip-text text-transparent">
							{t('hero.heading.gradient')}
						</span>
					</motion.h1>
					<motion.p
						className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8"
						variants={fadeInUp}
					>
						{t('hero.description')}
					</motion.p>
					<motion.p
						className="text-md text-text-muted"
						variants={fadeInUp}
					>
						{t('hero.subtitle')}
					</motion.p>
				</motion.div>
			</Container>
		</section>
	);
};

export default HeroSection;
