import React from "react";

import './modal.css'

const Modal = ({image, name, tagline, abv, description, dateBrewed, tips, closedModal}) => (
    <div className='modal-main'>
      <div className='close' onClick={closedModal}>X</div>
      <div className='modal-wrapper'>
        <div>
          <img src={image} alt='img' className='image'/>
        </div>
        <div>
          <div className='modal-content'>{name}</div>
          <div className='modal-content'>{tagline}</div>
          <div className='modal-content'>{abv}</div>
          <div className='modal-content'>{description}</div>
          <div className='modal-content'>{dateBrewed}</div>
          <div className='modal-content'>{tips}</div>
        </div>
      </div>
    </div>

);

export default Modal;
