import React from 'react'
import './about.css'
import ME from '../../Assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="About Image" />
                </div>
            </div>

            <div className="about__content">
                <div className="about__cards">
                    <article className='about__card'>
                        <FaAward className='about__icon' />
                        <h5>Experience</h5>
                        <small>2+ years working</small>

                    </article>

                    <article className='about__card'>
                        <FiUsers className='about__icon' />
                        <h5>Clients</h5>
                        <small>200+ worldwide</small>

                    </article>

                    <article className='about__card'>
                        <VscFolderLibrary className='about__icon' />
                        <h5>Projects</h5>
                        <small>30+ completed</small>

                    </article>
                </div>

                <p>
                    Meticulous web developer with over 2 years of front end experience and has passion for responsive website design. IBM certification, FreeCodeCamp certification, GADS Trainings and Tech4Dev Women Techsters Fellowship Fellow. Developed over 50 projects in 1 year. Maintaining, optimizing, troubleshooting and improving websites. 
                </p>

                <a href='#contact' className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>


    </section>
  )
}

export default about