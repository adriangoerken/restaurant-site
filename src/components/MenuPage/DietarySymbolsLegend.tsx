import { motion } from 'framer-motion';
import DietarySymbol from './DietarySymbol';
import { t } from 'i18next';

type DietarySymbolsLegendProps = {
	symbols: Array<{
		symbol_id: number;
		code: string;
		description: string;
		details?: string | null;
	}>;
};

const DietarySymbolsLegend = ({ symbols }: DietarySymbolsLegendProps) => {
	if (symbols.length === 0) return null;

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="mb-12 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800"
		>
			<h3 className="text-white text-lg mb-3">
				{t('menu:dietaryHeader')}
			</h3>
			<div className="flex flex-wrap gap-4">
				{symbols.map((symbol) => (
					<div
						key={symbol.symbol_id}
						className="flex items-center gap-2"
					>
						<DietarySymbol symbol={symbol} showDescription />
					</div>
				))}
			</div>
			<p className="text-gray-400 text-xs mt-3 italic">
				{t('menu:importantAllergenDisclaimer')}
			</p>
		</motion.div>
	);
};

export default DietarySymbolsLegend;
