import { Link } from 'react-router-dom';
import Container from './Container';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-zinc-900 border-t border-zinc-800">
			<Container>
				<div className="py-12 md:py-16">
					{/* Main Footer Content */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
						<div>
							<h3 className="text-lg font-medium text-white mb-4">
								Contact
							</h3>
							<p className="text-gray-400">
								info@umaminights.tld
								<br />
								+49 123 456 789
							</p>
						</div>
						<div>
							<h3 className="text-lg font-medium text-white mb-4">
								Address
							</h3>
							<p className="text-gray-400">
								Musterstraße 1
								<br />
								12345 Musterstadt
							</p>
						</div>
						<div>
							<h3 className="text-lg font-medium text-white mb-4">
								Opening Hours
							</h3>
							<p className="text-gray-400">
								Tuesday - Sunday
								<br />
								17:00 - 23:00
							</p>
						</div>
					</div>

					{/* Bottom Bar */}
					<div className="pt-8 border-t border-zinc-800">
						<div className="flex flex-col md:flex-row justify-between items-center gap-4">
							<p className="text-gray-400">
								© {currentYear}
								<a
									href="https://adriangoerken.de"
									target="_blank"
									rel="noopener noreferrer"
									className="text-rose-500 hover:text-rose-400 transition-colors"
								>
									Adrian Goerken
								</a>
								. All rights reserved.
							</p>
							<nav className="flex gap-8">
								<Link
									to="/imprint"
									className="text-gray-400 hover:text-rose-500 transition-colors"
								>
									Imprint
								</Link>
								<Link
									to="/privacy-policy"
									className="text-gray-400 hover:text-rose-500 transition-colors"
								>
									Privacy Policy
								</Link>
							</nav>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
