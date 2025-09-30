import { useTranslation } from 'react-i18next';
import FilterButton from './FilterButton';

export interface SpiceFilterProps {
	selectedSpice: string;
	onSpiceChange: (spice: string) => void;
}

const SPICE_OPTIONS = ['all', 'spicy', 'non-spicy'] as const;

const SpiceFilter: React.FC<SpiceFilterProps> = ({
	selectedSpice,
	onSpiceChange,
}) => {
	const { t } = useTranslation('menuPage');

	return (
		<fieldset>
			<legend className="text-sm font-semibold text-text-primary mb-3">
				{t('filters.spiceLabel')}
			</legend>
			<div
				className="space-y-2"
				role="group"
				aria-label={t('filters.spiceLabel')}
			>
				{SPICE_OPTIONS.map((option) => (
					<FilterButton
						key={option}
						variant="spice"
						isSelected={selectedSpice === option}
						onClick={() => onSpiceChange(option)}
						ariaLabel={t(`filters.spice.${option}AriaLabel`)}
					>
						{t(`filters.spice.${option}`)}
					</FilterButton>
				))}
			</div>
		</fieldset>
	);
};

export default SpiceFilter;
