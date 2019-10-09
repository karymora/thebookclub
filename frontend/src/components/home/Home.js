import React from 'react'
import Hero from '../Hero/Hero'
import { Link } from 'react-router-dom'

// import { Link } from 'react-router-dom'

function Home() {
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
              <Link class="nav-link" to={`/signup`}>
                Sign up
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={`/login`}>
                Log In
              </Link>
            </li>
          </ul>
          <span class="navbar-text">The Book Club</span>
        </div>
      </nav>
      <Hero />
      <section className="about">
        <div className="the-description">
          <div className="description-element">
            <div className="the-image">
              <img src={'https://svgshare.com/i/FN4.svg'} alt={'news'} />
            </div>
            <div className="the-text">
              <div className="text-title">Novedades</div>
              <div className="text-subtitle">
                De la editorial en cada reunión{' '}
              </div>
            </div>
          </div>
          <div className="description-element">
            <div className="the-image">
              <img src={'https://svgshare.com/i/FNv.svg'} alt={'book'} />
            </div>
            <div className="the-text">
              <div className="text-title">Encuentra</div>
              <div className="text-subtitle">Tu nuevo libro favorito</div>
            </div>
          </div>
          <div className="description-element">
            <div className="the-image">
              <img src={'https://svgshare.com/i/FMg.svg'} alt={'meeting'} />
            </div>
            <div className="the-text">
              <div className="text-title">Una reunión</div>
              <div className="text-subtitle">perfecta para tí cada mes </div>
            </div>
          </div>
          <div className="description-element">
            <div className="the-image">
              <img src={'https://svgshare.com/i/FNT.svg'} alt={'people'} />
            </div>
            <div className="the-text">
              {' '}
              <div className="text-title">Conoce</div>
              <div className="text-subtitle">
                amigos lectores cerca de tu área
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>The BookClub</strong> by{' '}
            <Link to="https://jgthms.com">Mora Mora</Link>. The source code is
            licensed
            <Link to="http://opensource.org/licenses/mit-license.php">MIT</Link>
            . The website content is licensed{' '}
            <Link to="http://creativecommons.org/licenses/by-nc-sa/4.0/">
              CC BY NC SA 4.0
            </Link>
            .
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Home
