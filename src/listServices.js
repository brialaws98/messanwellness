import React from "react";

 export default function OurService (){
     return(
     <div className="ourServices" id="services  ">
      
      <div className="bg_image"
    style={{
      backgroundImage: 'url("./img/ocean.webp")',
      backgroundSize: "cover",}}>
         <h1 
             className="text-center">
            OUR SERVICES
        </h1>  
      </div>
      <div className="itemList">
<div id="massage">
     <hr />
    <div className="d-flex justify-content-around   ">
        <img src="/img/custom_massage.webp" />
        <h2> 60 Min Custom Massage </h2>
        <p>1 hr <br /> $85</p>
        <button> Book Now </button>
    </div>
    <hr />
    <div className="d-flex justify-content-around   ">
        <img src="/img/custom_massage(2).webp" />
        <h2> 90 Min Custom Massage </h2>
        <p>1 hr 35 min <br /> $115</p>
        <button> Book Now </button>
    </div>

    <hr />
    <div className="d-flex justify-content-around   ">
        <img src="/img/deep_tissue_massage(2).webp" />
        <h2> 60 Min Deep Tissue Massage </h2>
        <p>1 hr <br /> $95</p>
        <button> Book Now </button>
    </div>

    <hr />
    <div className="d-flex justify-content-around   ">
        <img src="/img/deep_tissue_massage.webp" />
        <h2> 90 Min DeepTissue Massage </h2>
        <p>1 hr 35 min <br /> $125</p>
        <button> Book Now </button>
    </div>

    <hr />
    <div className="d-flex justify-content-around   ">
        <img src="/img/hot_stone_massage(2).webp" />
        <h2> 60 Min Hot Stone Massage </h2>
        <p>1 hr <br /> $115</p>
        <button> Book Now </button>
    </div>

    <hr />
    <div className="d-flex justify-content-around   ">
        <img src="/img/hot_stone_massage.webp" />
        <h2> 90 Min Hot Stone Massage </h2>
        <p>1 hr <br /> $85</p>
        <button> Book Now </button>
    </div>

    <hr />
    <div className="d-flex justify-content-around   ">
        <img src="/img/swedish_massage(2).webp" />
        <h2> 60 Min Swedish Massage </h2>
        <p>1 hr <br /> $85</p>
        <button> Book Now </button>
    </div>

    <hr />
    <div className="d-flex justify-content-around   ">
        <img src="/img/swedish_massage.webp" />
        <h2> 90 Min Swedish Massage </h2>
        <p>1 hr 30 min  <br /> $115</p>
        <button> Book Now </button>
    </div>
</div>
         
        </div>
      </div>  
     );

 }
