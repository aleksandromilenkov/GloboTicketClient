import React from 'react'
import { EventListModel } from '../../Models/Event'
import { EventDetailsModel } from '../../Models/EventDetails'
import styled from 'styled-components';
import Button from '../../UI/Button';
import { FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const GridItem = styled.div`
  padding: 10px;
  text-align: center;
  border-bottom:1px solid  #d3d3d3;
`;
const GridItemImg = styled.img`
    width:100%;

`;
type Props = {
  event: EventListModel | EventDetailsModel
}

const Event = ({event}: Props) => {
  const navigate = useNavigate();
  return (
          <React.Fragment key={event.eventId}>
            <GridItem>
                <GridItemImg src={event.imageUrl} alt={event.name} />
            </GridItem>
            <GridItem>{event.name}</GridItem>
            <GridItem>{new Date(event.date).toLocaleDateString()}</GridItem>
            <GridItem>
                <Button onClick={() => navigate(`/events/${event.eventId}`)} >
                    <FaEdit />
                </Button>
            </GridItem>
          </React.Fragment>
  )
}

export default Event