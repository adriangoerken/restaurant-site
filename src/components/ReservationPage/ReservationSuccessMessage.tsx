import { t } from 'i18next';

const ReservationSuccessMessage = () => {
	return (
		<div className="max-w-2xl mx-auto text-center space-y-4">
			<div className="text-rose-500 text-5xl mb-6">✓</div>
			<h2 className="text-2xl font-medium text-gray-100">
				{t('reservationPage.successTitle', 'Reservation Successful!')}
			</h2>
			<p className="text-gray-300">
				{t(
					'reservationPage.successMessage',
					'Thank you for your reservation. We have sent a confirmation email with all the details.'
				)}
			</p>
		</div>
	);
};

export default ReservationSuccessMessage;
