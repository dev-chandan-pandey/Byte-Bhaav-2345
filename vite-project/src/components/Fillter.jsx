import { Select, filter } from "@chakra-ui/react";
import React, { useState } from "react";

function Fillter({ setSearch }) {
  //cosnt [filter,setFiller] = useState("");
  function handleFillter(v) {
    setSearch(v);
  }
  return (
    <>
      <Select width={"fit-content"} onChange={(e) => handleFillter(e.target.value)}>
        <option selected defaultValue={""}>select type</option>
        <option value="Seafood">Seafood</option>
        <option value="Pizza">Pizza</option>
        <option value="Stir-Fry">Stir-Fry</option>
        <option value="Salad">Salad</option>
        <option value="Soup">Soup</option>
        <option value="Pasta">Pasta</option>
        <option value="Curry">Curry</option>
        <option value="Rice">Rice</option>
        <option value="Mexican">Mexican</option>
      </Select>
    </>
  );
}

export default Fillter;
