import { useTranslation } from 'react-i18next';

export interface ModalFooterProps {
	onClearAll: () => void;
	onApply: () => void;
	clearAllLabel?: string;
	applyLabel?: string;
	className?: string;
}

const ModalFooter: React.FC<ModalFooterProps> = ({
	onClearAll,
	onApply,
	clearAllLabel,
	applyLabel,
	className = '',
}) => {
	const { t } = useTranslation('menuPage');

	return (
		<div className={`p-4 border-t border-border-primary ${className}`}>
			<div className="flex gap-3">
				<button
					type="button"
					onClick={onClearAll}
					className="flex-1 px-4 py-2 border border-border-primary text-text-secondary hover:text-text-primary hover:border-accent rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
				>
					{clearAllLabel || t('filters.clearAll')}
				</button>
				<button
					type="button"
					onClick={onApply}
					className="flex-1 px-4 py-2 bg-accent hover:bg-accent/90 text-text-inverse rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
				>
					{applyLabel || t('filters.applyFilters')}
				</button>
			</div>
		</div>
	);
};

export default ModalFooter;
