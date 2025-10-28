export interface TimeSlot {
	value: string;
	label: string;
}

export interface GuestOption {
	value: string;
	label: string;
}

// TODO: Backend Integration Point - Available Time Slots
// Generate time slots from 5 PM to 11 PM in 30-minute intervals
// When backend is ready:
// 1. Fetch available slots from API: GET /api/reservations/available-times?date=${date}&guests=${guests}
// 2. Filter out fully booked time slots
// 3. Add loading state while fetching
// 4. Handle case when no slots are available for selected date
export const generateTimeSlots = (t: (key: string) => string): TimeSlot[] => {
	const slots: TimeSlot[] = [
		{ value: '', label: t('reservationForm.fields.time.placeholder') },
	];

	for (let hour = 17; hour <= 22; hour++) {
		for (let minute = 0; minute < 60; minute += 30) {
			const timeValue = `${String(hour).padStart(2, '0')}:${String(
				minute
			).padStart(2, '0')}`;
			const displayHour = hour > 12 ? hour - 12 : hour;
			const period = hour >= 12 ? 'PM' : 'AM';
			const timeLabel = `${displayHour}:${String(minute).padStart(
				2,
				'0'
			)} ${period}`;
			slots.push({ value: timeValue, label: timeLabel });
		}
	}

	// Add 11:00 PM
	slots.push({ value: '23:00', label: '11:00 PM' });
	return slots;
};

export const generateGuestOptions = (
	t: (key: string, options?: any) => string
): GuestOption[] => {
	const options: GuestOption[] = [
		{
			value: '',
			label: t('reservationForm.fields.guests.placeholder'),
		},
	];

	for (let i = 1; i <= 12; i++) {
		const label =
			i === 1
				? t('reservationForm.fields.guests.single')
				: t('reservationForm.fields.guests.multiple', {
						count: i,
				  });
		options.push({ value: String(i), label });
	}

	return options;
};

// TODO: Backend Integration Point - Available Dates
// Get minimum date (today)
// When backend is ready:
// 1. Fetch available dates from API: GET /api/reservations/available-dates
// 2. Add max date limit (e.g., 3 months in advance)
// 3. Disable specific dates that are fully booked or restaurant is closed
// 4. Consider adding a date picker that visually shows available vs unavailable dates
export const getMinDate = (): string => {
	const today = new Date();
	return today.toISOString().split('T')[0];
};
