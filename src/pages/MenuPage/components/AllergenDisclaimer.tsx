import { motion } from 'framer-motion';
import { fadeInUp } from '../../../utils/animations';
import { AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Container from '../../../components/layout/Container';

const AllergenDisclaimer = () => {
	const { t } = useTranslation('menuPage');
	return (
		<motion.section
			className="py-16 bg-background-secondary"
			variants={fadeInUp}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			aria-labelledby="allergen-info-heading"
		>
			<Container>
				<div className="max-w-4xl mx-auto text-center">
					<div className="flex justify-center mb-6">
						<AlertCircle
							size={48}
							className="text-highlight"
							aria-hidden="true"
						/>
					</div>
					<h2
						id="allergen-info-heading"
						className="text-2xl md:text-3xl font-bold text-text-primary mb-6 font-display"
					>
						{t('allergenInfo.heading')}
					</h2>
					<p className="text-text-secondary text-lg leading-relaxed">
						{t('allergenInfo.description')}
					</p>
				</div>
			</Container>
		</motion.section>
	);
};

export default AllergenDisclaimer;
