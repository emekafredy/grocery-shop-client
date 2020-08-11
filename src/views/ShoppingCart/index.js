import React, { useEffect, useContext } from 'react';
import { Link, Typography, Grid } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
            <Link color="inherit" href="/">
              Home
            </Link>
            <Typography color="textPrimary"> Shopping Cart </Typography>
          </BreadCrumbs>
          <div className="shopping-cart__table-container">
            <Grid container spacing={3}>
              <Grid item xs={12} md={9}>
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
              <Grid item xs={12} md={3}>
                <OrderSummary
                  totalCartItems={cart.totalItems}
                  totalCartPrice={cart.totalPrice}
                />
              </Grid>
            </Grid>
          </div>
        </div>
     }
    </div>
  )
}
