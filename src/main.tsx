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
import homePage_en from './translations/en/homePage.json';
import homePage_de from './translations/de/homePage.json';
import header_en from './translations/en/header.json';
import header_de from './translations/de/header.json';
import footer_en from './translations/en/footer.json';
import footer_de from './translations/de/footer.json';
import notFoundPage_en from './translations/en/notFoundPage.json';
import notFoundPage_de from './translations/de/notFoundPage.json';
import menuPage_en from './translations/en/menuPage.json';
import menuPage_de from './translations/de/menuPage.json';
import dishes_en from './translations/en/dishes.json';
import dishes_de from './translations/de/dishes.json';
import ourStoryPage_en from './translations/en/ourStoryPage.json';
import ourStoryPage_de from './translations/de/ourStoryPage.json';
import eventsPage_en from './translations/en/eventsPage.json';
import eventsPage_de from './translations/de/eventsPage.json';

const savedLanguage = localStorage.getItem('neonkitchen_language');
const initialLanguage = savedLanguage || getLanguage().substring(0, 2);

i18next.init({
	lng: initialLanguage,
	fallbackLng: 'en',
	defaultNS: 'global',
	resources: {
		en: {
			global: global_en,
			homePage: homePage_en,
			header: header_en,
			footer: footer_en,
			notFoundPage: notFoundPage_en,
			menuPage: menuPage_en,
			dishes: dishes_en,
			ourStoryPage: ourStoryPage_en,
			eventsPage: eventsPage_en,
		},
		de: {
			global: global_de,
			homePage: homePage_de,
			header: header_de,
			footer: footer_de,
			notFoundPage: notFoundPage_de,
			menuPage: menuPage_de,
			dishes: dishes_de,
			ourStoryPage: ourStoryPage_de,
			eventsPage: eventsPage_de,
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
