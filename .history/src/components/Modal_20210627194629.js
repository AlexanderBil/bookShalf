import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import React from "react";
import './Modal.css';

function Modal (props) {
  const {modal} = props;
  const [close, setClose] = useState([true, '']);

  useEffect(() => {
    setClose(modal)
  }, [modal])
  
  function closeModal(){
    setClose(!close[0])
  }
  return(
    close && (
    <div className = "myModal">
        <div className = "overlay"></div>
          <div className = "modal-content">
            <div className = "modal-content-right">
                <div className = "title">{</div>  
            </div>
            <Link to = '/'> <button className = "btn" onClick={closeModal}>Close</button> </Link>
        </div>  
    </div> 
    ) 
  )
}

export {Modal}