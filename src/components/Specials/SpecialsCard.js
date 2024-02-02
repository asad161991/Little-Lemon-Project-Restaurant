import React from 'react';
import deliveryIcon from '../../assets/deliveryIcon.svg';
import { Link } from 'react-router-dom';

const SpecialsCard = ({ image, title, price, description }) => {
  return (
    <div className="special-card">
      <div className="special-card-img">
        <img src={image} alt={title} />
      </div>
      <div className="special-card-content">
        <div className="row">
          <div className="col">
            <h5>{title}</h5>
          </div>
          <div className="col">
            <h6 className="price">{`$${price}`}</h6>
          </div>
        </div>
        <p>{description}</p>
        <Link to="menu" className="order-delivery-btn">
          Order a delivery
          <img src={deliveryIcon} alt="deliveryIcon" />
        </Link>
      </div>
    </div>
  );
};

export default SpecialsCard;
