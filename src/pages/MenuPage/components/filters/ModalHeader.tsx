import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export interface ModalHeaderProps {
	title: string;
	onClose: () => void;
	titleId?: string;
	className?: string;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({
	title,
	onClose,
	titleId = 'modal-title',
	className = '',
}) => {
	const { t } = useTranslation('menuPage');

	return (
		<div
			className={`flex items-center justify-between p-4 border-b border-border-primary ${className}`}
		>
			<h2
				id={titleId}
				className="text-lg font-semibold text-text-primary"
			>
				{title}
			</h2>
			<button
				type="button"
				onClick={onClose}
				className="p-2 text-text-muted hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-md"
				aria-label={t('filters.closeFiltersAriaLabel')}
			>
				<X size={20} aria-hidden="true" />
			</button>
		</div>
	);
};

export default ModalHeader;
