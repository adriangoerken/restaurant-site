import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
	className?: string;
}

const LanguageToggle = ({ className = '' }: LanguageToggleProps) => {
	const { i18n } = useTranslation();
	const [currentLang, setCurrentLang] = useState<string>('en');

	useEffect(() => {
		// Check localStorage first, then fall back to browser preference
		const savedLang = localStorage.getItem('neonkitchen_language');
		const browserLang = navigator.language.substring(0, 2);
		const defaultLang = savedLang || browserLang;

		// Ensure only supported languages are used
		const finalLang = ['en', 'de'].includes(defaultLang)
			? defaultLang
			: 'en';

		setCurrentLang(finalLang);
		i18n.changeLanguage(finalLang);
		localStorage.setItem('neonkitchen_language', finalLang);
	}, [i18n]);

	const toggleLanguage = () => {
		const newLang = currentLang === 'en' ? 'de' : 'en';
		setCurrentLang(newLang);
		i18n.changeLanguage(newLang);
		localStorage.setItem('neonkitchen_language', newLang);
	};

	const getCurrentLanguageLabel = () => {
		return currentLang === 'en' ? 'EN' : 'DE';
	};

	const getAriaLabel = () => {
		const targetLang = currentLang === 'en' ? 'German' : 'English';
		return `Switch to ${targetLang} language`;
	};

	return (
		<motion.button
			type="button"
			onClick={toggleLanguage}
			className={`flex items-center space-x-2 text-text-secondary hover:text-text-primary transition-colors duration-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-overlay ${className}`}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			aria-label={getAriaLabel()}
			aria-live="polite"
			aria-atomic="true"
		>
			<Globe size={18} aria-hidden="true" />
			<span className="text-sm font-medium">
				{getCurrentLanguageLabel()}
			</span>
		</motion.button>
	);
};

export default LanguageToggle;
