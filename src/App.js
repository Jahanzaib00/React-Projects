import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar.js";
import Homepage from "./Homepage.js";
import Contact from "./Contact.js";
import HowItWorks from "./HowItWorks.js";
import Shop from "./Shop.js";
import Products from "./Products.js";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/howitworks">
            <HowItWorks />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
