import React from "react";
import banner from "../assets/Banner.jpg"
function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container max-auto md:px-20 px-4 flex flex-col md:flex-row mt-14 mb-10">
        <div className="w-full md:w-1/2 mt-12 md:mt-26">
            <div className="space-y-12">
            <h1 className="text-6xl font-bold">
            Have A<br />
            Nice Meal
          </h1>
          <p className="text-xl">
            A nice meal is a delightful blend of flavors, textures, and aromas
            that satisfy the senses and bring contentment. It features carefully
            selected ingredients prepared with culinary expertise and
            creativity. From the presentation to the last bite, it offers a
            symphony of harmonious flavors to enjoy with loved ones, creating
            cherished memories to savor
          </p>
          <button className="btn btn-outline">Know More</button>
            </div>
          
        </div>
        <div className="w-full md:w-1/2 bg-white" style={{backgroundColor:"white"}}>
            <img src="https://img.freepik.com/free-photo/delicious-healthy-oatmeal-with-figs-nuts-kiwi-seeds_2829-18240.jpg?w=740" alt="" style={{backgroundColor:"white"}}/>
        </div>
      </div>
    </>
  );
}

export default Banner;
