import React from "react";
import Banner from "../components/Banner";
import crusted from "../assets/crustedChicken.jpg"
import '../css/Home.css'
function Home() {
  return (
    <>
      <Banner />
      <h1 className="first-section-heading">Our Special Dishes</h1>
      <div className="home-container">
        <div className="first-section">
          <div className="first-section-first">
            <h1>01._____</h1>
            <h1>Almond Crusted Chicken</h1>
            <p>
              Include this delightful protein filled starter in your dinner 
              and win the hearts of your loved ones.<br/> The crushed almond coating
              makes it crispier.
            </p>
          </div>
          <div><img src={crusted} alt="crusted" className="crusted"/></div>
        </div>

        <div className="first-section">
        <div><img src={crusted} alt="crusted" className="crusted"/></div>
        <div className="first-section-first">
            <h1>02._____</h1>
            <h1>Chicken and Apple Sandwich</h1>
            <p>
            The softness of chicken mince and crunch of apple and celery mingle well in these delicious sandwiches.
            </p>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Home;
