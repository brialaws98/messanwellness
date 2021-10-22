import React from "react";
import Services from "./services";
import Blog from "./blog";
import Testimonial from "./testimonials";
import "./App.css";

 export default function HomePage () {
     return (
  <div className="bg_image"
    style={{
      backgroundImage: 'url("./img/ocean.webp")',
      backgroundSize: "cover",
}}>
  <div id="home">
    
      <div classNameName="aboutMe">
           <h1 className="text-center">
            About Messan Wellness 
            <hr className="topline" width="42px" /> 
        </h1>
            <p className="text-center">
            Healing, Evolution, and Transformation is nurtured at 
            Mesan Wellness. Established in 2018 by Morine Aneesah Lewis. 
            Our Wellness Services support the overall well-being of the 
            Spirit, Mind, and Body. <em>*Reiki, Hypnosis, and Coaching can be 
            provided both virtual or in person.* </em>
            </p>
      </div>
       

         <hr/>
        
         <Services />

         <hr/>
         
         <Blog />

         <hr/>

           <Testimonial />
      
    </div>
  </div>
    
        );
 }