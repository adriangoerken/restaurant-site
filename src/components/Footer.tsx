import { Link } from 'react-router-dom';
import Container from './Container';
import { useTranslation } from 'react-i18next';
import { PROVIDER_INFO, RESTAURANT_INFO } from '../utils/constants';

const Footer = () => {
	const { t } = useTranslation();
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-zinc-900 border-t border-zinc-800">
			<Container>
				<div className="py-12 md:py-16">
					{/* Main Footer Content */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
						<div>
							<h3 className="text-lg font-medium text-white mb-4">
								{t('footer.contact')}
							</h3>
							<p className="text-gray-400">
								{RESTAURANT_INFO.email}
								<br />
								{RESTAURANT_INFO.phone}
							</p>
						</div>
						<div>
							<h3 className="text-lg font-medium text-white mb-4">
								{t('footer.address')}
							</h3>
							<p className="text-gray-400">
								{RESTAURANT_INFO.addressLine1}
								<br />
								{RESTAURANT_INFO.addressLine2}
							</p>
						</div>
						<div>
							<h3 className="text-lg font-medium text-white mb-4">
								{t('footer.openingHours')}
							</h3>
							<p className="text-gray-400">
								{t('footer.openingHoursDays')}
								<br />
								{t('footer.openingHoursTime')}
							</p>
						</div>
					</div>

					{/* Bottom Bar */}
					<div className="pt-8 border-t border-zinc-800">
						<div className="flex flex-col md:flex-row justify-between items-center gap-4">
							<p className="text-gray-400">
								<span className="mr-2">© {currentYear}</span>
								<a
									href={PROVIDER_INFO.website}
									target="_blank"
									rel="noopener noreferrer"
									className="text-rose-500 hover:text-rose-400 transition-colors"
								>
									{PROVIDER_INFO.name}
								</a>
								{t('footer.copyright')}
							</p>
							<nav className="flex gap-8">
								<Link
									to="/imprint"
									className="text-gray-400 hover:text-rose-500 transition-colors"
								>
									{t('footer.imprint')}
								</Link>
								<Link
									to="/privacy-policy"
									className="text-gray-400 hover:text-rose-500 transition-colors"
								>
									{t('footer.privacyPolicy')}
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
