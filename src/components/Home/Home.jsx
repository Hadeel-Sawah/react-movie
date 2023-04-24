import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import {useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  let [Trandingmoves,setTrandingMovies] = useState([]);
  let [TrandinTvShowes,setTrandinTvShowes] = useState([]);
  let [TrandinPeople,setTrandinPeople] = useState([]);
  let imgUrl = "https://image.tmdb.org/t/p/original";
  async function getTrandingItems(mediaType,callback) {
  let {data} =await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=1e7ef86bb5788271b42e9e1a80b63d6b`);
  callback(data.results);
   }
  let navigate = useNavigate();


   useEffect(() => {
    getTrandingItems('movie',setTrandingMovies);
    getTrandingItems('tv',setTrandinTvShowes)
    getTrandingItems('person',setTrandinPeople)
    
   }, [])
   
  return (
   <>
   <div className="row">
      <div className="col-md-4">
          <div className="welcom">
            <div className={`${styles.brdr} w-25 mt-5 my-2`}></div>
              <h2> Tranding </h2>
              <h2> Movies </h2>
              <h2> To Watch Now </h2>
              <p className='text-muted'>most watched movies by day</p>
              <div className={`${styles.brdr} w-100 my-3`}></div>
          </div>
      </div>
      {Trandingmoves.map((movie)=>(
    <Link to={`/details?id=${movie.id}`} key={movie.id} className="col-md-2 my-2">
        <div className="movie">
          <img src={imgUrl+ movie.poster_path} alt="" className='w-100 mb-2' />
            <h2 className="h5">{movie.title}</h2>
        </div>
      </Link>
      ))}
   </div> 
   <div className="row">
    <div className="col-md-4">
      <div className="welcom">
        <div className={`${styles.brdr} w-25 mt-5 my-2`}></div>
          <h2> Tranding </h2>
          <h2> TvShow </h2>
          <h2> To Watch Now  </h2>
          <p className='text-muted'>most watched movies by day</p>
        <div className={`${styles.brdr} w-100 my-3`}></div>
      </div>
    </div>
    {TrandinTvShowes.map((tv)=> (
    
    <Link to={`/details?id=${tv.id}`} key={tv.id} className="col-md-2 my-2">
        <div className="movie">
        <img src={imgUrl+ tv.poster_path} alt="" className='w-100 mb-2' />
         <h2 className="h5">{tv.name}</h2>
        </div>
      </Link>
      ))}

   </div>
   <div className="row">
    <div className="col-md-4">
      <div className="welcom">
        <div className={`${styles.brdr} w-25 mt-5 my-2`}></div>
          <h2> Tranding </h2>
          <h2> People </h2>
          <h2> To Watch Now  </h2>
          <p className='text-muted'>most watched movies by day</p>

        <div className={`${styles.brdr} w-100 my-3`}></div>
      </div>
    </div>
    {TrandinPeople.map((person)=> (
    <Link to={`/details?id=${person.id}`} key={person.id} className="col-md-2 my-2">
    <div className="movie">
    <img src={imgUrl+ person.profile_path} alt="" className='w-100 mb-2' />
     <h2 className="h5">{person.name}</h2>
    </div>
  </Link>
      ))}
   </div>
    </>
  )
}

