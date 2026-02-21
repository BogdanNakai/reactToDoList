const ButtonAdd = (props) => { 
	const {
		className = 'button',
		type = 'button',
		children,
	} = props;
	return (
		<button
			className={`button ${className}`}
			type={type}
		>{children}</button>
	)
};

export default ButtonAdd