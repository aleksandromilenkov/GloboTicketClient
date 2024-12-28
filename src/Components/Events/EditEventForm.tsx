import React from 'react'
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

type Props = {
    event:EventDetailsModel
}
export const FormContainer = styled.div`
  max-width: 800px;
  margin-left: 10px;
  padding: 2rem;
  border-radius: 8px;
`;


export const FormField = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  flex: 1; /* Takes 1 part of the row space */
  text-align: right;
  font-weight: bold;
  padding-right: 1rem;
  font-size: 1rem;
  width: fit-content;
`;

export const Input = styled.input`
  flex: 2; /* Takes 2 parts of the row space */
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Select = styled.select`
  flex: 2;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
`;
type ButtonVariation = 'primary';
interface ButtonProps {
    variation?: ButtonVariation;
  }
export const Button = styled.button<ButtonProps>`
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
    const { register, formState: { errors }, handleSubmit, reset } = useForm<EventEditModel>({
        resolver: yupResolver(eventFormSchema)
    });
    const { updateEvent, isLoading, error } = useEditEvent();
    const {categories, error:errorCategories, isLoading:isLoadingCategories} = useCategories();
    const submitHandler: SubmitHandler<EventEditModel> = (formValues) => {
        updateEvent(formValues);
    };
    if (isLoading) return <LoadingSpinner/>
    if (isLoadingCategories) return <LoadingSpinner/>
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
                    <Button type="button">
                        Delete Event
                    </Button>
                </ButtonGroup>
            </form>
        </FormContainer>
    </div>
  )
}

export default EditEventForm