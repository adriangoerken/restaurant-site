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
import visualExperience_en from './translations/en/visualExperience.json';
import visualExperience_de from './translations/de/visualExperience.json';
import ourStory_en from './translations/en/ourStory.json';
import ourStory_de from './translations/de/ourStory.json';

const savedLanguage = localStorage.getItem('neonkitchen_language');
const initialLanguage = savedLanguage || getLanguage().substring(0, 2);
// TODO: Move all these files into a single homePage.json with object, instead of individual files per section on the HomePage.
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
			visualExperience: visualExperience_en,
			ourStory: ourStory_en,
		},
		de: {
			global: global_de,
			hero: hero_de,
			specialOffers: specialOffers_de,
			signatureDishes: signatureDishes_de,
			visualExperience: visualExperience_de,
			ourStory: ourStory_de,
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
