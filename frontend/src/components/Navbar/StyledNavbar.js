import React from 'react'
import { Link } from 'react-router-dom'

const StyledNavbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" href="#"></Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to={`/`}>
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={`/profile`}>
                Perfil
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={`/allmeetings`}>
                BookClubs
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={`/all-books`}>
                Libros
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={`/`}>
                Logout
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to={`/all-users`}>
                Amigos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default StyledNavbar
