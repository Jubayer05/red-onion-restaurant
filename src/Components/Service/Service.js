import React from 'react';
import "./Service.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faBell, faTruck, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Service = () => {
    return (
        <div className="service">
        <div className="container">
        <h1>Why you choose us</h1>
        <p className="service-paragraph">Barton waited twenty always repair in  within we do. An delighted offending <br/> curiosity my is dashwoods at. Boy prosperous increasing surrounded.</p>
        <div className="service-container">
            <div className="ser-cart">
                <img src="https://i.ibb.co/Hp87wp6/adult-blur-blurred-background-687824.png" alt="Fast Dekevery" className="ser-img"/>
                <div className="ser-content">
                    <span className="ser-icon"><FontAwesomeIcon icon={faBus} /></span>
                    <div className="ser-detail">
                        <h3 className="ser-heading">Fast Delivery</h3>
                        <p className="ser-paragraph">Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                        <a href="#" className="ser-link">See more &nbsp;<span className="ser-arrow"><FontAwesomeIcon icon={faArrowRight} /></span></a>
                    </div>
                </div>
            </div>
            <div className="ser-cart">
                <img src="https://i.ibb.co/wN5z52k/chef-cook-food-33614.png" alt="Fast Dekevery" className="ser-img"/>
                <div className="ser-content">
                    <span className="ser-icon"><FontAwesomeIcon icon={faTruck} /></span>
                    <div className="ser-detail">
                        <h3 className="ser-heading">Fast Delivery</h3>
                        <p className="ser-paragraph">Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                        <a href="#" className="ser-link">See more &nbsp;<span className="ser-arrow"><FontAwesomeIcon icon={faArrowRight} /></span></a>
                    </div>
                </div>
            </div>
            <div className="ser-cart">
                <img src="https://i.ibb.co/FhFNdyx/architecture-building-city-2047397.png" alt="Fast Dekevery" className="ser-img"/>
                <div className="ser-content">
                <span className="ser-icon"><FontAwesomeIcon icon={faBell} /></span>
                    <div className="ser-detail">
                        <h3 className="ser-heading">Fast Delivery</h3>
                        <p className="ser-paragraph">Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                        <a href="#" className="ser-link">See more &nbsp;<span className="ser-arrow"><FontAwesomeIcon icon={faArrowRight} /></span></a>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Service;