import React from 'React';
import TaskForm from './TaskForm';

function TaskList () {
  return (
		<>
			<TaskForm />
			<div className='taskListContainer'>
			</div>
		</>
  );
}

export default TaskList;