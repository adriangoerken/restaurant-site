import Container from '../components/Container';
import SectionHeading from '../components/ui/SectionHeading';
import InfoBlock from '../components/ui/InfoBlock';
import StyledLink from '../components/ui/StyledLink';
import { PROVIDER_INFO as providerInfo } from '../utils/constants';
import { useTranslation } from 'react-i18next';

const ImprintPage = () => {
	const { t } = useTranslation();

	return (
		<section className="py-8">
			<Container>
				<SectionHeading color="rose" align="left" animated={false}>
					{t('imprintPage.title')}
				</SectionHeading>

				<div className="space-y-8">
					<p className="text-lg text-gray-300">
						{t('imprintPage.intro')}
					</p>

					{/* Provider Information */}
					<InfoBlock title={t('imprintPage.providerInfo')}>
						<div>
							<p className="font-medium text-lg">
								{providerInfo.name}
							</p>
							<address className="not-italic mt-1 text-gray-300">
								{providerInfo.street}
								<br />
								{providerInfo.city}
								<br />
								{providerInfo.country}
							</address>
						</div>
						<div className="pt-2 space-y-1">
							<p className="text-gray-300">
								{t('imprintPage.emailLabel')}
								<StyledLink
									href={`mailto:${providerInfo.email}`}
									className="ml-2"
								>
									{providerInfo.email}
								</StyledLink>
							</p>
							<p className="text-gray-300">
								{t('imprintPage.phoneLabel')}
								<StyledLink
									href={`tel:${providerInfo.phone}`}
									className="ml-2"
								>
									{providerInfo.phone}
								</StyledLink>
							</p>
							<p className="text-gray-300">
								{t('imprintPage.websiteLabel')}
								<StyledLink
									href={providerInfo.website}
									target="_blank"
									rel="noopener noreferrer"
									className="ml-2"
								>
									{providerInfo.website.replace(
										'https://',
										''
									)}
								</StyledLink>
							</p>
						</div>
					</InfoBlock>

					{/* Disclaimer */}
					<InfoBlock title={t('imprintPage.disclaimerTitle')}>
						<p className="text-gray-300">
							{t('imprintPage.disclaimerText')}
						</p>
					</InfoBlock>

					{/* Contact */}
					<InfoBlock title={t('imprintPage.contactTitle')}>
						{' '}
						<p className="text-gray-300 mb-4">
							{t('imprintPage.contactText')}
						</p>
						<div className="space-y-2 text-gray-300">
							<p>
								<StyledLink
									href={`mailto:${providerInfo.email}`}
								>
									{providerInfo.email}
								</StyledLink>
							</p>
							<p>
								<StyledLink href={`tel:${providerInfo.phone}`}>
									{providerInfo.phone}
								</StyledLink>
							</p>
						</div>
					</InfoBlock>
				</div>
			</Container>
		</section>
	);
};

export default ImprintPage;
