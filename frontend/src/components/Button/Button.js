import React from 'react'
import StyledButton from './StyledButton'

const Button = ({ children, color, bg, border }) => {
  return (
    <StyledButton color={color} bg={bg} border={border}>
      {children}
    </StyledButton>
  )
}

export default Button
