import { Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			{/* <NavBar /> */}
			<main className="flex flex-col flex-grow">
				<Outlet />
			</main>
			{/* <Footer />			 */}
		</div>
	);
};

export default MainLayout;
