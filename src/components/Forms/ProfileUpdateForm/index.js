import React from 'react';
import EditIcon from '@material-ui/icons/Edit';

// component
import { ModalComponent } from '../../Modal/index';
import { ProfileInputForm } from '../ProfileInputForm/index';

export const ProfileUpdateForm = ({
  handleOpenProfileUpdateModal,
  profileUpdateModalOpen,
  handleCloseProfileUpdateModal,
  handleSubmit,
  phone,
  handleChange,
  name,
  handleNameChange,
  address,
  handleAddressChange,
  loading
}) => {
  return (
    <div>
      <div className="profile__card__edit">
        <EditIcon fontSize="large" className="profile__card__edit-icon" onClick={handleOpenProfileUpdateModal} />
      </div>
      <ModalComponent
        open={profileUpdateModalOpen}
        handleClose={handleCloseProfileUpdateModal}
        title="Update Profile"
      >
        <ProfileInputForm
          onSubmit={handleSubmit}
          label="Phone"
          value={phone}
          onChange={handleChange}
          nameValue={name}
          onNameChange={handleNameChange}
          addressValue={address}
          onAddressChange={handleAddressChange}
          hasNameInput={true}
          hasAddressInput={true}
          loading={loading}
        />
      </ModalComponent>
    </div>
  )
}
