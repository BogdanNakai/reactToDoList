import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
	const {
		tasks = [],
		filterdTasks,
		onDelitTaskButtonClik,
		onTaskCompliteChange,
	} = props;

	const hasTasks = tasks.length > 0
	const isEpmtyFilteredTasks = filterdTasks?.length === 0;

	if (!hasTasks) {
		return (<div className="todo__empty-message">Ther are no tasks yet</div>)
	}

	if (hasTasks && isEpmtyFilteredTasks) {
		return (<div className="todo__empty-message">Tasks not found</div>)
	}

	return (
		<ul className="todo__list">
			{(filterdTasks ?? tasks).map((tasks) => (
				<ToDoItem
					className='todo__item'
					key={tasks.id}
					id={tasks.id}
					title={tasks.title}
					isDone={tasks.isDone}
					onDelitTaskButtonClik={onDelitTaskButtonClik}
					onTaskCompliteChange={onTaskCompliteChange}
				/>
			))}
		</ul>
	)
};

export default ToDoList