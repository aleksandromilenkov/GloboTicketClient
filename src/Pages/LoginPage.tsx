import React from 'react'
import LoginForm from '../Components/Authentication/LoginForm'
import Button from '../UI/Button'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

type Props = {}

const LoginPage = (props: Props) => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate('/home'); // Navigate back to the events page
    };
  return (
    <div>
        <LoginForm/>
        <div style={{marginLeft:'1rem'}}>
        <Button onClick={handleGoBack} size='xs'> <FaArrowLeft /> Back to Home</Button>
        </div>
    </div>
  )
}

export default LoginPage