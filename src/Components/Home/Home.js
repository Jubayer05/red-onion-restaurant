import React, { useState } from 'react';
import breakfast from '../../fakedata/breakfast';
import dinner from '../../fakedata/dinner';
import lunch from '../../fakedata/lunch';
import FoodItem from '../FoodItem/FoodItem';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';


const Home = () => {
    const [paginate, setPaginate] = useState(breakfast);

    return (
        <>
            <Header></Header>
            <div className="home-nav">
                <span className="home-nav-item" onClick={() => setPaginate(breakfast)}>Breakfast<div className="item-bottom item-bottom--1"></div></span>  
                <span className="home-nav-item" onClick={() => setPaginate(lunch)}>Lunch<div className="item-bottom item-bottom--2"></div></span>
                <span className="home-nav-item" onClick={() => setPaginate(dinner)}>Dinner<div className="item-bottom item-bottom--3"></div></span>

            </div>
            <div className="container">
            <div className="food_item-container">   
                { breakfast &&
                    paginate.map(el => <FoodItem data={el} key={el.id}></FoodItem>)
                } 
            </div>
            </div>
            {/* service section */}
            <Service></Service>
            <Footer></Footer>
        </>
    );
};

export default Home;