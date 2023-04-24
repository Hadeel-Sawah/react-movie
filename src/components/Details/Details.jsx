import React, { useState } from 'react';
import axios from 'axios';
import {useEffect} from 'react';
import { useSearchParams } from "react-router-dom";
export default function Detials() {
  let [searchParams,setSearchParams] = useSearchParams();
  let [details,setDetails] = useState({});
  let currentId =searchParams.get('id');
  let imgUrl = "https://image.tmdb.org/t/p/original";
  async function getTrandingDetails(mediaType) {
    let {data} = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${currentId}?api_key=1e7ef86bb5788271b42e9e1a80b63d6b&language=en-US`);
    setDetails(data);
    console.log(data);
     };
     useEffect(() => {
      getTrandingDetails('movie')
      getTrandingDetails('tv')
      getTrandingDetails('person')
     }, [])
  
  return (
    <>
    <div className="row mt-5">
       <div className="col-md-4">
       <img src={imgUrl+ details.poster_path} alt="" className='w-100 mb-2' />
       <img src={imgUrl+ details.profile_path} alt="" className='w-100 mb-2' />
       </div>
       <div className="col-md-8 mt-5">
       <h1 className="h5">{details.title}</h1>
       <h2 className="h5 my-4">{details.tagline}</h2>
       <h2 className="h5 mt-5 mb-3"> {details.name}</h2>
       <h2 className="h5 mb-5">{details.place_of_birth}</h2>
       <h3>{details.overview}</h3>
       </div>
    </div>
    </>
  )
}
