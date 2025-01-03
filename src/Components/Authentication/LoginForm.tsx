import React from 'react'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import useLogin from './useLogin'
import { useForm } from 'react-hook-form';
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
   
  return (
    <div>

    </div>
  )
}

export default LoginForm