const ButtonAdd = (props) => { 
	const {
		className = 'button',
		type = 'button',
		children,
		onClick,
	} = props;
	return (
		<button
			className={`button ${className}`}
			type={type}
			onClick={onClick}
		>{children}</button>
	)
};

export default ButtonAdd