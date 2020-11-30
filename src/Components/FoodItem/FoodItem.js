import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TestyFood } from '../../App';
import "./FoodItem.css";

const FoodItem = (props) => {
    const {foodInfo, foodCollection} = useContext(TestyFood);
    const [stateFoodInfo, setStateFoodInfo] = foodInfo;
    
    const {photoUrl, title, description, price, id} = props.data;
    
    // console.log(hey);
    return (
        <div className="food_item">
            <img className="item_image" src={photoUrl} alt=""/>
            <h1 className="item_title">{title}</h1>
            <p className="item_description">{description}</p>
            <h3 className="item_price">${price}</h3>
            <Link to={"/detail/"+id} onClick={() => setStateFoodInfo(props.data)}>Detail Info</Link>
        </div>
    );
};
// 
export default FoodItem;