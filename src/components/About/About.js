import React from 'react'
import MarioAndAdrianA from '../../assets/Mario-and-Adrian-A.jpg';
import restaurantChefB from '../../assets/restaurant-chef-B.jpg';

const About = () => {
  return (
    <>
      <section id='about'>
        <div className='container'>
          <div className='row'>
            <div className='about-column'>
              <h2>Little Lemon</h2>
              <h3>Chicago</h3>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            </div>
            <div className='about-column'>
                <div className='about-img'><img className='img-1' src={MarioAndAdrianA} alt="Little Lemon" /></div>
                <div className='about-img'><img className='img-2' src={restaurantChefB} alt="Little Lemon" /></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About