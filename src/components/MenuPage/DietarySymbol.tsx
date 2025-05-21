import { DietarySymbol as DietarySymbolType } from '../../types/menu';
import { t } from 'i18next';

type DietarySymbolProps = {
	symbol: DietarySymbolType;
	showDescription?: boolean;
};

const DietarySymbol = ({
	symbol,
	showDescription = false,
}: DietarySymbolProps) => {
	return (
		<>
			<span
				className="inline-block px-2 py-1 bg-zinc-800 text-xs rounded-md text-white"
				title={t(`menu:dietarySymbolData.${symbol.code}.description`)}
			>
				{t(`menu:dietarySymbolData.${symbol.symbol_id}.symbol`)}
			</span>
			{showDescription && (
				<span className="text-gray-300 text-sm">
					{t(
						`menu:dietarySymbolData.${symbol.symbol_id}.description`
					)}
				</span>
			)}
		</>
	);
};

export default DietarySymbol;
