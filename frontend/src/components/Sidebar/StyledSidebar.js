import styled from 'styled-components'

const StyledSidebar = styled.nav`
  position: fixed;
  width: 35%;
  top: 0;
  left: 0;
  height: 100vh;
  padding: 1rem 1.5rem;
  background: ${props => `url(${props.background}) no-repeat top center`};
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

export default StyledSidebar

// background - image: ${
//   props =>
//   props.url ? props.url : 'https://source.unsplash.com/BfriYg0iOCs/1200x900'
// };
