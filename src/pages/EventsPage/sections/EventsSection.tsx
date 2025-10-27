import { motion } from 'framer-motion';
import Container from '../../../components/layout/Container';
import AnimatedSection from '../../../components/ui/AnimatedSection';
import { staggerContainer } from '../../../utils/animations';
import EventCard from '../components/EventCard';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../../../components/ui/SectionHeading';
import { upcomingEvents } from '../../../data/eventsData';

const EventsSection = () => {
	const { t } = useTranslation('eventsPage');

	// Sort events: featured first, then by date
	const sortedEvents = [...upcomingEvents].sort((a, b) => {
		if (a.featured && !b.featured) return -1;
		if (!a.featured && b.featured) return 1;
		return new Date(a.date).getTime() - new Date(b.date).getTime();
	});

	return (
		<AnimatedSection
			className="py-20 bg-background-primary"
			aria-labelledby="events-section-heading"
		>
			<Container>
				<SectionHeading
					id="events-section-heading"
					part1={t('events.headingPart1')}
					part2={t('events.headingPart2')}
					subheading={t('events.subheading')}
					highlightColor="accent"
				/>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 gap-8"
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
				>
					{sortedEvents.map((event) => (
						<EventCard key={event.id} event={event} />
					))}
				</motion.div>
			</Container>
		</AnimatedSection>
	);
};

export default EventsSection;
