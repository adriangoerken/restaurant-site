import { motion } from 'framer-motion';
import TextAreaField from '../../ContactPage/components/TextAreaField';
import { fadeInUp } from '../../../utils/animations';

export interface SpecialRequestsProps {
	value: string;
	error?: string;
	onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	t: (key: string) => string;
}

const SpecialRequests: React.FC<SpecialRequestsProps> = ({
	value,
	error,
	onInputChange,
	t,
}) => {
	return (
		<motion.div className="space-y-6" variants={fadeInUp}>
			<h3 className="text-xl font-semibold text-text-primary border-b border-border-primary pb-2">
				{t('reservationForm.sections.requests')}
			</h3>
			<TextAreaField
				label={t('reservationForm.fields.specialRequests.label')}
				name="specialRequests"
				value={value}
				placeholder={t(
					'reservationForm.fields.specialRequests.placeholder'
				)}
				error={error}
				rows={4}
				onChange={onInputChange}
				aria-label={t(
					'reservationForm.fields.specialRequests.ariaLabel'
				)}
			/>
		</motion.div>
	);
};

export default SpecialRequests;
