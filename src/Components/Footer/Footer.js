import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
            <div className="footer-main">
           <div className="footer-logo">
             <img src="https://i.ibb.co/hMHf6tb/logo2.png" alt="Footer Images" className="footer_image"/>  
           </div>         
           <div className="footer-content">
                <div className="footer-content-1">
                    <li className="footer-item">About online food</li>
                    <li className="footer-item">Read our blog</li>
                    <li className="footer-item">Sign up to delivery</li>
                    <li className="footer-item">Add your restaurant</li>
                </div>
                <div className="footer-content-2">
                <li className="footer-item">Get help</li>
                    <li className="footer-item">Read FAQs</li>
                    <li className="footer-item">View all cities</li>
                    <li className="footer-item">Restaurants near me</li>
                </div>
           </div>
           </div>
           <div className="footer-sub">
               <p className="footer-copy">copyright: &copy; 2020. Online food</p>
               <div className="footer-link-container">
                   <li className="footer-item">Privacy Plicy</li>
                   <li className="footer-item">Terms of Use</li>
                   <li className="footer-item">Pricing</li>
               </div>
           </div>
        </div>
        </div>
    );
};

export default Footer;