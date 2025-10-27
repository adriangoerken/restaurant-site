import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import type { GalleryImage } from '../../../data/galleryData';
import { fadeInUp } from '../../../utils/animations';

export interface GalleryGridProps {
	images: GalleryImage[];
	onImageClick: (image: GalleryImage) => void;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images, onImageClick }) => {
	const { t } = useTranslation('galleryPage');

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
			{images.map((image, index) => (
				<motion.div
					key={image.id}
					className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer bg-background-secondary"
					variants={fadeInUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{ delay: index * 0.05 }}
					whileHover={{ scale: 1.03 }}
					onClick={() => onImageClick(image)}
					role="button"
					tabIndex={0}
					aria-label={`${t('gallery.viewImageButton')}: ${
						image.description
					}`}
					aria-describedby={
						image.featured ? `featured-${image.id}` : undefined
					}
					onKeyDown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							e.preventDefault();
							onImageClick(image);
						}
					}}
				>
					<img
						src={image.thumbnail}
						alt={image.alt}
						className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
						loading="lazy"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-background-primary/90 via-background-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						<div className="absolute bottom-0 left-0 right-0 p-4">
							<p className="text-text-primary font-semibold text-sm line-clamp-2">
								{image.description}
							</p>
							{image.featured && (
								<span
									id={`featured-${image.id}`}
									className="inline-block mt-2 px-3 py-1 bg-highlight text-text-inverse text-xs font-bold rounded-full"
								>
									{t('gallery.featured')}
								</span>
							)}
						</div>
					</div>
				</motion.div>
			))}
		</div>
	);
};

export default GalleryGrid;
