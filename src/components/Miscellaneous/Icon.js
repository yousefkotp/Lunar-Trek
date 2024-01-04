const Icon = (props) => {
	const { link, to, children } = props;

	return link === true ? (
		<a href={to} target="_blank" rel="noopener noreferrer">
			{children}
		</a>
	) : (
		children
	);
};

export default Icon;
