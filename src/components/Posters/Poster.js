import React from "react";
import './Poster.css';
import posterImg from '../Navigation/movie-app-logo.png';

const Poster=()=>{
    return(
        <div className='row'>
            <h3 className='category'>Category</h3>
            <div className='posterDiv'>
            <img className='posterImage' src={posterImg} alt='poster'/>
            <img className='posterImage' src={posterImg} alt='poster'/>
            <img className='posterImage' src={posterImg} alt='poster'/>
            <img className='posterImage' src={posterImg} alt='poster'/>
            <img className='posterImage' src={posterImg} alt='poster'/>
            <img className='posterImage' src={posterImg} alt='poster'/>
            <img className='posterImage' src={posterImg} alt='poster'/>
            <img className='posterImage' src={posterImg} alt='poster'/>
            <img className='posterImage' src={posterImg} alt='poster'/>
            <img className='posterImage' src={posterImg} alt='poster'/>
            <img className='posterImage' src={posterImg} alt='poster'/>
            <img className='posterImage' src={posterImg} alt='poster'/>
            <img className='posterImage' src={posterImg} alt='poster'/>
            <img className='posterImage' src={posterImg} alt='poster'/>
            <img className='posterImage' src={posterImg} alt='poster'/>
            </div>
        </div>
    )
}
export default Poster;