import Container from '../components/Container';
import SectionHeading from '../components/ui/SectionHeading';
import InfoBlock from '../components/ui/InfoBlock';
import StyledLink from '../components/ui/StyledLink';
import { PROVIDER_INFO as providerInfo } from '../utils/constants';

const ImprintPage = () => {
	return (
		<section className="py-8">
			<Container>
				<SectionHeading color="rose" align="left" animated={false}>
					Imprint
				</SectionHeading>

				<div className="space-y-8">
					<p className="text-lg text-gray-300">
						This imprint is provided in accordance with Section 5 of
						the German Telemedia Act (TMG) and other applicable
						laws.
					</p>

					{/* Provider Information */}
					<InfoBlock title="Provider Information">
						<div>
							<p className="font-medium text-lg">
								{providerInfo.name}
							</p>
							<address className="not-italic mt-1 text-gray-300">
								{' '}
								{/* Added text-gray-300 for consistency */}
								{providerInfo.street}
								<br />
								{providerInfo.city}
								<br />
								{providerInfo.country}
							</address>
						</div>
						<div className="pt-2 space-y-1">
							{' '}
							{/* Added spacing between links */}
							<p className="text-gray-300">
								{' '}
								{/* Added text-gray-300 */}
								Email:
								<StyledLink
									href={`mailto:${providerInfo.email}`}
									className="ml-2"
								>
									{providerInfo.email}
								</StyledLink>
							</p>
							<p className="text-gray-300">
								{' '}
								{/* Added text-gray-300 */}
								Phone:
								<StyledLink
									href={`tel:${providerInfo.phone}`}
									className="ml-2"
								>
									{providerInfo.phone}
								</StyledLink>
							</p>
							<p className="text-gray-300">
								{' '}
								{/* Added text-gray-300 */}
								Website:
								<StyledLink
									href={providerInfo.website}
									target="_blank"
									rel="noopener noreferrer"
									className="ml-2"
								>
									{/* Display cleaner URL */}
									{providerInfo.website.replace(
										'https://',
										''
									)}
								</StyledLink>
							</p>
						</div>
					</InfoBlock>

					{/* Disclaimer */}
					<InfoBlock title="Disclaimer">
						<p className="text-gray-300">
							Despite careful monitoring, I assume no liability
							for the content of external links. The content of
							linked pages is the sole responsibility of their
							operators.
						</p>
					</InfoBlock>

					{/* Contact */}
					<InfoBlock title="Contact">
						<p className="text-gray-300 mb-4">
							If you have any questions regarding this imprint or
							the information provided, please feel free to
							contact us:
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
