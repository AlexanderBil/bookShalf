import React from "react";
import './Modal.css'

function Modal (props) {
// const {moviespop} = props
  return(
<>
{/* {props.modal && ( */}
  <div className = "myModal">
      <div className = "overlay"></div>
         <div className = "modal-content">
          <div className = "modal-content-left-img">
             <img  className="activator" src={moviespop.Poster} />
         </div>
         <div className = "modal-content-right">
             <div className = "title">{moviespop.Title}</div>
             <div className = "about">
               <p> Year: {moviespop.Year}</p>
               <p> Rated: {moviespop.Rated}</p>
               <p> Released: {moviespop.Released}</p>
               <p> Runtime: {moviespop.Runtime}</p>
               <p> Genre: {moviespop.Genre}</p>
               <p> Actors: {moviespop.Actors}</p>
               <p> Plot: {moviespop.Plot}</p>
             </div>
         </div>

         </div>  
  </div>
  )}
</>
  )
}

export {Modal}