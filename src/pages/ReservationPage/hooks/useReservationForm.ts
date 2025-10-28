import { useState } from 'react';
import type { TFunction } from 'i18next';
import type {
	ReservationFormData,
	ReservationFormErrors,
	FormStatus,
} from '../components/ReservationForm.types';

// TODO: Backend Integration Point - Add these features when backend is ready:
// 1. State for available dates: const [availableDates, setAvailableDates] = useState<string[]>([]);
// 2. State for available times: const [availableTimeSlots, setAvailableTimeSlots] = useState<TimeSlot[]>([]);
// 3. useEffect to fetch available dates on component mount
// 4. useEffect to fetch available times when date or guest count changes
// 5. Loading states for async operations
// Example:
// useEffect(() => {
//   const fetchAvailableDates = async () => {
//     const response = await fetch('/api/reservations/available-dates');
//     const dates = await response.json();
//     setAvailableDates(dates);
//   };
//   fetchAvailableDates();
// }, []);

const useReservationForm = () => {
	const [formData, setFormData] = useState<ReservationFormData>({
		name: '',
		email: '',
		phone: '',
		date: '',
		time: '',
		guests: '2',
		specialRequests: '',
	});

	const [errors, setErrors] = useState<ReservationFormErrors>({});
	const [status, setStatus] = useState<FormStatus>('idle');

	const validateEmail = (email: string): boolean => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const validatePhone = (phone: string): boolean => {
		if (!phone) return false;

		// More comprehensive phone validation - at least 10 digits
		const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
		const digitsOnly = phone.replace(/\D/g, '');

		return phoneRegex.test(phone) && digitsOnly.length >= 10;
	};

	const validateDate = (date: string): boolean => {
		if (!date) return false;

		const selectedDate = new Date(date);
		const today = new Date();
		today.setHours(0, 0, 0, 0);

		return selectedDate >= today;
	};

	const validateForm = (t: TFunction): boolean => {
		const newErrors: ReservationFormErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = t('reservationForm.fields.name.required');
		}

		if (!formData.email.trim()) {
			newErrors.email = t('reservationForm.fields.email.required');
		} else if (!validateEmail(formData.email)) {
			newErrors.email = t('reservationForm.fields.email.invalid');
		}

		if (!formData.phone.trim()) {
			newErrors.phone = t('reservationForm.fields.phone.required');
		} else if (!validatePhone(formData.phone)) {
			newErrors.phone = t('reservationForm.fields.phone.invalid');
		}

		if (!formData.date) {
			newErrors.date = t('reservationForm.fields.date.required');
		} else if (!validateDate(formData.date)) {
			newErrors.date = t('reservationForm.fields.date.invalid');
		}

		if (!formData.time) {
			newErrors.time = t('reservationForm.fields.time.required');
		}

		if (!formData.guests || parseInt(formData.guests) < 1) {
			newErrors.guests = t('reservationForm.fields.guests.invalid');
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		// Clear error for this field if it exists
		if (errors[name as keyof ReservationFormErrors]) {
			setErrors((prev) => ({
				...prev,
				[name]: undefined,
			}));
		}
	};

	// TODO: Backend Integration Point - Form Submission
	// Replace this mock function with actual API call to create reservation
	// When backend is ready:
	// 1. Replace setTimeout with: POST /api/reservations
	// 2. Send formData as request body
	// 3. Handle real error responses (e.g., time slot no longer available)
	// 4. Store reservation confirmation ID from response
	// 5. Trigger confirmation email via backend
	// 6. Consider adding optimistic UI updates
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
			// MOCK: Simulate API call - Replace with real API call
			await new Promise((resolve) => setTimeout(resolve, 1500));

			// MOCK: This would be the actual API call:
			// const response = await fetch('/api/reservations', {
			//   method: 'POST',
			//   headers: { 'Content-Type': 'application/json' },
			//   body: JSON.stringify(formData),
			// });
			// if (!response.ok) throw new Error('Reservation failed');
			// const result = await response.json();

			// Mock success - in real app, this would be an actual API call
			console.log('Reservation submitted:', formData);

			setStatus('success');

			// Reset form after success
			setTimeout(() => {
				setFormData({
					name: '',
					email: '',
					phone: '',
					date: '',
					time: '',
					guests: '2',
					specialRequests: '',
				});
				setStatus('idle');
			}, 3000);
		} catch (error) {
			console.error('Reservation submission error:', error);
			setStatus('error');

			// Reset error status after 5 seconds
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

export default useReservationForm;
