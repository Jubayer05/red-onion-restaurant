import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { TestyFood } from '../../App';
import ReviewItem from '../ReviewItem/ReviewItem';
import "./Shipment.css";

const Shipment = () => {
    const {foodCollection} = useContext(TestyFood);
    const [stateFoodCollection, setStateFoodCollection] = foodCollection;
    return (
        <div class="shipment-container container">
            <div className="shipment-address">
                <p>Edit Delivery Details</p>
                <input className="shipment-input" type="text" placeholder="Deliver to Door" required />
                <input className="shipment-input" type="text" placeholder="Road Number" required />
                <input className="shipment-input" type="text" placeholder="Flat, suit or floor"/>
                <input className="shipment-input" type="text" placeholder="Business Name"/>
                <input className="shipment-input" type="text" placeholder="Add Delivery instructor"/>
                <input className="shipment-input active-btn" type="submit" value="save & continue" />
            </div>
            <div className="shipment-review">
                <p>From Gulshan Plaza Restaura GRP</p>
                <p><small>Arrive within 20-30 minutes</small></p>
                <p>107 road no 8</p>

                {
                    stateFoodCollection.map(element => 
                    <ReviewItem element={element}></ReviewItem>)
                }
                   
                 
                <div className="review-price">
                    <h4>Sub total: <span>$200</span></h4>
                    <h4>Tax: <span>$20</span></h4>
                    <h4>Delivery Fee: <span>$5</span></h4>
                    <h4>Total: <span>$225</span></h4>
                    <input className="shipment-input active-btn review-btn" type="submit" value="Place Order" />
                </div>
            </div>
        </div>
    );
};

export default Shipment;