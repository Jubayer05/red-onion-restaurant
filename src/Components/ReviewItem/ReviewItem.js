import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./ReviewItem.css";

const ReviewItem = (props) => {
    const {price, photoUrl, title} = props.element;
    return (
        <div className="reviewItem">
            <img className="review-img" src={photoUrl} alt=""/>    
            <div>
                <h4>{title}</h4>
                <h4 className="review-item-value">${price}</h4>
                <h6>Delivery Free</h6>
            </div>
            <div>
                <span className="item-decrease"><FontAwesomeIcon icon={faMinus} /></span>
                &nbsp; <span className="review-item-number">5</span> &nbsp;
                <span className="item-increase"><FontAwesomeIcon icon={faPlus} /></span>
            </div>
        </div>
    );
};

export default ReviewItem;