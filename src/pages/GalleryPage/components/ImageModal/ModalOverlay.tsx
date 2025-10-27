import React from 'react';
import { motion } from 'framer-motion';

export interface ModalOverlayProps {
	onClose: () => void;
	children: React.ReactNode;
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({ onClose, children }) => {
	return (
		<motion.div
			className="fixed inset-0 z-50 flex items-center justify-center bg-background-primary/95 backdrop-blur-sm"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={onClose}
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-image-description"
			aria-describedby="modal-image-info modal-keyboard-help"
		>
			{children}
		</motion.div>
	);
};

export default ModalOverlay;
