import { motion } from 'framer-motion';
import { scaleIn } from '../../../../utils/animations';

interface GalleryImageProps {
	src?: string;
	alt: string;
	className?: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, className }) => {
	return (
		<motion.div
			className={`aspect-square bg-background-secondary rounded-xl overflow-hidden transition-transform duration-300 ${className}`}
			variants={scaleIn}
			whileHover={{
				scale: 1.05,
				transition: { duration: 0.2 },
			}}
		>
			{src ? (
				<img
					src={src}
					alt={alt}
					className="w-full h-full object-cover"
				/>
			) : (
				<div className="w-full h-full flex items-center justify-center text-text-muted">
					<motion.span
						className="text-4xl opacity-30"
						whileHover={{ rotate: 10 }}
						transition={{ duration: 0.2 }}
					>
						📷
					</motion.span>
				</div>
			)}
		</motion.div>
	);
};

export default GalleryImage;
