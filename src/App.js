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
          <Route  path="/home" exact component={HomePage} />
            
  

          <Route  path="/blog" component={BlogPage} />

          <Route   path="/contact" component={ContactUs}/>
            

          <Route  path="/listservice" component={OurService} />

          <Route  path="#" component={Services} />


          <Route path="/testimonials" component={Testimonial}/>

          <Route  path="/services" component={OurService} />

          </Switch>
          
        </Router>
        <br />
           
            <Footer />
        </div>
    );
}

export default App;