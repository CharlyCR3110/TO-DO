import React from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import '../stylesheets/TaskList.css';
import { useState } from 'react';

const addTask = task => {
	console.log('Sexo');
	console.log(task);
};

function TaskList () {

	const [tasks, setTask] = useState([]);

  return (
		<>
			<TaskForm onSubmit={addTask}/>
			<div className='taskListContainer'>
				{
					tasks.map((task) =>
						<Task 
							text={task.text}
							completed={task.completed}
						/>
					)
				}
			</div>
		</>
  );
}

export default TaskList;