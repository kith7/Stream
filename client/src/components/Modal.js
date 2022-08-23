import React from "react";
import { createPortal } from "react-dom";
const Modal = (props) => {
  return createPortal(
    <div className='ui dimmer modals visible active' onClick={props.onDismiss}>
      <div
        onClick={(e) => e.stopPropagation()}
        className='ui standard modal visible active'
      >
        <div className='header'>
          <div className='content'>{props.title}</div>
          <div className='content'>{props.content}</div>
        </div>
        <div className='actions'>{props.actions}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
