import React from 'react';

export interface InputFieldProps {
	label: string;
	type?: 'text' | 'email' | 'tel' | 'date';
	name: string;
	value: string;
	placeholder?: string;
	error?: string;
	required?: boolean;
	autoComplete?: string;
	min?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	'aria-label'?: string;
}

const InputField: React.FC<InputFieldProps> = ({
	label,
	type = 'text',
	name,
	value,
	placeholder,
	error,
	required = false,
	autoComplete,
	min,
	onChange,
	'aria-label': ariaLabel,
}) => {
	const inputId = `contact-form-${name}`;
	const errorId = `${inputId}-error`;

	return (
		<div className="space-y-2">
			<label
				htmlFor={inputId}
				className="block text-sm font-semibold text-text-primary"
			>
				{label}
				{required && (
					<span className="text-accent ml-1" aria-label="required">
						*
					</span>
				)}
			</label>
			<input
				type={type}
				id={inputId}
				name={name}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				required={required}
				aria-required={required}
				autoComplete={autoComplete}
				min={min}
				aria-label={ariaLabel}
				aria-invalid={!!error}
				aria-describedby={error ? errorId : undefined}
				className={`w-full px-4 py-3 bg-background-elevated border-2 rounded-lg text-text-primary placeholder-text-muted transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent ${
					error
						? 'border-accent'
						: 'border-border-primary hover:border-border-secondary'
				}`}
			/>
			{error && (
				<p
					id={errorId}
					className="text-sm text-accent"
					role="alert"
					aria-live="polite"
				>
					{error}
				</p>
			)}
		</div>
	);
};

export default InputField;
