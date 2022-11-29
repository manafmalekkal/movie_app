import React from "react";
import './App.css';
import Banner from "./components/Banner/Banner";
import NavBar from "./components/Navigation/NavBar";
import Poster from "./components/Posters/Poster";

const App = () =>{
  return(
    <div className='App'>
      <NavBar/>
      <Banner/>
      <Poster/>
      {/* <Poster/>
      <Poster/>
      <Poster/> */}
    </div>
  )
}
export default App;