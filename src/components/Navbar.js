import React from 'react'
import { CurrentTimeSelector } from './CurrentTimeSelector'
import { TimeTypeSelector } from './TimeTypeSelector'

export const Navbar = ({currentDate, timeType, setNewDate}) => {
  return (
    <nav className="navbar">
		<div className="container">
			<div className='d-flex justify-content-between align-items-center w-100'>
				<span className="navbar-brand d-none d-md-inline">Calendar</span>
				<CurrentTimeSelector currentDate={currentDate} timeType={timeType} setNewDate={setNewDate}></CurrentTimeSelector>
				<TimeTypeSelector></TimeTypeSelector>
			</div>
		</div>
	</nav>
  )
}
