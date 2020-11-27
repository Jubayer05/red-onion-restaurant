import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FoodDetail from './Components/FoodDetail/FoodDetail';
import { createContext, useState } from 'react';

export const TestyFood = createContext();

function App() {
    const [foodInfo, setFoodInfo] = useState({});
  return (
    <TestyFood.Provider value={[foodInfo, setFoodInfo]}>
    <h1>Title: {foodInfo.title}</h1>
    <Router>
      <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/detail/:id">
            <FoodDetail></FoodDetail>            
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
