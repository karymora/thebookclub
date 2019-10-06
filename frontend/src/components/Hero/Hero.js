import React from 'react'
import StyledHero from './StyledHero'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <StyledHero>
      <div className="content">
        <p className="brand title is-1" color="white">
          The Book Club
        </p>
        <p className="brand subtitle is-3">
          Encuentra tu libro, encuentra tu comunidad
        </p>
        <Link to="/signup">
          <Button bg="black">Sign Up</Button>
        </Link>
        <Link to="/login">
          <Button bg="#FABE3E">Login</Button>
        </Link>
      </div>
    </StyledHero>
  )
}

export default Hero
