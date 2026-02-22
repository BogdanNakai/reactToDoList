import ButtonAdd from "./ButtonAdd";
import Field from "./Field";


const AddTasksForm = (prop) => {
	const {
		addTask,
		newTaskInputRef,
		newTaskTitle,
		setNewTaskTitle,
	} = prop;

	const onSubmint = (event) => {
		event.preventDefault();
		addTask()
	};

	return (
		<form className="todo__form" onSubmit={onSubmint} >
			<Field
				className='todo__field'
				lable='New Task title'
				id='new-task'
				ref={newTaskInputRef}
				value={newTaskTitle}
				onInput={(event) => setNewTaskTitle(event.target.value)}
			/>
			<ButtonAdd type='submit'>Add</ButtonAdd>
		</form>
	)
};

export default AddTasksForm