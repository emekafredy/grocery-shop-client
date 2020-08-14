import React from 'react';
import { Card, CardHeader } from '@material-ui/core';

import { Loader } from '../Loader';

import './DeliveryMethod.scss';

export const DeliveryMethod = ({
  userAddress,
  userPhone,
  userName,
  handleOpenProfileUpdateModal,
  loading,
  deliveryTabActive,
  handleTabChange,
}) => {

  return (
    <Card className="checkout__delivery-method-container">
      <CardHeader title= {
        <div>
          <span className="delivery-method__span"> DELIVERY METHOD </span>
          { 
            deliveryTabActive ?
              <button
                className="delivery-method__home-info-update"
                onClick={handleOpenProfileUpdateModal}
              >
                Update Info
              </button> : ''
          }
        </div>
      } />
      <div className="checkout__delivery-method__tab">
        <ul className="checkout__delivery-method__tab-header">
          <li onClick={handleTabChange} className={ deliveryTabActive ? 'tab-active' : '' }>Home Delivery</li>
          <li onClick={handleTabChange} className={ !deliveryTabActive ? 'tab-active' : '' }>Pickup Station</li>
        </ul>
        <br/>
        <div className="checkout__delivery-method__tab-content">
          {
            deliveryTabActive ?
            <div className="delivery-method__home">
              {
                loading ?
                  <Loader />
                : <div>
                    <p className="delivery-method__home-info"> *Delivered within 24 hours after purchase* </p>
                    <span className="delivery-method__home-address-title"> Deliver To: { userName } </span>
                    <br/>
                    <span className="delivery-method__home-address-title"> Address </span>
                    <br/>
                    { 
                      userAddress ?
                        <p className="delivery-method__home-address-name"> { userAddress } </p>
                        : <p className="delivery-method__home-address-name-warning"> Your address is required. Please update your info </p>
                    }

                    <span className="delivery-method__home-phone-title"> Phone </span>
                    <br />
                    { 
                      userPhone ?
                        <p className="delivery-method__home-phone-name"> { userPhone } </p>
                        : <p className="delivery-method__home-phone-name-warning"> Your phone number is required. Please update your info </p>
                    }
                </div>
              }
            </div> :
            <div className="delivery-method__pickup">
              <p className="delivery-method__pickup-info"> *Pick up available 4 hours after purchase* </p>
              <span className="delivery-method__pickup-address-title"> Pickup Station </span>
              <br/>
              <span> No. 5 John Doe Avenue, New Ave. Block, </span><br/>
              <span> Shomolu, </span><br/>
              <span> Lagos. </span><br/>

              <br/>
              <span className="delivery-method__pickup-phone-title"> Contact Phone </span>
              <br/>
              <span> +234 998 885 9978 </span>
            </div>
          }
        </div>
      </div>
    </Card>
  )
}
