import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating a polished user interactions that surprices and delights users.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Provides customized and modernized websites solutions.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Corporate branding and ensuring the finest of corporate graphic designs.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Wireframing - Offers an overview of products.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Designing and creation of enriched wearable app designs.</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Design - Creating a site's architecture, designing its layout and user interface.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Web development support and maintenance.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Hosting - Storing your web app after completing your project.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Programming - Building dynamic web applications.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Website Management - Managing and improving sites.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Optimization - Making the app visible to search engines.</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Social media management.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Specializes on digital marketing to boost your brand.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Video editing - Adding sparkles to videos.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Graphic design - Designing beyond imaginations.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Photography.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>

    </section>
  )
}

export default Services