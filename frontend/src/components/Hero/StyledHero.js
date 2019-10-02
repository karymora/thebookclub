import styled from 'styled-components'

const StyledHero = styled.header`
  background-image: url('https://source.unsplash.com/hhZEaVS5QMo/1600x900');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: white;
  ::after {
    content: '';
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .content {
    z-index: 2;
    padding: 1rem 1.5rem;
    max-width: 800px;
    margin: auto;
    text-align: center;
    h1 {
      margin-bottom: 2rem;
    }
    button:first-of-type {
      margin-right: 1rem;
    }
  }
`
export default StyledHero
