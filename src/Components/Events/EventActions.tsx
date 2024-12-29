import React, { useState } from 'react'
import Button from '../../UI/Button'
import styled from 'styled-components';
import Modal from '../../UI/Modal';
import CreateEventForm from './CreateEventForm';
import useExportEvents from './useExportEvents';

type Props = {}

const EventActionsContainer = styled.div`
    display:flex;
    justify-content:flex-end;
    gap:1rem;
`;

const EventActions = (props: Props) => {
    const [showModal, setShowModal] = useState(false);
    const [isLoading, blob, error] = useExportEvents();

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
  
    const handleExportEvents = (e: React.FormEvent) => {
        try {
             // Ensure the blob is valid
            if (!(blob instanceof Blob)) {
                throw new Error('Unexpected response format');
            }
            const url = window.URL.createObjectURL(blob);
      
            // Create a temporary anchor element
            const link = document.createElement('a');
            link.href = url;
      
            // Define the file name (you can customize this)
            link.download = 'Events.xlsx';
      
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link); // Clean up the DOM
          } catch (error: any) {
            console.error('Export failed:', error.message);
          }
    };
  return (
    <EventActionsContainer>
        <Button onClick={handleOpenModal}>Add Event</Button>
        <Button onClick={handleExportEvents}>Export Events</Button>
        <Modal show={showModal} onClose={handleCloseModal}>
        <h2>Create New Event</h2>
        <CreateEventForm/>
      </Modal>
    </EventActionsContainer>
  )
}

export default EventActions