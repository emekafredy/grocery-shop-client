import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './OrderSummary.scss';

export const OrderSummary = ({ totalCartItems, totalCartPrice }) => {
  return (
    <>
      <Card>
        <CardContent>
          <div className="shopping-cart__order-summary-container">
            <h2 className="shopping-cart__order-summary-title"> Order Summary </h2>
            <hr/>
            <span className="shopping-cart__order-summary-total"> Total Items </span>
            <span className="shopping-cart__order-summary-total-value"> { totalCartItems } </span>
            <hr/>
            <span className="shopping-cart__order-summary-total"> Total Price </span>
            <span className="shopping-cart__order-summary-total-value"> &#8358;{ totalCartPrice } </span>
            <hr/>
            <Link className="shopping-cart__order-summary-checkout" to='/'> 
              Proceed to Checkout
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
