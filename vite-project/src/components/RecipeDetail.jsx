// import { Spinner } from '@chakra-ui/react';
// import axios from 'axios';
// import React, { useEffect } from 'react'
// import { useState } from 'react';
// import { useLocation, useNavigate, useParams } from 'react-router-dom';

// function RecipeDetail() {
  
//     const [data, setData] = useState({});
// 	const { id } = useParams();
//     const navigate = useNavigate();
//     const loacation= useLocation();
//     console.log(loacation.state)

// 	if(!loacation.state){
// 		return(
// 			<Spinner
// 	thickness='4px'
// 	speed='0.65s'
// 	emptyColor='gray.200'
// 	color='blue.500'
// 	size='xl'
//   />
// 		)
// 	}
// 	return (
// 		<div className='grid sm:grid-cols-2 mt-20 max-w-[90%] mx-auto gap-8'>
// 			<div className='w-full'>
// 				<img src={loacation.state.image} className='object-cover w-[600px] ' />
				
// 			</div>
// 			<div>
// 				<h2 className='text-4xl font-semibold'>{loacation.state.title}</h2>
// 				<p className='text-sm text-indigo-400 text-justify'>
					
// 				</p>
// 				<p className='text-xl mt-3 font-semibold'>Instructions</p>
// 				<p className='text-sm text-indigo-500 -mt-1'>
// 					{loacation.state.instructions}
// 				</p>

// 				<div className='pb-5'>
// 					<h2 className='text-xl mt-2 font-semibold'>Ingredients</h2>
// 					<ul className='text-sm text-indigo-500 flex gap-6'>
// 						{loacation.state.ingredients.map((m, index) => {
// 							return (
// 								<li className='bg-gray-200 px-2 rounded-sm' key={index}>
// 									{m.name}
// 								</li>
// 							);
// 						})}
// 					</ul>
// 				</div>
				
// 			</div>
// 		</div>
// 	);

  
// }

// export default RecipeDetail


import { Spinner } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

function RecipeDetail() {
  const { id } = useParams();
  const location = useLocation();
  const [loading, setLoading] = useState(!location.state);
    const membership = localStorage.getItem("membership");
	const { title, image, instructions, ingredients } = location.state;
	 if(membership!="premium"&&location.req_membership=="premium"){
		return(<div style={{marginTop:"100px"}}>
			premium membership is require for it
			</div>)
	 }
	 if(membership=="silver"&&(location.req_membership!="silver"||location.req_membership!="regular")){
		return(<div style={{marginTop:"100px"}}>
			{membership} membership is require for it
			</div>)
	 }
	 if(membership=="regular"&&(location.req_membership=="silver"||location.req_membership=="premium")){
		return(<div style={{marginTop:"100px"}}>
			{membership} membership is require for it
			</div>)
	 }
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </div>
    );
  }

  console.log(location.state)
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="w-full">
          <img src={image} alt={title} className="object-cover w-full" />
        </div>
        <div>
          <h2 className="text-4xl font-semibold mb-4">{title}</h2>
          <p className="text-sm text-indigo-400 text-justify mb-6"></p>
          <p className="text-xl font-semibold mb-2">Instructions</p>
          <p className="text-sm text-indigo-500">{instructions}</p>
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Ingredients</h2>
            <ul className="grid grid-cols-2 gap-2 mt-2">
              {ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="bg-gray-200 px-3 py-1 rounded-md text-sm"
                >
                  {ingredient.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
