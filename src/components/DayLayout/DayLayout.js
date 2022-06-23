import React from 'react'
import { DayLayoutEvents } from './DayLayoutEvents';
import { DayLayoutTasks } from './DayLayoutTasks';

export const DayLayout = ({items}) => {

	let tasks = items.filter( i => i.type === "Task");
	let events = items.filter( i => i.type === "Event").sort((a,b) => {
		return a.datetime - b.datetime;
	});

	return (
		<div className="container calendar">
			<div className="row">
				<div className="col-12 day-layout">
					{
						(!items.length > 0)
						?<p className='nothing-today-sign'>Nothing for today. Create Tasks or Events from the bottom below.</p>
						:<>
							<DayLayoutTasks tasks={tasks}/>
							<DayLayoutEvents events={events}/>
						</>
					}
					
				</div>
			</div>
		</div>
	)
}
