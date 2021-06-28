
import React from "react";
import './Modal.css';

function Modal (props) {
  const {modal} = props;
  return(
    modal && (
    <div className = "myModal">
        <div className = "overlay"></div>
          <div className = "modal-content">
            <div className = "modal-content-right">
                <div className = "title">hello</div>  
            </div>
            <Link to = '/'> <button className = "btn">Add Book</button> </Link>
        </div>  
    </div> 
    ) 
  )
}

export {Modal}