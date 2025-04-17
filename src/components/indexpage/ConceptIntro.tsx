import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Container from '../Container';

interface ConceptIntroProps {
	text?: string;
}

const ConceptIntro: React.FC<ConceptIntroProps> = ({
	text = 'Step into Umami Nights, where modern Asian flavors meet urban energy. Inspired by Japanese Izakaya culture, we invite you to share plates, discover craft cocktails, and connect in a vibrant setting that captures the essence of contemporary Asian dining.',
}) => {
	const prefersReducedMotion = useReducedMotion();

	const sectionVariants = {
		hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: prefersReducedMotion ? 0 : 0.5 },
		},
	};

	return (
		<motion.section
			className="py-20"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.5 }}
			variants={sectionVariants}
		>
			<Container>
				<div className="text-center">
					<p className="text-xl leading-relaxed">{text}</p>
				</div>
			</Container>
		</motion.section>
	);
};

export default ConceptIntro;
