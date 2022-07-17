import React from 'react';
import { useState } from 'react';
import '../stylesheets/TaskForm.css';
import { v4 as uuidv4 } from 'uuid';

function TaskForm (props) {

	const [input, setInput] = useState('')

	const changeHandler = e => {
		setInput(e.target.value);
	};

	const submitHandler = e => {
		e.preventDefault();
		const newTask = {
			id: uuidv4(),
			text: input,
			completed: false
		}
		props.onSubmit(newTask);
	};

	return (
		<form 
			className='taskForm'
			onSubmit={submitHandler}>
			<input
				onChange={changeHandler}
				className='taskInput'
				type='text'
				placeholder='Write a task'
				name='text'
				/>
			<button className='taskButton'>
				Add task
			</button>
		</form>
	);
}

export default TaskForm;