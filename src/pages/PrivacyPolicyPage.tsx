import Container from '../components/Container';
import SectionHeading from '../components/ui/SectionHeading';
import InfoBlock from '../components/ui/InfoBlock';
import StyledLink from '../components/ui/StyledLink';
import { PROVIDER_INFO as providerInfo } from '../utils/constants';
import { useTranslation } from 'react-i18next';

// Specific data for Privacy Policy
const supervisoryAuthorityInfo = {
	name: 'Die Landesbeauftragte für den Datenschutz Niedersachsen',
	street: 'Prinzenstraße 5',
	city: '30159 Hannover',
	country: 'Germany',
	website: 'https://lfd.niedersachsen.de',
};

const effectiveDate = 'April 17, 2025';

const PrivacyPolicyPage = () => {
	const { t } = useTranslation();

	return (
		<section className="py-8">
			<Container>
				<SectionHeading color="rose" align="left" animated={false}>
					{t('privacyPolicyPage.title')}
				</SectionHeading>

				<div className="space-y-8">
					<p className="text-lg text-gray-300">
						{t('privacyPolicyPage.effectiveDateLabel')}
						{effectiveDate}
					</p>

					{/* 1. Introduction and Controller */}
					<InfoBlock title={t('privacyPolicyPage.section1Title')}>
						<div className="space-y-4 text-gray-300">
							<p>
								{t('privacyPolicyPage.section1Intro', {
									name: providerInfo.name,
								})}
							</p>
							<div>
								<p className="font-medium mb-2 text-gray-100">
									{t('privacyPolicyPage.section1Controller')}
								</p>
								<div className="pl-4">
									<p className="font-medium text-gray-100">
										{providerInfo.name}
									</p>
									<address className="not-italic">
										{providerInfo.street}
										<br />
										{providerInfo.city}
										<br />
										{providerInfo.country}
									</address>
									<p className="mt-2">
										{t('privacyPolicyPage.emailLabel')}
										<StyledLink
											href={`mailto:${providerInfo.email}`}
											className="ml-2"
										>
											{providerInfo.email}
										</StyledLink>
									</p>
									<p>
										{t('privacyPolicyPage.phoneLabel')}
										<StyledLink
											href={`tel:${providerInfo.phone}`}
											className="ml-2"
										>
											{providerInfo.phone}
										</StyledLink>
									</p>
								</div>
							</div>
						</div>
					</InfoBlock>

					{/* 2. Data Processing Activities */}
					<InfoBlock title={t('privacyPolicyPage.section2Title')}>
						<div className="space-y-6 text-gray-300">
							{/* Website Delivery & Security */}
							<div>
								<h3 className="text-xl font-medium text-rose-400 mb-2">
									{t('privacyPolicyPage.section2aTitle')}
								</h3>
								<p className="mb-2">
									{t('privacyPolicyPage.section2aText')}
								</p>
								<ul className="list-disc pl-6 space-y-1">
									<li>
										{t(
											'privacyPolicyPage.legalBasisLegitimateInterest'
										)}
										{t(
											'privacyPolicyPage.legalBasisWebsite'
										)}
									</li>
									<li>
										{t('privacyPolicyPage.cloudflareRole')}
										{/* Assuming this key exists or add it */}
										{t('privacyPolicyPage.seeLink')}
										<StyledLink
											href="https://www.cloudflare.com/privacypolicy/"
											target="_blank"
											rel="noopener noreferrer"
										>
											{t(
												'privacyPolicyPage.cloudflarePolicyLinkText'
											)}
										</StyledLink>
									</li>
									<li>
										{t(
											'privacyPolicyPage.internationalTransferUSA'
										)}
									</li>
								</ul>
							</div>

							{/* Backend Services & Hosting */}
							<div>
								<h3 className="text-xl font-medium text-rose-400 mb-2">
									{t('privacyPolicyPage.section2bTitle')}
								</h3>
								<p className="mb-2">
									{t('privacyPolicyPage.section2bText')}
								</p>
								<ul className="list-disc pl-6 space-y-1">
									<li>
										{t(
											'privacyPolicyPage.legalBasisLegitimateInterest'
										)}
										{t(
											'privacyPolicyPage.legalBasisServer'
										)}
									</li>
									<li>
										{t('privacyPolicyPage.hetznerRole')}
										{t('privacyPolicyPage.seeLink')}
										<StyledLink
											href="https://www.hetzner.com/legal/privacy-policy"
											target="_blank"
											rel="noopener noreferrer"
										>
											{t(
												'privacyPolicyPage.hetznerPolicyLinkText'
											)}
										</StyledLink>
									</li>
								</ul>
							</div>

							{/* User Feedback and Ratings */}
							<div>
								<h3 className="text-xl font-medium text-rose-400 mb-2">
									{t('privacyPolicyPage.section2cTitle')}
								</h3>
								<p className="mb-2">
									{t('privacyPolicyPage.section2cText')}
								</p>
								<div className="space-y-2">
									<p className="font-medium text-gray-100">
										{t('privacyPolicyPage.dataCollected')}
									</p>
									<ul className="list-disc pl-6 space-y-1">
										<li>
											{t(
												'privacyPolicyPage.dataCollectedRating'
											)}
										</li>

										<li>
											{t(
												'privacyPolicyPage.dataCollectedComment'
											)}
										</li>

										<li>
											{t(
												'privacyPolicyPage.dataCollectedTimestamp'
											)}
										</li>

										<li>
											{t(
												'privacyPolicyPage.dataCollectedDisplayName'
											)}
										</li>
									</ul>
									<p className="mt-2">
										{t(
											'privacyPolicyPage.dataCollectedDisclaimer'
										)}
									</p>
									<p>
										<span className="font-medium text-gray-100">
											{t(
												'privacyPolicyPage.purposeLabel'
											)}
										</span>
										{t('privacyPolicyPage.purposeText')}
									</p>
									<p>
										<span className="font-medium text-gray-100">
											{t(
												'privacyPolicyPage.legalBasisLabel'
											)}
										</span>
										{t(
											'privacyPolicyPage.legalBasisConsent'
										)}
									</p>
									<p>
										<span className="font-medium text-gray-100">
											{t(
												'privacyPolicyPage.storageLabel'
											)}
										</span>
										{t('privacyPolicyPage.storageText')}
									</p>
									<p>
										<span className="font-medium text-gray-100">
											{t(
												'privacyPolicyPage.retentionLabel'
											)}
										</span>
										{t(
											'privacyPolicyPage.retentionFeedback'
										)}
									</p>
								</div>
							</div>

							{/* Image Hosting */}
							<div>
								<h3 className="text-xl font-medium text-rose-400 mb-2">
									{t('privacyPolicyPage.section2dTitle')}
								</h3>
								<p className="mb-2">
									{t('privacyPolicyPage.section2dText')}
								</p>
								<ul className="list-disc pl-6 space-y-1">
									<li>
										{t(
											'privacyPolicyPage.legalBasisLegitimateInterest'
										)}
										{t(
											'privacyPolicyPage.legalBasisDelivery'
										)}
									</li>
									<li>
										{t(
											'privacyPolicyPage.internationalTransferImgur'
										)}
										{t('privacyPolicyPage.seeLink')}
										<StyledLink
											href="https://imgur.com/privacy"
											target="_blank"
											rel="noopener noreferrer"
										>
											{t(
												'privacyPolicyPage.imgurPolicyLinkText'
											)}
										</StyledLink>
									</li>
								</ul>
							</div>

							{/* Cookies */}
							<div>
								<h3 className="text-xl font-medium text-rose-400 mb-2">
									{t('privacyPolicyPage.section2eTitle')}
								</h3>
								<p>{t('privacyPolicyPage.section2eText')}</p>
							</div>

							{/* Contacting */}
							<div>
								<h3 className="text-xl font-medium text-rose-400 mb-2">
									{t('privacyPolicyPage.section2fTitle')}
								</h3>
								<p className="mb-2">
									{t('privacyPolicyPage.section2fText')}
								</p>
								<ul className="list-disc pl-6 space-y-1">
									<li>
										{t(
											'privacyPolicyPage.legalBasisContact'
										)}
									</li>

									<li>
										{t(
											'privacyPolicyPage.retentionContact'
										)}
									</li>
								</ul>
							</div>
						</div>
					</InfoBlock>

					{/* 3. Data Retention */}
					<InfoBlock title={t('privacyPolicyPage.section3Title')}>
						<p className="text-gray-300">
							{t('privacyPolicyPage.section3Text')}
						</p>
					</InfoBlock>

					{/* 4. Data Security */}
					<InfoBlock title={t('privacyPolicyPage.section4Title')}>
						<p className="text-gray-300">
							{t('privacyPolicyPage.section4Text')}
						</p>
					</InfoBlock>

					{/* 5. Third-Party Processors / Recipients */}
					<InfoBlock title={t('privacyPolicyPage.section5Title')}>
						<div className="space-y-4 text-gray-300">
							<p>{t('privacyPolicyPage.section5Intro')}</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>
									{t('privacyPolicyPage.section5Cloudflare')}
								</li>

								<li>
									{t('privacyPolicyPage.section5Hetzner')}
								</li>

								<li>{t('privacyPolicyPage.section5Imgur')}</li>
							</ul>
							<p>{t('privacyPolicyPage.section5DPA')}</p>
						</div>
					</InfoBlock>

					{/* 6. Your Rights as a Data Subject */}
					<InfoBlock title={t('privacyPolicyPage.section6Title')}>
						<div className="space-y-4 text-gray-300">
							<p>{t('privacyPolicyPage.section6Intro')}</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>{t('privacyPolicyPage.rightAccess')}</li>

								<li>
									{t('privacyPolicyPage.rightRectification')}
								</li>

								<li>{t('privacyPolicyPage.rightErasure')}</li>

								<li>
									{t('privacyPolicyPage.rightRestriction')}
								</li>

								<li>
									{t('privacyPolicyPage.rightPortability')}
								</li>

								<li>{t('privacyPolicyPage.rightObject')}</li>

								<li>
									{t(
										'privacyPolicyPage.rightWithdrawConsent'
									)}
								</li>

								<li>
									{t('privacyPolicyPage.rightLodgeComplaint')}
								</li>
							</ul>
							<p>{t('privacyPolicyPage.section6Exercise')}</p>
						</div>
					</InfoBlock>

					{/* 7. Right to Lodge a Complaint */}
					<InfoBlock title={t('privacyPolicyPage.section7Title')}>
						<div className="space-y-4 text-gray-300">
							<p>{t('privacyPolicyPage.section7Intro')}</p>
							<div className="pl-4">
								<p className="font-medium text-gray-100">
									{supervisoryAuthorityInfo.name}
									{/* Keep as is or translate */}
								</p>
								<address className="not-italic">
									{supervisoryAuthorityInfo.street}
									<br />
									{supervisoryAuthorityInfo.city}
									<br />
									{supervisoryAuthorityInfo.country}
								</address>
								<p className="mt-2">
									{t('privacyPolicyPage.websiteLabel')}

									<StyledLink
										href={supervisoryAuthorityInfo.website}
										target="_blank"
										rel="noopener noreferrer"
										className="ml-2"
									>
										{supervisoryAuthorityInfo.website}
									</StyledLink>
								</p>
							</div>
						</div>
					</InfoBlock>

					{/* 8. International Data Transfers */}
					<InfoBlock title={t('privacyPolicyPage.section8Title')}>
						<p className="text-gray-300">
							{t('privacyPolicyPage.section8Text')}
						</p>
					</InfoBlock>

					{/* 9. Changes to this Privacy Policy */}
					<InfoBlock title={t('privacyPolicyPage.section9Title')}>
						<p className="text-gray-300">
							{t('privacyPolicyPage.section9Text')}
						</p>
					</InfoBlock>
				</div>
			</Container>
		</section>
	);
};

export default PrivacyPolicyPage;
