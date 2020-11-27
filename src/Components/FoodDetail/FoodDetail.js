import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TestyFood } from '../../App';
import "./FoodDetail.css";

const FoodDetail = () => {
    const [foodInfo] = useContext(TestyFood);
    console.log(foodInfo);
    const {id} = useParams();
    return (
        <div className="food-detail-container">
            <div className="food-detail-content">
                <h1>{foodInfo.title}</h1>
                <p className="food-detail-detail">{foodInfo.detail}</p>
    <span className="food-detail-price">${foodInfo.price}</span>
        <span className="item-number">
            <span className="item-decrease"><FontAwesomeIcon icon={faMinus} /></span>
            <span className="item-value">1</span>
            <span className="item-increase"><FontAwesomeIcon icon={faPlus} /></span>
        </span> <br/>
        <a className="food-detail-btn" href="//#endregion"><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</a>
            </div>
            <img className="food-detail-image" src={foodInfo.photoUrl} alt="PhotoInfo"/>       
        </div>
    );
};

export default FoodDetail;