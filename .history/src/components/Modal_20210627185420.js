import React from "react";
import './Modal.css';

function Modal (props) {
  return(
    <div className = "myModal">
        <div className = "overlay"></div>
          <div className = "modal-content">
            <div className = "modal-content-right">
                <div className = "title">hello</div>  
            </div>
            <button onClick = {() => {deletetItem(); goBack()}} className = "btn add right">Back</button>
        </div>  
    </div>  
  )
}

export {Modal}