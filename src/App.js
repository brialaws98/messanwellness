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
    Route
} from "react-router-dom";
import Footer from "./footer";


function App() {
    return (
    <div>
        <Router>
          <div>
            <NavBar />

            <Switch>
          <Route path="/home" component={HomePage} exact />
  

          <Route path="/blog" component={BlogPage}>
            <BlogPage /> 
          </Route>

          <Route path="/contact" component={ContactUs}>
            <ContactUs /> 
          </Route>

          <Route path="/listservice" component={OurService}>
            <OurService /> 
          </Route>

          <Route path="#" component={Services}>
            <Services /> 
          </Route>

          <Route path="/testimonials" component={Testimonial}>
            <Testimonial /> 
          </Route>

          <Route path="/services" component={OurService}>
            <OurService /> 
          </Route>

          </Switch>
          </div>
        </Router>
        
           
            <Footer />
        </div>
    );
}

export default App;