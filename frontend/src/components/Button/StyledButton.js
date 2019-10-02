import styled from 'styled-components'

const StyledButton = styled.button`
  font-size: 1.5rem;
  padding: 1.25rem 1.25rem;
  border-radius: 0.4rem;
  border: 1px solid ${props => (props.border ? props.border : 'transparent')};
  color: ${props => (props.color ? props.color : 'white')};
  background: ${props => (props.bg ? props.bg : 'transparent')};
  transition: opacity 0.25s ease-in-out;
  :hover {
    opacity: 0.75;
  }
`

export default StyledButton
