import React from 'react'

export const DateSelector = ({onChange, date}) => {


	return (
		<>
			<label htmlFor="input-date" className="form-label">Date:</label>
			<input type="date" className='form-control form-control-sm' name='date' id='input-date' value={date} onChange={onChange}></input>
		</>
	)
}