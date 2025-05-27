import { t } from 'i18next';
import { useState, useCallback } from 'react';
import Container from '../components/Container';
import SectionHeading from '../components/ui/SectionHeading';
import ReservationForm from '../components/ReservationPage/ReservationForm';
import ReservationSuccessMessage from '../components/ReservationPage/ReservationSuccessMessage';

const ReservationPage = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const today = new Date();

	const formatDate = (date: Date) => {
		return date.toISOString().split('T')[0];
	};

	const handleSubmit = useCallback(async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1500));

		setIsSubmitting(false);
		setIsSuccess(true);
	}, []);

	if (isSuccess) {
		return (
			<section className="py-16">
				<Container>
					<ReservationSuccessMessage />
				</Container>
			</section>
		);
	}

	return (
		<section className="py-16">
			<Container>
				<div className="max-w-2xl mx-auto">
					<SectionHeading color="rose" align="left" animated={false}>
						{t('reservationPage.title', 'Make a Reservation')}
					</SectionHeading>

					<ReservationForm
						handleSubmit={handleSubmit}
						isSubmitting={isSubmitting}
						minDate={formatDate(today)}
					/>
				</div>
			</Container>
		</section>
	);
};

export default ReservationPage;
