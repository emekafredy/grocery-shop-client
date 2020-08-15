import React from 'react';
import { Card, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { Loader } from '../Loader';

import { numberSeperator } from '../../utils';

export const SelectedPurchaseItems = ({
  cart,
  loading
}) => {
  return (
    <div className="checkout__selected-items">
      <span className="checkout__selected-items__title"> SELECTED ITEMS </span>
      <br/>
      <div className="checkout__selected-items-container">
        {
          loading ?
            <Loader />
            : cart.cart?.map(item => {
              return (
                <Card key={item.id} className="checkout__selected-items-card">
                  <span className="checkout__selected-items__item-name"> { item.grocery.name } </span>
                  <span className="checkout__selected-items__item-action">
                    <IconButton
                      className="checkout__selected-items__remove"
                      aria-label="add to cart"
                      // onClick={(event) => handleItemDelete(event)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </span>
                  <br />
                  <span className="checkout__selected-items__item-quantity">  Qty: { item.quantity } </span>
                  <span className="checkout__selected-items__item-price">  Price: &#8358; { numberSeperator(item.grocery.finalPrice) } </span>
                </Card>
              )
            })
        }
      </div>
    </div>
  )
}
