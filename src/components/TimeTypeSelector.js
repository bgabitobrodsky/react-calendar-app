import React from 'react'

export const TimeTypeSelector = () => {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownTimeTypeSelector" data-bs-toggle="dropdown" aria-expanded="false">
                Day
            </button>
            {
                false
                /*
                <ul className="dropdown-menu" aria-labelledby="dropdownTimeTypeSelector">
                    <li><a className="dropdown-item" href="#">Day</a></li>
                    <li><a className="dropdown-item" href="#">Week</a></li>
                    <li><a className="dropdown-item" href="#">Month</a></li>
                </ul>*/
            }
        </div>
    )
}
