import React from "react";

import './Modal.css'

function Modal (props) {
const {moviespop} = props
  return(
<>
{props.modal && (
  <div className = "myModal">
         <div className = "modal-content">
              
         </div>  
  </div>
  )}
</>
  )

}

export {Modal}