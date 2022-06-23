import React from 'react'

export const DayLayoutEvent = ({event}) => {
	return (
		<div className="event">
			<div className="event-time">
				<span>{event.datetime.getHours() + ':' + event.datetime.getMinutes()}</span>
			</div>
			<div className="event-detail">
				{event.title}
			</div>
		</div>
	)
}
