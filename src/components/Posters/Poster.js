import React, { useEffect, useState } from "react";
import './Poster.css';
import posterImg from '../Navigation/movie-app-logo.png';
import instance from "../../api/Link";
import { API_KEY, IMAGE_URL } from "../../constants/Constants";
import YouTube from "react-youtube";

const Poster=(props)=>{
    const[posters,setPosters]=useState([]);
    const[urlID,setUrlId]=useState('');
    useEffect(()=>{
        instance.get(props.url).then((response)=>{
            setPosters(response.data.results);
        })
    },[props.url]);
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          //https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const movieClickHandler = (id)=>{
        instance.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            if(response.data.length!==0){
                setUrlId(response.data.results[0]);
            }
        })
      }

    return(
        <div className='row'>
            <h3 className='category'>{props.title}</h3>
            <div className='posterDiv'>
                {
                    posters.map((obj, i)=>{
                      return  <>
                                <img key={i} onClick={()=>{movieClickHandler(obj.id)}} className='posterImage' src={`${IMAGE_URL+obj.backdrop_path}`} alt={posterImg}/>
                              </>
                    })
                }
            </div>
           { urlID && <YouTube videoId={urlID.key} opts={opts} />}
        </div>
    )
}
export default Poster;