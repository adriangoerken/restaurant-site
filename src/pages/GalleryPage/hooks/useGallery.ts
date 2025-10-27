import { useState, useMemo } from 'react';
import { galleryImages } from '../../../data/galleryData';
import type { GalleryCategory, GalleryImage } from '../../../data/galleryData';

const IMAGES_PER_PAGE = 12;

export interface UseGalleryProps {
	initialCategory?: GalleryCategory;
}

export const useGallery = ({
	initialCategory = 'all',
}: UseGalleryProps = {}) => {
	const [selectedCategory, setSelectedCategory] =
		useState<GalleryCategory>(initialCategory);
	const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(
		null
	);
	const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE);

	const filteredImages = useMemo(() => {
		if (selectedCategory === 'all') {
			return galleryImages;
		}
		return galleryImages.filter(
			(image) => image.category === selectedCategory
		);
	}, [selectedCategory]);

	const visibleImages = filteredImages.slice(0, visibleCount);
	const hasMore = visibleCount < filteredImages.length;

	const handleLoadMore = () => {
		const newCount = Math.min(
			visibleCount + IMAGES_PER_PAGE,
			filteredImages.length
		);
		setVisibleCount(newCount);
		return newCount - visibleCount; // Return number of newly loaded images
	};

	const handleCategoryChange = (category: GalleryCategory) => {
		setSelectedCategory(category);
		setVisibleCount(IMAGES_PER_PAGE);
	};

	const handleImageClick = (image: GalleryImage) => {
		setSelectedImage(image);
	};

	const handleCloseModal = () => {
		setSelectedImage(null);
	};

	const handleNextImage = () => {
		if (!selectedImage) return;
		const currentIndex = filteredImages.findIndex(
			(img) => img.id === selectedImage.id
		);
		const nextIndex = (currentIndex + 1) % filteredImages.length;
		setSelectedImage(filteredImages[nextIndex]);
	};

	const handlePreviousImage = () => {
		if (!selectedImage) return;
		const currentIndex = filteredImages.findIndex(
			(img) => img.id === selectedImage.id
		);
		const previousIndex =
			currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
		setSelectedImage(filteredImages[previousIndex]);
	};

	const getCurrentImageIndex = () => {
		if (!selectedImage) return 0;
		return (
			filteredImages.findIndex((img) => img.id === selectedImage.id) + 1
		);
	};

	return {
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
	};
};
