import { useDispatch } from "react-redux";
import { deleteToDo } from '../../redux/toDosSlice';

interface ToDoItemProps {
	id: string;
	name: string;
  }

const ToDoItem = ({ id, name }: ToDoItemProps) => {

	const dispatch = useDispatch();

	const removeToDo=()=>{
		dispatch(
			deleteToDo({
				id: id
			})
		)
	}

	return (
		<ul className="to-do-item">
			<div>
				{name}
			</div>
			<div>
				<button className="remove-to-do-button" onClick={()=>{
					removeToDo();
				}}>Delete</button>
			</div>
		</ul>
	);
};

export default ToDoItem;