import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { slideInRight } from '../../../../utils/animations';

export interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
	ariaLabelledBy?: string;
	maxWidth?: string;
	position?: 'right' | 'center';
	className?: string;
}

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	children,
	ariaLabelledBy = 'modal-title',
	maxWidth = 'max-w-sm',
	position = 'right',
	className = '',
}) => {
	// Handle ESC key press
	useEffect(() => {
		const handleEsc = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener('keydown', handleEsc);
			// Prevent body scroll when modal is open
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.removeEventListener('keydown', handleEsc);
			document.body.style.overflow = 'unset';
		};
	}, [isOpen, onClose]);

	const modalVariants =
		position === 'right'
			? slideInRight
			: {
					hidden: { opacity: 0, scale: 0.95 },
					visible: { opacity: 1, scale: 1 },
			  };

	const modalClasses =
		position === 'right'
			? `fixed inset-y-0 right-0 w-full ${maxWidth}`
			: `fixed inset-0 flex items-center justify-center p-4`;

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Modal Backdrop */}
					<motion.div
						className="fixed inset-0 bg-black/60 z-50 md:hidden"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
						aria-hidden="true"
					/>

					{/* Modal Content */}
					<motion.div
						className={`${modalClasses} bg-background-primary z-50 md:hidden ${className}`}
						variants={modalVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
						role="dialog"
						aria-modal="true"
						aria-labelledby={ariaLabelledBy}
					>
						{children}
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default Modal;
