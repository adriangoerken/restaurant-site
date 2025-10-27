import { useEffect, useCallback } from 'react';
import type { RefObject } from 'react';

export interface UseModalKeyboardProps {
	onClose: () => void;
	onNext: () => void;
	onPrevious: () => void;
	modalRef: RefObject<HTMLDivElement | null>;
	announceNavigation: (direction: 'next' | 'previous') => void;
}

export const useModalKeyboard = ({
	onClose,
	onNext,
	onPrevious,
	modalRef,
	announceNavigation,
}: UseModalKeyboardProps) => {
	// Handle keyboard navigation
	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			switch (e.key) {
				case 'Escape':
					onClose();
					break;
				case 'ArrowLeft':
					e.preventDefault();
					onPrevious();
					announceNavigation('previous');
					break;
				case 'ArrowRight':
					e.preventDefault();
					onNext();
					announceNavigation('next');
					break;
				default:
					break;
			}
		},
		[onClose, onNext, onPrevious, announceNavigation]
	);

	// Focus trap implementation
	const handleFocusTrap = useCallback(
		(e: KeyboardEvent) => {
			if (e.key !== 'Tab' || !modalRef.current) return;

			const focusableElements = Array.from(
				modalRef.current.querySelectorAll<HTMLElement>(
					'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
				)
			);
			const firstElement = focusableElements[0];
			const lastElement = focusableElements[focusableElements.length - 1];

			if (e.shiftKey) {
				if (document.activeElement === firstElement) {
					e.preventDefault();
					lastElement?.focus();
				}
			} else {
				if (document.activeElement === lastElement) {
					e.preventDefault();
					firstElement?.focus();
				}
			}
		},
		[modalRef]
	);

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
		window.addEventListener('keydown', handleFocusTrap);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			window.removeEventListener('keydown', handleFocusTrap);
		};
	}, [handleKeyDown, handleFocusTrap]);
};
