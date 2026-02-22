import { useState, useEffect, useRef } from "react"
import AddTasksForm from "./AddTasksForm"
import SeartchTaskForm from "./SearchTaskForm"
import TodoInfo from "./ToDoInfo"
import ToDoList from "./ToDoList"
import ButtonAdd from "./ButtonAdd"

const ToDo = () => {

	const [tasks, setTasks] = useState(() => {
		const sevedTasks = localStorage.getItem('tasks');

		if (sevedTasks) {
			return JSON.parse(sevedTasks)
		}

		return [
			{ id: 'tasks-1', title: 'task-1', isDone: false },
			{ id: 'tasks-2', title: 'task-2', isDone: true },
		]
	})

	const [newTaskTitle, setNewTaskTitle] = useState('');
	const [searchQuery, setSearchQuery] = useState('');

	const newTaskInputRef = useRef(null);
	const firstInComplitTaskRef = useRef(null);
	const firstInComplitTaskId = tasks.find(({ isDone }) => !isDone)?.id

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
					return { ...task, isDone }
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
			setSearchQuery('')
			newTaskInputRef.current.focus()
		}
	}

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

	useEffect(() => { 
		newTaskInputRef.current.focus()
	}, [])

	const clearSeartchQuery = searchQuery.trim().toLowerCase()
	const filteredTasks = clearSeartchQuery.length > 0
		? tasks.filter(({ title }) => title.toLowerCase().includes(clearSeartchQuery))
		: null

	return (
		<div className="todo">

			<h1 className="todo__title">To Do List</h1>
			<AddTasksForm
				addTask={addTask}
				newTaskTitle={newTaskTitle}
				setNewTaskTitle={setNewTaskTitle}
				newTaskInputRef={newTaskInputRef}
			/>
			<SeartchTaskForm
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				onSearchInput={filterTasks}
			/>
			<TodoInfo
				total={tasks.length}
				done={tasks.filter(({ isDone }) => isDone).length}
				onDelitAllButtonClik={deleteAllTasks}
			/>
			<ButtonAdd
				onClick={() => { 
					firstInComplitTaskRef.current?.scrollIntoView({behavior: 'smooth'})
				}}
			>Show first incomplate task</ButtonAdd>
			<ToDoList
				tasks={tasks}
				filterdTasks={filteredTasks}
				firstInComplitTaskRef={firstInComplitTaskRef}
				firstInComplitTaskId={firstInComplitTaskId}
				onDelitTaskButtonClik={deleteTask}
				onTaskCompliteChange={toggleTaskComplate}
			/>
		</div>
	)
};

export default ToDo