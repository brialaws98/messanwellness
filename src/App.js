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
          <Route exact path="/" component={HomePage}/>
  

          <Route exact path="/blog" component={BlogPage} />

          <Route exact path="/contact" component={ContactUs} />

          <Route exact path="/listservice" component={OurService} />

          <Route exact path="#" component={Services} />

          <Route exact path="/testimonials" component={Testimonial}/>

          <Route exact path="/services" component={OurService} />

          </Switch>
          </div>
        </Router>
        
           
            <Footer />
        </div>
    );
}

export default App;