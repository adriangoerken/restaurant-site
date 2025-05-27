import { t } from 'i18next';
import FormField from '../ui/FormField';

const SpecialRequests = () => {
	return (
		<div className="space-y-4">
			<FormField
				id="requests"
				name="requests"
				type="textarea"
				label={t('reservationPage.specialRequests', 'Special Requests')}
				rows={4}
			/>
		</div>
	);
};

export default SpecialRequests;
