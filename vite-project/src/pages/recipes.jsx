
const API_BASE_URL = `http://localhost:8080`;
import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleRecipe from "../components/SingleRecipe";
import Fillter from "../components/Fillter";
import SearchBar from "../components/SearchBar";
function Recipes() {
  const [data, setState] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const[fillter,setFiller]= useState("");
  useEffect(() => {
    const fetchFood = async (page = 1, search="") => {
      const query = `?search=${search}&page=${page}`;
      try {
        const data = await axios.get(`${API_BASE_URL}/recipes${query}`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NjA2Nzg2YzI3MTdjZjExYzVkNjU4MmUiLCJpYXQiOjE3MTE4MDc3Mjd9.FLV0D8YY1ZuWW3sJlvP4xceMChWQhxVZIIo60z4Yy-g`,
          },
        });
        setState(data.data.recipes);
       
        console.log(data);
       
      } catch (err) {
        console.log(err);
        console.log(err.message);
      }
    };
	fetchFood(page,search);

    // const usersavedFood = async () => {
    // 	const res = await axios.get(
    // 		`https://recipe-genius.vercel.app/foods/savedfood/id/${userId}`,
    // 	);
    // 	setSaved(res.data.savedFoods);
    // 	console.log("saved foods", res.data);
    // };

    //usersavedFood();
  }, [page,search]);
  function handlePage(value){
	setPage(value)
  }

     useEffect(()=>{
		const fetchFood2 = async (fillter) => {
			try {
			  const data = await axios.get(`http://localhost:8080/recipes/filter?type=${fillter}`, {
				headers: {
				  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NjA2Nzg2YzI3MTdjZjExYzVkNjU4MmUiLCJpYXQiOjE3MTE4MDc3Mjd9.FLV0D8YY1ZuWW3sJlvP4xceMChWQhxVZIIo60z4Yy-g`,
				},
			  });
			  setState(data.data.recipes);
			  
			  console.log(data);
			  
			} catch (err) {
			  console.log(err);
			  console.log(err.message);
			}
		  };
		   fetchFood2(fillter)
	 },[fillter])
  return (
    <div style={{marginTop:"100px"}} className="md:px-0 px-2 md:max-w-[80%] mx-auto flex flex-col">
	<SearchBar setSearch={setSearch}/>
	<Fillter setSearch={setSearch}/>
      <div className="md:px-0 px-2 md:max-w-[100%] mx-auto">
        {data.map((ele, ind) => (
          <SingleRecipe key={ind + 1 + "" + ele.name} food={ele} />
        ))}
      </div>
      <div class="inline-flex self-center text-center">
        <button disabled={page==1} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={()=>handlePage(page-1)}>
          Prev
        </button>
		<button disabled>{page}</button>
        <button disabled={data.length<10} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={()=>handlePage(page+1)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Recipes;
