import React from 'react'
import StyledNavbar from './StyledNavbar'
import { FiUser, FiShoppingBag } from 'react-icons/fi'

const Navbar = ({ siteName }) => {
  return (
    <StyledNavbar>
      {/* Logo */}
      <div>
        <a href="/">{siteName}</a>
      </div>
      {/* Icons */}
      <div>
        <button>
          <FiUser />
        </button>
        <button>
          <FiShoppingBag />
        </button>
      </div>
    </StyledNavbar>
  )
}

export default Navbar
