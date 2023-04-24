import React from 'react';
import film1 from "../../imges/film.jpg";
import film2 from "../../imges/film0.jpg";
import film3 from "../../imges/film1.jpg";
import film4 from "../../imges/film2.jpg";
import film5 from "../../imges/film4.jpg";
import film6 from "../../imges/film5.jpg";
export default function About() {
  return (
    <> 
      <h1 className="text-center mt-5">About Noxe.io!</h1>
      <p className="text-center mt-3 fs-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit Id quasi impedit quidem <br/>eius corrupti dolorum hic sint,quo porro praesentium aliquam, expedita distinctio,<br/>  aut ab fuga ipsa! Natus, praesentium laudantium?</p>
      <div className="row">
       <div className="col-md-4">
          <img src={film1} className="w-100" alt='film1'/>
         <p className="text-info mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi unde inventore ipsam itaque dignissimos iste, eius facilis mollitia eum, repudiandae enim ea veniam perferendis accusantium ducimus suscipit? Alias, laboriosam voluptatum.</p>
       </div>
       <div className="col-md-4">
         <img src={film2} className="w-100" alt='film2'/>
         <p className="text-info mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi unde inventore ipsam itaque dignissimos iste, eius facilis mollitia eum, repudiandae enim ea veniam perferendis accusantium ducimus suscipit? Alias, laboriosam voluptatum.</p>
       </div>
       <div className="col-md-4">
         <img src={film3} className="w-100" alt='film3'/>
         <p className="text-info mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi unde inventore ipsam itaque dignissimos iste, eius facilis mollitia eum, repudiandae enim ea veniam perferendis accusantium ducimus suscipit? Alias, laboriosam voluptatum.</p>
       </div>
       <div className="col-md-4">
         <img src={film4} className="w-100" alt='film4'/>
         <p className="text-info mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi unde inventore ipsam itaque dignissimos iste, eius facilis mollitia eum, repudiandae enim ea veniam perferendis accusantium ducimus suscipit? Alias, laboriosam voluptatum.</p>
       </div>
       <div className="col-md-4">
         <img src={film5} className="w-100" alt='film5'/>
         <p className="text-info mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi unde inventore ipsam itaque dignissimos iste, eius facilis mollitia eum, repudiandae enim ea veniam perferendis accusantium ducimus suscipit? Alias, laboriosam voluptatum.</p>
       </div>
       <div className="col-md-4">
         <img src={film6} className="w-100" alt='film6'/>
         <p className="text-info mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi unde inventore ipsam itaque dignissimos iste, eius facilis mollitia eum, repudiandae enim ea veniam perferendis accusantium ducimus suscipit? Alias, laboriosam voluptatum.</p>
       </div>
   </div> 

    </>
  )
}
