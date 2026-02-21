import AddTasksForm from "./AddTasksForm"
import SeartchTaskForm from "./SearchTaskForm"
import TodoInfo from "./ToDoInfo"
import ToDoList from "./ToDoList"

const ToDo = () => { 

	const tasks = [
		{id: 'tasks-1', title: 'task-1', isDone: false},
		{id: 'tasks-2', title: 'task-2', isDone: true},
	];

	return (
		<div className="todo">

			<h1 className="todo__title">To Do List</h1>
			<AddTasksForm />
			<SeartchTaskForm />
			<TodoInfo
				total={tasks.length}
				done={tasks.filter(({isDone}) => isDone).length}
			/>
			<ToDoList tasks={tasks} />
		</div>
	)
};

export default ToDo