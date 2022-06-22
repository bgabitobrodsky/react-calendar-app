import React from 'react'

export const FormatedWeek = ({date = Date.now()}) => {

	let display = "...";

	if(date){
		
		let fDate =  new Date(date);
		let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		let curMonth = months[fDate.getMonth()];
		let curYear = fDate.getFullYear();
	
		display = curMonth + " " + curYear;

	}

	return (
		<span>{display}</span>
	)
}
