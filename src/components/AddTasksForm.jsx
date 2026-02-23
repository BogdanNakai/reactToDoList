import { useContext } from "react";
import Button from "./Button";
import Field from "./Field";
import { TasksContext } from "../context/TasksContecst";


const AddTasksForm = () => {
	const {
		addTask,
		newTaskInputRef,
		newTaskTitle,
		setNewTaskTitle,
	} = useContext(TasksContext);

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
			<Button type='submit'>Add</Button>
		</form>
	)
};

export default AddTasksForm