export interface ContactFormData {
	name: string;
	email: string;
	phone: string;
	subject: string;
	message: string;
}

export interface ContactFormErrors {
	name?: string;
	email?: string;
	phone?: string;
	subject?: string;
	message?: string;
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
