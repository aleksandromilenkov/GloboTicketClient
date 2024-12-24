import React from 'react'
import styled from 'styled-components'
import { useForm, SubmitHandler } from "react-hook-form";
import { CreateCategoryModel } from '../../Models/Category';
import { FormContainer } from '../../UI/FormContainer';
import { FormTitle } from '../../UI/FormTitle';
import { FormField } from '../../UI/FormField';
import { Label } from '../../UI/Label';
import { Input } from '../../UI/Input';
import Button from '../../UI/Button';
import { ErrorMessage } from '../../UI/ErrorMessage';
import useCreateCategory from './useCreateCategory';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import LoadingSpinner from '../../UI/LoadingSpinner';

const schema = yup.object({
    name: yup.string().required('Category Name is required').min(2, 'Category Name must be at least 2 characters').max(50, 'Category Name cannot exceed 50 characters')
  }).required();
type Props = {
}
const CreateCategory = (props: Props) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm<CreateCategoryModel>({
        resolver: yupResolver(schema)
    });

    const {createCategory, isLoading, error} = useCreateCategory();

    const submitHandler: SubmitHandler<CreateCategoryModel> = (formValues) => {
        const asd = createCategory(formValues);
        console.log(asd);
        reset();
    };
    if (isLoading) return <LoadingSpinner/>
    return (
        <FormContainer>
        <form onSubmit={handleSubmit(submitHandler)}>
          <FormField>
            <Label htmlFor="name">Category Name</Label>
            <Input type="text" id="name" {...register("name")} />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </FormField>
    
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button type="submit" variation='primary' size='small'>Create Category</Button>
          </div>
        </form>
    
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
      </FormContainer>
      );
    
}
export default CreateCategory