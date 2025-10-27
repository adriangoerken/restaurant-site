import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, XCircle } from 'lucide-react';

export interface NewsletterStatusProps {
	status: 'idle' | 'success' | 'error';
	statusId: string;
}

const NewsletterStatus: React.FC<NewsletterStatusProps> = ({
	status,
	statusId,
}) => {
	const { t } = useTranslation('eventsPage');

	if (status === 'idle') {
		return (
			<div id={statusId} className="min-h-[2rem]" aria-live="polite" />
		);
	}

	const isSuccess = status === 'success';

	return (
		<motion.div
			id={statusId}
			className={`min-h-[2rem] mb-4 flex items-center justify-center gap-2 ${
				isSuccess ? 'text-success' : 'text-red-500'
			}`}
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			role="status"
			aria-live="polite"
			aria-atomic="true"
		>
			{isSuccess ? (
				<>
					<CheckCircle2 size={20} aria-hidden="true" />
					<span>{t('newsletter.successMessage')}</span>
				</>
			) : (
				<>
					<XCircle size={20} aria-hidden="true" />
					<span>{t('newsletter.errorMessage')}</span>
				</>
			)}
		</motion.div>
	);
};

export default NewsletterStatus;
