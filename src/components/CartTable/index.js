import React from 'react';
import { IconButton, TableRow, TableCell, Select, MenuItem } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import './CartTable.scss';

export const CartTable = ({ cart }) => {
  return (
    <TableRow key={cart.id} class="shopping-cart__details">
      <TableCell component="th" scope="row">
        <img
          className="shopping-cart__details-image"
          src={ cart.grocery.image }
          alt={ cart.grocery.name }
        />
      </TableCell>
      <TableCell align="left">
        <span> { cart.grocery.name } </span>
      </TableCell>
      <TableCell align="left">
        <Select
          // open={open}
          // onClose={handleClose}
          // onOpen={handleOpen}
          value={cart.quantity}
          // onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
        </Select>
      </TableCell>
      <TableCell align="left">
        <span className="shopping-cart__details-price">  &#8358;{ cart.grocery.finalPrice } </span>
        <p className="shopping-cart__details-price-calc">  &#8358;{cart.grocery.price} * {cart.quantity} </p>
      </TableCell>
      <TableCell align="left">
        <IconButton className="shopping-cart__details__remove" aria-label="add to cart">
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}
