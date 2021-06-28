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
             <div className = "title"></div>
            
         </div>

         </div>  
  </div>
  )}
</>
  )
}

export {Modal}