import { useEffect, useState } from "react";
import { fetchImage } from "./api";
import { Image } from "./Image";

export const Gallery=({urls})=>{
  const Loading =()=><p>Loading...</p>

 return(
    <div className="columns is-vcentered is-multiline">
       {urls==null ?
          <Loading/>
          :
          urls.map((url,index)=>
          <div className="column is-3" key={index}>
            <Image  src={url}/>
          </div>
          )
       }
    </div>
  )
}
