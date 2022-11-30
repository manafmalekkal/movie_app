import React, { useEffect, useState } from "react";
import './Poster.css';
import posterImg from '../Navigation/movie-app-logo.png';
import axios from '../../api/Link';
import { IMAGE_URL } from "../../constants/Constants";

const Poster=(props)=>{
    const[posters,setPosters]=useState([]);
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            console.log(response.data);
            setPosters(response.data.results);
        })
    },[])
    return(
        <div className='row'>
            <h3 className='category'>{props.title}</h3>
            <div className='posterDiv'>
                {
                    posters.map((obj)=>{
                      return  <img className='posterImage' src={`${IMAGE_URL+obj.backdrop_path}`} alt={posterImg}/>
                    })
                }
            </div>
        </div>
    )
}
export default Poster;