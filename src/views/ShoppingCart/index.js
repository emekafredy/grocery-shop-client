import React, { useEffect, useContext } from 'react';
import {
  Typography, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@material-ui/core';
import { Link } from 'react-router-dom';

// components
import { Loader } from '../../components/Loader';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { CartTable } from '../../components/CartTable';
import { OrderSummary } from '../../components/OrderSummary';

// context
import { CartContext } from '../../context/cart/index';

import './ShoppingCart.scss';

export const ShoppingCart = () => {
  const { cart, getCart, loading } = useContext(CartContext);

  useEffect(() => {
    getCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="shopping-cart">
     {
      loading ? <Loader /> 
      : <div>
          <BreadCrumbs>
            <Link color="inherit" to="/">
              Home
            </Link>
            <Typography color="textPrimary"> Shopping Cart </Typography>
          </BreadCrumbs>
          {
            cart.cart?.length === 0 ?
              <h4 className="shopping-cart__no-item"> No item(s) in cart yet </h4> :
              <div className="shopping-cart__table-container">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={8}>
                    <TableContainer>
                      <Table size="small" aria-label="cart items">
                        <TableHead>
                          <TableRow>
                            <TableCell className="shopping-cart__table-head">Image</TableCell>
                            <TableCell className="shopping-cart__table-head" align="left">Name</TableCell>
                            <TableCell className="shopping-cart__table-head" align="left">Quantity</TableCell>
                            <TableCell className="shopping-cart__table-head" align="left">Unit Price</TableCell>
                            <TableCell className="shopping-cart__table-head" align="left">Total Price</TableCell>
                            <TableCell className="shopping-cart__table-head" align="left">Action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {
                            cart.cart?.map(item => {
                              return (
                                <CartTable key={item.id} cart={ item }/>
                              )
                            })
                          }
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    {
                      cart.cart?.length === 0 ?
                        '' :
                        <OrderSummary
                          totalCartItems={cart.totalItems}
                          totalCartPrice={cart.totalPrice}
                          cartSummary={true}
                          totalPriceTitle="Total Price"
                        >
                          <Link className="order-summary__checkout-link" to='/checkout'> 
                            Checkout
                          </Link>
                        </OrderSummary>
                    }
                  </Grid>
                </Grid>
              </div>
          }
        </div>
     }
    </div>
  )
}
