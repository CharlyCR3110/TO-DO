import React from 'react';
import '../stylesheets/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Task({ texto, completed }) {
	return (
		<div className={completed ? 'taskContainer completed': 'taskContainer'}>
			<div className='text'>
				{texto}
			</div>
			<div className='taskIconsContainer'>
				<AiOutlineCloseCircle className='taskIcon'/>
			</div>
		</div>
	);
}

export default Task;