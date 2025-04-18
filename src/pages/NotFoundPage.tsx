import { useTranslation } from 'react-i18next';
import Container from '../components/Container';
import SectionHeading from '../components/ui/SectionHeading';

export const NotFoundPage = () => {
	const { t } = useTranslation();

	return (
		<section className="py-20 flex items-center justify-center text-center h-full">
			<Container>
				<SectionHeading color="rose" animated={false}>
					{t('notFoundPage.title')}
				</SectionHeading>
				<p className="text-xl text-gray-400">
					{t('notFoundPage.message')}
				</p>
			</Container>
		</section>
	);
};
