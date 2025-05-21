import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { getLanguage } from './utils/lang.ts';
import global_en from './translations/en/global.json';
import global_de from './translations/de/global.json';
import menu_en from './translations/en/menu.json';
import menu_de from './translations/de/menu.json';

const initialLanguage = getLanguage().substring(0, 2);

i18next.init({
	interpolation: {
		escapeValue: false,
	},
	lng: initialLanguage,
	fallbackLng: 'en',
	ns: ['global, menu'],
	defaultNS: 'global',
	resources: {
		en: {
			global: global_en,
			menu: menu_en,
		},
		de: {
			global: global_de,
			menu: menu_de,
		},
	},
});

const rootElement = document.getElementById('root');
if (!rootElement) {
	throw new Error('Failed to find root element');
}

createRoot(rootElement).render(
	<StrictMode>
		<I18nextProvider i18n={i18next}>
			<App />
		</I18nextProvider>
	</StrictMode>
);
