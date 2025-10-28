import React from 'react';

export interface TextAreaFieldProps {
	label: string;
	name: string;
	value: string;
	placeholder?: string;
	error?: string;
	required?: boolean;
	rows?: number;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	'aria-label'?: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
	label,
	name,
	value,
	placeholder,
	error,
	required = false,
	rows = 5,
	onChange,
	'aria-label': ariaLabel,
}) => {
	const textareaId = `contact-form-${name}`;
	const errorId = `${textareaId}-error`;

	return (
		<div className="space-y-2">
			<label
				htmlFor={textareaId}
				className="block text-sm font-semibold text-text-primary"
			>
				{label}
				{required && (
					<span className="text-accent ml-1" aria-label="required">
						*
					</span>
				)}
			</label>
			<textarea
				id={textareaId}
				name={name}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				required={required}
				aria-required={required}
				rows={rows}
				aria-label={ariaLabel}
				aria-invalid={!!error}
				aria-describedby={error ? errorId : undefined}
				className={`w-full px-4 py-3 bg-background-elevated border-2 rounded-lg text-text-primary placeholder-text-muted transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-vertical ${
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

export default TextAreaField;
