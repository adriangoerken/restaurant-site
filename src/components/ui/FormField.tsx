type FormFieldProps = {
	id: string;
	name: string;
	label: string;
	type:
		| 'date'
		| 'time'
		| 'text'
		| 'email'
		| 'number'
		| 'select'
		| 'tel'
		| 'textarea';
	required?: boolean;
	min?: string;
	options?: { value: string; label: string }[];
	placeholder?: string;
	rows?: number;
};

const FormField = ({
	id,
	name,
	label,
	type,
	required,
	min,
	options,
	placeholder,
	rows,
}: FormFieldProps) => {
	const commonInputClasses =
		'w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-md text-gray-100 focus:outline-none focus:border-rose-500 transition-colors';

	return (
		<div>
			<label
				htmlFor={id}
				className="block text-sm font-medium text-gray-300 mb-1"
			>
				{label}
				{required && <span className="text-rose-400">*</span>}
			</label>
			{type === 'select' ? (
				<select
					id={id}
					name={name}
					required={required}
					className={commonInputClasses}
				>
					{placeholder && <option value="">{placeholder}</option>}
					{options?.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			) : type === 'textarea' ? (
				<textarea
					id={id}
					name={name}
					required={required}
					rows={rows}
					placeholder={placeholder}
					className={commonInputClasses}
				/>
			) : (
				<input
					type={type}
					id={id}
					name={name}
					required={required}
					min={type === 'date' ? min : undefined}
					placeholder={placeholder}
					className={commonInputClasses}
				/>
			)}
		</div>
	);
};

export default FormField;
