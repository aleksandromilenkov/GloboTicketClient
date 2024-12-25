import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { CategoryModel, CreateCategoryModel } from '../../Models/Category';
import { FormContainer } from '../../UI/FormContainer';
import { FormTitle } from '../../UI/FormTitle';
import { FormField } from '../../UI/FormField';
import { Label } from '../../UI/Label';
import { Input } from '../../UI/Input';
import Button from '../../UI/Button';
import { ErrorMessage, SuccessMessage } from '../../UI/ErrorMessage';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import LoadingSpinner from '../../UI/LoadingSpinner';
import useCreateEvent from './useCreateEvent';
import { EventCreateModel } from '../../Models/Event';
import useCategories from '../Categories/useCategories';
import { Select } from '../../UI/Select';

type Props = {}

const eventFormSchema = yup.object().shape({
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

const CreateEventForm = (props: Props) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm<EventCreateModel>({
        resolver: yupResolver(eventFormSchema)
    });

    const {createEvent, isLoading, error, isEventCreatedSuccessfully, isEventCreatedFailed, isEventCreationTriggered, setIsEventCreationTriggered} = useCreateEvent();
    const {categories, error:errorCategories, isLoading:isLoadingCategories} = useCategories();
    console.log(categories)

    const submitHandler: SubmitHandler<EventCreateModel> = (formValues) => {
        const asd = createEvent(formValues);
        console.log(asd);
        reset();
        setIsEventCreationTriggered(false);
    };
    if (isLoading) return <LoadingSpinner/>
    if (isLoadingCategories) return <LoadingSpinner/>
  return (
    <div>
        <FormContainer>
        <form onSubmit={handleSubmit(submitHandler)}>
          <FormField>
            <Label htmlFor="name">Event Name</Label>
            <Input type="text" id="name" {...register("name")} />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </FormField>
          <FormField>
            <Label htmlFor="date">Event Date</Label>
            <Input type="date" id="date" {...register("date")} />
            {errors.date && <ErrorMessage>{errors.date.message}</ErrorMessage>}
          </FormField>
          <FormField>
            <Label htmlFor="artist">Event Artist</Label>
            <Input type="text" id="artist" {...register("artist")} />
            {errors.artist && <ErrorMessage>{errors.artist.message}</ErrorMessage>}
          </FormField>
          <FormField>
            <Label htmlFor="description">Event Description</Label>
            <Input type="text" id="description" {...register("description")} />
            {errors.description && <ErrorMessage>{errors.description.message}</ErrorMessage>}
          </FormField>
          <FormField>
            <Label htmlFor="price">Event Price</Label>
            <Input type="number" id="price" {...register("price")} />
            {errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
          </FormField>
          <FormField>
            <Label htmlFor="imageUrl">Event Image Url</Label>
            <Input type="url" id="imageUrl" {...register("imageUrl")} />
            {errors.imageUrl && <ErrorMessage>{errors.imageUrl.message}</ErrorMessage>}
          </FormField>
          <FormField>
            <Label htmlFor="categoryId">Event Category</Label>
            <Select id="categoryId" {...register("categoryId")}>
                <option value="">Select a category</option>
                {categories?.map((category: CategoryModel) => (
                <option key={category.categoryId} value={category.categoryId}>
                    {category.name}
                </option>
                ))}
            </Select>
            {errors.categoryId && <ErrorMessage>{errors.categoryId.message}</ErrorMessage>}
          </FormField>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button type="submit" variation='primary' size='small'>Create Event</Button>
          </div>
        </form>
        <div style={{textAlign:"center"}}>
        {isEventCreationTriggered && isEventCreatedSuccessfully && <SuccessMessage>Event successfully created.</SuccessMessage>}      
        {isEventCreationTriggered && isEventCreatedFailed && <ErrorMessage>Event failed to create.</ErrorMessage>}      
        </div>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
        {errorCategories && <ErrorMessage>{errorCategories.message}</ErrorMessage>}
      </FormContainer>
    </div>
  )
}

export default CreateEventForm