import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Checkout from './pages/Checkout';
import { useEffect } from 'react';
import { auth } from './Firebase';
import { useBasket } from './contexts/Basket';
import Payment from './pages/Payment';

function App() {
  const [state, dispatch] = useBasket();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser);
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
          <Route exact path="/payment">
            {state.user ? <Payment/> : <Redirect to="/" /> }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
