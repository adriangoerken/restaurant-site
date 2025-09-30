import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { AlertCircle, Dot } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../../utils/animations';

interface AllergenInfoProps {
	allergens: string[];
}

const AllergenInfo: React.FC<AllergenInfoProps> = ({ allergens }) => {
	const { t } = useTranslation('menuPage');

	if (!allergens || allergens.length === 0) {
		return null;
	}

	return (
		<motion.div
			className="mt-4 p-4 bg-background-secondary rounded-lg border border-border-primary"
			variants={fadeInUp}
			initial="hidden"
			animate="visible"
			aria-labelledby="allergen-heading"
		>
			<h4
				id="allergen-heading"
				className="flex items-center text-sm font-semibold text-text-secondary mb-2"
			>
				<AlertCircle
					size={16}
					className="mr-2 text-highlight"
					aria-hidden="true"
				/>
				{t('allergenInfo.heading')}
			</h4>
			<motion.ul
				className="flex flex-wrap items-center gap-x-3 gap-y-1"
				variants={staggerContainer}
				initial="hidden"
				animate="visible"
				aria-label={t('allergenInfo.listAriaLabel')}
			>
				{allergens.map((allergen, index) => (
					<motion.li
						key={allergen}
						className="flex items-center text-sm text-text-muted"
						variants={fadeInUp}
					>
						{index > 0 && (
							<Dot
								className="text-text-muted -ml-2"
								aria-hidden="true"
							/>
						)}
						<span>{t(`allergenInfo.common.${allergen}`)}</span>
					</motion.li>
				))}
			</motion.ul>
		</motion.div>
	);
};

export default AllergenInfo;
