import styled from 'styled-components'

const DetailCard = styled.div`
  /* font-size: 1.5rem;
  padding: 10px 10px;
  border: 1px 0px 0px 1px solid
    ${props => (props.border ? props.border : 'transparent')};
  color: ${props => (props.color ? props.color : 'white')};
  background: ${props => (props.bg ? props.bg : 'transparent')};
  transition: opacity 0.25s ease-in-out;
  font-family: 'Yeseva One', cursive;
  width: 200px;
  :hover {
    opacity: 0.75;
  } */
  width: 500px;
  height: 230px;
  box-shadow: 8px 12px 9px -9px rgba(156, 156, 156, 0.79);
  display: flex;
  position: relative;

`

export default DetailCard
