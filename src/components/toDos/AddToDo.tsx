import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addToDo } from '../../redux/toDosSlice';

const AddTodo = () => {
	const [toDoText, setToDoText] = useState('');

	const dispatch = useDispatch();

	const onSubmit = () => {

		if(toDoText.trim().length === 0)
		{
			alert("Don't forget to write!");
			setToDoText("");
		}

		dispatch(
			addToDo({
				toDo: toDoText
			})
		);

		setToDoText("");
	};

	return (
		<div className="add-to-do">
			<input
				type="text"
				className="to-do-input"
				placeholder="Add something"
				value={toDoText}
				onChange={(event) => setToDoText(event.target.value)}
			></input>

			<button className="to-do-button" onClick={onSubmit}>
				Add
			</button>
		</div>
	);
};

export default AddTodo;