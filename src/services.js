import React from "react"
import "./Service.css";

 export default function Services () {
     return(
        <div class="container">
        <div class="row">
          <div class="col-6">
            <div class="card" >
            <img src="./img/massage_book.webp" alt="" />
  <div class="card-body">
    <h5 class="card-title"> Massage</h5>
    <p class="text-center">Specializing in Deep Tissue, Swedish or Hot Stone therapy. We provide custom massage treatments so that you can take charge of your health and well-being. </p>
    <a href="#" class="btn btn-primary">Book Now</a>
  </div>
</div>
          </div>
          <div class="col-6">
            <div class="card" >
   <img src="./img/reiki_book.webp" alt="" />
  <div class="card-body">
    <h5 class="card-title">Reiki</h5>
    <p class="text-center">
Reiki

Book Now
Pronounced (Ray-Key) is an energy-based healing technique used to activate the natural healing processes of the body and restore physical and emotional well-being.</p>
    <a href="#" class="btn btn-primary">Book Now</a>
  </div>
</div>
          </div>
      
          <div class="w-100"></div>
      
          <div class="col-6">
              <div class="card" >
   <img src="./img/hypnosis_book.webp" alt="" />
  <div class="card-body">
    <h5 class="card-title">Hypnosis</h5>
    <p class="text-center">Through hypnosis we use your most powerful resource - your mind - to help you overcome obstacles that prevent you from becoming the absolute best you can be. Specializing in Past Life Regression and future life progression. </p>
    <a href="#" class="btn btn-primary">Book Now</a>
  </div>
</div>
          </div>
          <div class="col-6">
              <div class="card" >
   <img src="./img/spiritual_life_coach_book.webp" alt="" />
  <div class="card-body">
    <h5 class="card-title">Spiritual Life Coaching  </h5>
    <p class="text-center">This unique program eloquently incorporates practical life coaching strategies while integrating spirituality, the soul, spirit, and energy that goes beyond the physical. It empowers people to awaken their unique spiritual soul gifts and engages the deeper driving forces of living on purpose.</p>
    <a href="#" class="btn btn-primary">Book Now</a>
  </div>
</div>
          </div>
        </div>
      </div>
     );
 }