export interface ReservationFormData {
	name: string;
	email: string;
	phone: string;
	date: string;
	time: string;
	guests: string;
	specialRequests: string;
}

export interface ReservationFormErrors {
	name?: string;
	email?: string;
	phone?: string;
	date?: string;
	time?: string;
	guests?: string;
	specialRequests?: string;
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
