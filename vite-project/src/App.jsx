import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Recipes from "./pages/Recipes.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx";
import Contact from "./pages/Contact.jsx";
import Signup from "./pages/SignUp.jsx";
import RecipeDetail from "./components/RecipeDetail.jsx";
import Posts from "./pages/Posts.jsx";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route  path={"/"} element={<Home/>}></Route>
        <Route  path={"/about"} element={<About/>}></Route>
        <Route  path={"/contact"} element={<Contact/>}></Route>
        <Route  path={"/recipes"} element={<Recipes/>}></Route>
        <Route exact path={"/login"} element={<Login/>}></Route>
        <Route exact path={"/signup"} element={<Signup/>}></Route>
        <Route exact path={"/recipedetail/:id"} element={<RecipeDetail/>}></Route>
        <Route exact path="/posts" element={<Posts />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

      