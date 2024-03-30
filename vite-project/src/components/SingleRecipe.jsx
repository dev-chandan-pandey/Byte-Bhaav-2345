import React from "react";
import { Link } from "react-router-dom";
// calorie :150
// cookingTime :45
// createdAt: "2024-03-29T08:19:47.846Z"
// description: "A hearty and nutritious soup made with an assortment of fresh garden vegetables."
// fat: 5
// image:  "https://raw.githubusercontent.com/VishnurajKarockal/Resources/main/byte-bhaav-unit6-project-recipe_images/calum-lewis-vA1L1jRTM70-unsplash.jpg"
// ingredients: [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// instructions: "In a large pot, heat olive oil over medium heat. Add diced onions, carrots, and celery. Sauté until vegetables are softened. Stir in minced garlic, chopped tomatoes, vegetable broth, and herbs. Bring to a simmer and cook for 20-25 minutes. Add chopped zucchini, green beans, and corn. Simmer for an additional 10-15 minutes until vegetables are tender. Season with salt and pepper to taste. Serve hot."
// rating: 4.7
// req_membership: "silver"
// title: "Garden Vegetable Soup"
// type :  "Soup"
// userID: "660678d72717cf11c5d65832"
// _id:  "660679a32717cf11c5d65836"
function SingleRecipe({ food }) {
  return (
    <div className="rounded-lg sm:border-r-[12px] my-5 bg-white border-red-600 mt-2 grid  md:flex gap-2 ">
      <div className="">
        <Link to={`/recipe/${food._id}`}>
          <img
            className="md:w-[240px] rounded-l-lg w-full h-full object-cover"
            src={`${food.image}`}
            alt={food.title}
          />
        </Link>
      </div>

      <div className="w-full p-2 pb-4">
        <div className="flex justify-between items-center w-full">
          <p className="text-xl font-semibold capitalize	">{food.title}</p>
          <p className="font-semibold text-slate-600 text-[13px]">
            CookingTime - {food.cookingTime}min
          </p>
          <p className="font-semibold text-slate-600 text-[13px]">
            createdAt - {food.createdAt}day
          </p>
        </div>
        <div className="flex justify-between items-center w-full">
        <p className="text-xl font-semibold capitalize	">{food.req_membership}</p>
        <p className="font-semibold text-slate-600 text-[13px]">
        rating- {food.rating}
        </p>
        <p className="font-semibold text-slate-600 text-[13px]">
        type - {food.type}
        </p>
      </div>
        <p className="sm:inline hidden text-sm text-gray-600">
         description: {food.description}
        </p>
        <br/>
        <p className="sm:inline hidden text-sm text-gray-600">
        instructions: {food.instructions}
       </p>
        <p className="inline sm:hidden text-sm text-gray-600">
          {food.description}
        </p>
        <p className=" mt-2 font-semibold text-md  capitalize ">Ingredients</p>
        {/* <p className='flex gap-10'>{food.ingredients}</p> */}
        <ul className="flex flex-wrap w-full gap-4 mt-1">
          {food.ingredients.map((ele, index) => (
            <ul
              className="bg-red-600 capitalize rounded-sm text-[12px] text-white text-center px-4 "
              key={index}
              style={{ listStyleType: "none", display: "flex" }}
            >
              <li className="px-5">name: {ele.name}</li>
              <br />
              <li className="px-5">quantity: {ele.quantity}</li>
              <br />
              <li className="px-5">id: {ele._id}</li>
            </ul>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SingleRecipe;

// <div className="flex  justify-center sm:justify-end w-full">
//         {cookies.access_token ? (
//           <button
//             className="mt-4 bg-black text-white w-[150px] p-1 hover:bg-white hover:text-black cursor-pointer  hover:border hover:border-[1px] hover:border-black hover:duration-200 rounded-md"
//             onClick={() => {
//               saveFood(food._id);
//             }}
//             disabled={isSaved(food._id)}
//           >
//             {" "}
//             {saved.includes(food._id) ? "Saved" : "Save"}
//           </button>
//         ) : (
//           ""
//         )}
//       </div>
