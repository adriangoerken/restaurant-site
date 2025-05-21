import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import IndexPage from './pages/IndexPage';
import ImprintPage from './pages/ImprintPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import MenuPage from './pages/MenuPage';
import ReservationPage from './pages/ReservationPage';

function App() {
	const { i18n } = useTranslation();

	useEffect(() => {
		document.documentElement.lang = i18n.language;
	}, [i18n.language]);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<IndexPage />} />
					<Route path="imprint" element={<ImprintPage />} />
					<Route path="menu" element={<MenuPage />} />
					<Route path="reservation" element={<ReservationPage />} />
					<Route
						path="privacy-policy"
						element={<PrivacyPolicyPage />}
					/>
					{/* 404 page */}
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
