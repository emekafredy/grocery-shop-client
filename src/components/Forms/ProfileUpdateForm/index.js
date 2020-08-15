import React from 'react';

// component
import { ModalComponent } from '../../Modal/index';
import { ProfileInputForm } from '../ProfileInputForm/index';

export const ProfileUpdateForm = ({
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
