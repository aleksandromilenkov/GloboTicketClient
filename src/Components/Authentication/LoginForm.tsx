import React from 'react'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import useLogin from './useLogin'
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginAppUser } from '../../Models/AppUser';
import { FormContainer } from '../../UI/FormContainer'
import { FormField } from '../../UI/FormField'
import { Label } from '../../UI/Label'
import { Input } from '../../UI/Input'
import { ErrorMessage } from '../../UI/ErrorMessage'
import Button from '../../UI/Button'

type Props = {}
type LoginAppUserForm = {
    email: string,
    password: string,
}
const userFromSchema = yup.object().shape({
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
  });
const LoginForm = (props: Props) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm<LoginAppUserForm>({
        resolver: yupResolver(userFromSchema)
    });
    const { login, isLoading, error } = useLogin();
    const submitHandler: SubmitHandler<LoginAppUser> = (formValues) => {
        const userToLogin = {
            email: formValues.email,
            password: formValues.password
        }
        login(userToLogin);
        reset();
    };
  return (
    <div>
        <FormContainer>
        <form onSubmit={handleSubmit(submitHandler)}>
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
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button type="submit" variation='primary' size='small'>Sign in</Button>
          </div>
        </form>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
      </FormContainer>
    </div>
  )
}

export default LoginForm