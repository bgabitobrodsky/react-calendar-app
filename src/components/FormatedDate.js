import React from 'react'

export const FormatedDate = ({date = Date.now()}) => {

	let today = "...";

	if(date){
		
		let fDate =  new Date(date);
		let day = ( fDate.getDate() < 10) ? '0' + fDate.getDate() : fDate.getDate();
		let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		let curMonth = months[fDate.getMonth()];
		let curYear = fDate.getFullYear();
	
		today = day + " " + curMonth + " " + curYear;

	}

	return (
		<span>{today}</span>
	)
}
