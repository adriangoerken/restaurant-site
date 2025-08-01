import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<HomePage />} />
				{/* 404 page */}
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
}

export default App;
