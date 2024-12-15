import React from 'react'
import {Link} from 'react-router-dom'
import '../style/home.css'
import siyah from '../disney-image/siyahlogo.jpeg';
import pembe from '../disney-image/pembelogo.jpeg';

import { popularMovies } from '../data/data-Home'
import { popularSeries } from '../data/data-Home'
import { kidsContent } from '../data/data-Home'
function Home() {
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <h1>Cine Tower</h1>
          <p>Welcome to the world of entertainment</p>
        </div>
        <div className="header-image">
          <img src={siyah} alt="Netflix" />
        </div>
      </header>
      <div className='card'>
        <section className="movies-section">
          <h2>Popular Movies</h2>
          <div className="movies-cards">
            {popularMovies.map((movie) => (
              <div key={movie.id} className="movie-card">
                <img src={movie.img} alt={movie.name} />
                <h2>{movie.name}</h2>
                <Link to={`/content/${movie.id}`}>
                  <button>Watch</button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="series-section">
          <h2>Popular Series</h2>
          <div className="series-cards">
            {popularSeries.map((serie) => (
              <div key={serie.id} className="series-card">
                <img src={serie.img} alt={serie.name} />
                <h2>{serie.name}</h2>
                <Link to={`/content/${serie.id}`}>
                  <button>Watch</button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="kids-section">
          <h2>Kids Content</h2>
          <div className="kids-cards">
            {kidsContent.map((content) => (
              <div key={content.id} className="kids-card">
                <img src={content.img} alt={content.name} />
                <h2>{content.name}</h2>
                <Link to={`/content/${content.id}`}>
                  <button>Watch</button>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home