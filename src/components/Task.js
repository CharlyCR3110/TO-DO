import React from "react";
import '../stylesheets/Task.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({ texto }) {
	return (
		<div className="taskContainer">
			<div className="text">
				{texto}
			</div>
			<div className="taskIcon">
				<AiOutlineCloseCircle />
			</div>
		</div>
	);
}

export default Task;