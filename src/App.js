import React from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signUp  } from "./actions";

function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  const dispatch = useDispatch();

  const authenticationContent = () => {

    let returnHtml = '';

    if (isLogged) {

      returnHtml =  <div>
                      Hello User, This content is now viewable to you!
                      <button onClick={() => dispatch(signUp())}>Signed Up</button>
                    </div>
    }
    else {
      returnHtml =  <div>
                      This content is not viewable to you. Please Sign Up!
                      <button onClick={() => dispatch(signUp())}>Sign Up</button>
                    </div>
    }

    return returnHtml;

  }

  return (
    <div className="App">
      <h1>Redux Tutorial</h1>

      <div>Counter: <button onClick={ () => dispatch(decrement()) }>-</button>{ counter }<button onClick={ () => dispatch(increment(5))}>+</button></div>

      {authenticationContent()}

    </div>
  );
}

export default App;
