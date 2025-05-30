import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import AnimatedButton from '../ui/AnimatedButton';
import { useTranslation } from 'react-i18next';

const BookingSection = () => {
	const { t } = useTranslation();

	return (
		<Section>
			<div className="text-center">
				<SectionHeading color="rose">
					{t('booking.title')}
				</SectionHeading>
				<AnimatedButton
					variant="primary"
					size="lg"
					to="/reservation"
					disabledAnimation={true}
				>
					{t('booking.button')}
				</AnimatedButton>
			</div>
		</Section>
	);
};

export default BookingSection;
