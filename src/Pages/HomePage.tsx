import React from 'react'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div style={{padding:"1rem"}}>
        <h1 style={{color:"#2d8f88"}}>Welcome to the GloboTicket Ticket Management System!</h1>
        <p style={{fontWeight:"bold", fontSize:"1.5rem"}}>Using this application you have access to all functionalities of GloboTicket.</p>
    </div>
  )
}

export default HomePage