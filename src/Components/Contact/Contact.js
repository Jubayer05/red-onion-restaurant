import React from 'react';
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact-container container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13874.60035193273!2d90.38104339598416!3d23.873029618963685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1606744826880!5m2!1sen!2sbd" 
            style={{border: "0", width: "550px", height: "300px"}}></iframe>
            <div className="contact-detail">
                <img className="rider-img" src="https://i.ibb.co/9V2xDMD/Group-1151.png" alt=""/>
                <div className="contact-address">
                    <div>
                        <div className="circle circle-1"></div>
                        <div className="state-line"></div>
                        <div className="circle circle-2"></div>
                    </div>
                    <div>
                        <p>Your address</p>
                        <p className="both-address mb-20"><small>107 RB rode, 05</small></p>

                        <p>Shop Address</p>
                        <p className="both-address"><small>Gulshan Plaza Restaura</small></p>
                    </div>
                </div>
                <p className="arrival-time">9.30</p>
                <p><small>Estimate Delivery Time</small></p>

                <div className="delivery-man">
                    <img className="super-fast" src="https://i.ibb.co/mGr49fZ/Group-1152.png" alt=""/>
                    <div>
                        <h4>Hamim</h4>
                        <p>Your Rider</p>
                    </div>
                </div>
                <input className="shipment-input active-btn review-btn"
                 type="submit" value="Place Order" />
            </div>
        </div>
    );
};

export default Contact;