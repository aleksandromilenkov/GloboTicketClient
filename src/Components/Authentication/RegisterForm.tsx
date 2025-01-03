import React from 'react'
import { FormContainer } from '../../UI/FormContainer'
import { FormField } from '../../UI/FormField'
import { Label } from '../../UI/Label'
import { Input } from '../../UI/Input'
import { ErrorMessage } from '../../UI/ErrorMessage'
import Button from '../../UI/Button'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CreateAppUser } from '../../Models/AppUser'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import useRegister from './useRegister'

type Props = {}
type CreateAppUserForm = {
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    password: string,
    confirmPassword:string,
}
const userFromSchema = yup.object().shape({
    userName: yup.string().min(6, "UserName must be at least 6 characters").required("User name is required").max(50, "UserName must be at most 50 characters"),
    firstName: yup.string().required("Fist name is required").max(50, "FirstName must be at most 50 characters"),
    lastName: yup.string().required("Last name is required").max(50, "LastName must be at most 50 characters"),
    email: yup
    .string()
    .email("Please enter a valid email address")
    .max(200, "Email must be at most 200 characters")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password must be at most 50 characters")
    .matches(/[0-9]/, "Password must contain at least one digit")
    .required("Password is required"),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  });
const RegisterForm = (props: Props) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm<CreateAppUserForm>({
        resolver: yupResolver(userFromSchema)
    });
    const { registerUser, isLoading, error } = useRegister();
    const submitHandler: SubmitHandler<CreateAppUser> = (formValues) => {
        const userToRegister = {
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            userName: formValues.userName,
            email: formValues.email,
            password: formValues.password
        }
        registerUser(userToRegister);
        reset();
    };
  return (
    <div>
         <FormContainer>
        <form onSubmit={handleSubmit(submitHandler)}>
          <FormField>
            <Label htmlFor="name">First Name</Label>
            <Input type="text" id="name" {...register("firstName")} />
            {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
          </FormField>
          <FormField>
            <Label htmlFor="date">Last Name</Label>
            <Input type="text" id="name" {...register("lastName")} />
            {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
          </FormField>
          <FormField>
            <Label htmlFor="artist">User Name</Label>
            <Input type="text" id="artist" {...register("userName")} />
            {errors.userName && <ErrorMessage>{errors.userName.message}</ErrorMessage>}
          </FormField>
          <FormField>
            <Label htmlFor="description">Email</Label>
            <Input type="email" id="description" {...register("email")} />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </FormField>
          <FormField>
            <Label htmlFor="price">Password</Label>
            <Input type="password" id="price" {...register("password")} />
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          </FormField>
          <FormField>
            <Label htmlFor="price">Confirm Password</Label>
            <Input type="password" id="price" {...register("confirmPassword")} />
            {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}
          </FormField>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button type="submit" variation='primary' size='small'>Sign up</Button>
          </div>
        </form>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
      </FormContainer>
    </div>
  )
}

export default RegisterForm