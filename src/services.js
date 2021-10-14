import React from "react"
import "./Service.css";

 export default function Services () {
     return(
 <div className="container">
     <div className="row">
         <div className="col-3">
           <img src="./img/massage_book.webp" alt="" width="200px" />
           <img src="./img/reiki_book.webp" alt=""  />
        </div>
         
         <div className="col-3">
             <img src="./img/hypnosis_book.webp" alt="" />
           <img src="./img/spiritual_life_coach_book.webp" alt=""  />
         </div>
           
     </div>                 
</div>
     );
 }