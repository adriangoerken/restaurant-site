import { motion } from 'framer-motion';
import MenuItem from './MenuItem';
import { MenuCategory as MenuCategoryType } from '../../types/menu';
import { t } from 'i18next';

type MenuCategoryProps = {
	category: MenuCategoryType;
};

const MenuCategory = ({ category }: MenuCategoryProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			className="mb-12"
		>
			<div className="mb-6 border-b border-zinc-800 pb-2">
				<h2 className="text-2xl font-medium text-white">
					{t(category.category_name)}
				</h2>
				{category.category_description && (
					<p className="text-gray-400 mt-2 text-sm italic">
						{t(category.category_description)}
					</p>
				)}
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{category.menu_items.map((item) => (
					<MenuItem key={item.item_id} item={item} />
				))}
			</div>
		</motion.div>
	);
};

export default MenuCategory;
