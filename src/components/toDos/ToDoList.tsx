import { RootState } from '../../redux/store';
import AddTodo from './AddToDo';
import ToDoItem from './ToDoItem';
import { useSelector } from "react-redux";

const TodoList = () => {
	const todos = useSelector((state: RootState)=>{
		return state.toDos.items
	});

	return (
		<ul className="to-dos-list">
			<AddTodo/>
			{todos.map((todo) => (
				<ToDoItem id={todo.id} name={todo.name} />
			))}
		</ul>
	);
};

export default TodoList;