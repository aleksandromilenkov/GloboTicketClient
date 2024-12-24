import React from 'react'
import styled from 'styled-components'
import useEvents from './useEvents'
import Button from '../../UI/Button'
import { FaEdit } from 'react-icons/fa';
import { EventListModel } from '../../Models/Event';

type Props = {}
const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  padding: 10px; 
  background-color: #f0f0f0; 
`
const GridItem = styled.div`
  padding: 10px;
  text-align: center;
  border-bottom:1px solid  #d3d3d3;
`;
const GridItemHeadColumn = styled.div`
  padding: 10px;
  text-align: center;
  border-bottom:1px solid  #d3d3d3;
  font-weight:bold;
  font-size:1.1rem;
`;
const EventList = (props: Props) => {
    const [isLoading, events, error] = useEvents();
  return (
    <div>
         <EventGrid>

            {events.map((e:EventListModel)=>{
                return <>
                    <GridItem><img src={e.imageUrl} alt={e.name}/></GridItem>
                    <GridItem>{e.name}</GridItem>
                    <GridItem>{new Date(e.date).toLocaleDateString()}</GridItem>
                    <GridItem><Button><FaEdit/></Button></GridItem>
                </>
            })}
        </EventGrid>
    </div>
  )
}

export default EventList