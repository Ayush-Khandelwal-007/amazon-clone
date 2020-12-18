import './App.css';
import Header from './components/Header';
import Home from './components/Home';
// eslint-disable-next-line
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Checkout from './components/Checkout';
import { useEffect } from 'react';
import { auth } from './Firebase';
import { useBasket } from './contexts/Basket';

function App() {
  const [state, dispatch] = useBasket();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/checkout">
            {state.user ? <Checkout /> : <div className="renderscreen"><SignIn /></div>}
          </Route>
          <Route exact path="/signin">
            {state.user ? <Redirect to="/" /> : <div className="renderscreen"><SignIn /></div>}
          </Route>
          <Route exact path="/signup">
            {state.user ? <Redirect to="/" /> : <div className="renderscreen"><SignUp /></div>}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
