import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import type { FormStatus } from './ContactForm.types';

export interface FormStatusMessageProps {
	status: FormStatus;
	successMessage: string;
	errorMessage: string;
}

const FormStatusMessage: React.FC<FormStatusMessageProps> = ({
	status,
	successMessage,
	errorMessage,
}) => {
	if (status === 'idle' || status === 'submitting') {
		return null;
	}

	const isSuccess = status === 'success';

	return (
		<div
			className={`p-4 rounded-lg flex items-start gap-3 ${
				isSuccess
					? 'bg-success/10 border-2 border-success/30'
					: 'bg-accent/10 border-2 border-accent/30'
			}`}
			role="alert"
			aria-live="polite"
		>
			{isSuccess ? (
				<CheckCircle
					className="w-6 h-6 text-success flex-shrink-0 mt-0.5"
					aria-hidden="true"
				/>
			) : (
				<XCircle
					className="w-6 h-6 text-accent flex-shrink-0 mt-0.5"
					aria-hidden="true"
				/>
			)}
			<p
				className={`text-sm ${
					isSuccess ? 'text-success' : 'text-accent'
				}`}
			>
				{isSuccess ? successMessage : errorMessage}
			</p>
		</div>
	);
};

export default FormStatusMessage;
