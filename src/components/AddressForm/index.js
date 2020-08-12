import React from 'react';
import { TextField, CircularProgress } from '@material-ui/core';

import './AddressForm.scss';

export const AddressForm = ({
  onSubmit, value, onChange, loading
}) => {
  return (
    <form noValidate  onSubmit={ onSubmit}>
      <TextField
        className="shipping-address-input"
        label="Shipping Address"
        variant="outlined"
        value={value}
        onChange={onChange}
      />
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
