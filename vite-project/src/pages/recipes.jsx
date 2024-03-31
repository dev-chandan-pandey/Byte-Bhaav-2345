/* eslint-disable no-mixed-spaces-and-tabs */

// require('dotenv').config()
// const apiUrl = import.meta.env.API_BASE_URL;
//import "dotenv";
//import 'dotenv/config';
const API_BASE_URL=`http://localhost:8080`;
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SingleRecipe from '../components/SingleRecipe';
function Recipes() {
   const [data,setState] = useState([])
   useEffect(() => {
	const token = localStorage.getItem('token');
		const fetchFood = async () => {
			try {
				const data = await axios.get(`${API_BASE_URL}/recipes/`,{
					headers: {
					  'Authorization': `Bearer ${token}`
					}
			});
			   setState(data.data.recipes)
		// 		const data = await axios.get(`${apiUrl}/recipes/`,{
        //   headers: {
        //     'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NjA2Nzg2YzI3MTdjZjExYzVkNjU4MmUiLCJpYXQiOjE3MTE4MDc3Mjd9.FLV0D8YY1ZuWW3sJlvP4xceMChWQhxVZIIo60z4Yy-g`
        //   }
        //});
          console.log(data)
				//setdata(data);
			} catch (err) {
				console.log(err);
        console.log(err.message)
			}
		};

		// const usersavedFood = async () => {
		// 	const res = await axios.get(
		// 		`https://recipe-genius.vercel.app/foods/savedfood/id/${userId}`,
		// 	);
		// 	setSaved(res.data.savedFoods);
		// 	console.log("saved foods", res.data);
		// };

		fetchFood();
		//usersavedFood();
	}, []);
  return (
    <div className='md:px-0 px-2 md:max-w-[80%] mx-auto'>{data.map((ele,ind)=> <SingleRecipe key={ind+1+""+ele.name} food={ele}/>)}</div>
  )
}

export default Recipes