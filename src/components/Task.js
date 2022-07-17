import React from 'react';
import '../stylesheets/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Task({ id, text, completed, completeTask, deleteTask}) {
	return (
		<div className={completed ? 'taskContainer completed': 'taskContainer'}>
			<div 
				className='text'
				onClick={() => completeTask(id)}>
				{text}
			</div>
			<div 
				className='taskIconsContainer'
				onClick={() => deleteTask(id)}>
				<AiOutlineCloseCircle className='taskIcon'/>
			</div>
		</div>
	);
}

export default Task;