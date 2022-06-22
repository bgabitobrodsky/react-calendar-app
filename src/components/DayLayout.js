import React from 'react'

export const DayLayout = ({items}) => {

	let tasks = items.filter( i => i.type === "Task");
	let events = items.filter( i => i.type === "Event");

	return (
		<div className="container calendar">
			<div className="row">
				<div className="col-12 day-layout">
					<div className="tasks">
						<h4 className="section-title">Tasks</h4>
						{
							tasks.map( t => {
								return (
									<div key={t.id} className="task">
										<div className="task-detail">
											{t.title}
										</div>
										<div className="task-buttons">
											<button className="btn btn-sm btn-dark"><i className="fa-solid fa-check"></i></button>
											<button className="btn btn-sm btn-danger"><i className="fa-solid fa-times"></i></button>
										</div>
									</div>
								)
							})
						}
					</div>
					<div className="events">
						<h4 className="section-title">Events</h4>
						<div className="event">
							<div className="event-time">
								<span>08:00</span>
							</div>
							<div className="event-detail">
								Go to the school
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
