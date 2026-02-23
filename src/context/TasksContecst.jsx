import {
	createContext,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react'

export const TasksContext = createContext({});

export const TasksProviden = (props) => {
	const { children } = props

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

	const deleteAllTasks = useCallback(() => {
		const isConfirned = confirm('Are you shure you want to dalete all tasks?')

		if (isConfirned) {
			setTasks([])
		}
	}, [])

	const deleteTask = useCallback((tasksId) => {
		setTasks(
			tasks.filter((task) => task.id !== tasksId)
		)
	}, [tasks])

	const toggleTaskComplate = useCallback((taskId, isDone) => {
		setTasks(
			tasks.map((task) => {
				if (task.id === taskId) {
					return { ...task, isDone }
				}
				return task
			})
		)
	}, [tasks])

	const addTask = useCallback(() => {
		if (newTaskTitle.trim().length > 0) {
			const newTask = {
				id: crypto?.randomUUID() ?? Date.now().toString(),
				title: newTaskTitle,
				isDone: false,
			}
			setTasks((prevTasks) => [...prevTasks, newTask])
			setNewTaskTitle('')
			setSearchQuery('')
			newTaskInputRef.current.focus()
		}
	}, [newTaskTitle])

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

	useEffect(() => {
		newTaskInputRef.current.focus()
	}, [])

	const filteredTasks = useMemo(() => {
		const clearSeartchQuery = searchQuery.trim().toLowerCase()

		return clearSeartchQuery.length > 0
			? tasks.filter(({ title }) => title.toLowerCase().includes(clearSeartchQuery))
			: null
	}, [searchQuery, tasks])


	return (
		<TasksContext.Provider
			value={{
				tasks,
				filteredTasks,
				firstInComplitTaskRef,
				firstInComplitTaskId,
				deleteTask,
				deleteAllTasks,
				toggleTaskComplate,
				
				newTaskTitle,
				setNewTaskTitle,
				searchQuery,
				setSearchQuery,
				newTaskInputRef,
				addTask
			}}
		>
			{children}
		</TasksContext.Provider>
	)

}