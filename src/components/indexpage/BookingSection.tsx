import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import AnimatedButton from '../ui/AnimatedButton';

type BookingSectionProps = {
	title?: string;
	buttonText?: string;
	onBookingClick?: () => void;
};

const BookingSection = ({
	title = 'Reserve Your Experience',
	buttonText = 'Book a Table',
	onBookingClick,
}: BookingSectionProps) => {
	return (
		<Section>
			<div className="text-center">
				<SectionHeading color="rose">{title}</SectionHeading>
				<AnimatedButton
					variant="primary"
					size="lg"
					onClick={onBookingClick}
				>
					{buttonText}
				</AnimatedButton>
			</div>
		</Section>
	);
};

export default BookingSection;
