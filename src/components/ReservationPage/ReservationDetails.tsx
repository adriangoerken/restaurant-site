import { t } from 'i18next';
import FormField from '../ui/FormField';

type ReservationDetailsProps = {
	minDate: string;
};

const ReservationDetails = ({ minDate }: ReservationDetailsProps) => {
	const timeSlots = [
		'17:00',
		'17:30',
		'18:00',
		'18:30',
		'19:00',
		'19:30',
		'20:00',
		'20:30',
		'21:00',
		'21:30',
		'22:00',
	];

	const timeOptions = timeSlots.map((time) => ({
		value: time,
		label: time,
	}));

	return (
		<div className="space-y-4">
			<h3 className="text-xl font-medium text-rose-400">
				{t('reservationPage.reservationDetails', 'Reservation Details')}
			</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<FormField
					id="date"
					name="date"
					type="date"
					label={t('reservationPage.date', 'Date')}
					required
					min={minDate}
				/>
				<FormField
					id="time"
					name="time"
					type="select"
					label={t('reservationPage.time', 'Time')}
					required
					options={timeOptions}
				/>
			</div>
		</div>
	);
};

export default ReservationDetails;
