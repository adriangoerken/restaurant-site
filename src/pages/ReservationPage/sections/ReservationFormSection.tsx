import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../../../components/layout/Container';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import AnimatedSection from '../../../components/ui/AnimatedSection';
import AnimatedButton from '../../../components/ui/AnimatedButton';
import FormStatusMessage from '../components/FormStatusMessage';
import ContactInformation from '../components/ContactInformation';
import ReservationDetails from '../components/ReservationDetails';
import SpecialRequests from '../components/SpecialRequests';
import useReservationForm from '../hooks/useReservationForm';
import {
	generateTimeSlots,
	generateGuestOptions,
	getMinDate,
} from '../utils/reservationUtils';

const ReservationFormSection: React.FC = () => {
	const { t } = useTranslation('reservationPage');
	const { formData, errors, status, handleInputChange, handleSubmit } =
		useReservationForm();

	const isSubmitting = status === 'submitting';

	// Memoize generated options to prevent unnecessary recalculations
	const timeSlots = useMemo(() => generateTimeSlots(t), [t]);
	const guestOptions = useMemo(() => generateGuestOptions(t), [t]);
	const minDate = useMemo(() => getMinDate(), []);

	return (
		<AnimatedSection
			className="py-20 bg-background-primary"
			aria-labelledby="reservation-form-heading"
		>
			<Container>
				<motion.div
					className="max-w-3xl mx-auto"
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<motion.h2
						id="reservation-form-heading"
						className="text-3xl md:text-5xl font-bold font-display text-center mb-4 text-text-primary"
						variants={fadeInUp}
					>
						{t('reservationForm.heading')}
					</motion.h2>
					<motion.p
						className="text-lg text-text-secondary text-center mb-12"
						variants={fadeInUp}
					>
						{t('reservationForm.subheading')}
					</motion.p>

					<motion.form
						onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
							handleSubmit(e, t)
						}
						className="space-y-6"
						variants={fadeInUp}
						noValidate
					>
						{/* Status Message */}
						<FormStatusMessage
							status={status}
							successMessage={t('reservationForm.status.success')}
							errorMessage={t('reservationForm.status.error')}
						/>

						{/* Contact Information */}
						<ContactInformation
							formData={{
								name: formData.name,
								email: formData.email,
								phone: formData.phone,
							}}
							errors={{
								name: errors.name,
								email: errors.email,
								phone: errors.phone,
							}}
							onInputChange={handleInputChange}
							t={t}
						/>

						{/* Reservation Details */}
						<ReservationDetails
							formData={{
								date: formData.date,
								time: formData.time,
								guests: formData.guests,
							}}
							errors={{
								date: errors.date,
								time: errors.time,
								guests: errors.guests,
							}}
							timeSlots={timeSlots}
							guestOptions={guestOptions}
							minDate={minDate}
							onInputChange={handleInputChange}
							t={t}
						/>

						{/* Special Requests */}
						<SpecialRequests
							value={formData.specialRequests}
							error={errors.specialRequests}
							onInputChange={handleInputChange}
							t={t}
						/>

						{/* Submit Button */}
						<div className="pt-4">
							<AnimatedButton
								type="submit"
								variant="primary"
								size="lg"
								className="w-full"
								disabled={isSubmitting}
								aria-label={t(
									'reservationForm.submit.ariaLabel'
								)}
							>
								{isSubmitting
									? t('reservationForm.submit.submitting')
									: t('reservationForm.submit.label')}
							</AnimatedButton>
						</div>

						{/* Form Note */}
						<p className="text-sm text-text-muted text-center">
							{t('reservationForm.note')}
						</p>
					</motion.form>
				</motion.div>
			</Container>
		</AnimatedSection>
	);
};

export default ReservationFormSection;
