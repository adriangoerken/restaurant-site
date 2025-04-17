import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ContactItemProps {
	icon: ReactNode;
	text: string;
	href?: string;
}

const ContactItem = ({ icon, text, href }: ContactItemProps) => {
	const prefersReducedMotion = useReducedMotion();

	const itemVariants = {
		hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: prefersReducedMotion ? 0 : 0.5 },
		},
	};

	return (
		<motion.div variants={itemVariants} className="flex items-center gap-2">
			{icon}
			{href ? (
				<a
					href={href}
					className="text-lg hover:text-rose-500 transition-colors"
				>
					{text}
				</a>
			) : (
				<span className="text-lg">{text}</span>
			)}
		</motion.div>
	);
};

export default ContactItem;
