import React from "react";
import "./contact.css";

 export default function ContactUs () {
     return (
    <div className="d-flex justify-content-evenly">
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
     <div class="row g-2">
       <div class="col-md">
         <div class="form-floating">
      <input 
        type="email" 
        class="form-control"  
        placeholder="name@example.com" 
        value="mdo@example.com" 
      />
      
    </div>
  </div>
  <div class="col-md">
    <div class="form-floating">
    <input 
        type="email" 
        class="form-control"  
        placeholder="name@example.com" 
        value="mdo@example.com" 
      />    
      </div>
  </div>
  
  </div>  
                     
   
              <textarea 
                      class="form-control" 
                      placeholder="Leave a comment here" 
                      id="floatingTextarea2" 
                      heigh="100px">
                    </textarea>
                  </form>
           
               </div> 
         </div>

         
    


         
           
       
          
        
       
              
     
     
           

     );
}
