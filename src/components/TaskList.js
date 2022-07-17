import React from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import '../stylesheets/TaskList.css';
import { useState } from 'react';

function TaskList () {
	
	const [tasks, setTasks] = useState([]);
	
	const addTask = task => {
		if (task.text.trim()) {
			task.text = task.text.trim();
			const updatedTasks = [task, ...tasks];
			setTasks(updatedTasks);
		}
	};

  return (
		<>
			<TaskForm onSubmit={addTask}/>
			<div className='taskListContainer'>
				{
					tasks.map((task) =>
						<Task 
							key={task.id}
							id={task.id}
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