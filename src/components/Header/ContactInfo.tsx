import { Phone, Clock, type LucideIcon, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export interface ContactItem {
	Icon: LucideIcon;
	text: string;
	href?: string;
	ariaLabel: string;
}

export interface ContactInfoProps {
	variant?: 'desktop' | 'mobile';
	className?: string;
}

const ContactInfo = ({
	variant = 'desktop',
	className = '',
}: ContactInfoProps) => {
	const { t } = useTranslation('header');

	const contactItems: ContactItem[] = [
		{
			Icon: Phone,
			text: t('contact.phone'),
			href: 'tel:+15551233666',
			ariaLabel: t('contact.phoneAriaLabel'),
		},
		{
			Icon: Clock,
			text: t('contact.hours'),
			ariaLabel: t('contact.hoursAriaLabel'),
		},
	];

	// Full contact items for mobile (including location)
	const mobileContactItems: ContactItem[] = [
		...contactItems,
		{
			Icon: MapPin,
			text: t('contact.location'),
			href: '/contact#location',
			ariaLabel: t('contact.locationAriaLabel'),
		},
	];

	if (variant === 'desktop') {
		return (
			<div
				className={`hidden 2xl:flex items-center space-x-3 text-text-muted text-xs ${className}`}
				role="list"
				aria-label="Contact information"
			>
				{contactItems.map((item, index) => (
					<div
						key={index}
						className="flex items-center space-x-1 whitespace-nowrap"
						role="listitem"
					>
						<item.Icon size={12} aria-hidden="true" />
						{item.href ? (
							<a
								href={item.href}
								className="hover:text-text-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-elevated rounded-sm px-1"
								aria-label={item.ariaLabel}
							>
								{item.text}
							</a>
						) : (
							<span aria-label={item.ariaLabel}>{item.text}</span>
						)}
					</div>
				))}
			</div>
		);
	}

	// Mobile variant - keep all contact items
	return (
		<div
			className={`pt-4 border-t border-border-primary space-y-3 ${className}`}
			role="list"
			aria-label="Contact information"
		>
			{mobileContactItems.map((item, index) => (
				<div
					key={index}
					className="flex items-center space-x-3 text-text-muted"
					role="listitem"
				>
					<item.Icon size={18} aria-hidden="true" />
					{item.href ? (
						<a
							href={item.href}
							className="hover:text-text-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-elevated rounded-md p-1"
							aria-label={item.ariaLabel}
						>
							{item.text}
						</a>
					) : (
						<span aria-label={item.ariaLabel}>{item.text}</span>
					)}
				</div>
			))}
		</div>
	);
};

export default ContactInfo;
