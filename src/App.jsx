import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Checkout from './pages/Checkout';
import { useEffect, useState } from 'react';
import { auth, db } from './Firebase';
import { useBasket } from './contexts/Basket';
import Payment from './pages/Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './pages/Orders';

function App() {

  const [user, setUser] = useState({});
  const [state, dispatch] = useBasket();
  const promise = loadStripe('pk_test_51I00hXLRBbz610XMtuksd3VcGKq0Mn2PPF3W0GicgtgaeSxxHKBFZmJ3aSsGbC5iEuFxpYqyhwsHzCtcLKxO5gxz00GfxNFgzJ');


  useEffect(() => {
    // console.log(state.basket)
    if(Array.isArray(state.basket) && state.basket.length){
      auth.onAuthStateChanged((authUser)=>{
        db
        .collection('users')
        .doc(authUser.uid)
        .set({
          basket:[...state.basket]
        })
      })
    }
    else{
      console.log('here');
    }
  }, [state]);

  useEffect(()=>{
    // console.log(user?.uid);
    db
    .collection('users')
    .doc(user?.uid)
    .get()
    .then(function(doc) {
      if (doc.exists){        
        // console.log(doc.data().basket);

        dispatch({
          type: "SET_BASKET",
          basket: [...(doc.data().basket)],
        })

      } else {
        console.log("No such document!")
      }}).catch(function(error) {
        console.log("Error getting document:", error)
      });
      // eslint-disable-next-line
  },[])



  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
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
          <Route exact path="/orders">
            {state.user ? <Orders /> : <div className="renderscreen"><SignIn /></div>}
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
            {state.user ? (
              <Elements stripe={promise} >
                <Payment />
              </Elements>
            ) : <Redirect to="/" />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
