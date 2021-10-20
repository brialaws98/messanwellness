import "./App.css";
import NavBar  from "./navBar.js";
import * as ReactBootStrap from "react-bootstrap";
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
            <NavBar />

            
          <Switch>
          <Route path="/home" component={HomePage}>
            <HomePage /> 
          </Route>

          <Route path="/blog" component={BlogPage}>
            <BlogPage /> 
          </Route>

          <Route path="/contact" component={ContactUs}>
            <ContactUs /> 
          </Route>

          <Route path="/listservice" component={OurService}>
            <OurService /> 
          </Route>

          <Route path="/services" component={Services}>
            <Services /> 
          </Route>

          <Route path="/testimonials" component={Testimonial}>
            <Testimonial /> 
          </Route>
          </Switch>
        </Router>
           
            <Footer />
        </div>
    );
}

export default App;