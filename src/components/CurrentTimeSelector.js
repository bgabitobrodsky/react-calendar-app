import React from 'react'
import { FormatedDate } from './FormatedDate'
import { FormatedWeek } from './FormatedWeek'

export const CurrentTimeSelector = ({currentDate, timeType, setNewDate}) => {

    const onDateIncrement = () => {
        let date = new Date(currentDate);
        let nextDate = date.setDate(date.getDate() + 1);
        setNewDate(nextDate);
    }

    const onDateDecrement = () => {
        let date = new Date(currentDate);
        let nextDate = date.setDate(date.getDate() -1);
        setNewDate(nextDate);
    }
    
    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <div className="d-flex align-items-center">
                    <button className="btn" onClick={onDateDecrement}><i className="fa-solid fa-angle-left"></i></button>
                    <button className="btn" onClick={onDateIncrement}><i className="fa-solid fa-angle-right"></i></button>
                    <span className="current-time">
                        {
                            (timeType === 'Day') && <FormatedDate date={currentDate}></FormatedDate>
                        }
                        {
                            (timeType === 'Week') && <FormatedWeek date={currentDate}></FormatedWeek>
                        }
                    </span>
                </div>
            </li>
        </ul>
    )
}
