import React, { useEffect, useContext, useState } from 'react';
import { Card, CardContent, CardHeader, Grid } from '@material-ui/core';
import StripeCheckout from "react-stripe-checkout";

// component
import { DeliveryMethod } from '../../components/DeliveryMethod';
import { ProfileUpdateForm } from '../../components/Forms/ProfileUpdateForm';
import { SelectedPurchaseItems } from '../../components/SelectedPurchaseItems';
import { OrderSummary } from '../../components/OrderSummary';

import './Checkout.scss';

// context
import { AuthContext } from '../../context/auth';
import { CartContext } from '../../context/cart';
import { CheckoutContext, CheckoutProvider } from '../../context/checkout';

export const CheckoutComponent = () => {
  const { profile, getUser, updateUserProfile, loading } = useContext(AuthContext);
  const { cart, getCart } = useContext(CartContext);
  const { getCheckout, makePayment } = useContext(CheckoutContext)

  // tab state
  const [deliveryTabActive, setDeliveryTabActive] = useState(true);
  // modal state
  const [profileUpdateModalOpen, setProfileUpdateModalOpen] = useState(false);
  // form input states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleOpenProfileUpdateModal = () => setProfileUpdateModalOpen(true);
  const handleCloseProfileUpdateModal = () => setProfileUpdateModalOpen(false);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();

    await updateUserProfile({ name, phone, address });
    setProfileUpdateModalOpen(false);
  }

  const handleTabChange = (e) => {
    if (e.target.innerHTML === 'Home Delivery') {
      setDeliveryTabActive(true);
    } else {
      setDeliveryTabActive(false);
    }
  }

  const purchasePrice = deliveryTabActive ? (cart.totalPrice + 1200) : (cart.totalPrice);
  const onToken = async (token) => {
    const cartId = localStorage.getItem('cartId');
    const paymentData = {
      stripeEmail: token.email,
      stripeToken: token.id,
      purchasePrice,
      cartId
    };
    await makePayment(paymentData);
  }

  useEffect(() => {
    getUser();
    getCart();
    getCheckout();
    setName(profile?.user.name || '');
    setPhone(profile?.user.phone || '');
    setAddress(profile?.user.address || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile?.user.address])

  return (
    <div className="checkout">
      <h2 className="checkout__title"> Checkout </h2>
      <hr />
      {
        (cart.cart?.length === 0) ?
          <h3 className="checkout__no-item-title"> Not item(s) in cart yet </h3>
          : <Grid container spacing={3}>
              <Grid item xs={12} lg={7}>
                <div className="checkout__container">
                  <Card className="checkout__card">
                    <CardHeader className="checkout__details-header" title= { <h3 className="checkout__details-header-title"> Cart & Account Details </h3> } />
                    <CardContent>
                      <DeliveryMethod
                        userAddress={ profile?.user.address }
                        userPhone={ profile?.user.phone }
                        userName={profile?.user.name}
                        handleOpenProfileUpdateModal={handleOpenProfileUpdateModal}
                        loading={loading}
                        deliveryTabActive={deliveryTabActive}
                        handleTabChange={handleTabChange}
                      />
                      <ProfileUpdateForm
                        profileUpdateModalOpen={profileUpdateModalOpen}
                        handleCloseProfileUpdateModal={handleCloseProfileUpdateModal}
                        handleSubmit={(e) => handleProfileUpdate(e)}
                        phone={phone}
                        handleChange={e => setPhone(e.target.value)}
                        name={name}
                        handleNameChange={e => setName(e.target.value)}
                        address={address}
                        handleAddressChange={e => setAddress(e.target.value)}
                      />

                      <SelectedPurchaseItems cart={cart} />
                    </CardContent>
                  </Card>
                </div>
              </Grid>
              <Grid item xs={12} lg={3}>
                <OrderSummary
                  totalCartItems={cart.totalItems}
                  totalCartPrice={cart.totalPrice}
                  checkoutSummary={true}
                  totalPriceTitle="Subtotal"
                  loading={loading}
                  homeDelivery={deliveryTabActive}
                >
                  <StripeCheckout
                    className="order-summary__checkout-link"
                    label="Make Payment"
                    panelLabel="Confirm payment"
                    name="Grocery Shop"
                    description="Payment for goceries."
                    amount={ purchasePrice * 100 }
                    token={onToken}
                    stripeKey='pk_test_Dd2IUOC4Lxnin6RXIjuSzGeC'
                    disabled={ !profile?.user.phone || !profile?.user.address }
                  />
                </OrderSummary>
              </Grid>
              <Grid item xs={12} lg={2}></Grid>
            </Grid>
      }
    </div>
  )
}

export const Checkout = () => {
  return (
    <CheckoutProvider>
      <CheckoutComponent />
    </CheckoutProvider>
  );
};
