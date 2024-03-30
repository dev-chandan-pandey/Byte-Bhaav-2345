import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contect from "./pages/Contect.jsx";
import Recipes from "./pages/Recipes.jsx";
import Banner from "./components/Banner.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path={"/"} element={<Home/>}></Route>
        <Route exact path={"/about"} element={<About/>}></Route>
        <Route exact path={"/contact"} element={<Contect/>}></Route>
        <Route exact path={"/recipes"} element={<Recipes/>}></Route>
      </Routes>
      <Banner />
      <Footer />
    </Router>
  );
}

export default App;
