import { t } from 'i18next';
import { BeatLoader } from 'react-spinners';
import GuestInformation from './GuestInformation';
import ReservationDetails from './ReservationDetails';
import SpecialRequests from './SpecialRequests';

type ReservationFormProps = {
	handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
	isSubmitting: boolean;
	minDate: string;
};

const ReservationForm = ({
	handleSubmit,
	isSubmitting,
	minDate,
}: ReservationFormProps) => {
	return (
		<form onSubmit={handleSubmit} className="mt-8 space-y-6">
			<GuestInformation />
			<ReservationDetails minDate={minDate} />
			<SpecialRequests />

			<button
				type="submit"
				disabled={isSubmitting}
				className="w-full md:w-auto px-8 py-3 bg-rose-500 hover:bg-rose-600 disabled:bg-rose-400 disabled:cursor-not-allowed text-white font-medium rounded-md transition-colors flex items-center justify-center min-h-[44px]"
			>
				{isSubmitting ? (
					<BeatLoader color="#ffffff" size={8} />
				) : (
					t('reservationPage.submit', 'Submit Reservation')
				)}
			</button>
		</form>
	);
};

export default ReservationForm;
