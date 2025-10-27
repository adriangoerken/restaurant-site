import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryImage } from '../../../data/galleryData';
import ModalOverlay from './ImageModal/ModalOverlay';
import NavigationButton from './ImageModal/NavigationButton';
import ImageViewer from './ImageModal/ImageViewer';
import { useModalKeyboard } from './ImageModal/useModalKeyboard';

export interface ImageModalProps {
	image: GalleryImage;
	onClose: () => void;
	onNext: () => void;
	onPrevious: () => void;
	currentIndex: number;
	totalImages: number;
}

const ImageModal: React.FC<ImageModalProps> = ({
	image,
	onClose,
	onNext,
	onPrevious,
	currentIndex,
	totalImages,
}) => {
	const { t } = useTranslation('galleryPage');
	const modalRef = useRef<HTMLDivElement>(null);
	const closeButtonRef = useRef<HTMLButtonElement>(null);
	const previousFocusRef = useRef<HTMLElement | null>(null);
	const navigationAnnouncementRef = useRef<HTMLDivElement>(null);

	const announceNavigation = (direction: 'next' | 'previous') => {
		if (navigationAnnouncementRef.current) {
			const key =
				direction === 'next'
					? 'gallery.navigatedToNext'
					: 'gallery.navigatedToPrevious';
			navigationAnnouncementRef.current.textContent = t(key);
		}
	};

	useModalKeyboard({
		onClose,
		onNext,
		onPrevious,
		modalRef,
		announceNavigation,
	});

	useEffect(() => {
		previousFocusRef.current = document.activeElement as HTMLElement;
		document.body.style.overflow = 'hidden';

		setTimeout(() => {
			closeButtonRef.current?.focus();
		}, 100);

		return () => {
			document.body.style.overflow = 'unset';
			previousFocusRef.current?.focus();
		};
	}, []);

	const handlePreviousClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		onPrevious();
	};

	const handleNextClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		onNext();
	};

	return (
		<AnimatePresence>
			<ModalOverlay onClose={onClose}>
				<div ref={modalRef}>
					{/* Screen reader announcements */}
					<div
						className="sr-only"
						role="status"
						aria-live="polite"
						aria-atomic="true"
					>
						{t('gallery.imageDetails', {
							current: currentIndex,
							total: totalImages,
						})}
					</div>

					<div
						ref={navigationAnnouncementRef}
						className="sr-only"
						role="status"
						aria-live="assertive"
						aria-atomic="true"
					/>

					<div id="modal-keyboard-help" className="sr-only">
						{t('gallery.keyboardHelp')}
					</div>

					{/* Close button */}
					<button
						ref={closeButtonRef}
						onClick={onClose}
						className="absolute top-4 right-4 z-10 p-3 bg-background-secondary/80 hover:bg-background-secondary rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-primary"
						aria-label={t('gallery.closeModal')}
						type="button"
					>
						<X
							className="w-6 h-6 text-text-primary"
							aria-hidden="true"
						/>
					</button>

					{/* Navigation */}
					<NavigationButton
						onClick={handlePreviousClick}
						ariaLabel={t('gallery.previousImage', {
							current: currentIndex,
							total: totalImages,
						})}
						icon={ChevronLeft}
						position="left"
					/>

					<NavigationButton
						onClick={handleNextClick}
						ariaLabel={t('gallery.nextImage', {
							current: currentIndex,
							total: totalImages,
						})}
						icon={ChevronRight}
						position="right"
					/>

					{/* Image */}
					<ImageViewer
						image={image}
						currentIndex={currentIndex}
						totalImages={totalImages}
					/>
				</div>
			</ModalOverlay>
		</AnimatePresence>
	);
};

export default ImageModal;
