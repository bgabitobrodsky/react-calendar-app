import React from 'react'
import { DateSelector } from './DateSelector'
import { TimeSelector } from './TimeSelector'

export const DateTimeSelector = ({onChange, date, time}) => {

	return (
		<>
			<div className='col-6 mt-3'>
				<DateSelector date={date} onChange={onChange} />
			</div>
			<div className='col-6 mt-3'>
				<TimeSelector time={date} onChange={onChange} />
			</div>
		</>
	)
}
