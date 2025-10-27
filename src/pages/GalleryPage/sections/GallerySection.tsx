import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../../components/layout/Container';
import SectionHeading from '../../../components/ui/SectionHeading';
import CategoryFilter from '../components/CategoryFilter';
import GalleryGrid from '../components/GalleryGrid';
import ImageModal from '../components/ImageModal';
import AnimatedButton from '../../../components/ui/AnimatedButton';
import { useGallery } from '../hooks/useGallery';
import type { GalleryCategory } from '../../../data/galleryData';

export interface GallerySectionProps {
	initialCategory?: GalleryCategory;
}

const GallerySection: React.FC<GallerySectionProps> = ({ initialCategory }) => {
	const { t } = useTranslation('galleryPage');
	const loadMoreAnnouncementRef = useRef<HTMLDivElement>(null);

	const {
		selectedCategory,
		selectedImage,
		visibleImages,
		filteredImages,
		hasMore,
		handleLoadMore,
		handleCategoryChange,
		handleImageClick,
		handleCloseModal,
		handleNextImage,
		handlePreviousImage,
		getCurrentImageIndex,
	} = useGallery({ initialCategory });

	const announceLoadMore = () => {
		const newImagesCount = handleLoadMore();
		if (loadMoreAnnouncementRef.current) {
			loadMoreAnnouncementRef.current.textContent = t(
				'gallery.loadedMoreImages',
				{ count: newImagesCount }
			);
		}
	};

	return (
		<section
			className="py-16 md:py-24 bg-background-primary"
			aria-labelledby="gallery-section-heading"
		>
			<Container>
				<SectionHeading
					id="gallery-section-heading"
					part1={t('gallery.headingPart1')}
					part2={t('gallery.headingPart2')}
					subheading={t('gallery.subheading')}
				/>

				<CategoryFilter
					selectedCategory={selectedCategory}
					onCategoryChange={handleCategoryChange}
					aria-label={t('gallery.filterByCategory')}
				/>

				{visibleImages.length > 0 ? (
					<>
						<div
							className="mb-6 text-center text-text-secondary"
							role="status"
							aria-live="polite"
							aria-atomic="true"
						>
							{t('gallery.imageCount', {
								count: visibleImages.length,
								total: filteredImages.length,
							})}
						</div>

						<div
							ref={loadMoreAnnouncementRef}
							className="sr-only"
							role="status"
							aria-live="polite"
							aria-atomic="true"
						/>

						<GalleryGrid
							images={visibleImages}
							onImageClick={handleImageClick}
						/>

						{hasMore && (
							<div className="mt-12 text-center">
								<AnimatedButton
									variant="outline"
									onClick={announceLoadMore}
									aria-label={t('gallery.loadMoreAriaLabel', {
										remaining:
											filteredImages.length -
											visibleImages.length,
									})}
								>
									{t('gallery.loadMore')}
								</AnimatedButton>
							</div>
						)}
					</>
				) : (
					<div className="text-center py-12" role="status">
						<p className="text-text-secondary text-lg">
							{t('gallery.noImages')}
						</p>
					</div>
				)}
			</Container>

			{selectedImage && (
				<ImageModal
					image={selectedImage}
					onClose={handleCloseModal}
					onNext={handleNextImage}
					onPrevious={handlePreviousImage}
					currentIndex={getCurrentImageIndex()}
					totalImages={filteredImages.length}
				/>
			)}
		</section>
	);
};

export default GallerySection;
