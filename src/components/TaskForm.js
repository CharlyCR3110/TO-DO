import React from 'react';
import { useState } from 'react';
import '../stylesheets/TaskForm.css';

function TaskForm (props) {

	const [input, setInput] = useState('')

	const changeHandler = e => {
		setInput(e.target.value);
		console.log(e.target.value);
	}
	
	return (
		<form className='taskForm'>
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