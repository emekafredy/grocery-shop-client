import React from 'react';
import { Modal } from '@material-ui/core';

import './Modal.scss';

export const ModalComponent = ({ open, handleClose, title, children }) => {
  return (
    <div className="modal-container">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="add address"
        aria-describedby="modal for adding shipping address"
        className="modal"
      >
        <div className="modal__display">
          <div className="modal__title">
            <span className="modal__title-span-1"> { title } </span>
            <span
              className="modal__title-span-2"
              onClick={handleClose}
            > Close </span>
          </div>
          <hr/>

          <div className="modal__content">
            { children }
          </div>
        </div>
      </Modal>
    </div>
  );
}
