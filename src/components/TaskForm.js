import React from 'react';
import { useState } from 'react';
import '../stylesheets/TaskForm.css';

function TaskForm (props) {

	const [input, setInput] = useState('')

	const changeHandler = e => {
		setInput(e.target.value);
		console.log(e.target.value);
	}

	const submitHandler = e => {
		e.preventDefault();
		const newTask = {
			id: '12',
			text: input,
			completed: false
		}
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