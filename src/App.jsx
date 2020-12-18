import './App.css';
import Header from './components/Header';
import Home from './components/Home';
// eslint-disable-next-line
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Checkout from './components/Checkout';
import { useEffect, useState } from 'react';
import { auth } from './Firebase';

function App() {

  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
      } else {
        setUser(null);
      }
    })
    return () => {
      unsubscribe();
    }
  }, [user])

  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/checkout">
          {user ? <Checkout /> : <div className="renderscreen"><SignIn /></div>}
          </Route>
          <Route exact path="/signin">
            {user ? <Redirect to="/" /> : <div className="renderscreen"><SignIn /></div>}
          </Route>
          <Route exact path="/signup">
            {user ? <Redirect to="/" /> : <div className="renderscreen"><SignUp /></div>}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
