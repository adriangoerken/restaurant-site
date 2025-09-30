import { useTranslation } from 'react-i18next';
import FilterButton from './FilterButton';

export interface DietaryFilterProps {
	selectedDietary: string;
	onDietaryChange: (dietary: string) => void;
}

const DIETARY_OPTIONS = ['all', 'vegetarian', 'vegan'] as const;

const DietaryFilter: React.FC<DietaryFilterProps> = ({
	selectedDietary,
	onDietaryChange,
}) => {
	const { t } = useTranslation('menuPage');

	return (
		<fieldset>
			<legend className="text-sm font-semibold text-text-primary mb-3">
				{t('filters.dietaryLabel')}
			</legend>
			<div
				className="space-y-2"
				role="group"
				aria-label={t('filters.dietaryLabel')}
			>
				{DIETARY_OPTIONS.map((option) => (
					<FilterButton
						key={option}
						variant="dietary"
						isSelected={selectedDietary === option}
						onClick={() => onDietaryChange(option)}
						ariaLabel={t(`filters.dietary.${option}AriaLabel`)}
					>
						{t(`filters.dietary.${option}`)}
					</FilterButton>
				))}
			</div>
		</fieldset>
	);
};

export default DietaryFilter;
