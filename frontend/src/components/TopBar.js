import styled from 'styled-components'

const TopBar = styled.nav`
  position: absolute;
  width: 150vw;
  top: 0;
  margin-left:-350px;
  height: 40vh;
  ::after {
    content: '';
    background: rgba(0, 0, 0, 0.75);
    z-index:1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .content {
    
    padding: 1rem 1.5rem;
    max-width: 800px;
    margin: auto;
    text-align: center;
    color: white-space;
    h1 {
      margin-bottom: 2rem;
      color: white;
    }

    
  }
  
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
