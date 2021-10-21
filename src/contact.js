import React from "react";
import "./contact.css";

 export default function ContactUs () {
     return (
    <div className="contactMe">
      <div className="row">
          <div>
            <div id="contactUs">
         <h2>Contact Us</h2>   
       </div>   
            <p><strong>Location: 516 N Rolling Road Ste 305Catonsville,
               Maryland
               <br />
               Ph: (443) 297-9731

         </strong></p>  
         </div>
           
      </div> 
       
          
        
       
              
     <div>
          <form>
               <label>
                    <input
                      type="text" 
                      placeholder="Name"
                    />
                    <input
                       type="text"
                       placeholder="Email"
                    />
                    <input
                       type="text"
                       placeholder="subject"
                    />
                    <input
                       type="text"
                       placeholder="type your message here..."
                       maxlength="200"
                       size="65"
                      
                    />
               
               </label>
          </form>
     </div>
     
    </div>

     );
}
