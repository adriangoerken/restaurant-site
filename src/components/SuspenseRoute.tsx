import { Suspense, type ComponentType } from 'react';
import { PulseLoader } from 'react-spinners';

interface SuspenseRouteProps {
	Component: ComponentType;
}

const LoadingFallback = () => (
	<div
		role="status"
		aria-live="polite"
		aria-label="Loading page content"
		style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			minHeight: '60vh',
			flexDirection: 'column',
			gap: '1rem',
		}}
	>
		<PulseLoader color="#d4af37" size={25} aria-hidden="true" />
		<span className="sr-only">Loading page content</span>
	</div>
);

export const SuspenseRoute = ({ Component }: SuspenseRouteProps) => (
	<Suspense fallback={<LoadingFallback />}>
		<Component />
	</Suspense>
);
