import ButtonAdd from "./ButtonAdd";
import Field from "./Field";


const AddTasksForm = () => {
	return (
		<form className="todo__form">
			<Field
				className='todo__field'
				lable='New Task title'
				id='new-task'
			/>
		<ButtonAdd type='submit'>Add</ButtonAdd>
		</form>
	)
};

export default AddTasksForm