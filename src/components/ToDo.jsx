import { useState } from "react"
import AddTasksForm from "./AddTasksForm"
import SeartchTaskForm from "./SearchTaskForm"
import TodoInfo from "./ToDoInfo"
import ToDoList from "./ToDoList"

const ToDo = () => {

	const [tasks, setTasks] = useState([
		{ id: 'tasks-1', title: 'task-1', isDone: false },
		{ id: 'tasks-2', title: 'task-2', isDone: true },
	])

	const [newTaskTitle, setNewTaskTitle] = useState('')

	const deleteAllTasks = () => {
		const isConfirned = confirm('Are you shure you want to dalete all tasks?')

		if (isConfirned) { 
			setTasks([])
		}
		
	};

	const deleteTask = (tasksId) => {
		setTasks(
			tasks.filter((task) => task.id !== tasksId)
		)
	}

	const toggleTaskComplate = (taskId, isDone) => {
		setTasks(
			tasks.map((task) => { 
				if (task.id === taskId) { 
					return {...task, isDone}
				}
				return task
			})
		)
	}

	const filterTasks = (query) => {
		console.log(query);
	};

	const addTask = () => {
		if (newTaskTitle.trim().length > 0) { 
			const newTask = {
				id: crypto?.randomUUID() ?? Date.now().toString(),
				title: newTaskTitle,
				isDone: false,
			}
			setTasks([...tasks, newTask])
			setNewTaskTitle('')
		}
	}


	return (
		<div className="todo">

			<h1 className="todo__title">To Do List</h1>
			<AddTasksForm
				addTask={addTask}
				newTaskTitle={newTaskTitle}
				setNewTaskTitle={setNewTaskTitle}
			/>
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