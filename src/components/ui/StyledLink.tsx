import React from 'react';

type StyleLinkProps = {
	href: string;
	children: React.ReactNode;
	className?: string;
	[key: string]: any; // Allow any other props
};

const StyledLink = ({
	href,
	children,
	className = '',
	...props
}: StyleLinkProps) => {
	return (
		<a
			href={href}
			className={`text-rose-500 hover:text-rose-400 transition-colors ${className}`}
			{...props}
		>
			{children}
		</a>
	);
};

export default StyledLink;
