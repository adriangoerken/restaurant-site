import { t } from 'i18next';
import FormField from '../ui/FormField';

const GuestInformation = () => {
	const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8].map((num) => ({
		value: num.toString(),
		label: `${num} ${t(
			num === 1
				? 'reservationPage.guest'
				: 'reservationPage.guestsSuffix',
			num === 1 ? 'Guest' : 'Guests'
		)}`,
	}));

	return (
		<div className="space-y-4">
			<h3 className="text-xl font-medium text-rose-400">
				{t('reservationPage.guestInfo', 'Guest Information')}
			</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<FormField
					id="name"
					name="name"
					type="text"
					label={t('reservationPage.name', 'Full Name')}
					required
				/>
				<FormField
					id="email"
					name="email"
					type="email"
					label={t('reservationPage.email', 'Email')}
					required
				/>
				<FormField
					id="phone"
					name="phone"
					type="tel"
					label={t('reservationPage.phone', 'Phone Number')}
					required
				/>
				<FormField
					id="guests"
					name="guests"
					type="select"
					label={t('reservationPage.guests', 'Number of Guests')}
					required
					options={guestOptions}
				/>
			</div>
		</div>
	);
};

export default GuestInformation;
