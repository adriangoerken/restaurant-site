import { motion } from 'framer-motion';
import Container from '../layout/Container';
import { staggerContainer } from '../../utils/animations';
import FooterBrand from './FooterBrand';
import FooterQuickLinks from './FooterQuickLinks';
import FooterContact from './FooterContact';
import FooterHours from './FooterHours';
import FooterBottom from './FooterBottom';

const Footer = () => {
	return (
		<footer className="bg-background-secondary border-t border-border-primary">
			<Container>
				<motion.div
					className="py-16"
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
						<FooterBrand />
						<FooterQuickLinks />
						<FooterContact />
						<FooterHours />
					</div>
					<FooterBottom />
				</motion.div>
			</Container>
		</footer>
	);
};

export default Footer;
