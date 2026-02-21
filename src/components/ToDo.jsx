import AddTasksForm from "./AddTasksForm"
import SeartchTaskForm from "./SearchTaskForm"
import TodoInfo from "./ToDoInfo"
import ToDoList from "./ToDoList"

const ToDo = () => {

	const tasks = [
		{ id: 'tasks-1', title: 'task-1', isDone: false },
		{ id: 'tasks-2', title: 'task-2', isDone: true },
	];

	const deleteAllTasks = () => {
		console.log('delit element')
	};

	const deleteTask = (tasksId) => {
		console.log(`Видалення завдання з ${tasksId}`)
	}

	const toggleTaskComplate = (taskId, isDone) => {
		console.log(taskId, isDone);
	}

	const filterTasks = (query) => {
		console.log(query);
	};

	const addTask = () => {
		console.log('Add task');
	}


	return (
		<div className="todo">

			<h1 className="todo__title">To Do List</h1>
			<AddTasksForm addTask={addTask} />
			<SeartchTaskForm onSearchInput={filterTasks} />
			<TodoInfo
				total={tasks.length}
				done={tasks.filter(({ isDone }) => isDone).length}
				onDelitAllButtonClik={deleteAllTasks}
			/>
			<ToDoList
				tasks={tasks}
				onDelitTaskButtonClik={deleteTask}
				onTaskCompliteChange={toggleTaskComplate}
			/>
		</div>
	)
};

export default ToDo