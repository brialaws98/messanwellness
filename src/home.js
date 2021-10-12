import React from "react";
import Services from "./services";
import Blog from "./blog";
import Testimonial from "./testimonials";
import ContactUs from "./contact";

 export default function HomePage () {
     return (
    <div>
        <h1 class="text-center">
            About Messan Wellness 
            <hr class="topline" width="42px" /> 
        </h1>
            <p class="text-center">
            Healing, Evolution, and Transformation is nurtured at 
            Mesan Wellness. Established in 2018 by Morine Aneesah Lewis. 
            Our Wellness Services support the overall well-being of the 
            Spirit, Mind, and Body. <em>*Reiki, Hypnosis, and Coaching can be 
            provided both virtual or in person.* </em>
            </p>

         <hr/>
        
         <Services />

         <hr/>
         
         <Blog />

         <hr/>

           <Testimonial />

         <hr/>
         
         <ContactUs />
    </div>
        );
 }