import React from 'react'
import { DayLayoutEvent } from './DayLayoutEvent'

export const DayLayoutEvents = ({events}) => {

	if(!events.length > 0)
		return

  	return (
		<div className="events">
			<h4 className="section-title">Events</h4>
			{
				events.map( e => <DayLayoutEvent key={e.id} event={e}/> )
			}
		</div>
  	)
}
