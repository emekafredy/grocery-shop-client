import React, { useContext, useEffect, useState } from 'react';
import { Grid, IconButton } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// context
import { GroceriesContext } from '../../context/goceries';

// components
import { Loader } from '../../components/Loader';

import './GroceryDetails.scss';

export const GroceryDetails = (props) => {
  const [quantity, setQuantity] = useState(1);
  const { getGrocery, grocery, loading } = useContext(GroceriesContext);

  const { id } =  props.match.params;

  useEffect(() => {
    getGrocery(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleQuantityDecrease = () => {
    setQuantity(quantity - 1)
  }

  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1)
  }

  return (
    <div className="grocery-details">
      { 
        loading ? <Loader /> 
          : <div className="grocery-details__container">
              <Grid container spacing={3}>
                <Grid className="grocery-details__image-container" item xs={12} lg={5}>
                  <img
                    className="grocery-details__image"
                    src={ grocery?.image }
                    alt={ grocery?.name }
                  />
                </Grid>
                <Grid item xs={12} lg={7} className="grocery-details__description-container" >
                  <h2> { grocery?.name } </h2>
                  <span className="grocery-details__description__vendor-tag"> Vendor:  </span> <b>{ grocery?.vendor.name }</b>
                  <h2> 
                    &#8358;{ (grocery?.price - grocery?.discount).toFixed(2) } 
                    { grocery?.discount > 0 ? <span className="grocery-details__description__main-price"> &#8358;{ grocery?.price } </span> : '' } 
                  </h2>
                  <hr/>
                  <span className="grocery-details__description__quantity-title"> Quantity: </span>
                  <button 
                    className="grocery-details__description__quantity-decrement" 
                    disabled={ quantity === 1 }
                    onClick={() => handleQuantityDecrease()}
                  >–</button>
                  <input 
                    className="grocery-details__description__quantity" 
                    type="text" 
                    value={ quantity }
                    disabled
                  />
                  <button 
                    className="grocery-details__description__quantity-increment" 
                    disabled={ quantity === 10 }
                    onClick={() => handleQuantityIncrease()}
                  >+</button> <br/><br/>
                  <hr/>
                  <IconButton className="grocery-details__description__cart" aria-label="add to cart">
                    <ShoppingCartIcon /> Add to Cart
                  </IconButton>
                  <hr/>
                  <h3>Description</h3>
                  { grocery?.description }
                  <hr/>
                  <span className="grocery-details__delivery-estimate"> Estimated delivery time: within 24 hours </span>
                </Grid>
              </Grid>
            </div> 
      }
    </div>
  )
}
