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
          <h5 className='client__name'>Jess Berger</h5>
          <small className='client__review'>
             AnnieDev provided top quality, thoughtful and high impact design work with outstanding attention to details. Her communication was excellent, she showed willingness to persevere until the perfect design was achieved. Obviously passionate about her work and we wouldn't hesitate to recommend.
          </small> 
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt='avatar one' />
          </div>
          <h5 className='client__name'>Chris Webb</h5>
          <small className='client__review'>
              Working with AnnieDev was better than expected. She is an incredibly talented develoiper but what makes her stand out is her work ethic and steady approach. Time after time, and without us asking, he added enhancements and improvements that resulted in a better end product for us and our clients.
          </small> 
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt='avatar one' />
          </div>
          <h5 className='client__name'>Rose Bliss</h5>
          <small className='client__review'>
              We have the fortune of working with AnnieDev on a very regular basis. Every single project is done in a timely fashion and is delivered exactly as outlined. Beyond that, her development skills and expertise makes her an invaluable part of our process.
          </small> 
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt='avatar one' />
          </div>
          <h5 className='client__name'>James Spencer</h5>
          <small className='client__review'>
              AnnieDev has crafted a beautiful work that is as practical as it is inspirational. Not only the design, the code is very clean and slick. Love the way she achieved the translation portion of the site.
          </small> 
        </SwiperSlide>

      </Swiper>
    </section>
  )
}

export default Testimonials