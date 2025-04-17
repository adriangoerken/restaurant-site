import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const MainLayout = () => {
	return (
		<div className="flex flex-col min-h-screen bg-black">
			<NavBar />
			<div className="flex flex-col flex-grow pt-16">
				<Outlet />
			</div>
		</div>
	);
};

export default MainLayout;
