import { useTranslation } from 'react-i18next';
import Modal from './Modal';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';
import FilterContent, { type FilterContentProps } from './FilterContent';

export interface MobileFilterModalProps extends FilterContentProps {
	isOpen: boolean;
	onClose: () => void;
	onClearAll: () => void;
}

const MobileFilterModal: React.FC<MobileFilterModalProps> = ({
	isOpen,
	onClose,
	onClearAll,
	filters,
	onFiltersChange,
	categories,
	onAllergenToggle,
}) => {
	const { t } = useTranslation('menuPage');

	const handleClearAndClose = () => {
		onClearAll();
		onClose();
	};

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			ariaLabelledBy="filters-modal-title"
		>
			<div className="flex flex-col h-full">
				<ModalHeader
					title={t('filters.filtersLabel')}
					onClose={onClose}
					titleId="filters-modal-title"
				/>

				<div className="flex-1 overflow-y-auto p-4">
					<FilterContent
						filters={filters}
						onFiltersChange={onFiltersChange}
						categories={categories}
						onAllergenToggle={onAllergenToggle}
					/>
				</div>

				<ModalFooter
					onClearAll={handleClearAndClose}
					onApply={onClose}
				/>
			</div>
		</Modal>
	);
};

export default MobileFilterModal;
