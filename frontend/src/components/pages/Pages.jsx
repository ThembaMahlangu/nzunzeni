import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import AdminLogin from "../adminlogin/AdminLogin";
import ScrollToTop from "../ScrollToTop";

const Pages = () => {
  return (
    <>
      <Router>
      <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/adminlogin' component={AdminLogin} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages;