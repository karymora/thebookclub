import styled from 'styled-components'

const LoggedButton = styled.button`
  font-size: 1.5rem;
  padding: 10px 110px 10px 100px;
  border-radius: 0.4rem;
  margin-top: 25px;
  border: 1px solid ${props => (props.border ? props.border : 'black')};
  color: ${props => (props.color ? props.color : 'black')};
  background: ${props => (props.bg ? props.bg : 'transparent')};
  transition: opacity 0.25s ease-in-out;
  font-family: 'Yeseva One', cursive;
  :hover {
    opacity: 0.75;
  }
`

export default LoggedButton
