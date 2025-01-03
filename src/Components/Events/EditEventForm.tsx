import React, { useState } from 'react'
import useEventById from './useEventById';
import { EventDetailsModel } from '../../Models/EventDetails';
import { EventCreateModel, EventEditModel } from '../../Models/Event';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import useEditEvent from './useEditEvent';
import useCategories from '../Categories/useCategories';
import LoadingSpinner from '../../UI/LoadingSpinner';
import styled from 'styled-components';
import { CategoryModel } from '../../Models/Category';
import useDeleteEvent from './useDeleteEvent';
import Modal from '../../UI/Modal';

type Props = {
    event:EventDetailsModel
}
 const FormContainer = styled.div`
  max-width: 800px;
  margin-left: 10px;
  padding: 2rem;
  border-radius: 8px;
`;


 const FormField = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 1rem;
`;

 const Label = styled.label`
  flex: 1; /* Takes 1 part of the row space */
  text-align: right;
  font-weight: bold;
  padding-right: 1rem;
  font-size: 1rem;
  width: fit-content;
`;

 const Input = styled.input`
  flex: 2; /* Takes 2 parts of the row space */
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

 const Select = styled.select`
  flex: 2;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

 const ErrorMessage = styled.span`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

 const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
`;
type ButtonVariation = 'primary';
interface ButtonProps {
    variation?: ButtonVariation;
  }
 const Button = styled.button<ButtonProps>`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: ${(props) =>
    props.variation === "primary" ? "#007bff" : "#dc3545"};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.variation === "primary" ? "#0056b3" : "#b02a37"};
  }
`;

const ButtonGroupDelete = styled.div`
display: flex;
gap: 10px;
justify-content: center; /* Align buttons horizontally */
margin-top: 20px;
`;

const ConfirmButton = styled.button`
background-color: #28a745; /* Green for confirm */
color: white;
border: none;
padding: 10px 20px;
font-size: 16px;
border-radius: 5px;
cursor: pointer;
transition: background-color 0.3s ease;

&:hover {
  background-color: #218838; /* Darker green on hover */
}

&:active {
  background-color: #1e7e34; /* Even darker green when pressed */
}
`;

const CancelButton = styled.button`
background-color: #dc3545; /* Red for cancel */
color: white;
border: none;
padding: 10px 20px;
font-size: 16px;
border-radius: 5px;
cursor: pointer;
transition: background-color 0.3s ease;

&:hover {
  background-color: #c82333; /* Darker red on hover */
}

&:active {
  background-color: #bd2130; /* Even darker red when pressed */
}
`;

const eventFormSchema = yup.object().shape({
    eventId: yup.string().required("EventID is required"),
    name: yup.string().required("Event name is required").max(50, "Name must be at most 50 characters"),
    date: yup.date().required("Event date is required"),
    artist: yup.string().max(50, "Artist name must be at most 50 characters"),
    description: yup.string().max(200, "Description must be at most 200 characters"),
    price: yup.number()
      .required("Price is required")
      .positive("Price must be a positive number")
      .typeError("Price must be a valid number"),
    imageUrl: yup.string()
      .url("Must be a valid URL"),
    categoryId: yup.string()
      .required("Event category is required")
      .notOneOf([""], "Please select a category"),
  });

const EditEventForm = ({event}: Props) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        console.log('asd');
        setShowModal(true);
    }
    const handleCloseModal = () => setShowModal(false);
  
    const { register, formState: { errors }, handleSubmit, reset } = useForm<EventEditModel>({
        resolver: yupResolver(eventFormSchema)
    });
    const { updateEvent, isLoading, error } = useEditEvent();
    const { deleteEvent, isLoading: isLoadingDelete, error: errorDelete } = useDeleteEvent();
    const {categories, error:errorCategories, isLoading:isLoadingCategories} = useCategories();

    const submitHandler: SubmitHandler<EventEditModel> = (formValues) => {
        updateEvent(formValues);
    };

    const deleteHandler = (e:any) =>{
        deleteEvent(event.eventId);
        handleCloseModal();
    }

    if (isLoading) return <LoadingSpinner/>
    if (isLoadingCategories) return <LoadingSpinner/>
    if (isLoadingDelete) return <LoadingSpinner/>
  return (
    <div>
        <FormContainer>
            <form onSubmit={handleSubmit(submitHandler)}>
                <input type="text" style={{display:"none"}} {...register("eventId")} value={event.eventId}/>
                <FormField>
                    <Label htmlFor="name">Event Name</Label>
                    <Input type="text" id="name" {...register("name")} defaultValue={event.name}/>
                    {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                </FormField>
                <FormField>
                    <Label htmlFor="date">Event Date</Label>
                    <Input
                        type="date"
                        id="date"
                        {...register("date")}
                        
                    />
                    {errors.date && <ErrorMessage>{errors.date.message}</ErrorMessage>}
                </FormField>
                <FormField>
                    <Label htmlFor="artist">Event Artist</Label>
                    <Input type="text" id="artist" {...register("artist")} defaultValue={event.artist}/>
                    {errors.artist && <ErrorMessage>{errors.artist.message}</ErrorMessage>}
                </FormField>
                <FormField>
                    <Label htmlFor="description">Event Description</Label>
                    <Input type="text" id="description" {...register("description")} defaultValue={event.description}/>
                    {errors.description && (
                        <ErrorMessage>{errors.description.message}</ErrorMessage>
                    )}
                </FormField>
                <FormField>
                    <Label htmlFor="price">Event Price</Label>
                    <Input type="number" id="price" {...register("price")} defaultValue={event.price}/>
                    {errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
                </FormField>
                <FormField>
                    <Label htmlFor="imageUrl">Event Image Url</Label>
                    <Input type="url" id="imageUrl" {...register("imageUrl")} defaultValue={event.imageUrl}/>
                    {errors.imageUrl && (
                        <ErrorMessage>{errors.imageUrl.message}</ErrorMessage>
                    )}
                </FormField>
                <FormField>
                    <Label htmlFor="categoryId">Event Category</Label>
                    <Select
                        id="categoryId"
                        {...register("categoryId")}
                        defaultValue={event.categoryId || ""}
                    >
                        <option value="">Select a category</option>
                        {categories?.map((category: CategoryModel) => (
                        <option key={category.categoryId} value={category.categoryId}>
                            {category.name}
                        </option>
                        ))}
                    </Select>
                    {errors.categoryId && <ErrorMessage>{errors.categoryId.message}</ErrorMessage>}
                </FormField>

                <ButtonGroup>
                    <Button type="submit" variation="primary">
                        Save Event
                    </Button>
                    <Button type="button" onClick={handleOpenModal}>
                        Delete Event
                    </Button>
                </ButtonGroup>
            </form>
            {error && <ErrorMessage>{error.message}</ErrorMessage>}
            {errorCategories && <ErrorMessage>{errorCategories.message}</ErrorMessage>}
            {errorDelete && <ErrorMessage>{errorDelete.message}</ErrorMessage>}
        </FormContainer>
        <Modal show={showModal} onClose={handleCloseModal}>
        <h2>Are you sure you want to delete this event?</h2>
        <ButtonGroupDelete>
            <ConfirmButton onClick={deleteHandler}>Confirm</ConfirmButton>
            <CancelButton onClick={handleCloseModal}>Cancel</CancelButton>
        </ButtonGroupDelete>
      </Modal>
    </div>
  )
}

export default EditEventForm