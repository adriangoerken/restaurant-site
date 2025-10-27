import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../../components/layout/Container';
import AnimatedSection from '../../../components/ui/AnimatedSection';
import SectionHeading from '../../../components/ui/SectionHeading';
import NewsletterForm from '../components/NewsletterForm';

const NewsletterSection: React.FC = () => {
	const { t } = useTranslation('eventsPage');

	const handleNewsletterSubmit = async (email: string) => {
		// TODO: Replace with actual API call when backend is implemented
		console.log('Newsletter subscription:', email);
		// Simulate API delay
		await new Promise((resolve) => setTimeout(resolve, 500));
	};

	return (
		<AnimatedSection
			className="py-20 bg-gradient-to-br from-background-primary via-background-secondary to-background-primary"
			aria-labelledby="newsletter-section-heading"
		>
			<Container>
				<div className="max-w-3xl mx-auto text-center">
					<SectionHeading
						id="newsletter-section-heading"
						part1={t('newsletter.headingPart1')}
						part2={t('newsletter.headingPart2')}
						subheading={t('newsletter.subheading')}
						highlightColor="success"
					/>

					<NewsletterForm onSubmit={handleNewsletterSubmit} />
				</div>
			</Container>
		</AnimatedSection>
	);
};

export default NewsletterSection;
