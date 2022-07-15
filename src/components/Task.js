import React from "react";

function Task({ texto }) {
	return (
		<div className="taskContainer">
			<div className="text">
				{texto}
			</div>
			<div className="taskIcon">
				Eliminar
			</div>
		</div>
	);
}

export default Task;