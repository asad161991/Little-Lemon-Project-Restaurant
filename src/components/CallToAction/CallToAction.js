import React from 'react'
import greekSaladImage from '../../assets/greek-salad.jpg';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <>
      <section id='callToAction'>
        <div className='container'>
          <div className='callToAction-row'>
            <div className='callToAction-col callToAction-left'>
              <h1>Little Lemon</h1>
              <h3>Chicago</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <Link to="booking">
                <Button title="Reserve a Table"/>
              </Link>
            </div>
            <div className='callToAction-col callToAction-right'>
              <img className='img-responsive' src={greekSaladImage} alt="Little Lemon" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CallToAction