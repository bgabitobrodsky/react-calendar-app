import React, { useEffect, useState } from 'react'
import { DayLayout } from './DayLayout/DayLayout'

export const Calendar = ({data, timeType, currentDate}) => {

	const [items, setItems] = useState([])

	useEffect(() => {
	  
		if(timeType === 'Day'){
			let newItems = data.filter( ({datetime}) => {
				let date = new Date(currentDate);
				return (datetime.getDay() === date.getDay() && datetime.getMonth() === date.getMonth() && datetime.getYear() === date.getYear())
			});
			setItems(newItems);
		}
		
	  
	}, [data,timeType,currentDate])
	

	return (
		<DayLayout items={items}/>
	)
}
