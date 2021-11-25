import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from "./components/footer/Footer";

const App = () => {
  return (
<Router>
    <Navbar/>
    <Switch>
      <Route exact path="/">
        <Hero />
      </Route>
      <Route path="/about">
      </Route>
      <Route path="/portfolio">
      </Route>
      <Route path="/contact">
      </Route>
    </Switch>
    <Footer/>
</Router>
  );
};

export default App;
