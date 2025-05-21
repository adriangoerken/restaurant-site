import { Allergen } from '../../types/menu';
import { t } from 'i18next';

type AllergensListProps = {
	allergens: Allergen[];
};

const AllergensList = ({ allergens }: AllergensListProps) => {
	if (allergens.length === 0) return null;

	return (
		<div className="text-xs text-gray-400">
			<span className="font-medium text-gray-300">
				{t('menu:allergensTitle')}
			</span>
			{allergens.map((allergen, index) => (
				<span key={allergen.allergen_id}>
					<span
						title={allergen.details ? allergen.details : undefined}
					>
						{t(`menu:allergenNames.${allergen.allergen_id}`)}
					</span>
					{index < allergens.length - 1 ? ', ' : ''}
				</span>
			))}
		</div>
	);
};

export default AllergensList;
