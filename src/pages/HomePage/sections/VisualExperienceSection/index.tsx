import { motion } from 'framer-motion';
import AnimatedSection from '../../../../components/ui/AnimatedSection';
import { staggerContainer } from '../../../../utils/animations';
import GalleryImage from './GalleryImage';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../../../../components/ui/SectionHeading';

const VisualExperienceSection = () => {
	const { t } = useTranslation('visualExperience');

	return (
		<AnimatedSection
			className="py-20 px-4 bg-background-secondary"
			aria-label={t('ariaLabel')}
		>
			<div className="container mx-auto">
				<SectionHeading
					id="featured-menu-heading"
					part1={t('headingPart1')}
					part2={t('headingPart2')}
					subheading={t('subheading')}
					highlightColor="success"
				/>
				<motion.div
					className="grid grid-cols-2 md:grid-cols-4 gap-4"
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<GalleryImage
						alt={t('images.diningRoom')}
						className="col-span-2"
					/>
					<GalleryImage alt={t('images.chefRamen')} />
					<GalleryImage alt={t('images.misoSalmon')} />
					<GalleryImage alt={t('images.barArea')} />
					<GalleryImage alt={t('images.openKitchen')} />
					<GalleryImage
						alt={t('images.privateDining')}
						className="col-span-2"
					/>
				</motion.div>
			</div>
		</AnimatedSection>
	);
};

export default VisualExperienceSection;
