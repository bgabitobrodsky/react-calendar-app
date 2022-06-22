import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Modal from 'react-bootstrap/Modal';

export const NewItemModal = ({closeModal, addNewItem}) => {

	const [state, setState] = useState({
		title: '',
		desc: '',
		date: '',
		time: '',
		type: '',
	});

	const {title, desc, date, type, time} = state;

	const handleInputChange = (e) => setState(state => ({
        ...state,
        [e.target.name]: e.target.value
    }));

	const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            handleSubmit(state);
        }
    }

	const handleSubmitClick = (e) => {
		handleSubmit(e);
	}

	const handleSubmit = (e) => {

		let newItem = {
			id: uuidv4(),
			title,
			desc,
			type,
			datetime: new Date(date + ' ' + time),
			createdDate: Date.now(),
			done:false
		}

		let validItem = false;

		if(title && title.length > 0){
			if(type === "Event" && date && time){
				validItem = true;
			}else if(type === "Task" && date){
				validItem = true;
			}
		}

		if(validItem)
			addNewItem(newItem);
	}

	return (
		<Modal show="true" onHide={closeModal}>
			<Modal.Header closeButton>
				<Modal.Title>New Item</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className='row mt-2 mb-2' onKeyPress={handleKeyPress}>
					<div className='col-12'>
						<label htmlFor="input-title" className="form-label">Title:</label>
						<input type="text" className='form-control' id='input-title' name='title' value={title} onChange={handleInputChange} required></input>
					</div>
					<div className='col-12 mt-3'>
						<label htmlFor="input-desc" className="form-label">Description:</label>
						<input className='form-control' name='desc' id='input-desc' value={desc} onChange={handleInputChange}></input>
					</div>
					<div className='col-12 mt-3'>
						<label htmlFor="input-desc" className="form-label">Type:</label>
						<select className="form-select" name='type' onChange={handleInputChange}>
							<option defaultValue>Select a value</option>
							<option value="Task">Task</option>
							<option value="Event">Event</option>
						</select>
					</div>
					{
						(type === 'Event') && (
							<>
								<div className='col-6 mt-3'>
									<label htmlFor="input-date" className="form-label">Date:</label>
									<input type="date" className='form-control form-control-sm' name='date' id='input-date' value={date} onChange={handleInputChange}/>
								</div>
								<div className='col-6 mt-3'>
									<label htmlFor="input-time" className="form-label">Time:</label>
									<input type="time" className='form-control form-control-sm' name='time' id='input-time' value={time} onChange={handleInputChange}/>
								</div>
							</>
						)
					}
					{
						(type === 'Task') && (
							<div className='col-12 mt-3'>
								<label htmlFor="input-date" className="form-label">Date:</label>
								<input type="date" className='form-control form-control-sm' name='date' id='input-date' value={date} onChange={handleInputChange}/>
							</div>
						)
					}
					

				</div>
			</Modal.Body>
			<Modal.Footer>
				<button className='btn btn-secondary' onClick={closeModal}>Cancel</button>
				<button className='btn btn-dark' onClick={handleSubmitClick}>Add</button>
			</Modal.Footer>
		</Modal>
	)
}
