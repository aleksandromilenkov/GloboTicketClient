import React from 'react'
import Button from '../../UI/Button'
import styled from 'styled-components';

type Props = {}

const EventActionsContainer = styled.div`
    display:flex;
    justify-content:flex-end;
    gap:1rem;
`;

const EventActions = (props: Props) => {
  return (
    <EventActionsContainer>
        <Button>Add Event</Button>
        <Button>Export Events</Button>
    </EventActionsContainer>
  )
}

export default EventActions