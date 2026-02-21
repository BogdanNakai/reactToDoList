import Field from "./Field";

const SeartchTaskForm = (props) => {

	const {
		onSearchInput
	} = props;

	return (
		<form
			className="todo__form"
			onSubmit={(event) => { event.preventDefault() }}
		>
			<Field
				className='todo__field'
				lable='Seartch task'
				id='seartch-task'
				type='seartch'
				onInput={(event) => onSearchInput(event.target.value)}
			/>
		</form>
	)
};

export default SeartchTaskForm
