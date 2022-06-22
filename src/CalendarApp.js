import React, { useState } from 'react'
import { Calendar } from './components/Calendar';
import { Navbar } from './components/Navbar'
import { NewItem } from './components/NewItem';

export const CalendarApp = () => {

    const [state, setState] = useState({
        data: [],
        currentDate: Date.now(),
        timeType: 'Day'
    });

    const {data} = state;

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
