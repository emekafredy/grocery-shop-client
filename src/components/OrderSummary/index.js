import React from 'react';
import { Card, CardContent, CardHeader } from '@material-ui/core';

import './OrderSummary.scss';

import { Loader } from '../Loader';

import { numberSeperator } from '../../utils';

export const OrderSummary = ({
  cartSummary,
  checkoutSummary,
  totalCartItems,
  totalCartPrice,
  loading,
  totalPriceTitle,
  children
}) => {
  return (
    <>
      <div className="order-summary__container">
        <Card className="order-summary__card">
          <CardHeader className="order-summary__header" title= { <h3 className="order-summary__header-title"> Summary </h3> } />
          <CardContent>
            <div className="order-summary__details-container">
              {
                loading ?
                  <Loader />
                  : <div>
                      {
                        cartSummary ?
                          <Card className="order-summary__details-card">
                            <span className="order-summary__details__title"> Total Items </span>
                            <span className="order-summary__details__value"> { totalCartItems } </span>
                          </Card> : ''
                      }
                      <Card className="order-summary__details-card">
                        <span className="order-summary__details__title"> { totalPriceTitle } </span>
                        <span className="order-summary__details__value"> &#8358;{ totalCartPrice && numberSeperator(totalCartPrice) } </span>
                      </Card>

                      {
                        checkoutSummary ?
                          <>
                            <Card className="order-summary__details-card">
                              <span className="order-summary__details__title"> Delivery Fee </span>
                              <span className="order-summary__details__value"> &#8358; 1,200 </span>
                            </Card>

                            <Card className="order-summary__details-card">
                              <span className="order-summary__details__title"> Total Price </span>
                              <span className="order-summary__details__value"> &#8358;{ totalCartPrice && numberSeperator(totalCartPrice + 1200) } </span>
                            </Card>
                          </>: ''
                      }

                      <div className="order-summary__checkout-header">
                        { children }
                      </div>
                    </div>
              }
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
