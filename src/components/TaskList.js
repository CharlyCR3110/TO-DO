import React from 'React';
import TaskForm from './TaskForm';
import '../stylesheets/TaskList.css';

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