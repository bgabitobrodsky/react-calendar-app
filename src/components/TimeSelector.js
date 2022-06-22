import React from 'react'

export const TimeSelector = ({onChange, time}) => {


	return (
		<>
			<label htmlFor="input-time" className="form-label">Time:</label>
			<input type="time" className='form-control form-control-sm' name='time' id='input-time' value={time} onChange={onChange}></input>
		</>
	)
}
