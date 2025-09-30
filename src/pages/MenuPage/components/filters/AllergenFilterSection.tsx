import { useTranslation } from 'react-i18next';

interface AllergenFilterSectionProps {
	selectedAllergens: string[];
	onAllergenToggle: (allergen: string) => void;
}

const AllergenFilterSection: React.FC<AllergenFilterSectionProps> = ({
	selectedAllergens,
	onAllergenToggle,
}) => {
	const { t } = useTranslation('menuPage');

	const allergenOptions = [
		'gluten',
		'dairy',
		'nuts',
		'soy',
		'fish',
		'shellfish',
		'egg',
		'sesame',
		'coconut',
		'alcohol',
	];

	return (
		<fieldset>
			<legend className="sr-only">{t('filters.allergenLabel')}</legend>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
				{allergenOptions.map((allergen) => (
					<label key={allergen} className="flex items-center">
						<input
							type="checkbox"
							checked={selectedAllergens.includes(allergen)}
							onChange={() => onAllergenToggle(allergen)}
							className="sr-only"
						/>
						<button
							type="button"
							onClick={() => onAllergenToggle(allergen)}
							className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
								selectedAllergens.includes(allergen)
									? 'bg-accent text-text-inverse'
									: 'text-text-secondary hover:text-text-primary hover:bg-background-elevated border border-border-primary hover:border-accent'
							}`}
							aria-pressed={selectedAllergens.includes(allergen)}
							title={t(`filters.allergenTooltip.${allergen}`)}
						>
							{t(`allergenInfo.common.${allergen}`)
								.replace('Enthält ', '')
								.replace('Contains ', '')}
						</button>
					</label>
				))}
			</div>
		</fieldset>
	);
};

export default AllergenFilterSection;
