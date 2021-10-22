import React from "react";
import "./contact.css";

 export default function ContactUs () {
     return (
    <div className="d-flex justify-content-around">
       <div id="contactUs">
         <h2>Contact Us</h2>
             
      <p><strong>Location: 516 N Rolling Road Ste 305 
         <br /> Catonsville, Maryland
               <br />
               Ph: (443) 297-9731
               </strong></p> 
 
       </div>  
       <br /> 
           
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
                        />
                     </label>
                  </form>
           
               </div> 
         </div>

         
    


         
           
       
          
        
       
              
     
     
           

     );
}
