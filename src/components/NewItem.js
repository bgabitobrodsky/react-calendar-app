import React from 'react'
import { useModal } from '../hooks/useModal'
import { NewItemModal } from './NewItemModal';

export const NewItem = ({setData, data}) => {

	const {isModalOpen, closeModal, openModal} = useModal();

	const handleNewItem = (newItem) => {
		closeModal();
		setData([newItem,...data]);
	}

	return (
		<>
			<button className="new-button btn btn-dark" onClick={openModal}><i className="fa-solid fa-plus"></i></button>
			
			{
				isModalOpen && <NewItemModal addNewItem={handleNewItem} closeModal={closeModal}></NewItemModal>
			}
		</>
	)
}
