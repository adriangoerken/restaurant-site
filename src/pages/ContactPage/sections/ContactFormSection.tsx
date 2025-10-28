import { motion } from 'framer-motion';
import Container from '../../../components/layout/Container';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../../../components/ui/AnimatedSection';
import InputField from '../components/InputField';
import TextAreaField from '../components/TextAreaField';
import FormStatusMessage from '../components/FormStatusMessage';
import useContactForm from '../hooks/useContactForm';
import AnimatedButton from '../../../components/ui/AnimatedButton';

const ContactFormSection: React.FC = () => {
	const { t } = useTranslation('contactPage');
	const { formData, errors, status, handleInputChange, handleSubmit } =
		useContactForm();

	const isSubmitting = status === 'submitting';

	return (
		<AnimatedSection
			className="py-20 bg-background-primary"
			aria-labelledby="contact-form-heading"
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
						id="contact-form-heading"
						className="text-3xl md:text-5xl font-bold font-display text-center mb-4 text-text-primary"
						variants={fadeInUp}
					>
						{t('contactForm.heading')}
					</motion.h2>
					<motion.p
						className="text-lg text-text-secondary text-center mb-12"
						variants={fadeInUp}
					>
						{t('contactForm.subheading')}
					</motion.p>

					<motion.form
						onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
							handleSubmit(e, t)
						}
						className="space-y-6"
						variants={fadeInUp}
						noValidate
					>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<InputField
								label={t('contactForm.fields.name.label')}
								type="text"
								name="name"
								value={formData.name}
								placeholder={t(
									'contactForm.fields.name.placeholder'
								)}
								error={errors.name}
								required
								autoComplete="name"
								onChange={handleInputChange}
								aria-label={t(
									'contactForm.fields.name.ariaLabel'
								)}
							/>
							<InputField
								label={t('contactForm.fields.email.label')}
								type="email"
								name="email"
								value={formData.email}
								placeholder={t(
									'contactForm.fields.email.placeholder'
								)}
								error={errors.email}
								required
								autoComplete="email"
								onChange={handleInputChange}
								aria-label={t(
									'contactForm.fields.email.ariaLabel'
								)}
							/>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<InputField
								label={t('contactForm.fields.phone.label')}
								type="tel"
								name="phone"
								value={formData.phone}
								placeholder={t(
									'contactForm.fields.phone.placeholder'
								)}
								error={errors.phone}
								autoComplete="tel"
								onChange={handleInputChange}
								aria-label={t(
									'contactForm.fields.phone.ariaLabel'
								)}
							/>
							<InputField
								label={t('contactForm.fields.subject.label')}
								type="text"
								name="subject"
								value={formData.subject}
								placeholder={t(
									'contactForm.fields.subject.placeholder'
								)}
								error={errors.subject}
								required
								onChange={handleInputChange}
								aria-label={t(
									'contactForm.fields.subject.ariaLabel'
								)}
							/>
						</div>

						<TextAreaField
							label={t('contactForm.fields.message.label')}
							name="message"
							value={formData.message}
							placeholder={t(
								'contactForm.fields.message.placeholder'
							)}
							error={errors.message}
							required
							rows={6}
							onChange={handleInputChange}
							aria-label={t(
								'contactForm.fields.message.ariaLabel'
							)}
						/>

						<FormStatusMessage
							status={status}
							successMessage={t('contactForm.status.success')}
							errorMessage={t('contactForm.status.error')}
						/>

						<div className="flex justify-center">
							<AnimatedButton
								type="submit"
								variant="primary"
								size="lg"
								disabled={isSubmitting}
								aria-label={t('contactForm.button.ariaLabel')}
							>
								{isSubmitting
									? t('contactForm.button.submitting')
									: t('contactForm.button.submit')}
							</AnimatedButton>
						</div>
					</motion.form>
				</motion.div>
			</Container>
		</AnimatedSection>
	);
};

export default ContactFormSection;
