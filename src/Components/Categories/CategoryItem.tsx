import React from 'react'
import styled from 'styled-components'
import { EventDetailsModel } from '../../Models/EventDetails';

type Props = {
    categoryName: string,
    categoryEvents: EventDetailsModel[],
    categoryId: string
}

const CategoryItemLi = styled.li`
    border-top:1px solid grey;
    border-bottom: 1px solid  #d3d3d3;
    padding:1rem;
    width:100%;
`;

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
const CategoryItemContainer = styled.div`
    width:100%;
`;

const CategoryItem = (props: Props) => {
    const {categoryName, categoryEvents, categoryId} = props;
  return (
    <CategoryItemContainer>
        <CategoryItemLi>
            <h4>{categoryName}</h4>
        </CategoryItemLi>
        <EventGrid>
            <GridItemHeadColumn>Event Name</GridItemHeadColumn>
            <GridItemHeadColumn>Event Date</GridItemHeadColumn>
            <GridItemHeadColumn>Artist</GridItemHeadColumn>
            <GridItemHeadColumn>Price</GridItemHeadColumn>
            {categoryEvents.map(ce=>{
                return <>
                    <GridItem>{ce.name}</GridItem>
                    <GridItem>{new Date(ce.date).toLocaleDateString()}</GridItem>
                    <GridItem>{ce.artist}</GridItem>
                    <GridItem>${ce.price.toFixed(2)}</GridItem>
                </>
            })}
        </EventGrid>
    </CategoryItemContainer>
  )
}

export default CategoryItem