import React from 'react'
import './testimonials.css'
import AVTR1 from '../../Assets/avatar1.jpg'
import AVTR2 from '../../Assets/avatar2.jpg'
import AVTR3 from '../../Assets/avatar3.jpg'
import AVTR4 from '../../Assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
    
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt='avatar one' />
          </div>
          <h5 className='client__name'>Jessica Green</h5>
          <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, soluta? Aperiam atque magnam hic dolores explicabo laborum culpa distinctio quod sint, libero soluta dolorum autem aspernatur, recusandae nisi excepturi nam!
          </small> 
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt='avatar one' />
          </div>
          <h5 className='client__name'>Monica Stones</h5>
          <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, soluta? Aperiam atque magnam hic dolores explicabo laborum culpa distinctio quod sint, libero soluta dolorum autem aspernatur, recusandae nisi excepturi nam!
          </small> 
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt='avatar one' />
          </div>
          <h5 className='client__name'>Sandra Bliss</h5>
          <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, soluta? Aperiam atque magnam hic dolores explicabo laborum culpa distinctio quod sint, libero soluta dolorum autem aspernatur, recusandae nisi excepturi nam!
          </small> 
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt='avatar one' />
          </div>
          <h5 className='client__name'>Sophia Matthew</h5>
          <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, soluta? Aperiam atque magnam hic dolores explicabo laborum culpa distinctio quod sint, libero soluta dolorum autem aspernatur, recusandae nisi excepturi nam!
          </small> 
        </SwiperSlide>

      </Swiper>
    </section>
  )
}

export default Testimonials