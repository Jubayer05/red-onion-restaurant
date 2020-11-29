import React from 'react';
import { Link } from 'react-router-dom';
import "./Review.css";

const Review = () => {
    return (
        <div className="review-container container">
            <h1>This is Review component</h1>
            <Link to="/shipment" className="checkout-btn active-btn">Place Your Order</Link>
        </div>
    );
};

export default Review;