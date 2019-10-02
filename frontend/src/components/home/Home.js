import React from 'react'
import Hero from '../Hero/Hero'
import Navbar from '../Navbar/Navbar'
// import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Bulma</strong> by{' '}
            <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
            licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
            The website content is licensed{' '}
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
              CC BY NC SA 4.0
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Home
