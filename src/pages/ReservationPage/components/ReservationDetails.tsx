import { motion } from 'framer-motion';
import InputField from '../../ContactPage/components/InputField';
import SelectField from './SelectField';
import { fadeInUp } from '../../../utils/animations';
import type { TimeSlot, GuestOption } from '../utils/reservationUtils';

export interface ReservationDetailsProps {
	formData: {
		date: string;
		time: string;
		guests: string;
	};
	errors: {
		date?: string;
		time?: string;
		guests?: string;
	};
	timeSlots: TimeSlot[];
	guestOptions: GuestOption[];
	minDate: string;
	onInputChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void;
	t: (key: string) => string;
}

const ReservationDetails: React.FC<ReservationDetailsProps> = ({
	formData,
	errors,
	timeSlots,
	guestOptions,
	minDate,
	onInputChange,
	t,
}) => {
	return (
		<motion.div className="space-y-6" variants={fadeInUp}>
			<h3 className="text-xl font-semibold text-text-primary border-b border-border-primary pb-2">
				{t('reservationForm.sections.details')}
			</h3>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<InputField
					label={t('reservationForm.fields.date.label')}
					type="date"
					name="date"
					value={formData.date}
					error={errors.date}
					required
					onChange={onInputChange}
					aria-label={t('reservationForm.fields.date.ariaLabel')}
					min={minDate}
				/>
				<SelectField
					label={t('reservationForm.fields.time.label')}
					name="time"
					value={formData.time}
					options={timeSlots}
					error={errors.time}
					required
					onChange={onInputChange}
					aria-label={t('reservationForm.fields.time.ariaLabel')}
				/>
				<SelectField
					label={t('reservationForm.fields.guests.label')}
					name="guests"
					value={formData.guests}
					options={guestOptions}
					error={errors.guests}
					required
					onChange={onInputChange}
					aria-label={t('reservationForm.fields.guests.ariaLabel')}
				/>
			</div>
		</motion.div>
	);
};

export default ReservationDetails;
