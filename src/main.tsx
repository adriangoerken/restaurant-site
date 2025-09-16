import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { getLanguage } from './utils/language.ts';
import global_en from './translations/en/global.json';
import global_de from './translations/de/global.json';
import hero_en from './translations/en/hero.json';
import hero_de from './translations/de/hero.json';
import specialOffers_en from './translations/en/specialOffers.json';
import specialOffers_de from './translations/de/specialOffers.json';
import signatureDishes_en from './translations/en/signatureDishes.json';
import signatureDishes_de from './translations/de/signatureDishes.json';

const savedLanguage = localStorage.getItem('neonkitchen_language');
const initialLanguage = savedLanguage || getLanguage().substring(0, 2);

i18next.init({
	lng: initialLanguage,
	fallbackLng: 'en',
	defaultNS: 'global',
	resources: {
		en: {
			global: global_en,
			hero: hero_en,
			specialOffers: specialOffers_en,
			signatureDishes: signatureDishes_en,
		},
		de: {
			global: global_de,
			hero: hero_de,
			specialOffers: specialOffers_de,
			signatureDishes: signatureDishes_de,
		},
	},
});

// Set initial language and title
document.documentElement.lang = i18next.language;
document.title = i18next.t('documentTitle');

// Update language and title on language change
i18next.on('languageChanged', (lng) => {
	document.documentElement.lang = lng;
	document.title = i18next.t('documentTitle');
});

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<I18nextProvider i18n={i18next}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</I18nextProvider>
	</StrictMode>
);
