import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TestyFood } from '../../App';
import "./FoodDetail.css";

const FoodDetail = () => {
    const [foodInfo, setFoodInfo] = useContext(TestyFood);
    const [countFood, setCountFood] = useState(1);
    const foodPrice = parseFloat((foodInfo.price * countFood).toFixed(2));
    const handleAddFood = (e) => {
            const newFoodInfo = {...foodInfo, foodPrice: foodPrice};
            setFoodInfo(newFoodInfo);
            localStorage.setItem("Food",`${foodInfo}`);
        e.preventDefault();
    }
    const {id} = useParams();
    return (
        <div className="food-detail-container">
            <div className="food-detail-content">
                <h1>{foodInfo.title}</h1>
                <p className="food-detail-detail">{foodInfo.detail}</p>
                <span className="food-detail-price">${foodPrice}</span>
                <span className="item-number">
                    {countFood > 1 ? <span className="item-decrease" onClick={() => setCountFood(countFood - 1)}><FontAwesomeIcon icon={faMinus} /></span>: <span className="item-decrease"><FontAwesomeIcon icon={faMinus} /></span>}
                    <span className="item-value">{countFood}</span>
                    <span className="item-increase" onClick={() => setCountFood(countFood + 1)}><FontAwesomeIcon icon={faPlus} /></span>
                </span> <br/>
                <a className="food-detail-btn" href="#e" onClick={handleAddFood}><FontAwesomeIcon icon={faShoppingCart} /> Add</a>
            </div>
            <img className="food-detail-image" src={foodInfo.photoUrl} alt="PhotoInfo"/>       
        </div>
    );
};

export default FoodDetail;