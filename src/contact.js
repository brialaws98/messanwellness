import React from "react";

 export default function ContactUs () {
     return (
    <div className="contactMe">
     <div>
              <h2>Contact Us</h2>
         <br/>
         <p><strong>Location: 516 N Rolling Road Ste 305Catonsville,
               Maryland
               <br />
               Ph: (443) 297-9731

         </strong></p>
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
                       width="20px"
                    />
               
               </label>
          </form>
     </div>
     
    </div>

     );
}
