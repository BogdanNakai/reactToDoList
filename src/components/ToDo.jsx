import AddTasksForm from "./AddTasksForm"
import SeartchTaskForm from "./SearchTaskForm"
import TodoInfo from "./ToDoInfo"
import ToDoList from "./ToDoList"

const ToDo = () => { 
	return (
		<div className="todo">

			<h1 className="todo__title">To Do List</h1>
			<AddTasksForm />
			<SeartchTaskForm />
			<TodoInfo />
			<ToDoList />
		</div>
	)
};

export default ToDo