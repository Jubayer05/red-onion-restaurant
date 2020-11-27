import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";

const Header = () => {
    return (
        <div>
            
            <div className="navigation">
                <img className="nav_logo" src="https://i.ibb.co/hMHf6tb/logo2.png" alt=""/>
                <div className="nav_item">
                    <li><a href="//#endregion" className="nav_link"><span className="cart-number">1</span><FontAwesomeIcon icon={faShoppingCart} /></a></li>
                    <li><a href="//#endregion" className="nav_link nav_btn">Login</a></li>
                    <li><a href="//#endregion" className="nav_link nav_btn sign-up">Sign Up</a></li>
                </div>
            </div>
            <div className="header">
                <div className="header_content">
                    <h2 className="header_heading">Best Food is Waiting for Your Belly...!</h2>
                    <input className="header_input" type="text" placeholder="Search Food Item"/>
                    <button className="header_btn">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Header;