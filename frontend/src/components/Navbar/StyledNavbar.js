import styled from 'styled-components'

const StyledNavbar = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
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

export default StyledNavbar
