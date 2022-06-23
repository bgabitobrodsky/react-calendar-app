import React from 'react'

export const DayLayoutTask = ({task}) => {

	

	return (
		<div className="task">
			<div className="task-detail">
				{task.title}
			</div>
			<div className="task-buttons">
				<button className="btn btn-sm btn-dark"><i className="fa-solid fa-check"></i></button>
				<button className="btn btn-sm btn-danger"><i className="fa-solid fa-times"></i></button>
			</div>
		</div>
	)
}
