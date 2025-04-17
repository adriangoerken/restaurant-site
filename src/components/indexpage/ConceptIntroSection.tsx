import Section from '../ui/Section';

type ConceptIntroProps = {
	text?: string;
};

const ConceptIntro = ({
	text = 'Step into Umami Nights, where modern Asian flavors meet urban energy. Inspired by Japanese Izakaya culture, we invite you to share plates, discover craft cocktails, and connect in a vibrant setting that captures the essence of contemporary Asian dining.',
}: ConceptIntroProps) => {
	return (
		<Section>
			<div className="text-center">
				<p className="text-xl leading-relaxed">{text}</p>
			</div>
		</Section>
	);
};

export default ConceptIntro;
