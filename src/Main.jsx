import { useEffect } from "react";
import { useState } from "react";
import { fetchImage } from "./api";
import { Form } from "./Form";
import { Gallery } from "./Gallery";

export const Main= ()=>{
  const[urls,setUrls]=useState(null)
  useEffect(()=>{
    fetchImage("shiba")
      .then((urls)=>setUrls(urls))
  },[])

  const reloadImages=(breed)=>{
    fetchImage(breed).then((urls)=>{
      setUrls(urls)
    })
  }

  return(
    <main>
         <section className="section">
         <div className="container">
          <Form onFormSubmit={reloadImages} />
         </div>
       </section>
        <section className="section">
          <div className="container">
            <Gallery urls={urls}/>
          </div>
        </section>
      </main>
  )
}
