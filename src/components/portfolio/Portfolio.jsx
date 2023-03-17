import React from 'react'
import './portfolio.css'
import Img1 from '../../Assets/portfolio1.jpg'
import Img2 from '../../Assets/portfolio2.jpg'
import Img3 from '../../Assets/portfolio3.jpg'
import Img4 from '../../Assets/portfolio4.jpg'
import Img5 from '../../Assets/portfolio5.jpg'
import Img6 from '../../Assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img1} alt='' />
          </div>
          <h3>Javascript Quote Generator</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img2} alt='' />
          </div>
          <h3>An Accordian Page</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img3} alt='' />
          </div>
          <h3>A Product Landing Page</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img4} alt='' />
          </div>
          <h3>A Portfolio App</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img5} alt='' />
          </div>
          <h3>A Tribute Page</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img6} alt='' />
          </div>
          <h3>A Simple Interest Calculator</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

 
      </div>
    </section>
  )
}

export default Portfolio