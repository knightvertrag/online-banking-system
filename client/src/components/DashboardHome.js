import React from 'react'
import { Card } from 'react-bootstrap'

function DashboardHome({profile}) {
  return (
    <>
  <Card  style={{ width: '18rem' ,margin:'auto', marginTop:'10em'}}>
      <Card.Body>
        <Card.Title>Hi, {profile.firstName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Customer Id : {profile.custId}</Card.Subtitle>
        <Card.Text>
          Welcome to your Dashboard !
        </Card.Text>
      </Card.Body>
    </Card>

    </>
  )
}

export default DashboardHome