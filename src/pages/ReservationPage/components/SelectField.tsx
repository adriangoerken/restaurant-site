import React from 'react';
import { motion } from 'framer-motion';

export interface SelectFieldProps {
	label: string;
	name: string;
	value: string;
	options: { value: string; label: string }[];
	error?: string;
	required?: boolean;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	'aria-label'?: string;
	'aria-describedby'?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
	label,
	name,
	value,
	options,
	error,
	required = false,
	onChange,
	'aria-label': ariaLabel,
	'aria-describedby': ariaDescribedBy,
}) => {
	const fieldId = `field-${name}`;
	const errorId = `error-${name}`;
	const hasError = !!error;

	return (
		<div className="space-y-2">
			<label
				htmlFor={fieldId}
				className="block text-sm font-medium text-text-primary"
			>
				{label}
				{required && (
					<span className="text-accent ml-1" aria-label="required">
						*
					</span>
				)}
			</label>
			<select
				id={fieldId}
				name={name}
				value={value}
				onChange={onChange}
				required={required}
				aria-label={ariaLabel}
				aria-describedby={
					hasError
						? `${errorId} ${ariaDescribedBy || ''}`.trim()
						: ariaDescribedBy
				}
				aria-invalid={hasError}
				aria-required={required}
				className={`
					w-full px-4 py-3 rounded-lg
					bg-background-secondary border
					text-text-primary
					focus:outline-none focus:ring-2 focus:ring-accent
					transition-all duration-300
					${
						hasError
							? 'border-accent'
							: 'border-border-primary hover:border-border-secondary'
					}
				`}
			>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
			{hasError && (
				<motion.p
					id={errorId}
					className="text-sm text-accent"
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					role="alert"
					aria-live="polite"
				>
					{error}
				</motion.p>
			)}
		</div>
	);
};

export default SelectField;
