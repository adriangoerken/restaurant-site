import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { fadeInUp } from '../../../utils/animations';
import Container from '../../../components/layout/Container';

interface MenuHeroProps {
	className?: string;
}

interface FloatingElementProps {
	className: string;
	delay?: number;
	duration?: number;
	scale?: [number, number, number];
	opacity?: [number, number, number];
	movement?: { x?: [number, number, number]; y?: [number, number, number] };
}

const FloatingElement = ({
	className,
	delay = 0,
	duration = 8,
	scale = [1, 1.2, 1],
	opacity = [0.3, 0.6, 0.3],
	movement = {},
}: FloatingElementProps) => {
	const shouldReduceMotion = window.matchMedia(
		'(prefers-reduced-motion: reduce)'
	).matches;

	if (shouldReduceMotion) {
		return <div className={`${className} opacity-30`} />;
	}

	return (
		<motion.div
			className={className}
			animate={{
				scale,
				opacity,
				...movement,
			}}
			transition={{
				duration,
				ease: 'easeInOut',
				delay,
				repeat: Infinity,
			}}
		/>
	);
};

const MenuHero = ({ className }: MenuHeroProps) => {
	const { t } = useTranslation('menuPage');

	return (
		<section
			className={`relative py-20 bg-gradient-to-br from-background-primary via-background-secondary to-background-primary ${
				className || ''
			}`}
			aria-label={t('hero.ariaLabel')}
		>
			<div className="absolute inset-0 opacity-10" aria-hidden="true">
				<FloatingElement
					className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent rounded-full blur-3xl"
					duration={8}
					movement={{ x: [0, 20, 0] }}
				/>
				<FloatingElement
					className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-highlight rounded-full blur-2xl"
					delay={1}
					duration={7}
					scale={[1, 1.3, 1]}
					opacity={[0.4, 0.7, 0.4]}
					movement={{ y: [0, -20, 0] }}
				/>
			</div>

			<Container>
				<div className="text-center relative z-10">
					<motion.h1
						className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 text-text-primary"
						variants={fadeInUp}
						initial="hidden"
						animate="visible"
					>
						{t('hero.heading')}
					</motion.h1>
					<motion.p
						className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed"
						variants={fadeInUp}
						initial="hidden"
						animate="visible"
						transition={{ delay: 0.2 }}
					>
						{t('hero.subheading')}
					</motion.p>
				</div>
			</Container>
		</section>
	);
};

export default MenuHero;
export type { MenuHeroProps };
