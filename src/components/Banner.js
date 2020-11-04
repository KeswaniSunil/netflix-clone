import React,{useState,useEffect} from 'react';
import axios from '../axios'
import requests from '../Requests';
import '../styles/Banner.css'

const Banner = () => {
    const [movie,setMovie]=useState([]);
    useEffect(()=>{
        axios.get(requests.fetchNetflixOriginals)
        .then(res=>{
            // console.log("Length= "+res.data.results.length)
            // console.log(res.data.results[Math.floor(Math.random() * (res.data.results.length - 1))]);
            setMovie(res.data.results[Math.floor(Math.random() * (res.data.results.length - 1))]);
            return res;
        })
        .catch(e=>{
            
        })
    },[])
    // console.log("mpvie= "+movie);
    return (
        <header className="banner"
            style={{
                backgroundSize:"cover",
                //use of ? in url is to make sure if movie.backdrop is not nullso that it doesn't throw error
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition:"center center"
            }}
        >
            <div className="banner__contents">
                <h1>
                    {/* Now some films have either title,name or original name,so to counter it:- */}
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {movie?.overview}
                </h1>
            </div>

        </header>
    );
}

export default Banner;
