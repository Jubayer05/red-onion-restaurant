import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { TestyFood } from '../../App';
import breakfast from '../../fakedata/breakfast';
import dinner from '../../fakedata/dinner';
import lunch from '../../fakedata/lunch';
import FoodItem from '../FoodItem/FoodItem';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import "./Home.css";


const Home = () => {
    const [paginate, setPaginate] = useState(breakfast);
    const [foodInfo, setFoodInfo] =useContext(TestyFood);
    const handleOrderFood = () => {
        console.log("Food will be added to the order");
    }
    console.log(foodInfo);
    return (
        <>
            <Header></Header>
            <div className="home-nav">
                <span className="home-nav-item" onClick={() => setPaginate(breakfast)}>Breakfast<div className="item-bottom item-bottom--1"></div></span>  
                <span className="home-nav-item" onClick={() => setPaginate(lunch)}>Lunch<div className="item-bottom item-bottom--2"></div></span>
                <span className="home-nav-item" onClick={() => setPaginate(dinner)}>Dinner<div className="item-bottom item-bottom--3"></div></span>

            </div>
            <div className="container food-container">
            <div className="food_item-container">   
                {
                    paginate.map(el => <FoodItem data={el} key={el.id}></FoodItem>)
                } 
            </div>
                {foodInfo.foodPrice > 0 ?
                    <Link to="/review"><button className="checkout-btn active-btn">CheckOut Your Food</button></Link> :
                    <button className="checkout-btn disable-btn">CheckOut Your Food</button>
                }
            </div>
            {/* service section */}
            <Service></Service>
            <Footer></Footer>
        </>
    );
};

export default Home;