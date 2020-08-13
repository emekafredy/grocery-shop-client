import React from 'react';
import AddIcon from '@material-ui/icons/Add';

// component
import { ModalComponent } from '../../Modal/index';
import { ProfileInputForm } from '../ProfileInputForm/index';

export const AddAddressForm = ({
  handleOpenAddressModal,
  addressModalOpen,
  handleCloseAddressModal,
  handleSubmit,
  address,
  handleChange,
  loading
}) => {
  return (
    <div>
      <div className="profile__phone">
        Add Shipping Address <AddIcon className="profile__phone__add-icon" onClick={handleOpenAddressModal} />
      </div>
      <ModalComponent
        open={addressModalOpen}
        handleClose={handleCloseAddressModal}
        title="Add Shipping Address"
      >
        <ProfileInputForm
          onSubmit={handleSubmit}
          label="Shipping Address"
          value={address}
          onChange={handleChange}
          loading={loading}
        />
      </ModalComponent>
    </div>
  )
}
