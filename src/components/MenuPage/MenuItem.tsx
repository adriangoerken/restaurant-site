import { motion } from 'framer-motion';
import DietarySymbol from './DietarySymbol';
import AllergensList from './AllergensList';
import { MenuItem as MenuItemType } from '../../types/menu';
import { t } from 'i18next';

type MenuItemProps = {
	item: MenuItemType;
};

const MenuItem = ({ item }: MenuItemProps) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			className="bg-zinc-900/50 rounded-lg overflow-hidden border border-zinc-800 hover:border-rose-500/30 transition-colors"
		>
			{item.image && (
				<div className="h-48 overflow-hidden">
					<img
						src={item.image}
						alt={`${t(item.name)} dish`}
						className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
					/>
				</div>
			)}

			<div className="p-6">
				<div className="flex justify-between items-start mb-2">
					<h3 className="text-xl font-medium text-rose-400">
						{t(item.name)}
					</h3>
					<div className="flex flex-col items-end">
						<span className="text-white font-medium">
							{item.price.toString().replace('.', ',')} €
						</span>
						{item.price_info && (
							<span className="text-xs text-gray-400">
								{t(item.price_info)}
							</span>
						)}
					</div>
				</div>

				<p className="text-gray-300 mb-4">{t(item.description)}</p>

				{item.notes && (
					<p className="text-sm text-rose-300 italic mb-4">
						{t(item.notes)}
					</p>
				)}

				<div className="mt-4">
					{/* Dietary symbols */}
					{item.dietary_symbols.length > 0 && (
						<div className="flex gap-2 mb-3">
							{item.dietary_symbols.map((symbol) => (
								<DietarySymbol
									key={symbol.symbol_id}
									symbol={symbol}
								/>
							))}
						</div>
					)}

					{/* Allergens */}
					<AllergensList allergens={item.allergens} />
				</div>
			</div>
		</motion.div>
	);
};

export default MenuItem;
