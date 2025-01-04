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
import LoadingSpinner from '../../UI/LoadingSpinner';

type Props = {}
type LoginAppUserForm = {
    email: string,
    password: string,
}

const LoginForm = (props: Props) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm<LoginAppUserForm>();
    const { login, isLoading, error } = useLogin();
    const submitHandler: SubmitHandler<LoginAppUser> = (formValues) => {
        const userToLogin = {
            email: formValues.email,
            password: formValues.password
        }
        login(userToLogin);
        reset();
    };
    if(isLoading) return <LoadingSpinner/>
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