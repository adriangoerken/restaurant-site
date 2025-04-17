import Container from '../components/Container';
import SectionHeading from '../components/ui/SectionHeading';
import InfoBlock from '../components/ui/InfoBlock';
import StyledLink from '../components/ui/StyledLink';
import { PROVIDER_INFO as providerInfo } from '../utils/constants';

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
	return (
		<section className="py-8">
			<Container>
				<SectionHeading color="rose" align="left" animated={false}>
					Privacy Policy
				</SectionHeading>

				<div className="space-y-8">
					<p className="text-lg text-gray-300">
						Effective Date: {effectiveDate}
					</p>

					{/* 1. Introduction and Controller */}
					<InfoBlock title="1. Introduction and Controller">
						<div className="space-y-4 text-gray-300">
							<p>
								Welcome to the website for Umami Nights. I,
								Adrian Goerken ('I,' 'my,' 'me'), am committed
								to protecting your privacy. This Privacy Policy
								explains how personal data is collected, used,
								and protected when you visit this website, in
								accordance with the EU General Data Protection
								Regulation (GDPR) and relevant German data
								protection laws (e.g., BDSG, TTDSG).
							</p>
							<div>
								<p className="font-medium mb-2 text-gray-100">
									{' '}
									{/* Slightly lighter text for emphasis */}
									The responsible party (data controller) for
									data processing on this website is:
								</p>
								<div className="pl-4">
									<p className="font-medium text-gray-100">
										{' '}
										{/* Slightly lighter text */}
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
										Email:{' '}
										<StyledLink
											href={`mailto:${providerInfo.email}`}
										>
											{providerInfo.email}
										</StyledLink>
									</p>
									<p>
										Phone:{' '}
										<StyledLink
											href={`tel:${providerInfo.phone}`}
										>
											{providerInfo.phone}
										</StyledLink>
									</p>
								</div>
							</div>
						</div>
					</InfoBlock>

					{/* 2. Data Processing Activities */}
					<InfoBlock title="2. Data Processing Activities">
						<div className="space-y-6 text-gray-300">
							{/* Website Delivery & Security */}
							<div>
								<h3 className="text-xl font-medium text-rose-400 mb-2">
									a) Website Delivery & Security
								</h3>
								<p className="mb-2">
									This website's frontend is delivered via
									Cloudflare Pages (Cloudflare, Inc., USA).
									When you access the website, Cloudflare
									processes data, including your IP address
									and basic request data, for essential
									content delivery (CDN) and security purposes
									(e.g., DDoS mitigation), acting as a data
									processor.
								</p>
								<ul className="list-disc pl-6 space-y-1">
									<li>
										Legal Basis: Legitimate interest (Art.
										6(1)(f) GDPR) in operating a secure and
										performant website.
									</li>
									<li>
										Cloudflare's Role & Policy: See{' '}
										<StyledLink
											href="https://www.cloudflare.com/privacypolicy/"
											target="_blank"
											rel="noopener noreferrer"
										>
											Cloudflare Privacy Policy
										</StyledLink>
									</li>
									<li>
										International Data Transfer: Involves
										data transfer to the USA, safeguarded by
										measures like Standard Contractual
										Clauses (SCCs).
									</li>
								</ul>
							</div>

							{/* Backend Services & Hosting */}
							<div>
								<h3 className="text-xl font-medium text-rose-400 mb-2">
									b) Backend Services & Hosting
								</h3>
								<p className="mb-2">
									The backend API (handling feedback/ratings)
									is hosted on servers provided by Hetzner
									Online GmbH (Germany). Your IP address is
									processed by the Hetzner server when your
									browser communicates with the API for
									technical necessity. Hetzner may also
									maintain server logs (including IPs) for
									security and operation.
								</p>
								<ul className="list-disc pl-6 space-y-1">
									<li>
										Legal Basis: Legitimate interest (Art.
										6(1)(f) GDPR) for essential server
										operation and security.
									</li>
									<li>
										Hetzner's Role & Policy: Hetzner acts as
										a data processor. See{' '}
										<StyledLink
											href="https://www.hetzner.com/legal/privacy-policy"
											target="_blank"
											rel="noopener noreferrer"
										>
											Hetzner Privacy Policy
										</StyledLink>
									</li>
								</ul>
							</div>

							{/* User Feedback and Ratings */}
							<div>
								<h3 className="text-xl font-medium text-rose-400 mb-2">
									c) User Feedback and Ratings
								</h3>
								<p className="mb-2">
									This website allows you to provide feedback
									on the restaurant and rate individual
									dishes.
								</p>
								<div className="space-y-2">
									<p className="font-medium text-gray-100">
										{' '}
										{/* Lighter text */}
										Data Collected:
									</p>
									<ul className="list-disc pl-6 space-y-1">
										<li>Star rating</li>
										<li>Comment text (if provided)</li>
										<li>
											Submission date/time (automatically
											recorded)
										</li>
										<li>
											An optional "Display Name" (which
											you may choose to provide)
										</li>
									</ul>
									<p className="mt-2">
										Apart from the optional Display Name you
										might provide and the content of your
										comment, the submission is not linked to
										other personal identifiers.
									</p>
									<p>
										<span className="font-medium text-gray-100">
											{' '}
											{/* Lighter text */}
											Purpose:
										</span>{' '}
										To collect user opinions for public
										display on the website, to understand
										user preferences, and for internal
										service improvement.
									</p>
									<p>
										<span className="font-medium text-gray-100">
											{' '}
											{/* Lighter text */}
											Legal Basis:
										</span>{' '}
										Your explicit Consent (Art. 6(1)(a)
										GDPR).
									</p>
									<p>
										<span className="font-medium text-gray-100">
											{' '}
											{/* Lighter text */}
											Storage:
										</span>{' '}
										This data is stored in the website's
										backend database, hosted on Hetzner
										servers located in Germany.
									</p>
									<p>
										<span className="font-medium text-gray-100">
											{' '}
											{/* Lighter text */}
											Retention:
										</span>{' '}
										Feedback and ratings are stored
										potentially indefinitely unless removed
										or until you request deletion.
									</p>
								</div>
							</div>

							{/* Image Hosting */}
							<div>
								<h3 className="text-xl font-medium text-rose-400 mb-2">
									d) Image Hosting
								</h3>
								<p className="mb-2">
									This website uses Imgur (Imgur Inc., USA) as
									a third-party service (CDN) to efficiently
									host and deliver images. When loading
									images, your browser connects to Imgur's
									servers, transmitting your IP address and
									basic browser information necessary for
									technical delivery.
								</p>
								<ul className="list-disc pl-6 space-y-1">
									<li>
										Legal Basis: Legitimate interest (Art.
										6(1)(f) GDPR) in providing an
										efficiently delivered website.
									</li>
									<li>
										International Data Transfer: Involves
										data transfer to the USA, typically
										safeguarded by SCCs. See{' '}
										<StyledLink
											href="https://imgur.com/privacy"
											target="_blank"
											rel="noopener noreferrer"
										>
											Imgur Privacy Policy
										</StyledLink>
									</li>
								</ul>
							</div>

							{/* Cookies */}
							<div>
								<h3 className="text-xl font-medium text-rose-400 mb-2">
									e) Cookies
								</h3>
								<p>This website does not use cookies.</p>
							</div>

							{/* Contacting */}
							<div>
								<h3 className="text-xl font-medium text-rose-400 mb-2">
									f) Contacting Me
								</h3>
								<p className="mb-2">
									If you contact me via the provided email
									address or phone number, the personal data
									you transmit will be processed solely to
									handle your request and respond to you.
								</p>
								<ul className="list-disc pl-6 space-y-1">
									<li>
										Legal Basis: Art. 6(1)(b) GDPR if
										pre-contractual; otherwise, Art. 6(1)(f)
										GDPR (legitimate interest in
										responding).
									</li>
									<li>
										Retention: Data deleted once the inquiry
										is resolved and no legal retention
										obligations apply.
									</li>
								</ul>
							</div>
						</div>
					</InfoBlock>

					{/* 3. Data Retention */}
					<InfoBlock title="3. Data Retention">
						<p className="text-gray-300">
							Unless specified otherwise (e.g., potentially
							indefinite storage for feedback/ratings subject to
							deletion rights, or specific retention periods for
							provider logs), personal data is stored only as long
							as necessary for the purposes for which it was
							collected, or as required by law. Data is deleted
							once the purpose is fulfilled or retention periods
							expire.
						</p>
					</InfoBlock>

					{/* 4. Data Security */}
					<InfoBlock title="4. Data Security">
						<p className="text-gray-300">
							I implement appropriate technical and organizational
							security measures to protect data against
							manipulation, loss, destruction, or unauthorized
							access.
						</p>
					</InfoBlock>

					{/* 5. Third-Party Processors / Recipients */}
					<InfoBlock title="5. Third-Party Processors / Recipients">
						<div className="space-y-4 text-gray-300">
							<p>
								Your data may be processed by or transmitted to
								the following third-party service providers:
							</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>
									Cloudflare, Inc. (USA): Frontend hosting,
									CDN, security.
								</li>
								<li>
									Hetzner Online GmbH (Germany): Backend API
									hosting infrastructure.
								</li>
								<li>Imgur, Inc. (USA): Image hosting/CDN.</li>
							</ul>
							<p>
								Data processing agreements are in place where
								required.
							</p>
						</div>
					</InfoBlock>

					{/* 6. Your Rights as a Data Subject */}
					<InfoBlock title="6. Your Rights as a Data Subject">
						<div className="space-y-4 text-gray-300">
							<p>
								Under the GDPR, you have the following rights
								regarding your personal data:
							</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>Access (Art. 15)</li>
								<li>Rectification (Art. 16)</li>
								<li>Erasure (Art. 17)</li>
								<li>Restriction of Processing (Art. 18)</li>
								<li>Data Portability (Art. 20)</li>
								<li>Object (Art. 21)</li>
								<li>Withdraw Consent (Art. 7(3))</li>
								<li>Lodge a Complaint (Art. 77)</li>
							</ul>
							<p>
								To exercise these rights (including requesting
								deletion of your feedback/ratings), please
								contact me (Section 1). Withdrawing consent does
								not affect the lawfulness of processing based on
								consent before its withdrawal.
							</p>
						</div>
					</InfoBlock>

					{/* 7. Right to Lodge a Complaint */}
					<InfoBlock title="7. Right to Lodge a Complaint">
						<div className="space-y-4 text-gray-300">
							<p>
								You have the right to lodge a complaint with a
								data protection supervisory authority. The
								authority responsible for me is:
							</p>
							<div className="pl-4">
								<p className="font-medium text-gray-100">
									{' '}
									{/* Lighter text */}
									{supervisoryAuthorityInfo.name}
								</p>
								<address className="not-italic">
									{' '}
									{/* Use address tag */}
									{supervisoryAuthorityInfo.street}
									<br />
									{supervisoryAuthorityInfo.city}
									<br />
									{supervisoryAuthorityInfo.country}
								</address>
								<p className="mt-2">
									Website:{' '}
									<StyledLink
										href={supervisoryAuthorityInfo.website}
										target="_blank"
										rel="noopener noreferrer"
									>
										{supervisoryAuthorityInfo.website}
									</StyledLink>
								</p>
							</div>
						</div>
					</InfoBlock>

					{/* 8. International Data Transfers */}
					<InfoBlock title="8. International Data Transfers">
						<p className="text-gray-300">
							Using services from Cloudflare and Imgur involves
							transferring data (primarily IP addresses, request
							data) to servers potentially located outside the
							European Union, particularly the USA. These
							transfers are safeguarded by measures recognized
							under GDPR, such as Standard Contractual Clauses
							(SCCs). Hosting of the backend database and API via
							Hetzner occurs within Germany (EU).
						</p>
					</InfoBlock>

					{/* 9. Changes to this Privacy Policy */}
					<InfoBlock title="9. Changes to this Privacy Policy">
						<p className="text-gray-300">
							This Privacy Policy may be updated occasionally. The
							current version will always be available on this
							website.
						</p>
					</InfoBlock>
				</div>
			</Container>
		</section>
	);
};

export default PrivacyPolicyPage;
