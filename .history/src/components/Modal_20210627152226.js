import {useEffect} from 'react';
import M from

function Modal(){
    return (
        <div id="modal1" className="modal">
        <div class="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div class="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>
    )
  }
  export {Modal}