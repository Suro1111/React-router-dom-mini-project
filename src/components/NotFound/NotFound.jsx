import React from 'react'
import { Container } from '../Container/Container'
import { useNavigate } from 'react-router-dom'

export function NotFound() {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
  return (
    <Container>
        <h2>404 Not Found</h2>
        <button onClick={goBack}>Go Back</button>
    </Container>
  )
}
