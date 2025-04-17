type InfoBlockProps = {
	title: string;
	children: React.ReactNode;
};

const InfoBlock = ({ title, children }: InfoBlockProps) => {
	return (
		<div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800">
			<h2 className="text-2xl font-medium text-rose-500 mb-4">{title}</h2>
			{children}
		</div>
	);
};

export default InfoBlock;
