import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
	const {
		tasks = [],
		onDelitTaskButtonClik,
		onTaskCompliteChange
	} = props;
	const hasTasks = true;

	if (!hasTasks) {
		return (<div className="todo__empty-message"></div>)
	}

	return (
		<ul className="todo__list">
			{tasks.map((tasks) => (
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