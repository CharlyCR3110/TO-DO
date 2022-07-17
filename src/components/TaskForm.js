import React from 'react';
import '../stylesheets/TaskForm.css';

function TaskForm (props) {
	return (
		<form className='taskForm'>
			<input
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