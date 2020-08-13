import React from 'react';
import AddIcon from '@material-ui/icons/Add';

// component
import { ModalComponent } from '../../Modal/index';
import { ProfileInputForm } from '../ProfileInputForm/index';

export const AddPhoneForm = ({
  handleOpenPhoneModal,
  phoneModalOpen,
  handleClosePhoneModal,
  handleSubmit,
  phone,
  handleChange,
  loading
}) => {
  return (
    <div>
      <div className="profile__phone">
        Add Phone Number <AddIcon className="profile__phone__add-icon" onClick={handleOpenPhoneModal} />
      </div>
      <ModalComponent
        open={phoneModalOpen}
        handleClose={handleClosePhoneModal}
        title="Add Phone"
      >
        <ProfileInputForm
          onSubmit={handleSubmit}
          label="Phone"
          value={phone}
          onChange={handleChange}
          loading={loading}
        />
      </ModalComponent>
    </div>
  )
}
