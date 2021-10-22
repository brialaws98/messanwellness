import React from "react";
import "./App.css";
import NavBar  from "./navBar.js";

 import HomePage from "./home";
 import BlogPage from "./blogPage";
 import ContactUs from "./contact";
 import Services from "./services";
 import Testimonial from "./testimonials";
 import OurService from "./listServices";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Footer from "./footer";


function App() {
    return (
    <div>
        <Router>
          
            <NavBar />

            <Switch>
          <Route exact path="/home" component={HomePage}>
            <HomePage />
            <Redirect to="/home" />
          </Route>
  

          <Route  path="/blog" component={BlogPage} />

          <Route  exact path="/contact" component={ContactUs}/>
            

          <Route exact path="/listservice" component={OurService} />

          <Route exact path="#" component={Services} />


          <Route  eaxct path="/testimonials" component={Testimonial}/>

          <Route exact path="/services" component={OurService} />

          </Switch>
          
        </Router>
        <br />
           
            <Footer />
        </div>
    );
}

export default App;