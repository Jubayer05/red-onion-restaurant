import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { TestyFood } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [foodInfo, setFoodInfo] = useContext(TestyFood);
    return (
        <Route
        {...rest}
        render={({ location }) =>
          foodInfo.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;