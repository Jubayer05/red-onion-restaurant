import React from 'react';
import "./FoodItem.css";

const Breakfast = (props) => {
    const {photoUrl, title, description, price} = props.data;
    console.log(props);
    return (
        <div className="food_item">
            <img className="item_image" src={photoUrl} alt=""/>
            <h1 className="item_title">{title}</h1>
            <p className="item_description">{description}</p>
            <h3 className="item_price">${price}</h3>
        </div>
    );
};

export default Breakfast;