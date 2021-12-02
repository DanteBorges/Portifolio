import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero"
import Footer from "./components/footer/Footer";
import About from './components/about/About';
import Portifolio from './components/portifolio/Portifolio';
import Contact from './components/contact/Contact';

const App = () => {
  return (
<Router>
    <Navbar/>
    <Switch>
      <Route exact path="/">
        <Hero />
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/portfolio">
        <Portifolio/>
      </Route>
      <Route path="/contact">
      <Contact/>
      </Route>
    </Switch>
    <Footer/>
</Router>
  );
};

export default App;
