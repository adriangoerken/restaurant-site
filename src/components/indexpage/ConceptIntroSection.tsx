import Section from '../ui/Section';
import { useTranslation } from 'react-i18next';

const ConceptIntro = () => {
	const { t } = useTranslation();
	const text = t('concept.text');

	return (
		<Section>
			<div className="text-center">
				<p className="text-xl leading-relaxed">{text}</p>
			</div>
		</Section>
	);
};

export default ConceptIntro;
