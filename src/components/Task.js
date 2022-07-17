import React from 'react';
import '../stylesheets/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Task({ id, texto, completed, completeTask, deleteTask}) {
	return (
		<div className={completed ? 'taskContainer completed': 'taskContainer'}>
			<div 
				className='text'
				onClick={() => completeTask(id)}>
				{texto}
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