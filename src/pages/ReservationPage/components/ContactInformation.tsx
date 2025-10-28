import { motion } from 'framer-motion';
import InputField from '../../ContactPage/components/InputField';
import { fadeInUp } from '../../../utils/animations';

export interface ContactInformationProps {
	formData: {
		name: string;
		email: string;
		phone: string;
	};
	errors: {
		name?: string;
		email?: string;
		phone?: string;
	};
	onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	t: (key: string) => string;
}

const ContactInformation: React.FC<ContactInformationProps> = ({
	formData,
	errors,
	onInputChange,
	t,
}) => {
	return (
		<motion.div className="space-y-6" variants={fadeInUp}>
			<h3 className="text-xl font-semibold text-text-primary border-b border-border-primary pb-2">
				{t('reservationForm.sections.contact')}
			</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<InputField
					label={t('reservationForm.fields.name.label')}
					type="text"
					name="name"
					value={formData.name}
					placeholder={t('reservationForm.fields.name.placeholder')}
					error={errors.name}
					required
					autoComplete="name"
					onChange={onInputChange}
					aria-label={t('reservationForm.fields.name.ariaLabel')}
				/>
				<InputField
					label={t('reservationForm.fields.email.label')}
					type="email"
					name="email"
					value={formData.email}
					placeholder={t('reservationForm.fields.email.placeholder')}
					error={errors.email}
					required
					autoComplete="email"
					onChange={onInputChange}
					aria-label={t('reservationForm.fields.email.ariaLabel')}
				/>
			</div>
			<InputField
				label={t('reservationForm.fields.phone.label')}
				type="tel"
				name="phone"
				value={formData.phone}
				placeholder={t('reservationForm.fields.phone.placeholder')}
				error={errors.phone}
				required
				autoComplete="tel"
				onChange={onInputChange}
				aria-label={t('reservationForm.fields.phone.ariaLabel')}
			/>
		</motion.div>
	);
};

export default ContactInformation;
