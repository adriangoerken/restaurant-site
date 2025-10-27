import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import type { GalleryImage } from '../../../../data/galleryData';

export interface ImageViewerProps {
	image: GalleryImage;
	currentIndex: number;
	totalImages: number;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
	image,
	currentIndex,
	totalImages,
}) => {
	const { t } = useTranslation('galleryPage');

	return (
		<motion.div
			className="relative max-w-7xl max-h-[90vh] mx-auto px-4"
			initial={{ scale: 0.9, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			exit={{ scale: 0.9, opacity: 0 }}
			transition={{ duration: 0.3 }}
			onClick={(e) => e.stopPropagation()}
		>
			<img
				src={image.url}
				alt={image.alt}
				className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
				aria-describedby="modal-image-description"
			/>

			<div className="mt-4 text-center">
				<p
					id="modal-image-description"
					className="text-text-primary text-lg font-semibold mb-2"
				>
					{image.description}
				</p>
				<p
					id="modal-image-info"
					className="text-text-secondary text-sm"
				>
					{t('gallery.imageDetails', {
						current: currentIndex,
						total: totalImages,
					})}
				</p>
			</div>
		</motion.div>
	);
};

export default ImageViewer;
