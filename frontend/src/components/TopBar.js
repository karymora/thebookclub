import styled from 'styled-components'

const TopBar = styled.nav`
  position: absolute;
  width: 100vw;
  top: 0;
  left: 0;
  height: 20vh;
  padding: 1rem 1.5rem;
  /* background: ${props => `url(${props.background}) no-repeat top center`}; */
   background-image: url('https://source.unsplash.com/hhZEaVS5QMo/1600x900');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
  z-index: 2;
  a {
    font-size: 1.6rem;
  }
  button {
    font-size: 1.6rem;
    color: white;
    :first-child {
      margin-right: 1rem;
    }
  }
`

export default TopBar
