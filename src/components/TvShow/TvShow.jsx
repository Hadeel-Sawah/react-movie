import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import {useEffect} from 'react';
import styles from './TvShow.module.css';
export default function TvShow() {
  let [TrandinTvShowes,setTrandinTvShowes] = useState([]);
  let imgUrl = "https://image.tmdb.org/t/p/original";
  async function getTrandingItems(mediaType,callback) {
  let {data} =await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=1e7ef86bb5788271b42e9e1a80b63d6b`);
  callback(data.results)
   }
   useEffect(() => {
    getTrandingItems('tv',setTrandinTvShowes)
   }, [])

  return (
  <>
    <div className="row">
    <div className="col-md-4">
      <div className="welcom">
        <div className={`${styles.brdr} w-25 mt-5 my-2`}></div>
          <h2> Tranding </h2>
          <h2> TvShowe </h2>
          <h2> To Watch Now  </h2>
          <p className='text-muted'>most watched movies by day</p>
        <div className={`${styles.brdr} w-100 my-3`}></div>
      </div>
    </div>
    {TrandinTvShowes.map((tv)=> (
     <div key={tv.id} className="col-md-2 my-2">
        <div className="movie">
          <img src={imgUrl+ tv.poster_path} alt="" className='w-100 mb-2' />
            <h2 className="h5">{tv.name}</h2>
        </div>
      </div>
      ))}
   </div>
  </>
  )
}

