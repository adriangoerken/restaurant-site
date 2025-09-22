import { motion } from 'framer-motion';
import { Home, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fadeInUp, staggerContainer } from '../utils/animations';
import Container from '../components/layout/Container';
import AnimatedButton from '../components/ui/AnimatedButton';

const NotFoundPage = () => {
	const { t } = useTranslation('notFoundPage');

	return (
		<main
			className="min-h-screen bg-background-primary flex items-center justify-center"
			role="main"
			aria-labelledby="not-found-heading"
		>
			<Container>
				<motion.div
					className="text-center max-w-lg mx-auto"
					variants={staggerContainer}
					initial="hidden"
					animate="visible"
				>
					{/* Simple 404 with chef hat */}
					<motion.div
						className="flex items-center justify-center gap-2 mb-8"
						variants={fadeInUp}
					>
						<ChefHat
							size={48}
							className="text-accent"
							aria-hidden="true"
							aria-label={t('ariaLabels.chefHatDecoration')}
						/>
						<span className="text-6xl md:text-7xl font-bold font-display text-text-primary">
							404
						</span>
						<ChefHat
							size={48}
							className="text-accent"
							aria-hidden="true"
							aria-label={t('ariaLabels.chefHatDecoration')}
						/>
					</motion.div>

					{/* Error message */}
					<motion.h1
						id="not-found-heading"
						className="text-2xl md:text-3xl font-bold mb-4 font-display text-text-primary"
						variants={fadeInUp}
					>
						{t('heading')}
					</motion.h1>

					<motion.p
						className="text-lg text-text-secondary mb-8 leading-relaxed"
						variants={fadeInUp}
					>
						{t('description')}
					</motion.p>

					{/* Home button */}
					<motion.div variants={fadeInUp}>
						<Link to="/">
							<AnimatedButton
								variant="primary"
								size="lg"
								aria-label={t('actions.backToHome.ariaLabel')}
								type="button"
							>
								<div className="flex">
									<Home
										size={20}
										className="mr-2"
										aria-hidden="true"
									/>
									{t('actions.backToHome.label')}
								</div>
							</AnimatedButton>
						</Link>
					</motion.div>
				</motion.div>
			</Container>

			{/* Skip link for accessibility */}
			<a
				href="#main-navigation"
				className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-text-inverse px-4 py-2 rounded-md font-medium z-50"
			>
				{t('ariaLabels.skipNavigation')}
			</a>
		</main>
	);
};

export default NotFoundPage;
