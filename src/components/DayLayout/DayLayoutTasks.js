import React from 'react'
import { DayLayoutTask } from './DayLayoutTask'

export const DayLayoutTasks = ({tasks}) => {
	if(!tasks.length > 0)
		return

	return (
		<div className="tasks">
			<h4 className="section-title">Tasks</h4>
			{
				tasks.map( t => <DayLayoutTask key={t.id} task={t}/> )
			}
		</div>
	)
}
