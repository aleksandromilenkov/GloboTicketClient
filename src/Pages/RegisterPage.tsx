import React from 'react'
import RegisterForm from '../Components/Authentication/RegisterForm'
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import { FaArrowLeft } from 'react-icons/fa';

type Props = {}

const RegisterPage = (props: Props) => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate('/home'); // Navigate back to the events page
    };
  return (
    <div>RegisterPage
        <RegisterForm/>
        <div style={{marginLeft:'1rem'}}>
        <Button onClick={handleGoBack} size='xs'> <FaArrowLeft /> Back to Home</Button>
        </div>
    </div>
  )
}

export default RegisterPage