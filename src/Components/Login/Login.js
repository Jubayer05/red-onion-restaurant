import React, { useContext, useState } from 'react';
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { TestyFood } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [foodInfo, setFoodInfo] = useContext(TestyFood);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/shipment" } };
    
    const [userInfo, setUserInfo] = useState({
        isSignedIn: false,
        email: '',
        password: '',
        name: '',
        confirmPass: ''
    });
    const [toggle, setToggle] = useState(false)
    const handleFocusChange = (e) => {
        const newUser = {...userInfo};
        newUser[e.target.name] = e.target.value;
        setUserInfo(newUser);
        console.log(userInfo)
    }
    const handleCreateUser = (e) => {
        if(userInfo.password === userInfo.confirmPass) {
            firebase.auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password)
            .then((user) => {
                console.log("success full")
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage)
            });
        }
        e.preventDefault();
    }

    // Handle Sign In User
    const handleSignIn = (e) => {
        firebase.auth().signInWithEmailAndPassword(userInfo.email, userInfo.password)
        .then((user) => {
         console.log("Signed in successfully")
         setFoodInfo({...foodInfo, email: userInfo.email});
         history.replace(from);
        })
        .catch((error) => {
          var errorMessage = error.message;
          console.log(errorMessage)
        });
        e.preventDefault();
    }



    return (
        <div className="login-container">
            <img className="login-image" src="https://i.ibb.co/hMHf6tb/logo2.png" alt=""/>
            {toggle ? <form> 
                <input onBlur={handleFocusChange} className="input-box" type="text" name="name" id="name" placeholder="Name"/>
                <input onBlur={handleFocusChange} className="input-box" type="email" name="email" id="email" placeholder="Email"/>
                <input onBlur={handleFocusChange} className="input-box" type="password" name="password" id="password" placeholder="Password"/>
                <input onBlur={handleFocusChange} className="input-box" type="password" name="confirmPass" id="confirm-pass" placeholder="Confirm Password"/>
                <input onClick={handleCreateUser} className="input-box active-btn" type="submit" />
            </form> :
            <form> 
                <input onBlur={handleFocusChange} className="input-box" type="email" name="email" id="email" placeholder="Email"/>
                <input onBlur={handleFocusChange} className="input-box" type="password" name="password" id="password" placeholder="Password"/>
                <input onClick={handleSignIn} className="input-box active-btn" type="submit" />
            </form>
             }
                <p onClick={() => setToggle(!toggle)} className="login-paragraph">{toggle ? <span>Already have an account</span> : <span>Sign Up</span> }</p>
        </div>
    );
};

export default Login;