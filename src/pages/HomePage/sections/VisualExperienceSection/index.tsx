import { motion } from 'framer-motion';
import AnimatedSection from '../../../../components/ui/AnimatedSection';
import { staggerContainer } from '../../../../utils/animations';
import GalleryImage from './GalleryImage';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../../../../components/ui/SectionHeading';
import Container from '../../../../components/layout/Container';

const VisualExperienceSection = () => {
	const { t } = useTranslation('homePage');

	return (
		<AnimatedSection
			className="py-20 px-4 bg-background-secondary"
			aria-label={t('visualExperience.ariaLabel')}
		>
			<Container>
				<div className="container mx-auto">
					<SectionHeading
						id="featured-menu-heading"
						part1={t('visualExperience.headingPart1')}
						part2={t('visualExperience.headingPart2')}
						subheading={t('visualExperience.subheading')}
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
							alt={t('visualExperience.images.diningRoom')}
							className="col-span-2"
						/>
						<GalleryImage
							alt={t('visualExperience.images.chefRamen')}
						/>
						<GalleryImage
							alt={t('visualExperience.images.misoSalmon')}
						/>
						<GalleryImage
							alt={t('visualExperience.images.barArea')}
						/>
						<GalleryImage
							alt={t('visualExperience.images.openKitchen')}
						/>
						<GalleryImage
							alt={t('visualExperience.images.privateDining')}
							className="col-span-2"
						/>
					</motion.div>
				</div>
			</Container>
		</AnimatedSection>
	);
};

export default VisualExperienceSection;
