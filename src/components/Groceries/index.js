import React from 'react';
import {
  Grid, Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

import './Groceries.scss';

export const Groceries = () => {
  return (
    <div className="groceries__container">
      <div className="groceries__header">
        <h2 > Featured Products </h2>
        <hr />
      </div>
  
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card className="grocery-card">
            <CardHeader
              avatar={ <Avatar aria-label="vendor avatar" className="grocery-card__vendor-avatar"> GS </Avatar> }
            />
            <CardMedia
              className="grocery-card__image"
              image="https://www.telegraph.co.uk/content/dam/food-and-drink/2018/06/20/Veg_trans_NvBQzQNjv4Bqul3YgLXf2lEf3afmzmy4CHMT9HEIQzXrohIUnOkGrQA.jpg"
              title="Paella dish"
            />
            <CardContent>
              <div>
                <h3 className="grocery-card__name"> Shrimp and Chorizo Paella </h3>
                <p className="grocery-card__price">
                  <span className="grocery-card__discount-price"> $10.50 </span>
                  <span className="grocery-card__main-price"> $20.50 </span>
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
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card className="grocery-card">
            <CardHeader
              avatar={ <Avatar aria-label="vendor avatar" className="grocery-card__vendor-avatar"> GS </Avatar> }
            />
            <CardMedia
              className="grocery-card__image"
              image="https://www.telegraph.co.uk/content/dam/food-and-drink/2018/06/20/Veg_trans_NvBQzQNjv4Bqul3YgLXf2lEf3afmzmy4CHMT9HEIQzXrohIUnOkGrQA.jpg"
              title="Paella dish"
            />
            <CardContent>
              <div>
                <h3 className="grocery-card__name"> Shrimp and Chorizo Paella </h3>
                <p className="grocery-card__price">
                  <span className="grocery-card__discount-price"> $10.50 </span>
                  <span className="grocery-card__main-price"> $20.50 </span>
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
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card className="grocery-card">
            <CardHeader
              avatar={ <Avatar aria-label="vendor avatar" className="grocery-card__vendor-avatar"> GS </Avatar> }
            />
            <CardMedia
              className="grocery-card__image"
              image="https://www.telegraph.co.uk/content/dam/food-and-drink/2018/06/20/Veg_trans_NvBQzQNjv4Bqul3YgLXf2lEf3afmzmy4CHMT9HEIQzXrohIUnOkGrQA.jpg"
              title="Paella dish"
            />
            <CardContent>
              <div>
                <h3 className="grocery-card__name"> Shrimp and Chorizo Paella </h3>
                <p className="grocery-card__price">
                  <span className="grocery-card__discount-price"> $10.50 </span>
                  <span className="grocery-card__main-price"> $20.50 </span>
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
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card className="grocery-card">
            <CardHeader
              avatar={ <Avatar aria-label="vendor avatar" className="grocery-card__vendor-avatar"> GS </Avatar> }
            />
            <CardMedia
              className="grocery-card__image"
              image="https://www.telegraph.co.uk/content/dam/food-and-drink/2018/06/20/Veg_trans_NvBQzQNjv4Bqul3YgLXf2lEf3afmzmy4CHMT9HEIQzXrohIUnOkGrQA.jpg"
              title="Paella dish"
            />
            <CardContent>
              <div>
                <h3 className="grocery-card__name"> Shrimp and Chorizo Paella </h3>
                <p className="grocery-card__price">
                  <span className="grocery-card__discount-price"> $10.50 </span>
                  <span className="grocery-card__main-price"> $20.50 </span>
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
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card className="grocery-card">
            <CardHeader
              avatar={ <Avatar aria-label="vendor avatar" className="grocery-card__vendor-avatar"> GS </Avatar> }
            />
            <CardMedia
              className="grocery-card__image"
              image="https://www.telegraph.co.uk/content/dam/food-and-drink/2018/06/20/Veg_trans_NvBQzQNjv4Bqul3YgLXf2lEf3afmzmy4CHMT9HEIQzXrohIUnOkGrQA.jpg"
              title="Paella dish"
            />
            <CardContent>
              <div>
                <h3 className="grocery-card__name"> Shrimp and Chorizo Paella </h3>
                <p className="grocery-card__price">
                  <span className="grocery-card__discount-price"> $10.50 </span>
                  <span className="grocery-card__main-price"> $20.50 </span>
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
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card className="grocery-card">
            <CardHeader
              avatar={ <Avatar aria-label="vendor avatar" className="grocery-card__vendor-avatar"> GS </Avatar> }
            />
            <CardMedia
              className="grocery-card__image"
              image="https://www.telegraph.co.uk/content/dam/food-and-drink/2018/06/20/Veg_trans_NvBQzQNjv4Bqul3YgLXf2lEf3afmzmy4CHMT9HEIQzXrohIUnOkGrQA.jpg"
              title="Paella dish"
            />
            <CardContent>
              <div>
                <h3 className="grocery-card__name"> Shrimp and Chorizo Paella </h3>
                <p className="grocery-card__price">
                  <span className="grocery-card__discount-price"> $10.50 </span>
                  <span className="grocery-card__main-price"> $20.50 </span>
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
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card className="grocery-card">
            <CardHeader
              avatar={ <Avatar aria-label="vendor avatar" className="grocery-card__vendor-avatar"> GS </Avatar> }
            />
            <CardMedia
              className="grocery-card__image"
              image="https://www.telegraph.co.uk/content/dam/food-and-drink/2018/06/20/Veg_trans_NvBQzQNjv4Bqul3YgLXf2lEf3afmzmy4CHMT9HEIQzXrohIUnOkGrQA.jpg"
              title="Paella dish"
            />
            <CardContent>
              <div>
                <h3 className="grocery-card__name"> Shrimp and Chorizo Paella </h3>
                <p className="grocery-card__price">
                  <span className="grocery-card__discount-price"> $10.50 </span>
                  <span className="grocery-card__main-price"> $20.50 </span>
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
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card className="grocery-card">
            <CardHeader
              avatar={ <Avatar aria-label="vendor avatar" className="grocery-card__vendor-avatar"> GS </Avatar> }
            />
            <CardMedia
              className="grocery-card__image"
              image="https://www.telegraph.co.uk/content/dam/food-and-drink/2018/06/20/Veg_trans_NvBQzQNjv4Bqul3YgLXf2lEf3afmzmy4CHMT9HEIQzXrohIUnOkGrQA.jpg"
              title="Paella dish"
            />
            <CardContent>
              <div>
                <h3 className="grocery-card__name"> Shrimp and Chorizo Paella </h3>
                <p className="grocery-card__price">
                  <span className="grocery-card__discount-price"> $10.50 </span>
                  <span className="grocery-card__main-price"> $20.50 </span>
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
      </Grid>
    </div>
  );
};
