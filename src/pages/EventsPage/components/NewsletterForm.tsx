import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import AnimatedButton from '../../../components/ui/AnimatedButton';
import { fadeInUp } from '../../../utils/animations';
import NewsletterStatus from './NewsletterStatus';

export interface NewsletterFormProps {
	onSubmit?: (email: string) => Promise<void>;
	className?: string;
}

type SubmitStatus = 'idle' | 'success' | 'error';

const NewsletterForm: React.FC<NewsletterFormProps> = ({
	onSubmit,
	className = '',
}) => {
	const { t } = useTranslation('eventsPage');
	const [email, setEmail] = useState('');
	const [status, setStatus] = useState<SubmitStatus>('idle');
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Basic email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			setStatus('error');
			return;
		}

		setIsSubmitting(true);

		try {
			if (onSubmit) {
				await onSubmit(email);
			} else {
				// Default behavior - simulate API call
				await new Promise((resolve) => setTimeout(resolve, 500));
			}

			setStatus('success');
			setEmail('');

			// Reset status after 5 seconds
			setTimeout(() => setStatus('idle'), 5000);
		} catch (error) {
			setStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};

	const inputId = 'newsletter-email';
	const statusId = 'newsletter-status';

	return (
		<div className={className}>
			<motion.form
				className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-6"
				variants={fadeInUp}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				onSubmit={handleSubmit}
				aria-label={t('newsletter.ariaLabel')}
			>
				<div className="flex-grow">
					<label htmlFor={inputId} className="sr-only">
						{t('newsletter.emailPlaceholder')}
					</label>
					<input
						type="email"
						id={inputId}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder={t('newsletter.emailPlaceholder')}
						className="w-full px-6 py-4 rounded-lg bg-background-elevated border border-border-primary text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-success focus:border-transparent transition-all"
						required
						disabled={isSubmitting}
						aria-invalid={status === 'error'}
						aria-describedby={
							status !== 'idle' ? statusId : undefined
						}
					/>
				</div>
				<AnimatedButton
					type="submit"
					variant="primary"
					size="md"
					aria-label={t('newsletter.subscribeButtonAriaLabel')}
					className="sm:w-auto whitespace-nowrap"
					disabled={isSubmitting}
				>
					{isSubmitting
						? t('newsletter.submitting')
						: t('newsletter.subscribeButton')}
				</AnimatedButton>
			</motion.form>

			{/* Status Messages */}
			<NewsletterStatus status={status} statusId={statusId} />

			<motion.p
				className="text-text-muted text-sm"
				variants={fadeInUp}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ delay: 0.3 }}
			>
				{t('newsletter.privacyNote')}
			</motion.p>
		</div>
	);
};

export default NewsletterForm;
