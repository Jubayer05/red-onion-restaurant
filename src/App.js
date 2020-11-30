import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FoodDetail from './Components/FoodDetail/FoodDetail';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Shipment from './Components/Shipment/Shipment';
import Contact from './Components/Contact/Contact';

export const TestyFood = createContext();

function App() {
    const [foodInfo, setFoodInfo] = useState([]);
    const [foodCollection, setFoodCollection] = useState([]);
    console.log(foodCollection);
  return (
    <TestyFood.Provider value={{
      foodInfo: [foodInfo, setFoodInfo],
      foodCollection: [foodCollection, setFoodCollection]}}>

    <h1>Title: {foodInfo.title}</h1>
    <Router>
      <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/detail/:id">
            <FoodDetail></FoodDetail>            
          </Route>
          {/* <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute> */}
          <Route path="/shipment">
              <Shipment></Shipment>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/">
            <Home></Home>            
          </Route>
      </Switch>
    </Router>     
    </TestyFood.Provider>
  );
}

export default App;
