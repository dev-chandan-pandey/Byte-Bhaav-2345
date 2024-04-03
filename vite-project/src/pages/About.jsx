import React from "react";
import "../css/About.css";
function About() {
  return (
    <>
      <div className="main-container">
        <div className="first-section">
          <div>
            <h1 className="heading">
              <span>Welcome </span>to Delight Food
            </h1>
            <p>
              Welcome to DelightDish, your ultimate destination for culinary
              inspiration, and kitchen essentials! DelightDish is the brainchild
              of Turmeric Vision Private Limited, spearheaded by the illustrious
              Chef Sanjeev Kapoor. As India's premier Food Content Company,
              Turmeric Vision is committed to crafting delightful food
              experiences across various platforms, from television to the web
              and mobile. DelightDish sets itself apart as a trailblazer,
              offering a groundbreaking search and comparison platform
              exclusively tailored for kitchen enthusiasts. Embark on a culinary
              journey with us, where every meal is an opportunity to create
              unforgettable moments. At DelightDish, we're more than just a
              marketplace for kitchen products; we're here to ignite your
              culinary passion and empower you to elevate your cooking skills.
              Our platform is a treasure trove of recipes, cooking tips, and
              culinary techniques meticulously curated by Chef Sanjeev Kapoor
              and a team of seasoned experts.
            </p>
          </div>
          <img
            src="https://www.foodfood.com/assets/images/welcome-bg.png"
            alt=""
          />
        </div>

        {/* Second Section */}
        <div className="second-section">
          <div class="py-20 bg-gray-50">
            <div class="container mx-auto px-6 md:px-12 xl:px-32">
              <div class="mb-16 text-center">
                <h2 class="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">
                  <span>Meet</span> Our Team
                </h2>
                <p class="text-gray-600 lg:w-8/12 lg:mx-auto">
                  At DelightDish, our team is a dynamic blend of culinary
                  experts, innovators, and tech enthusiasts, led by Chef Sanjeev
                  Kapoor. From crafting mouthwatering recipes to curating
                  top-quality kitchen essentials, each member brings unique
                  talents and a shared passion for culinary excellence.
                  Together, we're committed to inspiring and empowering food
                  enthusiasts worldwide.
                </p>
              </div>
              <div class="grid gap-12 items-center md:grid-cols-3">
                <div class="space-y-4 text-center">
                  <img
                    class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                    src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg"
                    alt="woman"
                    loading="lazy"
                    width="640"
                    height="805"
                  />
                  <div>
                    <h4 class="text-2xl">Hentoni Doe</h4>
                    <span class="block text-sm text-gray-500">CEO-Founder</span>
                  </div>
                </div>
                <div class="space-y-4 text-center">
                  <img
                    class="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
                    src="https://tailus.io/sources/blocks/classic/preview/images/man.jpg"
                    alt="man"
                    loading="lazy"
                    width="1000"
                    height="667"
                  />
                  <div>
                    <h4 class="text-2xl">Jonathan Doe</h4>
                    <span class="block text-sm text-gray-500">
                      Chief Technical Officer
                    </span>
                  </div>
                </div>
                <div class="space-y-4 text-center">
                  <img
                    class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                    src="https://tailus.io/sources/blocks/classic/preview/images/woman.jpg"
                    alt="woman"
                    loading="lazy"
                    width="1000"
                    height="667"
                  />
                  <div>
                    <h4 class="text-2xl">Anabelle Doe</h4>
                    <span class="block text-sm text-gray-500">
                      Chief Operations Officer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
