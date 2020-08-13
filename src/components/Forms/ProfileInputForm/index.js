import React from 'react';
import { TextField, CircularProgress } from '@material-ui/core';

import './ProfileInputForm.scss';

export const ProfileInputForm = ({
  onSubmit,
  value,
  onChange,
  nameValue,
  onNameChange,
  addressValue,
  onAddressChange,
  loading,
  label,
  hasNameInput,
  hasAddressInput
}) => {
  return (
    <form noValidate  onSubmit={ onSubmit}>
      {
        hasNameInput ?
        <div>
          <TextField
            className="shipping-address-input"
            label="Name"
            variant="outlined"
            value={nameValue}
            onChange={onNameChange}
          />
          <br /><br />
        </div> : ''
      }
      <TextField
        className="shipping-address-input"
        label={label}
        variant="outlined"
        value={value}
        onChange={onChange}
      /> <br /><br />
      {
        hasAddressInput ?
        <div>
          <TextField
            className="shipping-address-input"
            label="Shipping Address"
            variant="outlined"
            value={addressValue}
            onChange={onAddressChange}
          />
          <br /><br />
        </div> : ''
      }
      <button
        className="shipping-address-submit-btn"
        variant="contained"
        type="submit"
        disabled={loading}
      > 
       { loading ? <CircularProgress className="submit-loader" size={20} /> : 'Save' }
      </button>
    </form>
  )
}
