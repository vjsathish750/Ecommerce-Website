import React from "react";
import combg from '../Assets/ecom.jpg'
const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img src={combg} className="card-img" alt="..." height="600px"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
          <h5 className="card-title display-2 fw-bolder mb-0 ">NEW SEASON ARRIVALS</h5>
          <p className="card-text lead fs-1">
            CHECK OUT ALL THE TRENDS
          </p>
          </div>    
        </div>
      </div>
    </div>
  );
};

export default Home;
