import React from "react";
import Banner from "../components/Banner";
import crusted from "../assets/crustedChicken.jpg";
import "../css/Home.css";

function Home() {
  return (
    <>
      <Banner />

      {/* Recipes Section */}
      <section>
        <h1 className="heading p-10">
          <span className="heading-clr">Re</span>cipes
        </h1>
        <div className="recipe-container">
          {/* First Recipe */}
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.pinimg.com/564x/54/a4/c6/54a4c60deff2cdcb3ea600ef22a8f095.jpg"
                alt="Dahi Vada"
                className="h-80 w-64"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Dahi Vada</h2>
              <p>
                In this recipe, the vadas are not deep fried but poached in
                boiling water.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline">Watch</button>
              </div>
            </div>
          </div>

          {/* Second Recipe */}
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.pinimg.com/564x/d0/7c/d3/d07cd352b34a949704aca0902c6e8d01.jpg"
                alt="Choco Chip Cookies"
                className="h-80 w-64"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Choco Chip Cookies</h2>
              <p>
                Children’s favorite and adult’s delight and good for health.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline">Watch</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Dishes Section */}
      <section>
        <h1 className="heading p-10">
          Our Special <span className="heading-clr">Dishes</span>
        </h1>
        <div className="home-container">
          {/* First Dish */}
          <div className="first-section">
            <div className="first-section-first">
              <h1>01._____</h1>
              <h1>Almond Crusted Chicken</h1>
              <p>
                Almond crusted chicken is a culinary delight that combines the
                richness of chicken with the nutty flavor and crunchiness of
                almonds. This dish offers a delightful balance of textures and
                flavors, making it a favorite among many food enthusiasts. One
                of the key highlights of almond crusted chicken is its unique
                coating, which consists of crushed almonds mixed with various
                seasonings and herbs. This not only adds a crispy outer layer
                to the chicken but also enhances its flavor profile, creating a
                mouthwatering experience with every bite.
              </p>
            </div>

            <img src={crusted} alt="Almond Crusted Chicken" className="crusted" />
          </div>

          {/* Second Dish */}
          <div className="second-section">
            <img src={crusted} alt="Chicken and Apple Sandwich" className="crusted" />

            <div className="first-section-second">
              <h1>02._____</h1>
              <h1>Chicken and Apple Sandwich</h1>
              <p>
                Chicken and apple sandwiches are a delightful fusion of savory
                and sweet flavors, creating a harmonious blend that tantalizes
                the taste buds. This innovative sandwich features tender
                chicken mince combined with crisp apple and celery, resulting in
                a satisfying culinary experience. One of the key elements that
                sets chicken and apple sandwiches apart is the contrast in
                textures. The softness of the chicken mince provides a
                comforting base, while the crunch of the apple and celery adds
                a refreshing and invigorating dimension to each bite. This
                dynamic interplay of textures creates a multi-dimensional eating
                experience that is both satisfying and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chefs Section */}
      <section>
        <h1 className="heading pt-20">
          Our <span className="heading-clr">Chefs</span>
        </h1>
        <div className="chef-container p-10">
          {/* First Chef */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://fdstatic.foodfood.com/odd/images/Awy4hBMasterchef-Sanjeev-Kapoor.jpg"
                alt="Masterchef Sanjeev Kapoor"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Masterchef Sanjeev Kapoor</h2>
              <p>Masterchef</p>
              <div className="card-actions">
                <button className="btn btn-outline">Know More</button>
              </div>
            </div>
          </div>

          {/* Second Chef */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://fdstatic.foodfood.com/odd/images/TKheToChef-Harpal-Singh-Sokhi.jpg"
                alt="Chef Harpal Singh Sokhi"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Chef Harpal Singh Sokhi</h2>
              <p>Chef</p>
              <div className="card-actions">
                <button className="btn btn-outline">Know More</button>
              </div>
            </div>
          </div>

          {/* Third Chef */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://fdstatic.foodfood.com/odd/images/yUac4SChef-Amrita-Raichand.jpg"
                alt="Chef Amrita Raichand"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Chef Amrita Raichand</h2>
              <p>Chef</p>
              <div className="card-actions">
                <button className="btn btn-outline">Know More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
