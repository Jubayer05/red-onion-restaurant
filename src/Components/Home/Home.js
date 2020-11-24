import React from 'react';
import breakfast from '../../fakedata/breakfast';
import Breakfast from '../Breakfast/Breakfast';

const Home = () => {
    const value = (e) => {
        if(e.target.innerText === breakfast) {
          nextpage  
        };
    }
    
    return (
        <div className="food_item-container">
            <span onClick={value}>Breakfast</span>
            <span onClick={value}>Lunch</span>
            <span onClick={value}>Dinner</span>
            { "nice" &&
                breakfast.map(el => <Breakfast data={el} key={el.id}></Breakfast>)
            }
        </div>
    );
};

export default Home;