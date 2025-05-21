import { motion, useReducedMotion } from 'framer-motion';
import Container from '../Container';
import SectionHeading from '../ui/SectionHeading';
import MenuCard from '../ui/MenuCard';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type MenuItem = {
	title: string;
	desc: string;
	img: string;
	size?: string;
};

const MenuHighlights = () => {
	const { t } = useTranslation();
	const prefersReducedMotion = useReducedMotion();

	const items: MenuItem[] = [
		{
			title: t('menuHighlights.item1.title'),
			desc: t('menuHighlights.item1.desc'),
			img: 'https://i.imgur.com/szITcrX.jpeg',
			size: 'lg:col-span-2 lg:row-span-2',
		},
		{
			title: t('menuHighlights.item2.title'),
			desc: t('menuHighlights.item2.desc'),
			img: 'https://i.imgur.com/iklvGFY.jpeg',
		},
		{
			title: t('menuHighlights.item3.title'),
			desc: t('menuHighlights.item3.desc'),
			img: 'https://i.imgur.com/pRRUbBs.jpeg',
			size: 'lg:col-span-1 lg:row-span-2',
		},
		{
			title: t('menuHighlights.item4.title'),
			desc: t('menuHighlights.item4.desc'),
			img: 'https://i.imgur.com/d96364L.jpeg',
		},
	];

	const sectionVariants = {
		hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: prefersReducedMotion ? 0 : 0.5 },
		},
	};

	return (
		<motion.section
			className="py-20 bg-black/30"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
			variants={sectionVariants}
		>
			<Container>
				<SectionHeading color="rose" className="mb-16">
					{t('menuHighlights.title')}
				</SectionHeading>
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[minmax(300px,auto)]"
					variants={{
						visible: {
							transition: {
								staggerChildren: prefersReducedMotion ? 0 : 0.1,
							},
						},
					}}
				>
					{items.map((item, index) => (
						<MenuCard key={item.title} index={index} {...item} />
					))}
					<motion.div
						className="flex items-center justify-center"
						variants={{
							hidden: {
								opacity: 0,
								scale: prefersReducedMotion ? 1 : 0.9,
							},
							visible: {
								opacity: 1,
								scale: 1,
								transition: {
									duration: prefersReducedMotion ? 0 : 0.3,
								},
							},
						}}
					>
						<motion.button
							role="button"
							className="border border-rose-500 hover:bg-rose-500/10 px-8 py-3 rounded-lg transition relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-rose-500"
							whileHover={{
								scale: prefersReducedMotion ? 1 : 1.05,
							}}
							whileTap={{
								scale: prefersReducedMotion ? 1 : 0.95,
							}}
						>
							<Link to="/menu" className="relative z-10">
								{t('menuHighlights.exploreButton')}
							</Link>
							{!prefersReducedMotion && (
								<motion.div
									className="absolute inset-0 bg-rose-500/10"
									initial={{ x: '-100%' }}
									whileHover={{ x: 0 }}
									transition={{ duration: 0.3 }}
									aria-hidden="true"
								/>
							)}
						</motion.button>
					</motion.div>
				</motion.div>
			</Container>
		</motion.section>
	);
};

export default MenuHighlights;
