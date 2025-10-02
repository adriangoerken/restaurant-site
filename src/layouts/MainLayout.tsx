import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

const MainLayout = () => {
	const { t } = useTranslation('global');

	return (
		<div className="flex flex-col min-h-screen">
			{/* Skip link for accessibility */}
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-text-inverse px-4 py-2 rounded-md font-medium z-50 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
			>
				{t('accessibility.skipToMainContent')}
			</a>
			<Header />
			<main className="flex flex-col flex-grow">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default MainLayout;
