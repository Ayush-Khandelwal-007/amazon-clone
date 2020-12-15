import './App.css';
import Header from './components/Header';
import Home from './components/Home';
// eslint-disable-next-line
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Checkout/>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
