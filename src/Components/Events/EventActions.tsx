import React, { useState } from 'react'
import Button from '../../UI/Button'
import styled from 'styled-components';
import Modal from '../../UI/Modal';

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
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="eventName">Event Name</label>
            <input type="text" id="eventName" required />
          </div>
          <div>
            <label htmlFor="eventDate">Event Date</label>
            <input type="date" id="eventDate" required />
          </div>
          <div>
            <label htmlFor="eventImage">Event Image</label>
            <input type="file" id="eventImage" />
          </div>
          <Button type="submit">Create Event</Button>
        </form>
      </Modal>
    </EventActionsContainer>
  )
}

export default EventActions