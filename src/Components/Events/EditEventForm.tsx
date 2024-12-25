import React from 'react'
import useEventById from './useEventById';
import { EventDetailsModel } from '../../Models/EventDetails';

type Props = {
    event:EventDetailsModel
}

const EditEventForm = ({event}: Props) => {
  return (
    <div>EditEventForm</div>
  )
}

export default EditEventForm