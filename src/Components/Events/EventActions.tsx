import React, { useState } from 'react'
import Button from '../../UI/Button'
import styled from 'styled-components';
import Modal from '../../UI/Modal';
import CreateEventForm from './CreateEventForm';

type Props = {}

const EventActionsContainer = styled.div`
    display:flex;
    justify-content:flex-end;
    gap:1rem;
`;

const EventActions = (props: Props) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle event submission logic here
      handleCloseModal();
    };
  return (
    <EventActionsContainer>
        <Button onClick={handleOpenModal}>Add Event</Button>
        <Button>Export Events</Button>
        <Modal show={showModal} onClose={handleCloseModal}>
        <h2>Create New Event</h2>
        <CreateEventForm/>
      </Modal>
    </EventActionsContainer>
  )
}

export default EventActions