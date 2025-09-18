import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const MainLayout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex flex-col flex-grow">
				<Outlet />
			</main>
			{/* <Footer />			 */}
		</div>
	);
};

export default MainLayout;
