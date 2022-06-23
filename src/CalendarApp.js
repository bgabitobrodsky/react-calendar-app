import React, { useEffect, useState } from 'react'
import { Calendar } from './components/Calendar';
import { Navbar } from './components/Navbar'
import { NewItem } from './components/NewItem';
import { getDataFromLS } from './helpers/getDataFromLS';

export const CalendarApp = () => {

    const [state, setState] = useState({
        data: getDataFromLS(),
        currentDate: Date.now(),
        timeType: 'Day'
    });
    const {data} = state;

    useEffect(() => {
        localStorage.setItem('calendar-data',JSON.stringify(data));
    }, [data])

    const onDateChange = (newDate) => {
        setState({
            ...state,
            currentDate: newDate
        })
    }

    const onSetData = (newData) => {
        setState({
            ...state,
            data: newData 
        })
    }

    return (
        <>
            <Navbar {...state} setNewDate={onDateChange}></Navbar>

            <NewItem data={data} setData={onSetData}></NewItem>

            <Calendar {...state}/>
        </>
    )
}   
