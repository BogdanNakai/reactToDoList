const Field = (props) => { 
	const { 
		className = '',
		id, 
		lable, 
		type = 'text',
		value,
		onInput,
		ref,
	} = props


	return (
		<div className={`field ${className}`}>
			<label
				className="field__label"
				htmlFor="new-task"
			>
				{lable}
			</label>
			<input
				className="field__input"
				id={id}
				placeholder=" "
				autoComplete="off"
				type={type}
				value={value}
				onInput={onInput}
				ref={ref}
			/>
		</div>
	)
};

export default Field