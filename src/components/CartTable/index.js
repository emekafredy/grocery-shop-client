import React,  { useContext } from 'react';
import { IconButton, TableRow, TableCell, Select, MenuItem } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

// context
import { CartContext } from '../../context/cart/index';

import './CartTable.scss';

export const CartTable = ({ cart }) => {
  const { updateItemQuantity, deleteCartItem } = useContext(CartContext);

  const handleItemUpdate = async (event) => {
    event.preventDefault();
    const newQuantity = await event.target.value;
    await updateItemQuantity(cart.id, newQuantity);
  }

  const handleItemDelete = async (event) => {
    event.preventDefault();
    await deleteCartItem(cart.id);
  }

  return (
    <TableRow key={cart.id} className="shopping-cart__details">
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
          value={cart.quantity}
          onChange={(event) => handleItemUpdate(event)}
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
        <span className="shopping-cart__details-price">  &#8358;{ cart.grocery.price.toFixed(2) } </span>
      </TableCell>
      <TableCell align="left">
        <span className="shopping-cart__details-price">  &#8358;{ cart.grocery.finalPrice.toFixed(2) } </span>
      </TableCell>
      <TableCell align="left">
        <IconButton className="shopping-cart__details__remove" aria-label="add to cart">
          <DeleteIcon onClick={(event) => handleItemDelete(event)}/>
        </IconButton>
      </TableCell>
    </TableRow>
  )
}
