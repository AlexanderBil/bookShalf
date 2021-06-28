import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import React from "react";
import './Modal.css';

function Modal (props) {
  const {modal} = props;
  const [close, setClose] = useState(true);

  useEffect(() => {
    setClose(modal)
  }, [modal])
  
  function closeModal(){
    setClose(!close)
  }
  return(
    close && (
    <div className = "myModal">
        <div className = "overlay"></div>
          <div className = "modal-content">
            <div className = "modal-content-right">
                <div className = "title">Change complited</div>  
                <Link to = '/'> <button className = "btn pt-" onClick={closeModal}>Close</button> </Link>
            </div>
        </div>  
    </div> 
    ) 
  )
}

export {Modal}