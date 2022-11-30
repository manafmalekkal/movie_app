import React from "react";
import './App.css';
import Banner from "./components/Banner/Banner";
import NavBar from "./components/Navigation/NavBar";
import Poster from "./components/Posters/Poster";
import { ACTION_MOVIES_URL, COMEDY_MOVIES_URL, DOCUMENTARIES_URL, HORROR_MOVIES_URL, ORIGINALS_URL, ROMANCE_MOVIES_URL, TRENDING_URL } from "./constants/Constants";

const App = () =>{
  return(
    <div className='App'>
      <NavBar/>
      <Banner/>
      <Poster title='Trending' url={TRENDING_URL}/>
      <Poster title='Action' url={ACTION_MOVIES_URL}/>
      <Poster title='Comdey' url={COMEDY_MOVIES_URL}/>
      <Poster title='Horror' url={HORROR_MOVIES_URL}/>
      <Poster title='Originals' url={ORIGINALS_URL}/>
      <Poster title='Romance' url={ROMANCE_MOVIES_URL}/>
      <Poster title='Documentaries' url={DOCUMENTARIES_URL}/>
    </div>
  )
}
export default App;