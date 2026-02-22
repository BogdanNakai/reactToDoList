import Field from "./Field";

const SeartchTaskForm = (props) => {

	const {
		searchQuery,
		setSearchQuery
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
				value={searchQuery}
				onInput={(event) => setSearchQuery(event.target.value)}
			/>
		</form>
	)
};

export default SeartchTaskForm
