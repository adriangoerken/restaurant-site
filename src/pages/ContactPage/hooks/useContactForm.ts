import { useState } from 'react';
import type { TFunction } from 'i18next';
import type {
	ContactFormData,
	ContactFormErrors,
	FormStatus,
} from '../components/ContactForm.types';

const useContactForm = () => {
	const [formData, setFormData] = useState<ContactFormData>({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: '',
	});

	const [errors, setErrors] = useState<ContactFormErrors>({});
	const [status, setStatus] = useState<FormStatus>('idle');

	const validateEmail = (email: string): boolean => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const validatePhone = (phone: string): boolean => {
		if (!phone) return true; // Optional field

		// More comprehensive phone validation - at least 10 digits
		const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
		const digitsOnly = phone.replace(/\D/g, '');

		return phoneRegex.test(phone) && digitsOnly.length >= 10;
	};

	const validateForm = (t: TFunction): boolean => {
		const newErrors: ContactFormErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = t('contactForm.fields.name.required');
		}

		if (!formData.email.trim()) {
			newErrors.email = t('contactForm.fields.email.required');
		} else if (!validateEmail(formData.email)) {
			newErrors.email = t('contactForm.fields.email.invalid');
		}

		if (formData.phone && !validatePhone(formData.phone)) {
			newErrors.phone = t('contactForm.fields.phone.invalid');
		}

		if (!formData.subject.trim()) {
			newErrors.subject = t('contactForm.fields.subject.required');
		}

		if (!formData.message.trim()) {
			newErrors.message = t('contactForm.fields.message.required');
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		// Clear error for this field if it exists
		if (errors[name as keyof ContactFormErrors]) {
			setErrors((prev) => ({
				...prev,
				[name]: undefined,
			}));
		}
	};

	const handleSubmit = async (
		e: React.FormEvent<HTMLFormElement>,
		t: TFunction
	) => {
		e.preventDefault();

		if (!validateForm(t)) {
			return;
		}

		setStatus('submitting');

		try {
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 1500));

			// Mock success - in real app, this would be an actual API call
			console.log('Form submitted:', formData);

			setStatus('success');
			setFormData({
				name: '',
				email: '',
				phone: '',
				subject: '',
				message: '',
			});

			// Reset success message after 5 seconds
			setTimeout(() => {
				setStatus('idle');
			}, 5000);
		} catch (error) {
			console.error('Error submitting form:', error);
			setStatus('error');

			// Reset error message after 5 seconds
			setTimeout(() => {
				setStatus('idle');
			}, 5000);
		}
	};

	return {
		formData,
		errors,
		status,
		handleInputChange,
		handleSubmit,
	};
};

export default useContactForm;
