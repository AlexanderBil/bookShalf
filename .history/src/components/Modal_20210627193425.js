import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import React from "react";
import './Modal.css';

function Modal (props) {
  const {modal} = props;
  const [close, setClose] = useState();

  useEffect(() => {
    setClose(modal)
  }, [modal])
  
  function closeModal(){
    setClose(close, dataform)
  }
  return(
    close && (
    <div className = "myModal">
        <div className = "overlay"></div>
          <div className = "modal-content">
            <div className = "modal-content-right">
                <div className = "title">hello</div>  
            </div>
            <Link to = '/'> <button className = "btn" onClick={}>Close</button> </Link>
        </div>  
    </div> 
    ) 
  )
}

export {Modal}