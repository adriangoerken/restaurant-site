import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { SuspenseRoute } from './components/SuspenseRoute';
import { ROUTE_CONFIG, NOT_FOUND_ROUTE } from './constants/routeConfig';

function App() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				{ROUTE_CONFIG.map(({ path, Component }) => (
					<Route
						key={path}
						path={path === '/' ? undefined : path}
						index={path === '/'}
						element={<SuspenseRoute Component={Component} />}
					/>
				))}
				<Route
					path={NOT_FOUND_ROUTE.path}
					element={
						<SuspenseRoute Component={NOT_FOUND_ROUTE.Component} />
					}
				/>
			</Route>
		</Routes>
	);
}

export default App;
