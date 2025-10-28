import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';
import type { FormStatus } from './ReservationForm.types';

interface FormStatusMessageProps {
	status: FormStatus;
	successMessage: string;
	errorMessage: string;
}

const FormStatusMessage: React.FC<FormStatusMessageProps> = ({
	status,
	successMessage,
	errorMessage,
}) => {
	if (status !== 'success' && status !== 'error') {
		return null;
	}

	const isSuccess = status === 'success';

	return (
		<motion.div
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0 }}
			className={`
				flex items-start gap-3 p-4 rounded-lg
				${
					isSuccess
						? 'bg-success/10 border border-success/30'
						: 'bg-accent/10 border border-accent/30'
				}
			`}
			role="alert"
			aria-live="polite"
		>
			{isSuccess ? (
				<CheckCircle
					className="text-success flex-shrink-0 mt-0.5"
					size={20}
					aria-hidden="true"
				/>
			) : (
				<XCircle
					className="text-accent flex-shrink-0 mt-0.5"
					size={20}
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
		</motion.div>
	);
};

export default FormStatusMessage;
