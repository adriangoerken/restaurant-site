import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const MainLayout = () => {
	return (
		<div className="flex flex-col min-h-screen bg-black">
			<NavBar />
			<div className="flex flex-col flex-grow pt-16">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default MainLayout;
