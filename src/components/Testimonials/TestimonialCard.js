import React from 'react';

const TestimonialCard = ({ rating, imgSrc, altText, name, feedback }) => {
  return (
    <div className='testimonial-card'>
      <span className='rating'>{rating}</span>
      <div className='testimonial-row'>
        <div className='testimonial-img'>
          <img src={imgSrc} alt={altText} />
        </div>
        <div className='testimonial-title'>
          <h5>{name}</h5>
        </div>
      </div>
      <p>{feedback}</p>
    </div>
  );
};

export default TestimonialCard;
