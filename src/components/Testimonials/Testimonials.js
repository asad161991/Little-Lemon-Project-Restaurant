import React from 'react';
import TestimonialCard from './TestimonialCard';
import Testimonial1 from '../../assets/testimonial-1.jpg';
import Testimonial2 from '../../assets/testimonial-2.jpg';
import Testimonial3 from '../../assets/testimonial-3.jpg';
import Testimonial4 from '../../assets/testimonial-4.jpg';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <div className='container'>
        <h3 className='title'>Testimonials</h3>
        <div className='row'>
          <TestimonialCard
            rating='★★★★★'
            imgSrc={Testimonial1}
            altText='Leo'
            name='Leo'
            feedback='I loved the experience at the restaurant! The food was delicious and the service was exceptional. I will definitely be back more often!'
          />
          <TestimonialCard
            rating='★★★★★'
            imgSrc={Testimonial2}
            altText='Gabi'
            name='Gabi'
            feedback='I loved the experience at the restaurant! The food was delicious and the service was exceptional. I will definitely be back more often!'
          />
          <TestimonialCard
            rating='★★★★★'
            imgSrc={Testimonial3}
            altText='Bruno'
            name='Bruno'
            feedback='I loved the experience at the restaurant! The food was delicious and the service was exceptional. I will definitely be back more often!'
          />
          <TestimonialCard
            rating='★★★★★'
            imgSrc={Testimonial4}
            altText='Anna'
            name='Anna'
            feedback='I loved the experience at the restaurant! The food was delicious and the service was exceptional. I will definitely be back more often!'
          />
          
        </div>
      </div>
    </section>
  );
};

export default Testimonials