import React from 'react';
import {
  Grid, Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

export const Grocery = ({ grocery }) => {
  return (
    <Grid key={grocery.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Card className="grocery-card">
        <CardHeader
          avatar={ <Avatar aria-label="vendor avatar" className="grocery-card__vendor-avatar"> GS </Avatar> }
        />
        <CardMedia
          className="grocery-card__image"
          image={ grocery.image }
          title={ grocery.name }
        />
        <CardContent>
          <div>
            <h3 className="grocery-card__name"> { grocery.name } </h3>
            <p className="grocery-card__price">
              <span className="grocery-card__discount-price"> &#8358;{ (grocery.price - grocery.discount).toFixed(2) } </span>
              <span className="grocery-card__main-price"> &#8358;{ grocery.price } </span>
            </p>
          </div>
        </CardContent>
        <CardActions className="grocery-card__actions">
          <IconButton className="grocery-card__cart" aria-label="add to cart">
            <ShoppingCartIcon />
          </IconButton>
          <Link to="/" className="grocery-card__details">
            Details
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}
