import { motion, AnimatePresence } from 'framer-motion';
import FilterContent, { type FilterContentProps } from './FilterContent';

interface CollapsibleFilterContentProps extends FilterContentProps {
	isExpanded: boolean;
	contentId?: string;
}

const CollapsibleFilterContent: React.FC<CollapsibleFilterContentProps> = ({
	isExpanded,
	contentId = 'filters-content',
	...filterContentProps
}) => {
	return (
		<AnimatePresence>
			{isExpanded && (
				<motion.div
					id={contentId}
					initial={{ height: 0, opacity: 0 }}
					animate={{ height: 'auto', opacity: 1 }}
					exit={{ height: 0, opacity: 0 }}
					transition={{
						duration: 0.3,
						ease: 'easeInOut',
					}}
					className="overflow-hidden"
				>
					<FilterContent {...filterContentProps} />
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default CollapsibleFilterContent;
