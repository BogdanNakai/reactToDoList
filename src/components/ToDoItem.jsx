import { memo } from "react";

const ToDoItem = (props) => { 
	const { 
		className = '',
		id, 
		title, 
		isDone,
		onDelitTaskButtonClik,
		onTaskCompliteChange,
		ref,
	} = props;

	return (
		<li className={`todo-item ${className}`} ref={ref}>
			<input
				className="todo-item__checkbox"
				id={id}
				type="checkbox"
				checked={isDone}
				readOnly
				onChange={(event) => onTaskCompliteChange(id, event.target.checked)}
			/>
			<label
				className="todo-item__label"
				htmlFor={id}
			>
				{title}
			</label>
			<button
				className="todo-item__delete-button"
				aria-label="Delete"
				title="Delete"
				onClick={() => onDelitTaskButtonClik(id)}
			>
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M15 5L5 15M5 5L15 15"
						stroke="#757575"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
		</li>
	)
};

export default memo(ToDoItem)